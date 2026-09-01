import { AnimatedEyes } from './animated-eyes';

const focusAreas = [
  {
    title: 'Cloud Computing',
    details: 'Architecture Theory, Environment Analysis, Azure',
  },
  {
    title: 'Software Development',
    details: 'Open Source, AI Integration, Full-Stack Development',
  },
  {
    title: 'Cybersecurity',
    details: 'Network Security, Software Security, Cryptography',
  },
  {
    title: 'Local Hosting',
    details: 'Local AI Models, Automation, Docker Containers',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jack Schroeder home">
          JACK.SCHROEDER
        </a>
        <nav aria-label="Primary navigation">
          <a
            className="nav-button"
            href="https://www.linkedin.com/in/jack-schroeder-il/"
            target="_blank"
            rel="noreferrer"
          >
            Connect <span aria-hidden="true">↗</span>
          </a>
          <a className="nav-button" href="/about">
            About Me
          </a>
          <a
            className="nav-button"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </nav>
      </header>

      <section className="section-banner" id="top">
        <div className="content-shell banner-inner">
          <h1>At a Glance</h1>
          <AnimatedEyes />
        </div>
      </section>

      <section className="intro-section content-shell" id="about">
        <div className="intro-copy">
          <p className="eyebrow">Hello, I&apos;m</p>
          <h2>Jack Schroeder</h2>
          <p className="school">University of Missouri – Columbia</p>

          <div className="timeline" id="resume">
            <article className="timeline-item">
              <h3>BS – Computer Science</h3>
              <p className="date">Expected May 2027</p>
              <ul>
                <li>Minor in Mathematics</li>
                <li>Certificate in Cybersecurity</li>
              </ul>
            </article>

            <article className="timeline-item">
              <h3>MS – Computer Science</h3>
              <p className="date">Expected May 2028</p>
            </article>
          </div>
        </div>

        <figure className="portrait-wrap">
          <img
            src="/jack-schroeder.jpg"
            alt="Portrait of Jack Schroeder"
            width="4096"
            height="2731"
          />
        </figure>
      </section>

      <section className="focus-section" aria-labelledby="focus-heading">
        <div className="content-shell">
          <div className="section-heading-row">
            <h2 id="focus-heading">Areas of Focus</h2>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <article className="focus-card" key={area.title}>
                <div className="focus-label">
                  <span aria-hidden="true">[0{index + 1}]</span>
                  <h3>{area.title}</h3>
                </div>
                <p>{area.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="content-shell footer-inner">
          <p>Jack Schroeder</p>
        </div>
      </footer>
    </main>
  );
}
