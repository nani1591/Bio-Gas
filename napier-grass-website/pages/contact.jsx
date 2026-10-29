
import React, { useState } from "react";
import { submitContactForm } from "../data/api.js";
import "../src/contact.css";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  projectType: "Napier Grass Bio-CBG",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    try {
      const result = await submitContactForm(formData);
      if (result?.success) {
        setSubmitted(true);
        return;
      }
      if (result?.mailtoOpened) {
        setSubmitted(true);
        return;
      }
      setSubmitError(result?.message || "We couldn't submit your enquiry. Please try again or contact us directly.");
    } catch (error) {
      setSubmitError(error?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="contact-page" id="contact">
      {/* HERO */}
      <section className="contact-banner">
        <div className="contact-container">
          <div className="contact-banner-content">
            <span className="contact-eyebrow">
              <span className="contact-eyebrow-dot" />
              LET'S BUILD SOMETHING GREEN
            </span>

            <h1>
              Let's Talk About
              <br />
              <span>Your Next Project.</span>
            </h1>

            <div className="contact-title-line" />

            <p>
              From Napier Grass cultivation to biomass supply and
              Bio-CBG project planning, our team welcomes your
              enquiries about sustainable energy solutions.
            </p>

            <div className="contact-hero-points">
              <span><b>✓</b> Project enquiries</span>
              <span><b>✓</b> Technical discussions</span>
              <span><b>✓</b> Sustainable solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS AND FORM */}
      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-grid">
            {/* LEFT SIDE */}
            <aside className="contact-info-col">
              <span className="section-tag">LET'S CONNECT</span>

              <h2 className="contact-section-title">
                Let's Build a Sustainable Future Together
              </h2>

              <p className="contact-description">
                Have an idea for a Napier Grass or Bio-CBG project?
                Tell us about your goals, location and requirements
                so you can start planning the next steps.
              </p>

              <div className="contact-details-list">
                <article className="contact-detail-item">
                  <div className="contact-icon-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                    </svg>
                  </div>

                  <div className="contact-detail-text">
                    <h3>Project Locations</h3>
                    <p>
                      Discuss your proposed site, land availability
                      and project requirements with our team.
                    </p>
                  </div>
                </article>

                <article className="contact-detail-item">
                  <div className="contact-icon-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="m4 7 8 6 8-6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="contact-detail-text">
                    <h3>Project Enquiries</h3>
                    <p>
                      Use the enquiry form to share your plans,
                      expected capacity and business requirements.
                    </p>
                  </div>
                </article>

                <article className="contact-detail-item">
                  <div className="contact-icon-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 3h3l2 5-2.2 1.6a15 15 0 0 0 4.6 4.6L16 12l5 2v3c0 2.2-1.8 4-4 4C9.3 21 3 14.7 3 7c0-2.2 1.8-4 4-4Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="contact-detail-text">
                    <h3>Project Consultation</h3>
                    <p>
                      Tell us about your Napier Grass cultivation,
                      biomass supply, biogas plant or Bio-CBG
                      facility requirements.
                    </p>
                  </div>
                </article>
              </div>

              <div className="contact-info-note">
                <span className="contact-note-check">✓</span>
                <div>
                  <strong>Have a project in mind?</strong>
                  <p>
                    Include your location, project goals and any
                    estimated capacity in your message.
                  </p>
                </div>
              </div>

              <div className="contact-green-card">
                <span className="contact-green-card-icon">🌿</span>
                <div>
                  <strong>Growing a cleaner future</strong>
                  <p>
                    Exploring renewable resources for a more
                    sustainable tomorrow.
                  </p>
                </div>
                <span className="contact-green-decoration">✳</span>
              </div>
            </aside>

            {/* RIGHT SIDE FORM */}
            <div className="contact-form-col">
              {submitted ? (
                <div className="success-card" role="status">
                  <div className="success-icon">✓</div>
                  <span className="section-tag">FORM COMPLETED</span>
                  <h2>Thank You!</h2>
                  <p>
                    Your enquiry has been handed off successfully. If your email app opened, please send the prepared message to complete delivery.
                  </p>

                  <button
                    type="button"
                    className="submit-btn"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData(initialFormData);
                      setSubmitError("");
                    }}
                  >
                    Send Another Message <span>→</span>
                  </button>
                </div>
              ) : (
                <form
                  className="astra-contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="form-card-heading">
                    <span className="form-card-eyebrow">
                      WE'RE HERE TO HELP
                    </span>
                    <h2>Send Us a Message</h2>
                    <p>
                      Complete the form below and tell us about
                      your project.
                    </p>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-name">
                      Your Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      maxLength={100}
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-email">
                        Email Address <span>*</span>
                      </label>
                      <input
                        type="email"
                      maxLength={254}
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-phone">
                        Phone Number <span>*</span>
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        autoComplete="tel"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-project">
                      Project Requirement <span>*</span>
                    </label>
                    <select
                      id="contact-project"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="Napier Grass Bio-CBG">
                        Napier Grass & Bio-CBG Project
                      </option>
                      <option value="Napier Grass Cultivation">
                        Napier Grass Cultivation
                      </option>
                      <option value="Biomass Supply">
                        Biomass Supply
                      </option>
                      <option value="Biogas">
                        Biogas Plant Setup
                      </option>
                      <option value="Zero-Waste">
                        Zero-Waste Requirements
                      </option>
                      <option value="Consulting">
                        Technical Consultation
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">
                      Project Details / Message <span>*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      maxLength={3000}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, location, land availability, capacity or requirements..."
                      required
                    />
                  </div>

                  {submitError && <p className="contact-submit-error" role="alert">{submitError}</p>}
                  <button type="submit" className="submit-btn" disabled={submitting}>
                    {submitting ? "Submitting…" : "Submit Project Enquiry"} <span aria-hidden="true">↗</span>
                  </button>

                  <p className="form-disclaimer">
                    <span>*</span> Required fields
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
