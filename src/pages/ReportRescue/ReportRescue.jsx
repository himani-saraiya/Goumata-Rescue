import { useState } from "react";
import "./ReportRescue.css";

const ReportRescue = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        situation: "",
        urgency: "",
        location: "",
        description: "",
        photo: null,
    });

    const [submitted, setSubmitted] = useState(false);
    const [caseId, setCaseId] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
  e.preventDefault();

  const phoneRegex = /^[6-9][0-9]{9}$/;

  if (!phoneRegex.test(formData.phone)) {
    alert("कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।");
    return;
  }

  const generatedCaseId = `GR-${Math.floor(
    100000 + Math.random() * 900000
  )}`;

  setCaseId(generatedCaseId);
  setSubmitted(true);

  console.log("Rescue Report:", {
    ...formData,
    caseId: generatedCaseId,
  });

  // Form clear
  setFormData({
    name: "",
    phone: "",
    situation: "",
    urgency: "",
    location: "",
    description: "",
    photo: null,
  });
};
    const handleLocation = () => {
        if (!navigator.geolocation) {
            alert("आपके browser में location सुविधा उपलब्ध नहीं है।");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                setFormData((prev) => ({
                    ...prev,
                    location: `${latitude}, ${longitude}`,
                }));
            },
            () => {
                alert(
                    "Location प्राप्त नहीं हो सकी। कृपया location permission allow करें।"
                );
            }
        );
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];

        setFormData((prev) => ({
            ...prev,
            photo: file || null,
        }));
    };

    return (
        <section className="report-rescue-page" id="report-rescue">
            <div className="report-rescue-container">

                <div className="report-rescue-header">
                    <span>गाय सहायता रिपोर्ट</span>

                    <h1>
                        जरूरतमंद गाय की
                        <span> तुरंत सूचना दें</span>
                    </h1>

                    <p>
                        अगर आपको कहीं बीमार, घायल, दुर्घटनाग्रस्त, बेसहारा
                        या मृत गाय दिखाई दे, तो उसकी जानकारी साझा करें।
                    </p>
                </div>
                {submitted && (
                    <div className="report-success">
                        <h2>✅ आपकी सूचना सफलतापूर्वक प्राप्त हुई</h2>

                        <p>
                            आपकी Rescue Request दर्ज कर ली गई है।
                        </p>

                        <strong>Case ID: {caseId}</strong>

                        <p>
                            कृपया इस Case ID को सुरक्षित रखें।
                        </p>
                    </div>
                )}

                <form
                    className="rescue-report-form"
                    onSubmit={handleSubmit}
                >

                    {/* Name */}
                    <div className="form-group">
                        <label htmlFor="name">
                            आपका नाम <span>(वैकल्पिक)</span>
                        </label>

                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="अपना नाम दर्ज करें"
                        />
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                        <label htmlFor="phone">
                            मोबाइल नंबर <span>*</span>
                        </label>

                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="10 अंकों का मोबाइल नंबर"
                            required
                        />
                    </div>

                    {/* Situation */}
                    <div className="form-group">
                        <label htmlFor="situation">
                            गाय की स्थिति <span>*</span>
                        </label>

                        <select
                            id="situation"
                            name="situation"
                            value={formData.situation}
                            onChange={handleChange}
                            required
                        >
                            <option value="">
                                स्थिति चुनें
                            </option>

                            <option value="injured">
                                घायल / दुर्घटनाग्रस्त
                            </option>

                            <option value="sick">
                                बीमार
                            </option>

                            <option value="roadside">
                                सड़क पर बेसहारा
                            </option>

                            <option value="abandoned">
                                छोड़ी हुई गाय
                            </option>

                            <option value="dead">
                                मृत गाय
                            </option>

                            <option value="other">
                                अन्य
                            </option>
                        </select>
                    </div>

                    {/* Urgency */}
                    <div className="form-group">
                        <label htmlFor="urgency">
                            सहायता की प्राथमिकता <span>*</span>
                        </label>

                        <select
                            id="urgency"
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleChange}
                            required
                        >
                            <option value="">
                                प्राथमिकता चुनें
                            </option>

                            <option value="critical">
                                🔴 अति आवश्यक — तुरंत सहायता चाहिए
                            </option>

                            <option value="urgent">
                                🟠 जरूरी — जल्द सहायता चाहिए
                            </option>

                            <option value="normal">
                                🟢 सामान्य — सहायता आवश्यक है
                            </option>
                        </select>
                    </div>

                    {/* Location */}
                    <div className="form-group">
                        <label htmlFor="location">
                            स्थान <span>*</span>
                        </label>

                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="10 अंकों का मोबाइल नंबर"
                            maxLength="10"
                            pattern="[6-9][0-9]{9}"
                            inputMode="numeric"
                            required
                        />

                        <button
                            type="button"
                            className="location-button"
                            onClick={handleLocation}
                        >
                            📍 मेरी वर्तमान लोकेशन इस्तेमाल करें
                        </button>
                    </div>

                    {/* Description */}
                    <div className="form-group">
                        <label htmlFor="description">
                            स्थिति का विवरण <span>*</span>
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="गाय की स्थिति के बारे में संक्षिप्त जानकारी दें..."
                            rows="5"
                            required
                        />
                    </div>

                    {/* Photo */}
                    <div className="form-group">
                        <label htmlFor="photo">
                            गाय की फोटो <span>(वैकल्पिक)</span>
                        </label>

                        <input
                            id="photo"
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={handlePhotoChange}
                        />

                        <small>
                            अगर संभव हो तो गाय की वर्तमान स्थिति की फोटो साझा करें।
                        </small>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="report-submit-button"
                    >
                        🚨 सहायता के लिए रिपोर्ट करें
                    </button>

                </form>

            </div>
        </section>
    );
};

export default ReportRescue;