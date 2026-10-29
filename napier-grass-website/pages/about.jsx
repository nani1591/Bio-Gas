import React from 'react';
import './about.css';

const values = [
  { icon: '🌍', title: 'Sustainability', text: 'Encouraging responsible organic-waste management and practical renewable-energy pathways.' },
  { icon: '⚙', title: 'Practical engineering', text: 'Considering feedstock, site conditions, intended output, safety and long-term operation.' },
  { icon: '🤝', title: 'Partnership', text: 'Starting with clear conversations so project needs and possible next steps are understood.' },
];

export default function About({ setCurrentPage }) {
  return <main className="about-page">
    <section className="about-hero"><div className="container about-hero-grid">
      <div>
        <span className="eyebrow">
          <span className="eyebrow-dot" /> ABOUT OUR NAPIER GRASS FOCUS</span>
          <h1>Growing a <span className="green-text">greener energy future.</span></h1>
          <p>Sri Aishwarya Lakshmi Green Energies LLP explores Napier Grass-based biogas and Compressed Bio Gas (CBG) project pathways, with attention to biomass supply, site conditions, technology and responsible operation.</p>
          <div className="hero-actions">
            <button className="btn" onClick={() => setCurrentPage('solutions')}>Explore our solutions ↗</button>
            <button className="outline-btn" onClick={() => setCurrentPage('contact')}>Get in touch</button>
          </div>
          </div>
      <div className="about-visual">
        <div className="about-visual-mark">♻</div>
        <span>BIOMASS TO VALUE</span>
        <h2>Clean energy.<br/>Greener tomorrow.</h2>
        <p>Explore circular-energy opportunities with a focus on responsible planning.</p>
        <div className="about-visual-line"><i/> Napier Grass biomass <b>→</b> Renewable potential</div>
        </div>
    </div>
    </section>
    <section className="section">
      <div className="container about-intro"><div>
        <span className="eyebrow">WHO WE ARE</span>
        <h2>Turning challenges into <span className="green-text">opportunities.</span></h2></div>
        <div>
          <p>Napier Grass can be considered as an energy-crop feedstock for biogas. Whether it is viable depends on local growing conditions, land and water availability, crop yield, harvesting costs and the conversion process.</p>
          <p>We help visitors understand the crop-to-gas pathway and the key questions to evaluate before investing. Each project needs its own agronomic, technical, financial and regulatory assessment.</p>
          </div>
          </div>
          </section>
    <section className="section soft">
      <div className="container">
        <div className="section-heading">
          <div><span className="eyebrow">OUR GUIDING PRINCIPLES</span>
          <h2>What guides our approach</h2>
          </div>
          <p>Responsible planning begins with understanding the real needs of each project.</p></div>
          <div className="grid about-values">{values.map((value) => <article className="about-value-card" key={value.title}>
            <span className="about-value-icon">{value.icon}</span>
            <h3>{value.title}</h3><p>{value.text}</p>
            </article>
          )}
          </div>
          </div>
          </section>
    <section className="section">
      <div className="container about-journey"><div>
        <span className="eyebrow">OUR FOCUS</span>
      <h2>From assessment to action.</h2>
      <p>Every project is different. The first step is to understand the waste stream, location, expected output and operating requirements before considering a suitable solution.</p></div>
      <ol>
        <li>
          <span></span>
      <div>
        <strong>Understand the need</strong>
      <p>Identify available feedstock and project goals.</p></div>
      </li><li><span></span>
      <div>
        <strong>Explore options</strong>
        <p>Review suitable technologies and key constraints.</p></div>
        </li><li><span></span>
        <div>
          <strong>Plan responsibly</strong>
          <p>Define technical checks, safety measures and next steps.</p>
          </div>
          </li>
          </ol>
      </div>
      </section>
    <section className="section">
      <div className="container">
        <div className="impact-panel">
          <div>
            <span className="eyebrow light-eyebrow">LET'S CONNECT</span>
          <h2>Have a Napier Grass energy project in mind?</h2>
          <p>Tell us what you are looking to achieve and start a conversation about possible next steps.</p>
          </div>
          <button className="btn light-btn" onClick={() => setCurrentPage('contact')}>Contact us ↗</button>
          <div className="impact-decoration">🌱</div>
          </div>
          </div>
          </section>
  </main>;
}     
