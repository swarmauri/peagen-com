export const siteContent = {
  product: {
    name: "Peagen",
    slug: "peagen-com",
    tagline: "Agentic project generation and orchestration for governed delivery.",
    description: "Peagen turns scoped intent into traceable implementation workflows, package changes, and release-ready artifacts.",
    category: "Product website",
    canonicalUrl: "https://peagen.com"
  },
  theme: { id: "default", label: "Default", mode: "light", tokens: { accent: "#7C3AED" } },
  nav: {
    primary: [
      { label: "Platform", href: "/platform/" },
      { label: "Proof", href: "/proof/" },
      { label: "Docs", href: "https://docs.peagen.com" }
    ],
    cta: { label: "Get started", href: "/platform/" }
  },
  footer: {
    note: "Peagen is maintained by swarmauri.",
    links: [
      { label: "GitHub", href: "https://github.com/swarmauri/peagen-com" },
      { label: "Docs", href: "https://docs.peagen.com" }
    ]
  },
  ai: {
    llmsTxtTitle: "Peagen",
    coreFacts: [
      "Peagen turns scoped intent into traceable implementation workflows, package changes, and release-ready artifacts.",
      "The canonical website is https://peagen.com.",
      "The site is deployed as a self-hosted Docker static site."
    ]
  },
  pages: [
    {
      slug: "/",
      kind: "home",
      title: "Peagen | Agentic project generation and orchestration for governed delivery.",
      description: "Peagen turns scoped intent into traceable implementation workflows, package changes, and release-ready artifacts.",
      h1: "Peagen",
      intro: "Peagen turns scoped intent into traceable implementation workflows, package changes, and release-ready artifacts. The site packages product positioning, structured metadata, and deployment evidence in a standalone MdWrk lander repository.",
      sections: [
        { id: "hero", kind: "hero", eyebrow: "Peagen", title: "Agentic project generation and orchestration for governed delivery.", subtitle: "Peagen turns scoped intent into traceable implementation workflows, package changes, and release-ready artifacts." },
        { id: "platform", kind: "feature_grid", title: "What this site owns", items: [
          { title: "Product narrative", description: "Canonical product messaging, audience positioning, and calls to action for peagen.com." },
          { title: "Structured discovery", description: "Search, assistant, social, and linked-data metadata generated from the content pack." },
          { title: "Independent deploys", description: "CI, Docker deployment, and Namecheap DNS live in this repository." }
        ] },
        { id: "proof", kind: "proof_matrix", title: "Operational proof", items: [
          { claim: "The site is independently buildable.", status: "planned", evidence: "npm run build produces the local static artifact and Docker image build input." },
          { claim: "DNS ownership is explicit.", status: "planned", evidence: "site.manifest.json records the Namecheap zone and records owned by this repository." }
        ] },
        { id: "cta", kind: "cta", title: "Build from source", body: "Use npm ci, npm run check, npm run build, npm run dns:plan, and npm run proxy:plan before publishing." }
      ],
      schema: [
        { kind: "Organization", data: { name: "Peagen", url: "https://peagen.com" } },
        { kind: "WebSite", data: { name: "Peagen", url: "https://peagen.com" } }
      ]
    },
    {
      slug: "/platform/",
      kind: "feature",
      title: "Peagen platform",
      description: "Platform overview for Peagen.",
      h1: "Platform",
      intro: "This page captures the platform surface that the Peagen website introduces to operators, builders, and technical evaluators.",
      sections: [
        { id: "details", kind: "feature_detail", title: "Repository-owned site system", body: "The lander is intentionally thin: the application host renders a typed content pack, while metadata, sitemap, robots, and Docker deployment remain repo-local.", items: [
          { title: "MdWrk lander", description: "Reusable page sections and structured-data support." },
          { title: "Content pack", description: "Product-specific content, navigation, metadata, and discovery outputs." }
        ] },
        { id: "faq", kind: "faq", title: "Platform FAQ", items: [
          { question: "Where is this site deployed?", answer: "It is built as a static site and served by a self-hosted Docker service." },
          { question: "Who owns DNS?", answer: "This repository owns its declared Namecheap records through the DNS workflow." }
        ] }
      ]
    },
    {
      slug: "/proof/",
      kind: "package",
      title: "Peagen proof",
      description: "Build, DNS, and deployment proof for Peagen.",
      h1: "Proof",
      intro: "The proof page gives operators a quick inventory of the commands and artifacts required before publication.",
      sections: [
        { id: "commands", kind: "package_grid", title: "Verification commands", packages: [
          { name: "Install", description: "Install deterministic dependencies.", install: "npm ci", api: ["npm ci"] },
          { name: "Check", description: "Run type and content-pack checks.", install: "npm run check", api: ["npm run check"] },
          { name: "Build", description: "Build the content pack and static site.", install: "npm run build", api: ["npm run build"] },
          { name: "DNS plan", description: "Render the Namecheap record plan.", install: "npm run dns:plan", api: ["npmctl plan desired-state/dns.yaml"] }
        ] }
      ]
    },
    {
      slug: "/articles/scoped-generation-needs-bounded-delivery/",
      kind: "feature",
      title: "Scoped generation needs bounded delivery | Peagen",
      description: "How Peagen turns scoped intent into bounded work units, reviewable changes, and governed release handoff.",
      h1: "Scoped generation needs bounded delivery.",
      intro: "Peagen is strongest when it treats generation as a bounded delivery problem instead of a free-form text exercise. The repository surface already shows that bias through content-pack checks, deterministic builds, Docker publication, DNS plans, and explicit proxy orchestration.",
      sections: [
        { id: "boundary", kind: "feature_detail", title: "Generation has to terminate in a reviewable unit", body: "The product promise is not just that Peagen can produce output. The stronger promise is that it can turn intent into bounded work that is inspectable before it ships. In this repo, that shows up as explicit content, typed routes, build scripts, and deploy workflows that keep the publication surface narrow enough to review.", items: [
          { title: "Scoped change sets", description: "The site positions Peagen around bounded implementation work instead of open-ended autonomous behavior." },
          { title: "Repo-owned delivery", description: "Build, Docker, proxy, and DNS all live in the same repository, so the publication lane stays inspectable." },
          { title: "Proof before release", description: "The published command surface requires `npm run check`, `npm run build`, `npm run dns:plan`, and `npm run proxy:plan` before publication." }
        ] },
        { id: "proof", kind: "proof_matrix", title: "What the repo already proves", items: [
          { claim: "The content surface is typed and buildable.", status: "observed", evidence: "`packages/site-content-pack` builds before the site build runs." },
          { claim: "Publication is not hidden behind a platform dashboard.", status: "observed", evidence: "Deploy, DNS, and proxy orchestration are exposed as repo scripts and workflows." },
          { claim: "Generated output can be reviewed as a bounded artifact.", status: "observed", evidence: "Static build outputs, Docker inputs, and desired-state files are all local repo artifacts." }
        ] },
        { id: "commands", kind: "package_grid", title: "Commands that reinforce bounded delivery", packages: [
          { name: "Check", description: "Validates the content pack and the app before any publish step.", install: "npm run check", api: ["npm run check"] },
          { name: "Build", description: "Produces the static site and the artifacts needed for Docker-backed publication.", install: "npm run build", api: ["npm run build"] },
          { name: "DNS plan", description: "Renders the intended DNS state before any mutation.", install: "npm run dns:plan", api: ["npmctl plan desired-state/dns.yaml"] },
          { name: "Proxy plan", description: "Renders the intended proxy host state before apply.", install: "npm run proxy:plan", api: ["npmctl plan desired-state/proxy.yaml"] }
        ] }
      ]
    },
    {
      slug: "/articles/repo-owned-publication-for-peagen-com/",
      kind: "feature",
      title: "Repo-owned publication for peagen.com | Peagen",
      description: "Why the peagen.com repository owns its build, Docker, DNS, proxy, and deploy evidence directly.",
      h1: "Repo-owned publication keeps Peagen explainable.",
      intro: "The peagen.com repository does more than host brand copy. It owns the Docker service, deploy workflow, DNS desired state, proxy desired state, and the commands that connect those pieces. That matters because operator truth stays close to the site being published.",
      sections: [
        { id: "ownership", kind: "feature_detail", title: "The publication lane is deliberately local to the repo", body: "A site becomes harder to trust when build, proxy, and DNS rules are scattered across outside dashboards or undocumented machine state. Here the publication lane is explicit: the repo includes deploy helpers, workflow files, desired-state documents, and a named Docker service for the public site.", items: [
          { title: "Named Docker service", description: "The repo builds and deploys the `peagen-com` service directly." },
          { title: "Dedicated workflows", description: "Separate CI, DNS, and deploy workflows make the publication path inspectable." },
          { title: "Desired state checked into git", description: "Proxy and DNS plans are represented as repo files instead of operator memory." }
        ] },
        { id: "faq", kind: "faq", title: "Why this matters", items: [
          { question: "Why put deploy orchestration in the site repo?", answer: "Because the public site, its DNS, and its proxy contract are part of the product surface being published." },
          { question: "What does an operator verify first?", answer: "That the content pack passes, the app builds, the Docker target is valid, and the DNS/proxy plans match the intended state." },
          { question: "What does this say about Peagen itself?", answer: "It reinforces the product claim that generated work should end in bounded, reviewable, governed delivery artifacts." }
        ] },
        { id: "cta", kind: "cta", title: "Use the repo as the authority", body: "Read the repo scripts and workflows as part of the product story. Peagen is not only describing governed delivery here; it is publishing the site through that same operating model." }
      ]
    }
  ]
};

export default siteContent;
