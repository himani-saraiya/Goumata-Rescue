import { useState } from "react";
import "./ReportRescue.css";
import { useLanguage } from "../../context/LanguageContext";

const ReportRescue = () => {
    const { language } = useLanguage();
    const isHindi = language === "hi";

    const [formData, setFormData] = useState({
        phone: "",
        location: "",
        latitude: null,
        longitude: null,
        description: "",
        photo: null,
        urgency: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [caseId, setCaseId] = useState("");
    const [mapUrl, setMapUrl] = useState("");

    const text = {
        badge: isHindi
            ? "त्वरित गाय सहायता"
            : "Quick Cow Rescue",

        title: isHindi
            ? "गाय को तुरंत सहायता चाहिए?"
            : "Cow Needs Immediate Help?",

        introDescription: isHindi
            ? "बस लोकेशन, गाय की फोटो और अपना मोबाइल नंबर साझा करें।"
            : "Just share the location, cow photo and your mobile number.",

        location: isHindi
            ? "गाय की लोकेशन"
            : "Cow Location",

        useLocation: isHindi
            ? "📍 मेरी वर्तमान लोकेशन इस्तेमाल करें"
            : "📍 Use My Current Location",

        locationPlaceholder: isHindi
            ? "स्थान / पता दर्ज करें"
            : "Enter location / address",

        locationReceived: isHindi
            ? "📍 वर्तमान लोकेशन प्राप्त"
            : "📍 Current location received",

        photo: isHindi
            ? "गाय की फोटो"
            : "Cow Photo",

        photoHelp: isHindi
            ? "गाय की वर्तमान स्थिति की फोटो अपलोड करें"
            : "Upload a photo showing the current condition of the cow",

        phone: isHindi
            ? "मोबाइल नंबर"
            : "Mobile Number",

        phonePlaceholder: isHindi
            ? "10 अंकों का मोबाइल नंबर"
            : "10-digit mobile number",

        description: isHindi
            ? "छोटा विवरण"
            : "Short Description",

        priorityError: isHindi
            ? "कृपया सहायता की प्राथमिकता चुनें।"
            : "Please select a rescue priority.",

        optional: isHindi
            ? "(वैकल्पिक)"
            : "(Optional)",

        descriptionPlaceholder: isHindi
            ? "जैसे — गाय सड़क पर घायल है..."
            : "Example — Cow is injured on the road...",

        report: isHindi
            ? "🚨 Rescue के लिए रिपोर्ट करें"
            : "🚨 Report for Rescue",

        successTitle: isHindi
            ? "✅ Rescue Request प्राप्त हुई"
            : "✅ Rescue Request Received",

        successText: isHindi
            ? "आपकी सहायता अनुरोध सफलतापूर्वक दर्ज हो गई है।"
            : "Your rescue request has been successfully registered.",

        caseText: isHindi
            ? "आपकी Case ID:"
            : "Your Case ID:",

        saveText: isHindi
            ? "कृपया इस Case ID को सुरक्षित रखें।"
            : "Please keep this Case ID safe.",

        mapButton: isHindi
            ? "🗺️ Map पर Location देखें"
            : "🗺️ View Location on Map",

        locationError: isHindi
            ? "Location प्राप्त नहीं हो सकी। कृपया location permission allow करें या स्थान manually दर्ज करें।"
            : "Unable to get your location. Please allow location permission or enter the location manually.",

        browserError: isHindi
            ? "आपके browser में GPS location उपलब्ध नहीं है। कृपया स्थान manually दर्ज करें।"
            : "GPS location is not available in your browser. Please enter the location manually.",

        phoneError: isHindi
            ? "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।"
            : "Please enter a valid 10-digit mobile number.",

        locationErrorRequired: isHindi
            ? "कृपया location दर्ज करें या अपनी current location इस्तेमाल करें।"
            : "Please enter the location or use your current location.",

        photoError: isHindi
            ? "कृपया गाय की फोटो अपलोड करें।"
            : "Please upload a photo of the cow.",

        photoSelected: isHindi
            ? "📷 फोटो चुनी गई"
            : "📷 Photo selected",
    };

    // ===============================
    // Handle Input Changes
    // ===============================

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // ===============================
    // Get Current Location
    // ===============================

    const handleLocation = () => {
        if (!navigator.geolocation) {
            alert(text.browserError);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
                    );

                    if (!response.ok) {
                        throw new Error(
                            "Location address not found"
                        );
                    }

                    const data = await response.json();

                    const address = data.address || {};

                    const readableLocation = [
                        address.road,
                        address.neighbourhood ||
                        address.suburb,
                        address.city ||
                        address.town ||
                        address.village,
                        address.state,
                        address.postcode,
                    ]
                        .filter(Boolean)
                        .join(", ");

                    const finalLocation =
                        readableLocation ||
                        `GPS: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;

                    setFormData((prev) => ({
                        ...prev,
                        location: finalLocation,
                        latitude: latitude,
                        longitude: longitude,
                    }));
                } catch (error) {
                    console.error(
                        "REVERSE GEOCODING ERROR:",
                        error
                    );

                    const gpsLocation =
                        `GPS: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;

                    setFormData((prev) => ({
                        ...prev,
                        location: gpsLocation,
                        latitude: latitude,
                        longitude: longitude,
                    }));

                    alert(
                        isHindi
                            ? "पता प्राप्त नहीं हो सका। GPS location इस्तेमाल की गई है।"
                            : "Address could not be found. GPS location has been used."
                    );
                }
            },
            () => {
                alert(text.locationError);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
            }
        );
    };

    // ===============================
    // Handle Photo
    // ===============================

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];

        setFormData((prev) => ({
            ...prev,
            photo: file || null,
        }));
    };

    // ===============================
    // Submit Rescue Request
    // ===============================

    const handleSubmit = async (e) => {
        e.preventDefault();

        const phoneRegex = /^[6-9][0-9]{9}$/;

        // Location validation
        if (!formData.location.trim()) {
            alert(text.locationErrorRequired);
            return;
        }

        // Priority validation

        if (!formData.urgency) {
            alert(text.priorityError);
            return;
        }

        // Photo validation
        if (!formData.photo) {
            alert(text.photoError);
            return;
        }

        // Phone validation
        if (!phoneRegex.test(formData.phone)) {
            alert(text.phoneError);
            return;
        }

        try {
            const formDataToSend = new FormData();

            formDataToSend.append(
                "phone",
                formData.phone
            );

            formDataToSend.append(
                "location",
                formData.location
            );

            formDataToSend.append(
                "latitude",
                formData.latitude
            );

            formDataToSend.append(
                "longitude",
                formData.longitude
            );

            formDataToSend.append(
                "urgency",
                formData.urgency
            );

            formDataToSend.append(
                "description",
                formData.description
            );

            formDataToSend.append(
                "photo",
                formData.photo
            );

            console.log(
                "SENDING RESCUE DATA:",
                {
                    phone: formData.phone,
                    location: formData.location,
                    latitude: formData.latitude,
                    longitude: formData.longitude,
                    description:
                        formData.description,
                    photo:
                        formData.photo.name,
                }
            );

            // ===============================
            // API Request
            // ===============================

            const response = await fetch(
                "http://localhost:5000/api/rescue",
                {
                    method: "POST",
                    body: formDataToSend,
                }
            );

            const data = await response.json();

            console.log(
                "BACKEND RESPONSE:",
                data
            );

            // ===============================
            // API Error
            // ===============================

            if (!response.ok) {
                alert(
                    data.message ||
                    "Rescue request submit नहीं हो सकी।"
                );

                return;
            }

            // ===============================
            // Successful Submission
            // ===============================

            const generatedCaseId =
                data.case.case_id;

            const generatedMapUrl =
                data.case.map_url || "";

            setCaseId(generatedCaseId);

            setMapUrl(generatedMapUrl);

            setSubmitted(true);

            console.log(
                "RESCUE SAVED:",
                data
            );

            // ===============================
            // Clear Form
            // ===============================

            setFormData({
                phone: "",
                location: "",
                latitude: null,
                longitude: null,
                description: "",
                urgency: "",
                photo: null,
            });
        } catch (error) {
            console.error(
                "RESCUE SUBMIT ERROR:",
                error
            );

            alert(
                "Server से connection नहीं हो सका। कृपया थोड़ी देर बाद फिर कोशिश करें।"
            );
        }
    };

    // ===============================
    // JSX
    // ===============================

    return (
        <section
            className="report-rescue-page"
            id="report-rescue"
        >
            <div className="report-rescue-container">

                {/* ===============================
                    HEADER
                =============================== */}

                <div className="report-rescue-header">

                    <span>
                        {text.badge}
                    </span>

                    <h1>
                        {text.title}
                    </h1>

                    <p>
                        {text.introDescription}
                    </p>

                </div>

                {/* ===============================
                    SUCCESS MESSAGE
                =============================== */}

                {submitted && (
                    <div className="report-success">

                        <h2>
                            {text.successTitle}
                        </h2>

                        <p>
                            {text.successText}
                        </p>

                        <strong>
                            {text.caseText} {caseId}
                        </strong>

                        <p>
                            {text.saveText}
                        </p>

                        {/* MAP BUTTON */}

                        {mapUrl && (
                            <a
                                href={mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-button"
                            >
                                {text.mapButton}
                            </a>
                        )}

                    </div>
                )}

                {/* ===============================
                    RESCUE FORM
                =============================== */}

                <form
                    className="rescue-report-form"
                    onSubmit={handleSubmit}
                >

                    {/* LOCATION */}

                    <div className="form-group">

                        <label htmlFor="location">
                            {text.location}{" "}
                            <span>*</span>
                        </label>

                        <button
                            type="button"
                            className="location-button"
                            onClick={handleLocation}
                        >
                            {text.useLocation}
                        </button>

                        <input
                            id="location"
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder={
                                text.locationPlaceholder
                            }
                            required
                        />

                        {formData.location && (
                            <small className="location-success">
                                {text.locationReceived}:{" "}
                                {formData.location}
                            </small>
                        )}

                    </div>

                    {/* PHOTO */}

                    <div className="form-group">

                        <label htmlFor="photo">
                            {text.photo}{" "}
                            <span>*</span>
                        </label>

                        <input
                            id="photo"
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={
                                handlePhotoChange
                            }
                            required
                        />

                        <small>
                            {text.photoHelp}
                        </small>

                        {formData.photo && (
                            <small className="photo-selected">
                                {text.photoSelected}:{" "}
                                {formData.photo.name}
                            </small>
                        )}

                    </div>

                    {/* MOBILE */}

                    <div className="form-group">

                        <label htmlFor="phone">
                            {text.phone}{" "}
                            <span>*</span>
                        </label>

                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={
                                text.phonePlaceholder
                            }
                            maxLength="10"
                            pattern="[6-9][0-9]{9}"
                            inputMode="numeric"
                            required
                        />

                    </div>

                    {/* DESCRIPTION */}

                    <div className="form-group">

                        <label htmlFor="description">
                            {text.description}{" "}
                            <span>
                                {text.optional}
                            </span>
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            value={
                                formData.description
                            }
                            onChange={handleChange}
                            placeholder={
                                text.descriptionPlaceholder
                            }
                            rows="4"
                        />

                    </div>

                    {/* SUBMIT */}

                    <button
                        type="submit"
                        className="report-submit-button"
                    >
                        {text.report}
                    </button>

                </form>

            </div>
        </section>
    );
};

export default ReportRescue;