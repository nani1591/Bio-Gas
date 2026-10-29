
import React from "react";
import "./products.css";

const products = [
  {
    number: "01",
    category: "RENEWABLE FEEDSTOCK",
    title: "Napier Grass",
    description:
      "Explore Napier Grass as a renewable biomass resource for sustainable agriculture and suitable bioenergy projects.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIQnW85J3loczn-FWxUj8FWklcdeAzVUi7z8fmXVOGrw&s=10",
    tag: "Natural resource",
  },
  {
    number: "02",
    category: "BIOMASS",
    title: "Napier Biomass",
    description:
      "Discover biomass harvesting, preparation, and feedstock planning for biomass-to-energy applications.",
    image:
      "https://napgrass.com/wp-content/uploads/2025/11/bioCNGPlant.png",
    tag: "Biomass solutions",
  },
  {
    number: "03",
    category: "BIOENERGY",
    title: "Compressed Bio Gas",
    description:
      "Explore the potential of upgrading suitable biogas into Compressed Bio Gas through appropriate purification and compression systems.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU0IXW1E-YGB_ujGuAyIlwG7nt5qCJkDS3dif1CrmGQw&s=10",
    tag: "Clean energy",
  },
  {
    number: "04",
    category: "PROJECT DEVELOPMENT",
    title: "Napier Cultivation",
    description:
      "Plan cultivation around land availability, local growing conditions, water requirements, and biomass demand.",
    image:
      "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1000&q=85",
    tag: "Cultivation",
  },
  {
    number: "05",
    category: "PLANT SOLUTIONS",
    title: "Biomass-to-Energy",
    description:
      "Explore suitable feedstock conversion pathways and the technical considerations behind renewable gas projects.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGmDAfPxU4ovcCdMxphr1An1vgzzH9ifKzX31fb7gPQ&s=10",
    tag: "Energy systems",
  },
  {
    number: "06",
    category: "CONSULTATION",
    title: "Project Planning",
    description:
      "Discuss your project goals, land, biomass requirements, and potential bioenergy plant feasibility with our team.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JUc2CgV6-W3kL-nmGKzcJmO6d_l2kWGSveHyce0h5Q&s=10",
    tag: "Let's collaborate",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-7-7 7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Products({ setCurrentPage }) {
  const goToContact = () => {
    if (setCurrentPage) {
      setCurrentPage("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="np-showcase">
      {/* PAGE INTRO */}
      <section className="np-showcase-hero">
        <div className="np-showcase-eyebrow">
          <span />
          SRI AISHWARYA LAKSHMI GREEN ENERGIES LLP
        </div>

        <h1>
          Our Products
          <br />
          <span>& Energy Solutions</span>
        </h1>

        <p>
          Discover Napier Grass, biomass resources, and renewable energy
          solutions supporting the journey from green fields to clean energy.
        </p>

        <div className="np-showcase-meta">
          <span>01 — 06</span>
          <span className="np-meta-line" />
          <span>OUR PRODUCT SHOWCASE</span>
        </div>
      </section>

      {/* PRODUCT GALLERY */}
      <section className="np-showcase-gallery">
        <div className="np-gallery-heading">
          <div>
            <span className="np-section-kicker">EXPLORE OUR RANGE</span>
            <h2>
              Products <span>Showcase.</span>
            </h2>
          </div>

          <p>
            Natural resources. Thoughtful planning.
            <br />
            A greener approach to energy.
          </p>
        </div>

        <div className="np-showcase-grid">
          {products.map((product) => (
            <article className="np-showcase-card" key={product.number}>
              <div className="np-showcase-image">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                />

                <span className="np-card-number">
                  {product.number}
                </span>

                <span className="np-card-tag">{product.tag}</span>

                <div className="np-image-shade" />
              </div>

              <div className="np-showcase-card-body">
                <span className="np-card-category">
                  {product.category}
                </span>

                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <button
                  type="button"
                  className="np-card-action"
                  onClick={goToContact}
                >
                  <span>Enquire now</span>
                  <span className="np-action-icon">
                    <ArrowIcon />
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="np-showcase-cta">
        <div className="np-cta-mark">✳</div>

        <div className="np-cta-copy">
          <span>HAVE A PROJECT IN MIND?</span>
          <h2>
            Let's grow a
            <br />
            <em>greener future.</em>
          </h2>
          <p>
            Tell us about your Napier Grass or renewable energy project.
          </p>
        </div>

        <button
          type="button"
          className="np-cta-button"
          onClick={goToContact}
        >
          Request a consultation <ArrowIcon />
        </button>
      </section>
    </main>
  );
}
