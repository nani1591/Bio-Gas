
import React from "react";
import "./footer.css";

export default function Footer({ setCurrentPage }) {
  const quickLinks = [
    { label: "Home", page: "home" },
    { label: "About Us", page: "about" },
    { label: "Products", page: "products" },
    { label: "Solutions", page: "solutions" },
    { label: "Process", page: "process" },
    { label: "Contact Us", page: "contact" },
  ];

  const navigateTo = (page) => {
    if (typeof setCurrentPage === "function") {
      setCurrentPage(page);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Company information */}
        <div className="footer-column footer-company">
          <h2>
            Sri Aishwarya Lakshmi
            <span>Green Energies LLP</span>
          </h2>

          <p>
            Building a sustainable future through renewable
            energy, Bio-CBG projects, biogas solutions, and
            environmentally responsible waste management.
          </p>

          <div className="footer-socials">
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#instagram" aria-label="Instagram">◎</a>
            <a href="#linkedin" aria-label="LinkedIn">in</a>
            <a href="#youtube" aria-label="YouTube">▶</a>
          </div>
        </div>

        {/* Quick navigation */}
        <div className="footer-column footer-links">
          <h3>Quick Links</h3>
          <span className="footer-underline" />

          <nav aria-label="Footer navigation">
            {quickLinks.map((link) => (
              <button
                key={link.page}
                type="button"
                onClick={() => navigateTo(link.page)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Contact details */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>
          <span className="footer-underline" />

          <div className="footer-contact-item">
            <span aria-hidden="true">📍</span>
            <p>
              Durgam Cheruvu, Hitech City,
              Hyderabad, Telangana, India
            </p>
          </div>

          <div className="footer-contact-item">
            <span aria-hidden="true">✉</span>
            <button type="button" className="footer-enquiry-link" onClick={() => navigateTo("contact")}>
              Send a project enquiry
            </button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Sri Aishwarya Lakshmi
          Green Energies LLP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
