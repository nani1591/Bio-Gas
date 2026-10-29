
import React from 'react';
import '../src/process.css';

const stages = [
  {
    number: '01',
    title: 'Cultivation & harvesting',
    label: 'CROP PRODUCTION',
    icon: '🌱',
    description:
      'Napier Grass is cultivated under suitable soil, climate and water conditions. The grass is harvested according to crop maturity and the biomass supply requirements of the proposed plant.',
  },
  {
    number: '02',
    title: 'Chopping & biomass preparation',
    label: 'FEEDSTOCK PREPARATION',
    icon: '🌾',
    description:
      'Harvested Napier Grass is chopped into suitable sizes. Its moisture, composition and availability are assessed, and additional pre-treatment may be used depending on the selected digestion technology.',
  },
  {
    number: '03',
    title: 'Anaerobic digestion',
    label: 'BIOGAS GENERATION',
    icon: '♻️',
    description:
      'Prepared biomass enters a suitable digester operating without oxygen. Microorganisms break down the organic material and generate raw biogas, mainly methane and carbon dioxide.',
  },
  {
    number: '04',
    title: 'Gas cleaning & upgrading',
    label: 'GAS PURIFICATION',
    icon: '⚙️',
    description:
      'Raw biogas is treated to remove moisture and unwanted compounds. An appropriate upgrading system increases methane concentration and brings the gas towards the quality required for its intended use.',
  },
  {
    number: '05',
    title: 'Compression & Bio-CBG',
    label: 'RENEWABLE GAS',
    icon: '🔋',
    description:
      'Upgraded gas that meets the required specifications can be compressed for suitable storage, transportation or approved applications. Compression equipment and safety provisions depend on the project design.',
  },
  {
    number: '06',
    title: 'Digestate & resource recovery',
    label: 'BY-PRODUCT MANAGEMENT',
    icon: '🌿',
    description:
      'The digestion process also produces digestate. This material is collected, tested and managed responsibly. Potential use as a soil input depends on its quality, applicable regulations and local conditions.',
  },
];

export default function Process({ setCurrentPage }) {
  const goToContact = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
    }
  };

  const goToSolutions = () => {
    if (setCurrentPage) {
      setCurrentPage('solutions');
    }
  };

  return (
    <main className="process-page">

      {/* HERO SECTION */}
      <section className="process-hero">
        <div className="container process-hero-grid">

          <div className="process-hero-copy">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              HOW IT WORKS
            </span>

            <h1>
              Napier Grass to{' '}
              <span className="green-text">
                renewable value.
              </span>
            </h1>

            <p>
              Discover how Napier Grass can be used as a
              renewable biomass feedstock. Follow the process
              from cultivation and harvesting to biogas
              production, gas upgrading and compressed Bio-CBG.
            </p>

            <div className="hero-actions">
              <button className="btn" onClick={goToContact}>
                Discuss your project ↗
              </button>

              <button
                className="outline-btn"
                onClick={goToSolutions}
              >
                Explore solutions
              </button>
            </div>
          </div>

          {/* NAPIER GRASS TO BIO-CBG FLOW DIAGRAM */}
          <div className="process-hero-visual">

            <span className="eyebrow">
              THE NAPIER GRASS TO BIO-CBG FLOW
            </span>

            <h2 className="flow-heading">
              From crop to compressed gas
            </h2>

            <div className="process-flow-diagram">

              <div className="process-flow-step">
                <span className="flow-step-icon">🌱</span>
                <strong>Napier Grass</strong>
                <small>Cultivation & harvesting</small>
              </div>

              <span className="process-flow-arrow">→</span>

              <div className="process-flow-step">
                <span className="flow-step-icon">🌾</span>
                <strong>Biomass preparation</strong>
                <small>Chopping & feed preparation</small>
              </div>

              <span className="process-flow-arrow">→</span>

              <div className="process-flow-step">
                <span className="flow-step-icon">♻️</span>
                <strong>Anaerobic digestion</strong>
                <small>Organic biomass to raw biogas</small>
              </div>

              <span className="process-flow-arrow">→</span>

              <div className="process-flow-step">
                <span className="flow-step-icon">⚙️</span>
                <strong>Gas upgrading</strong>
                <small>Cleaning & methane enrichment</small>
              </div>

              <span className="process-flow-arrow">→</span>

              <div className="process-flow-step process-flow-final">
                <span className="flow-step-icon">🔋</span>
                <strong>Compressed Bio-CBG</strong>
                <small>Storage, transport & suitable uses</small>
              </div>

            </div>

            {/* SEPARATE BY-PRODUCT */}
            <div className="process-byproduct">
              <span>🌿</span>

              <div>
                <strong>Digestate — a separate output</strong>

                <p>
                  The remaining digested material is collected
                  for testing and responsible management.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED PROCESS STAGES */}
      <section className="section soft">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="eyebrow">
                THE PROCESS
              </span>

              <h2>
                Six stages, one connected system
              </h2>
            </div>

            <p>
              The process depends on feedstock quality, plant
              capacity, site conditions, selected technology
              and intended gas use.
            </p>
          </div>

          <div className="process-detail-grid">
            {stages.map((stage) => (
              <article
                className="process-detail-card"
                key={stage.number}
              >
                <div className="process-detail-top">
                  <span className="process-detail-icon">
                    {stage.icon}
                  </span>

                  <span className="process-detail-number">
                    {stage.number}
                  </span>
                </div>

                <span className="process-detail-label">
                  {stage.label}
                </span>

                <h3>{stage.title}</h3>

                <p>{stage.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* FACTORS THAT AFFECT PERFORMANCE */}
      <section className="section">
        <div className="container process-factors">

          <div>
            <span className="eyebrow">
              WHAT AFFECTS PERFORMANCE?
            </span>

            <h2>Good planning matters.</h2>

            <p>
              Successful project planning requires an
              understanding of the crop, biomass preparation,
              digestion process, gas quality and safe operation.
            </p>
          </div>

          <div className="factor-list">

            <div>
              <span>01</span>

              <div>
                <strong>Biomass supply</strong>

                <p>
                  Estimate Napier Grass yield, moisture,
                  seasonal availability and reliable supply
                  to the plant.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>

              <div>
                <strong>Digester performance</strong>

                <p>
                  Assess feed preparation, suitable operating
                  conditions, process monitoring and
                  maintenance requirements.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>

              <div>
                <strong>Gas quality & safety</strong>

                <p>
                  Plan gas treatment, quality testing,
                  compression equipment and appropriate
                  safety systems.
                </p>
              </div>
            </div>

            <div>
              <span>04</span>

              <div>
                <strong>Responsible resource recovery</strong>

                <p>
                  Test and manage digestate according to
                  its quality and applicable requirements.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <div className="container">

          <div className="impact-panel">

            <div>
              <span className="eyebrow light-eyebrow">
                READY TO EXPLORE?
              </span>

              <h2>
                Every project starts with the right questions.
              </h2>

              <p>
                Share your land details, estimated biomass
                availability, site conditions and intended gas
                output to discuss the next steps for your
                Napier Grass-based project.
              </p>
            </div>

            <button
              className="btn light-btn"
              onClick={goToContact}
            >
              Contact our team ↗
            </button>

            <div className="impact-decoration">
              ♻
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
