const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { Pool } = require("pg");
const multer = require("multer");
const path = require("path");

const app = express();
const fs = require("fs");

const uploadDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },

    filename: (req, file, cb) => {
        const uniqueName =
            Date.now() + "-" + file.originalname.replace(/\s+/g, "-");

        cb(null, uniqueName);
    },
});

const upload = multer({
    storage,
});
app.use("/uploads", express.static(uploadDir));

const PORT = process.env.PORT || 5000;

// ===============================
// PostgreSQL Connection
// ===============================

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});

// ===============================
// Middleware
// ===============================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ===============================
// DB Config Check
// ===============================

console.log("DB CONFIG CHECK:");
console.log("USER:", process.env.DB_USER);
console.log("HOST:", process.env.DB_HOST);
console.log("DATABASE:", process.env.DB_NAME);
console.log("PORT:", process.env.DB_PORT);
console.log("PASSWORD EXISTS:", !!process.env.DB_PASSWORD);

// ===============================
// Basic Route
// ===============================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Gaiya Rescue Backend is running 🚨🐄",
    });
});

// ===============================
// Database Health Check
// ===============================

app.post("/api/rescue", upload.single("photo"), async (req, res) => {
    try {
        console.log("========== RESCUE REQUEST ==========");

        const { phone, location, description } = req.body;

        const photoUrl = req.file
            ? `/uploads/${req.file.filename}`
            : null;

        console.log("RESCUE DATA RECEIVED:", {
            phone,
            location,
            description,
            photoUrl,
        });

        // Basic validation
        if (!phone || !location || !photoUrl) {
            return res.status(400).json({
                success: false,
                message: "Phone, location and photo are required.",
            });
        }

        // Generate Case ID
        const caseId =
            "GR-" + Math.floor(100000 + Math.random() * 900000);

        // Save into PostgreSQL
        const result = await pool.query(
            `
            INSERT INTO public.rescue_cases
            (
                case_id,
                phone,
                location,
                description,
                photo_url,
                status
            )
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
            `,
            [
                caseId,
                phone,
                location,
                description || "",
                photoUrl,
                "Reported",
            ]
        );

        console.log("RESCUE SAVED:", result.rows[0]);

        res.status(201).json({
            success: true,
            message: "Rescue case registered successfully.",
            case: result.rows[0],
        });

    } catch (error) {
        console.error("RESCUE API ERROR:", error);

        res.status(500).json({
            success: false,
            message:
                error.message ||
                "Failed to create rescue case.",
        });
    }
});

// ===============================
// Rescue API
// ===============================

app.post("/api/rescue", async (req, res) => {
    try {
        console.log("========== RESCUE REQUEST ==========");
        console.log("BODY:", req.body);
        console.log("====================================");

        const {
            phone,
            location,
            description,
            photoUrl,
        } = req.body;

        console.log("RESCUE DATA RECEIVED:", {
            phone,
            location,
            description,
            photoUrl,
        });

        // Validation
        if (!phone || !location || !photoUrl) {
            return res.status(400).json({
                success: false,
                message: "Phone, location and photo are required.",
            });
        }

        // Generate Case ID
        const caseId =
            "GR-" + Math.floor(100000 + Math.random() * 900000);

        // Save into PostgreSQL
        const result = await pool.query(
            `
      INSERT INTO public.rescue_cases
      (
        case_id,
        phone,
        location,
        description,
        photo_url,
        status
      )
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
      `,
            [
                caseId,
                phone,
                location,
                description || "",
                photoUrl,
                "Reported",
            ]
        );

        console.log("RESCUE SAVED:", result.rows[0]);

        res.status(201).json({
            success: true,
            message: "Rescue case registered successfully.",
            case: result.rows[0],
        });

    } catch (error) {
        console.error("RESCUE API ERROR:", error);

        res.status(500).json({
            success: false,
            message:
                error.message || "Failed to create rescue case.",
        });
    }
});

// ===============================
// Start Server
// ===============================

app.listen(PORT, () => {
    console.log(
        `🚀 Gaiya Rescue Backend running on http://localhost:${PORT}`
    );
});