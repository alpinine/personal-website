import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Jack Schroeder',
  description: 'Learn more about Jack Schroeder.',
};

export const dynamic = 'force-static';

export default function AboutPage() {
  return (
    <main>
      <header className="site-header">
        <a className="nav-button" href="/">
          Back Home
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
          <a className="nav-button" href="/about" aria-current="page">
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

      <section className="section-banner">
        <div className="content-shell banner-inner">
          <h1>About Me</h1>
        </div>
      </section>

      <section className="about-page-content content-shell">
        <article className="about-narrative-section about-introduction">
          <p className="about-section-label">[01] INTRODUCTION</p>
          <div className="about-section-copy">
            <h2>Jack Schroeder</h2>
            <p>
              I am a driven learner who operates best with a full workload,
              challenging tasks, and logic-driven problems.
            </p>
          </div>
        </article>

        <article className="about-narrative-section">
          <h2 className="about-section-label">[02] BACKGROUND</h2>
          <div className="about-section-copy">
            <p>
              From a young age, I have always obsessed over any and all
              technology. Whether it was a new phone, an ancient computer, or
              something unique like a Raspberry Pi, I had to get my hands on it.
              My most influential introduction to the world of Computer Science
              has been <a href="https://www.scratchfoundation.org/home">Scratch</a>.
              The countless hours of tinkering and trying new things laid the
              foundation of my problem solving process.
            </p>
            <p>
              During high school, I pushed myself through various dual-credit and
              AP courses to collect roughly twenty-five credit hours. Beyond
              coursework, I also founded a pickleball club, became a member of the
              National Honor Society, and played on the tennis team.
            </p>
            <p>
              Going into college, I have pushed myself every year and have
              managed to put myself on track to obtain my bachelor&apos;s degree
              in just 3 years <strong>while</strong> dual-enrolled in
              graduate-level courses under the accelerated master&apos;s degree
              program. With this, I expect to graduate with my master&apos;s degree
              with just 1 extra year beyond my undergraduate years.
            </p>
            <p>
              I joined the Sigma Chi Xi Xi chapter at the University of Missouri
              during my first year, which has proven to be such an amazing and
              unique experience. My favorite part of that experience is the
              emphasis on introspective practices, which I find myself
              continuously making use of. Professionally speaking, I held the
              House Manager position for a year and oversaw our chapter moving
              into our chapter house, helped configure and onboard members in a
              brand new billing software, and worked with countless alumni to
              ensure everything was completed in an efficient manner.
            </p>
          </div>
        </article>

        <article className="about-narrative-section">
          <h2 className="about-section-label">[03] CURRENTLY</h2>
          <div className="about-section-copy">
            <p>
              I have a multitude of different ideas, projects, and topics that I
              work on day-to-day, but more generally, I find myself continuing to
              learn about different cloud computing concepts, software security
              and cryptography concepts, and cloud network security practices,
              while dipping my toes in various different programming languages.
            </p>
            <p>
              In terms of projects, the majority of my attention has been focused
              on different software meant to organize and increase my day-to-day
              productivity and efficiency. Improving quality of life when
              performing work has always been something I&apos;ve honed in on when
              creating solutions that contain all the best features and none of
              the noise. It is my goal that I will have a deliverable application
              that solves many of the problems I find myself struggling to tackle
              under currently offered solutions before the end of my
              undergraduate career.
            </p>
          </div>
        </article>

        <article className="about-narrative-section">
          <h2 className="about-section-label">[04] BEYOND THE DESK</h2>
          <div className="about-section-copy">
            <p>
              To balance my day-to-day, I find comfort in a handful of activities.
              I love staying active, especially through playing tennis,
              pickleball, and essentially any sport with a racket. Additionally,
              adventuring outdoors, hiking, walking trails, and generally
              connecting with nature have been a huge part of my life and continue
              to be some of my favorite activities.
            </p>
            <p>
              I love watching movies and TV shows, but podcasts and music tend to
              be my absolute favorites.
            </p>
          </div>
        </article>
      </section>

      <footer>
        <div className="content-shell footer-inner">
          <p>Jack Schroeder</p>
        </div>
      </footer>
    </main>
  );
}
