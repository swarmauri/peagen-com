import siteContent from "../packages/site-content-pack/src/index";

const links = [
  { label: "Platform", href: "/platform/" },
  { label: "Proof", href: "/proof/" },
  { label: "Docs", href: "https://docs.peagen.com" }
];

const recentNotes = [
  {
    title: "Scoped generation",
    href: "/platform/",
    body: "Turn intent into bounded work units with traceable package, workflow, and release outputs."
  },
  {
    title: "Governed orchestration",
    href: "/proof/",
    body: "Keep generated changes connected to build, deployment, and operator evidence."
  },
  {
    title: "Implementation docs",
    href: "https://docs.peagen.com",
    body: "Use the docs site for commands, configuration, and delivery patterns."
  }
];

function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="site-brand" href="/" aria-label="Peagen home">
          <img src="/assets/brand/peagen/peagen-brand-lockup.svg" alt="Peagen" />
        </a>
        <nav aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>{siteContent.footer?.note}</p>
        <div>
          <a href="/">Home</a>
          <a href="/platform/">Platform</a>
          <a href="/proof/">Proof</a>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <SiteChrome>
      <section className="home-hero" aria-labelledby="hero-title">
        <p className="eyebrow">Peagen</p>
        <h1 id="hero-title">Agentic project generation for governed delivery.</h1>
        <p>
          Peagen turns scoped intent into traceable implementation work, package changes, and release-ready
          artifacts that can be reviewed before they ship.
        </p>
      </section>
      <section className="article-list" aria-labelledby="articles-title">
        <div className="section-heading">
          <p className="eyebrow">Start here</p>
          <h2 id="articles-title">Delivery surfaces</h2>
        </div>
        <div className="articles">
          {recentNotes.map((item) => (
            <a className="article-link" href={item.href} key={item.href}>
              <span>Peagen</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </a>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}

function DetailPage({ kind }: { kind: "platform" | "proof" }) {
  const isPlatform = kind === "platform";
  return (
    <SiteChrome>
      <article className="article-page">
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Peagen</a>
          <span>/</span>
          <span>{isPlatform ? "Platform" : "Proof"}</span>
        </nav>
        <header className="article-hero">
          <p className="article-kicker">{isPlatform ? "Platform" : "Proof"}</p>
          <h1>{isPlatform ? "Generated work with reviewable boundaries." : "Deployment evidence for peagen.com."}</h1>
          <p className="article-excerpt">
            {isPlatform
              ? "Peagen positions agentic delivery around scoped work, package-aware changes, and governed handoff into release workflows."
              : "The site repository owns the static build, Docker service, DNS plan, proxy plan, and deploy workflow for peagen.com."}
          </p>
        </header>
      </article>
    </SiteChrome>
  );
}

export function App() {
  const path = typeof window === "undefined" ? "/" : window.location.pathname;
  if (path.startsWith("/platform")) return <DetailPage kind="platform" />;
  if (path.startsWith("/proof")) return <DetailPage kind="proof" />;
  return <HomePage />;
}
