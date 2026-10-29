
import React from 'react';
import './solutions.css';

const solutions = [
  {
    number: '01',
    icon: '🌱',
    title: 'Napier Grass Cultivation',
    description:
      'Napier Grass is a fast-growing perennial tropical grass that can produce substantial biomass under suitable growing conditions. It can be assessed as a renewable feedstock for biogas projects.',
    points: [
      'Suitable land and soil assessment',
      'Planting, irrigation and crop management',
      'Harvesting schedule and yield estimation',
    ],
    tag: 'Grow the feedstock',
  },
  {
    number: '02',
    icon: '🌾',
    title: 'Napier Grass Biomass Supply',
    description:
      'A reliable biomass supply is essential for a continuous biogas plant operation. Plan harvesting, transportation and storage according to the plant capacity and seasonal crop availability.',
    points: [
      'Biomass availability and quality checks',
      'Harvesting and transportation planning',
      'Feedstock storage and supply scheduling',
    ],
    tag: 'From farm to plant',
  },
  {
    number: '03',
    icon: '⚙️',
    title: 'Biomass Preparation',
    description:
      'Harvested Napier Grass generally needs size reduction and suitable feed preparation before digestion. The preparation method depends on grass characteristics and the selected plant technology.',
    points: [
      'Grass chopping and size reduction',
      'Feed preparation and handling',
      'Feedstock testing and process suitability',
    ],
    tag: 'Prepare the biomass',
  },
  {
    number: '04',
    icon: '♻️',
    title: 'Biogas Production',
    description:
      'Prepared Napier Grass can be evaluated for anaerobic digestion, a biological process in which microorganisms break down organic material without oxygen to produce biogas.',
    points: [
      'Digester technology assessment',
      'Biogas generation and monitoring',
      'Digestate collection and handling',
    ],
    tag: 'Biomass to biogas',
  },
  {
    number: '05',
    icon: '🔋',
    title: 'Biogas Upgrading to Bio-CBG',
    description:
      'Raw biogas contains methane, carbon dioxide and other components. Appropriate treatment and upgrading can increase methane concentration, followed by compression when the gas meets the required specifications.',
    points: [
      'Gas cleaning and moisture removal',
      'Methane upgrading and quality testing',
      'Compression, storage and safety planning',
    ],
    tag: 'Biogas to Bio-CBG',
  },
  {
    number: '06',
    icon: '📊',
    title: 'Napier Grass Project Consultation',
    description:
      'Plan a Napier Grass-to-Bio-CBG project by reviewing land availability, expected crop yield, water requirements, biomass logistics, plant capacity and project economics.',
    points: [
      'Land and feedstock feasibility review',
      'Preliminary plant capacity assessment',
      'Technical planning and next steps',
    ],
    tag: 'Plan your project',
  },
];

export default function Solutions({ setCurrentPage }) {
  const goToContact = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
    }
  };

  return (
    <main className="solutions-page">
      {/* HERO SECTION */}
      <section className="solutions-hero">
        <div className="container solutions-hero-grid">
          <div className="solutions-hero-copy">
            <span className="solutions-eyebrow">
              <span />
              NAPIER GRASS TO RENEWABLE ENERGY
            </span>

            <h1>
              Napier Grass,
              <br />
              <em>Compressed Bio Gas.</em>
            </h1>

            <p>
              Discover how Napier Grass can support a renewable-energy
              pathway, from cultivation and biomass preparation to
              biogas production and upgrading into Bio-CBG.
            </p>

            <div className="solutions-hero-actions">
              <button
                className="solutions-primary-btn"
                onClick={goToContact}
              >
                Discuss your project <span>↗</span>
              </button>

              <a
                className="solutions-text-link"
                href="#solution-catalog"
              >
                Explore solutions ↓
              </a>
            </div>

            <div className="solutions-trust-note">
              <span>✓</span>
              <div>
                <strong>From crop cultivation to renewable gas</strong>
                <small>Land · Biomass · Digestion · Bio-CBG</small>
              </div>
            </div>
          </div>

          <div
            className="solutions-hero-visual"
            aria-label="Napier Grass to renewable gas concept"
          >
            <div className="solutions-orbit solutions-orbit-one" />
            <div className="solutions-orbit solutions-orbit-two" />

            <div className="solutions-visual-card">
              <div className="solutions-visual-icon">🌱</div>

              <span className="solutions-visual-label">
                CROP TO CLEANER ENERGY
              </span>

              <h2>
                Grow green.
                <br />
                Create value.
              </h2>

              <p>
                Explore the potential of Napier Grass as a
                renewable biomass feedstock.
              </p>

              <div className="solutions-flow">
                <span>Napier Grass</span>
                <b>→</b>
                <span>Biogas</span>
                <b>→</b>
                <span>Bio-CBG</span>
              </div>
            </div>

            <div className="solutions-floating-leaf">✳</div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION TO NAPIER GRASS */}
      <section className="solutions-intro">
        <div className="container solutions-intro-grid">
          <div>
            <span className="solutions-section-kicker">
              UNDERSTANDING NAPIER GRASS
            </span>

            <h2>
              What is Napier Grass?
              <span> A renewable biomass resource.</span>
            </h2>
          </div>

          <p>
            Napier Grass, also known as elephant grass, is a
            high-biomass tropical perennial grass used for fodder
            and considered as a potential feedstock for bioenergy.
            Its suitability for biogas production depends on crop
            yield, moisture, feedstock composition, local growing
            conditions and the selected conversion technology.
          </p>
        </div>
      </section>

      {/* SOLUTIONS CARDS */}
      <section
        className="solutions-catalog"
        id="solution-catalog"
      >
        <div className="container">
          <div className="solutions-section-heading">
            <div>
              <span className="solutions-section-kicker">
                OUR NAPIER GRASS SOLUTIONS
              </span>

              <h2>
                From green grass to renewable gas
              </h2>
            </div>

            <p>
              Explore the key stages of planning and developing
              a Napier Grass-based renewable-energy project.
            </p>
          </div>

          <div className="solutions-card-grid">
            {solutions.map((solution) => (
              <article
                className="solution-card"
                key={solution.number}
              >
                <div className="solution-card-top">
                  <span
                    className="solution-card-icon"
                    aria-hidden="true"
                  >
                    {solution.icon}
                  </span>

                  <span className="solution-card-number">
                    {solution.number}
                  </span>
                </div>

                <span className="solution-card-tag">
                  {solution.tag}
                </span>

                <h3>{solution.title}</h3>

                <p className="solution-card-description">
                  {solution.description}
                </p>

                <ul>
                  {solution.points.map((point) => (
                    <li key={point}>
                      <span>✓</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <button
                  className="solution-enquire-link"
                  onClick={goToContact}
                >
                  Discuss this solution <span>↗</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT PROCESS */}
      <section className="solutions-process-section">
        <div className="container">
          <div className="solutions-section-heading solutions-process-heading">
            <div>
              <span className="solutions-section-kicker">
                HOW THE PROJECT STARTS
              </span>

              <h2>
                Your journey from grass to gas
              </h2>
            </div>

            <p>
              A step-by-step approach helps evaluate the feedstock,
              process requirements and potential project scope.
            </p>
          </div>

          <div className="solutions-steps">
            <article>
              <span>01</span>
              <h3>Grow &amp; harvest</h3>
              <p>
                Assess land, water, crop management and the
                availability of Napier Grass biomass.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Process &amp; produce biogas</h3>
              <p>
                Evaluate biomass preparation, anaerobic digestion
                and the expected biogas production potential.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Upgrade &amp; plan Bio-CBG</h3>
              <p>
                Assess gas cleaning, upgrading, compression,
                safety requirements and potential end uses.
              </p>
            </article>
          </div>

          <p className="solutions-disclaimer">
            Actual crop yields, gas production, plant capacity and
            project economics depend on local growing conditions,
            feedstock testing, process design, operating conditions
            and applicable approvals. Results should be confirmed
            through a detailed feasibility study.
          </p>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="solutions-cta-section">
        <div className="container">
          <div className="solutions-cta-panel">
            <div>
              <span className="solutions-section-kicker">
                LET'S PLAN YOUR PROJECT
              </span>

              <h2>
                Interested in Napier Grass-based Bio-CBG?
              </h2>

              <p>
                Connect with Sri Aishwarya Lakshmi Green Energies LLP
                to discuss your land, biomass availability and
                renewable-energy project requirements.
              </p>
            </div>

            <button
              className="solutions-cta-btn"
              onClick={goToContact}
            >
              Contact our team <span>↗</span>
            </button>

            <span
              className="solutions-cta-decoration"
              aria-hidden="true"
            >
              ♻
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
