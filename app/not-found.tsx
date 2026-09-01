export default function NotFound() {
  return (
    <main className="not-found-page">
      <header className="site-header">
        <a className="nav-button" href="/">
          Back Home
        </a>
      </header>

      <section className="not-found-banner" aria-label="Error 404">
        <div className="not-found-code" aria-hidden="true">
          <span>4</span>
          <img src="/eyes-404.svg" alt="" />
          <span>4</span>
        </div>
      </section>

      <section className="not-found-message content-shell">
        <h1>Page not found</h1>
      </section>

      <footer>
        <div className="content-shell footer-inner">
          <p>Jack Schroeder</p>
        </div>
      </footer>
    </main>
  );
}
