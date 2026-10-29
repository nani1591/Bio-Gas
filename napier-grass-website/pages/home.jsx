
import React, { useEffect, useState } from 'react';
import { fetchSolutions, fetchProcessSteps } from '../data/api';
import './home-ux.css';
const YOUTUBE_VIDEO_ID = 'yfEIrnzHnOg';

const gallery = [
  {
    title: 'Growing Napier Grass for energy',
    text: 'Assessing crop yield, harvest cycles and biomass supply for a reliable feedstock plan.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4eQB6q2ACihYtjiH41CE9cOSuDivcxP8y0mbqUWrYvA2XeyK2P5azRLQ&s=10',
  },
  {
    title: 'Compressed Bio Gas plants',
    text: 'Biogas upgrading and compression can turn suitable raw gas into Bio-CNG/CBG.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAckeXrA_YEw79tGiyrqd5U9g6QjXq-eaLOzVxVZm3A&s=10',
  },
  {
    title: 'Farm-to-energy circularity',
    text: 'Connect sustainable biomass cultivation with responsible plant operation and resource recovery.',
    image:
      'https://blog.driiv.co.in/wp-content/uploads/2025/12/ChatGPT-Image-Dec-24-2025-11_12_56-AM-1024x682.jpg',
  },
];

export default function Home({ setCurrentPage }) {
  const [solutions, setSolutions] = useState([]);
  const [steps, setSteps] = useState([]);

  // Load solutions and process steps
  useEffect(() => {
    fetchSolutions()
      .then(setSolutions)
      .catch((error) =>
        console.error('Error loading solutions:', error)
      );

    fetchProcessSteps()
      .then(setSteps)
      .catch((error) =>
        console.error('Error loading process steps:', error)
      );
  }, []);

  // Animated green particle background
  useEffect(() => {
    const container = document.getElementById('hero-particles');

    if (!container) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    canvas.setAttribute('aria-hidden', 'true');

    canvas.style.cssText = `
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      pointer-events: none;
    `;

    container.appendChild(canvas);

    let animationFrame;
    let width = 0;
    let height = 0;
    let particles = [];

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        65,
        Math.max(25, Math.floor((width * height) / 14000))
      );

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        alpha: Math.random() * 0.4 + 0.2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }

        // Draw each particle
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(36, 121, 78, ${particle.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 115) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(67, 166, 108, ${
              0.16 * (1 - distance / 115)
            })`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      canvas.remove();
    };
  }, []);

  // Reveal elements when they enter the screen
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) =>
        element.classList.add('is-visible')
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [solutions, steps]);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        {/* Animated particle background */}
        <div
          id="hero-particles"
          className="hero-particles"
          aria-hidden="true"
        />

        <div className="hero-grid container">
          <div className="hero-copy">
            <img
                  loading="lazy"
                  decoding="async"
              className="home-company-logo"
              src="/images/sri%20aishwarya%20lakshmi%20logo.jpg"
              alt="Sri Aishwarya Lakshmi Green Energies LLP"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />

            <span className="eyebrow hero-badge">
              <span className="eyebrow-dot" />
              NAPIER GRASS · RENEWABLE ENERGY
            </span>

            <h1 className="hero-title">
              Napier Grass to
              <br />
              <span className="animated-heading">Compressed</span>
              <br />
              Bio Gas.
            </h1>

            <h2 className="hero-subtitle">
              Growing Napier Grass.{' '}
              <span>Generating clean energy.</span>
            </h2>

            <p className="hero-description">
              Discover how high-yield Napier Grass can be evaluated as
              a feedstock for biogas and Compressed Bio Gas (CBG), with
              project planning shaped around crop yield, water
              availability, land, and plant requirements.
            </p>

            <div className="hero-actions">
              <button
                className="btn"
                onClick={() => setCurrentPage('contact')}
              >
                Discuss Your Project ↗
              </button>

              <button
                className="secondary-btn"
                onClick={() => setCurrentPage('process')}
              >
                Explore Process →
              </button>
            </div>

            <div className="hero-proof">
              <span className="hero-proof-icon">♻</span>
              <div>
                <strong>Grass to gas</strong>
                <small>Napier Grass to Compressed Bio Gas</small>
              </div>
            </div>
          </div>

          {/* YouTube video */}
          <div className="hero-visual">
            <div className="hero-image-frame hero-video-frame">
              <iframe
                className="hero-video"
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=1&rel=0&playsinline=1`}
                title="Biogas and renewable energy facility"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />

              <div className="hero-image-caption">
                <span className="caption-dot" />
                CLEAN ENERGY · CIRCULAR FUTURE
              </div>
            </div>

            <div className="image-orbit orbit-one" />
            <div className="image-orbit orbit-two" />

            <div className="floating-card">
              <span className="floating-card-icon">♻</span>
              <div>
                <strong>From grass to gas</strong>
                <small>A cleaner tomorrow starts today</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section intro-section">
        <div className="container intro-grid reveal">
          <div>
            <span className="eyebrow">WHY NAPIER GRASS?</span>
            <h2>
              From green fields
              <br />
              <span className="green-text">to cleaner energy.</span>
            </h2>
          </div>

          <p className="intro-copy">
            Napier Grass is a potential energy crop for biogas
            production. A successful project starts with assessing local
            growing conditions, biomass yield, harvesting logistics,
            water needs and the right conversion technology.
          </p>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section solutions-section">
        <div className="container">
          <div className="section-heading reveal">
            <div>
              <span className="eyebrow">What we do</span>
              <h2>
                Napier Grass to
                <br />
                renewable gas
              </h2>
            </div>

            <p>
              Explore the journey from crop cultivation and biomass
              preparation to biogas production, gas upgrading and
              compressed Bio-CNG.
            </p>
          </div>

          <div className="grid">
            {solutions.map((item, index) => (
              <article
                className="card reveal"
                style={{ '--delay': `${index * 100}ms` }}
                key={item.id ?? index}
              >
                <div className="card-image-wrap">
                  <img
                  loading="lazy"
                  decoding="async"
                    src={item.image}
                    alt={item.title?.replace(/^[^A-Za-z]+/, '') || 'Renewable energy solution'}
                    className="card-img"
                    loading="lazy"
                  />
                  <span className="image-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <button
                    className="text-link"
                    onClick={() => setCurrentPage('solutions')}
                  >
                    Explore solution <span>↗</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-section soft">
        <div className="container">
          <div className="section-heading reveal">
            <div>
              <span className="eyebrow">How it works</span>
              <h2>From Napier Grass to Compressed Bio Gas</h2>
            </div>

            <button
              className="outline-btn"
              onClick={() => setCurrentPage('process')}
            >
              View the process ↗
            </button>
          </div>

          <div className="grid process-grid">
            {steps.map((step, index) => (
              <article
                className="process-card reveal"
                style={{ '--delay': `${index * 100}ms` }}
                key={step.step ?? index}
              >
                <span className="step">
                  {String(step.step ?? index + 1).padStart(2, '0')}
                </span>
                <div className="process-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section gallery-section">
        <div className="container">
          <div className="section-heading reveal">
            <div>
              <span className="eyebrow">A greener tomorrow</span>
              <h2>A crop with energy potential.</h2>
            </div>

            <p>
              Discover the landscapes, systems and communities that
              inspire a cleaner renewable gas.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <article
                className={`gallery-card gallery-card-${index + 1} reveal`}
                style={{ '--delay': `${index * 120}ms` }}
                key={item.title}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="gallery-overlay">
                  <span>NAPIER GRASS ENERGY</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section impact-section">
        <div className="container impact-panel reveal">
          <div>
            <span className="eyebrow light-eyebrow">
              Make your next project count
            </span>
            <h2>Planning a Napier Grass Bio-CBG project?</h2>
            <p>
              Tell us about your land, expected biomass availability,
              water source and project location so the feasibility of
              your Napier Grass-to-CBG project can be explored.
            </p>
          </div>

          <button
            className="btn light-btn"
            onClick={() => setCurrentPage('contact')}
          >
            Start an Enquiry ↗
          </button>

          <div className="impact-decoration">♻</div>
        </div>
      </section>
    </main>
  );
}
