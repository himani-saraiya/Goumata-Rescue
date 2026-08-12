const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { Pool } = require("pg");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 5000;

// ===============================
// Upload Folder
// ===============================

const uploadDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// ===============================
// Multer Configuration
// ===============================

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },

    filename: (req, file, cb) => {
        const uniqueName =
            Date.now() +
            "-" +
            file.originalname.replace(/\s+/g, "-");

        cb(null, uniqueName);
    },
});

const upload = multer({
    storage,
});

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

// Uploaded photos accessible through /uploads
app.use(
    "/uploads",
    express.static(uploadDir)
);

// ===============================
// DB Config Check
// ===============================

console.log("DB CONFIG CHECK:");
console.log("USER:", process.env.DB_USER);
console.log("HOST:", process.env.DB_HOST);
console.log("DATABASE:", process.env.DB_NAME);
console.log("PORT:", process.env.DB_PORT);
console.log(
    "PASSWORD EXISTS:",
    !!process.env.DB_PASSWORD
);

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

app.get("/api/health", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");

        res.json({
            success: true,
            status: "OK",
            database: "Connected",
            time: result.rows[0].now,
        });

    } catch (error) {

        console.error(
            "DATABASE ERROR:",
            error
        );

        res.status(500).json({
            success: false,
            status: "ERROR",
            database: "Not Connected",
            message:
                error.message ||
                "Unknown database error",
            code: error.code || null,
        });
    }
});

// ===============================
// Rescue API
// ===============================

// ===============================
// Rescue API
// ===============================

app.post(
    "/api/rescue",
    upload.single("photo"),
    async (req, res) => {

        try {

            console.log(
                "========== RESCUE REQUEST =========="
            );

            const {
                phone,
                location,
                latitude,
                longitude,
                description,
            } = req.body;

            const photoUrl = req.file
                ? `/uploads/${req.file.filename}`
                : null;

            // Google Maps URL
            const mapUrl =
                latitude && longitude
                    ? `https://www.google.com/maps?q=${latitude},${longitude}`
                    : null;

            console.log(
                "RESCUE DATA RECEIVED:",
                {
                    phone,
                    location,
                    latitude,
                    longitude,
                    description,
                    photoUrl,
                    mapUrl,
                }
            );

            // ===============================
            // Validation
            // ===============================

            if (
                !phone ||
                !location ||
                !photoUrl
            ) {

                return res.status(400).json({
                    success: false,
                    message:
                        "Phone, location and photo are required.",
                });
            }

            // ===============================
            // Generate Case ID
            // ===============================

            const caseId =
                "GR-" +
                Math.floor(
                    100000 +
                    Math.random() * 900000
                );

            // ===============================
            // Save into PostgreSQL
            // ===============================

            const result =
                await pool.query(
                    `
                    INSERT INTO public.rescue_cases
                    (
                        case_id,
                        phone,
                        location,
                        latitude,
                        longitude,
                        description,
                        photo_url,
                        map_url,
                        status
                    )
                    VALUES
                    ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                    RETURNING *
                    `,
                    [
                        caseId,
                        phone,
                        location,
                        latitude || null,
                        longitude || null,
                        description || "",
                        photoUrl,
                        mapUrl,
                        "Reported",
                    ]
                );

            console.log(
                "RESCUE SAVED:",
                result.rows[0]
            );

            // ===============================
            // Send Response
            // ===============================

            res.status(201).json({
                success: true,
                message:
                    "Rescue case registered successfully.",

                case: result.rows[0],
            });

        } catch (error) {

            console.error(
                "RESCUE API ERROR:",
                error
            );

            res.status(500).json({
                success: false,
                message:
                    error.message ||
                    "Failed to create rescue case.",
            });
        }
    }
);

app.get("/api/rescue", async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT *
            FROM public.rescue_cases
            ORDER BY created_at DESC
        `);

        res.json({
            success: true,
            cases: result.rows,
        });

    } catch (error) {
        console.error("GET RESCUE CASES ERROR:", error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

app.listen(PORT, () => {
    console.log(
        `🚀 Gaiya Rescue Backend running on http://localhost:${PORT}`
    );
});