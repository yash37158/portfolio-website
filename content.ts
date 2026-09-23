// ============================================================
// All site content lives here. Edit this file, not the JSX.
// Source: Yash_Sharma_AI_Engineer.pdf (Sep 2026) + github.com/yash37158
// ============================================================

export const profile = {
  name: "Yash Sharma",
  title: "AI Engineer",
  tagline: "Building AI systems, agents and full-stack products for clients in Singapore and India",
  // <strong> marks the phrases shown in white.
  summaryHtml:
    "AI engineer with <strong>2+ years</strong> building production systems for enterprise and startup clients in Singapore and India. I build with <strong>LLMs and agents</strong> — MCP servers and Gemini workflows running in production — and apply <strong>AI-assisted development</strong> across live client delivery, on a full-stack foundation in <strong>Go</strong>, <strong>TypeScript</strong>, REST APIs, <strong>Kubernetes</strong> and cloud.",
  email: "yashsharma37158@gmail.com",
  github: "https://github.com/yash37158",
  linkedin: "https://linkedin.com/in/yash-sharma-7b688a19b",
  resume: "/Yash_Sharma_AI_Engineer.pdf", // drop the PDF into /public to enable
};

export type Role = {
  company: string;
  location: string;
  role: string;
  type: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: "EMedia-Plus Pvt. Ltd.",
    type: "Contract",
    location: "Singapore",
    role: "Contract Full Stack Engineer",
    start: "Dec 2025",
    end: "Present",
    bullets: [
      "Modernized a legacy enterprise platform, shipping 90+ REST APIs and a template-based Vue.js CMS, by leading solution design for a Delphi-to-Go migration with AI-assisted development applied across authoring, refactoring and code review.",
      "Sustained client SLA adherence across hundreds of customer-managed Android terminals by building an offline-capable player with resumable 5 GB uploads, encrypted real-time content delivery, and containerized microservices on Kubernetes across AWS and Huawei Cloud.",
      "Reduced repetitive engineering and delivery effort by building AI agents and automation workflows with MCP tooling, Zapier and n8n, wired into the team's day-to-day process.",
    ],
  },
  {
    company: "TripPro",
    type: "Contract",
    location: "Delhi",
    role: "Contract Full Stack Engineer",
    start: "Sep 2025",
    end: "Nov 2025",
    bullets: [
      "Automated personalized content generation at 100+ outputs per day with sub-second latency by designing and deploying Gemini-based LLM workflows end to end, from prompt design through cloud release.",
      "Reduced data-layer latency 30% by analyzing MongoDB aggregation pipelines and redesigning the indexing strategy and React interfaces.",
    ],
  },
  {
    company: "Honestlee",
    type: "Contract",
    location: "Remote",
    role: "Contract Full Stack Engineer",
    start: "Jun 2025",
    end: "Sep 2025",
    bullets: [
      "Compressed feature delivery from weeks to days as sole engineer, converting ambiguous stakeholder requirements into scoped tasks and shipping REST APIs, authentication and service modules in Node.js, PostgreSQL and MongoDB.",
      "Delivered customer onboarding, role-based access control and geolocation workflows for every new user, built in React with Mapbox and integrated with Zoho CRM over its API.",
    ],
  },
  {
    company: "Layer5 · Meshery (CNCF project)",
    type: "Open source",
    location: "Remote",
    role: "Open Source Engineer (Meshmate)",
    start: "Oct 2023",
    end: "Jun 2025",
    bullets: [
      "Shortened CI feedback loops across a globally used open-source platform by migrating the full test suite from Cypress to Playwright and automating pipelines with GitHub Actions and Docker.",
      "Raised new-contributor onboarding success across a globally distributed community by writing documentation, running boot camps and mentoring contributors alongside maintainers.",
    ],
  },
  {
    company: "Eskay's",
    type: "Full-time",
    location: "Mumbai",
    role: "Full Stack Developer (MERN)",
    start: "Jul 2022",
    end: "Jan 2023",
    bullets: [
      "Reduced page load latency 47% by rebuilding the checkout experience on Stripe with targeted front-end and server-side performance optimization.",
      "Delivered consistent real-time order processing by integrating third-party logistics and mapping services (Shiprocket, Google Maps) with Firebase and MongoDB Atlas.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  repo: string;
  image?: string; // put files in /public/projects; omit to show a placeholder tile
};

export const projects: Project[] = [
  {
    name: "ScaleMind",
    tagline: "Cloud scaling through conversation",
    description:
      "An MCP (Model Context Protocol) server that lets DevOps engineers manage cloud infrastructure scaling through natural-language conversations from inside their editor.",
    stack: ["Go", "MCP", "Cloud APIs"],
    repo: "https://github.com/yash37158/Scalemind",
    // image: "/projects/scalemind.png", // add a screenshot here
  },
  {
    name: "Orchestr8",
    tagline: "GPU and inference observability",
    description:
      "Multi-tenant platform correlating NVIDIA DCGM hardware telemetry with vLLM inference latency to separate GPU thermal throttling from traffic surges. Validated by automated fault injection on a live Kubernetes cluster and hardened by 44 adversarial security tests.",
    stack: ["Go", "ClickHouse", "OpenTelemetry", "Kubernetes"],
    repo: "https://github.com/yash37158/Orchestra8",
    image: "/projects/orchestr8.png",
  },
  {
    name: "Meshify",
    tagline: "Kubernetes-native infra dashboard",
    description:
      "Observability dashboard built with Istio and Cilium for infrastructure visibility and operational troubleshooting.",
    stack: ["Go", "React", "Istio", "Cilium"],
    repo: "https://github.com/yash37158/Meshify",
    // image: "/projects/meshify.png", // add a screenshot here
  },
  {
    name: "Verbatim",
    tagline: "Ask your documents. Get answers you can verify.",
    description:
      "RAG document Q&A where every answer quotes its source and every quote is checked against the document before you see it. Upload a contract, a policy or a 400-page statute and ask in plain language; the system abstains when the documents don't answer.",
    stack: ["Python", "FastAPI", "Postgres + pgvector", "Gemini", "Next.js 15"],
    repo: "https://github.com/yash37158/Verbatim",
    image: "/projects/verbatim.png",
  },
];

// Merged pull requests in the Meshery org, pulled from the GitHub API on 24 Sep 2026.
export const openSource = {
  org: "Meshery",
  orgUrl: "https://github.com/meshery",
  mergedCount: 28,
  repos: ["meshery", "meshery.io"],
  prs: [
    { repo: "meshery/meshery", date: "Aug 2025", title: "Fix database summary table scrolling behavior", url: "https://github.com/meshery/meshery/pull/15633" },
    { repo: "meshery/meshery", date: "Jul 2025", title: "Stabilize go-testing CI workflow by fixing flaky tests", url: "https://github.com/meshery/meshery/pull/15429" },
    { repo: "meshery/meshery", date: "Mar 2025", title: "Disable design card actions based on user privileges", url: "https://github.com/meshery/meshery/pull/13950" },
    { repo: "meshery/meshery", date: "Feb 2025", title: "Show only registrants with valid children in the registrant tab", url: "https://github.com/meshery/meshery/pull/13755" },
    { repo: "meshery/meshery", date: "Feb 2025", title: "Convert node capacity values to human-readable units", url: "https://github.com/meshery/meshery/pull/13486" },
    { repo: "meshery/meshery", date: "Jan 2025", title: "Add connection ID to the connections page", url: "https://github.com/meshery/meshery/pull/13391" },
    { repo: "meshery/meshery", date: "Sep 2024", title: "Add Skipped indicator to e2e test result comments", url: "https://github.com/meshery/meshery/pull/12014" },
    { repo: "meshery/meshery", date: "Sep 2024", title: "Add Playwright tests for the performance page", url: "https://github.com/meshery/meshery/pull/11811" },
    { repo: "meshery/meshery.io", date: "Nov 2023", title: "Add vertical slider showcasing Meshery extensions", url: "https://github.com/meshery/meshery.io/pull/1500" },
    { repo: "meshery/meshery", date: "Jun 2023", title: "Add Catalog page to the docs", url: "https://github.com/meshery/meshery/pull/7732" },
  ],
};

export const skills: { group: string; items: string[] }[] = [
  { group: "AI & agents", items: ["MCP servers", "AI agents & orchestration", "LLM integration (Gemini)", "vLLM inference observability", "Prompt engineering", "AI-assisted development (Claude Code, Cursor, Copilot)", "AI-driven automation (Zapier, n8n)"] },
  { group: "Languages", items: ["JavaScript / TypeScript", "Go", "SQL", "Python (basic)"] },
  { group: "Backend & data", items: ["REST API design", "Node.js", "Microservices", "Event-driven systems (Kafka)", "PostgreSQL", "MongoDB", "ClickHouse"] },
  { group: "Frontend", items: ["React", "Next.js", "Vue.js"] },
  { group: "Cloud & DevOps", items: ["AWS", "Huawei Cloud", "Docker", "Kubernetes", "GitHub Actions", "CI/CD"] },
  { group: "Quality & delivery", items: ["Cypress", "Playwright", "CI pipeline automation", "Code review", "Agile / Scrum"] },
];

export const education = [
  { degree: "Master of Computer Applications", school: "Amity University, Mumbai", start: "2023", end: "2025" },
  { degree: "Bachelor of Computer Applications", school: "Amity University, Mumbai", start: "2020", end: "2023" },
];
