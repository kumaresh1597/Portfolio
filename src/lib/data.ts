export const siteConfig = {
  name: "Kumaresan M",
  title: "Backend Engineer · Node.js · AWS · Distributed Systems",
  subtitle: "Node.js · AWS · Distributed Systems · IoT",
  tagline: "Building production-grade backend systems — multi-tenant SaaS platforms, async cloud pipelines, AI/LLM integrations, and IoT edge services.",
  location: "Bangalore, India",
  openTo: "Open to Bangalore & Remote roles",
  email: "kumaresh.1597@gmail.com",
  phone: "+91 9442656148",
  github: "https://github.com/kumaresh1597",
  linkedin: "https://linkedin.com/in/kumaresanm1597",
  resumeUrl: "/resume.pdf",
};

export const specialisations = [
  {
    icon: "Server",
    title: "Backend Systems",
    description: "REST APIs, RBAC, async pipelines, and microservices using Node.js, Python, and FeathersJS in production.",
  },
  {
    icon: "Cloud",
    title: "Cloud & AWS",
    description: "Production AWS architectures — S3, SQS, Lambda, Secrets Manager. Event-driven, async-first design.",
  },
  {
    icon: "Layers",
    title: "Multi-tenant SaaS",
    description: "Designed HIPAA-aligned multi-tenant SaaS architecture — 3-tier data isolation, AWS Cognito multi-pool auth, PHI-safe data handling.",
  },
];

export const skillCategories = [
  { category: "Backend",             items: ["Node.js", "Python", "FastAPI", "Express.js", "FeathersJS", "Apollo GraphQL", "REST APIs", "RBAC", "WebSockets"] },
  { category: "Cloud & AWS",         items: ["S3", "SQS", "Lambda", "Secrets Manager", "AWS Cognito (multi-pool)", "Async Pipelines", "Event-driven Architecture"] },
  { category: "Multi-Tenant / HIPAA", items: ["Multi-Tenant Architecture", "PHI-Safe Data Handling", "SQLAlchemy (async)", "Alembic", "Control-Plane Design"] },
  { category: "Databases",           items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"] },
  { category: "Frontend",            items: ["React.js", "Next.js", "Redux Toolkit", "TypeScript", "Tailwind CSS", "Lexical"] },
  { category: "IoT & Edge",          items: ["Raspberry Pi", "pynetdicom", "FOTA / OTA", "Bluetooth", "Linux", "DICOM Imaging"] },
  { category: "Distributed",         items: ["Message Queues", "Inngest", "MongoDB Change Streams", "Microservices", "Retry Logic"] },
  { category: "Practices",           items: ["Structured Logging", "Swagger", "Agile / Scrum", "Git"] },
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Rugas Technologies Pvt. Ltd.",
    location: "Bangalore, KA",
    period: "Mar 2024 – Present",
    summary: "Building production-grade backend, cloud, and device-integrated systems across healthcare and e-commerce.",
    projects: [
      {
        name: "RADX.report",
        subtitle: "Multi-Tenant Radiology SaaS Platform",
        link: "https://radx.report/",
        stack: ["React 18", "TypeScript", "Feathers.js", "PostgreSQL", "AWS Lambda", "SQS", "S3", "Redis", "Gemini/Vertex AI", "Lexical", "Raspberry Pi"],
        bullets: [
          "Served as lead full-stack engineer and largest single contributor (1,300+ commits, ~130k lines added, 3,400 file changes) on a multi-tenant SaaS platform for radiology/ultrasound centres to create, manage, and export structured clinical reports.",
          "Built a custom Lexical-based clinical report editor from scratch — dynamic variable nodes, templates, shorthand-driven data entry; designed the async LLM pipeline (prompt builder, SQS → Lambda → Gemini/Vertex AI, response caching) and a conversational AI chatbot for report assistance.",
          "Architected async PDF export pipeline (S3 → SQS → Puppeteer Lambda, polling/status); implemented obstetric/gynaecology clinical calculators (PE/FGR risk, MAP), DICOM image retrieval, backend licensing and billing enforcement, and account-scoped multi-tenant data isolation.",
          "Built the DICOM SCP edge service (pynetdicom) on Raspberry Pi: receives ultrasound files via C-STORE protocol, runs multi-stage on-device pipeline (SR parsing, JPEG conversion, prioritized S3 upload, backend notification), FOTA with SHA256 verification — passed healthcare compliance audit, zero downtime since deployment.",
        ],
      },
      {
        name: "TachyonLeap",
        subtitle: "Multi-Tenant Elder Care SaaS Platform (HIPAA)",
        link: null,
        status: "In Progress",
        stack: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "AWS Cognito", "Redis", "Alembic"],
        bullets: [
          "One of several backend engineers on TachyonLeap, a multi-tenant HIPAA-compliant SaaS platform for elder-care monitoring headed for AWS Marketplace — with primary ownership of the tenancy and auth architecture decisions.",
          "Designed a 3-tier multi-tenant isolation model (shared / DB-isolated / fully-isolated) with a control-plane vs data-plane split; architected AWS Cognito multi-pool auth (one User Pool per org), multi-issuer JWT verification with per-pool JWKS caching in Redis, and PHI-safe phone hashing (HMAC-SHA256) — control-plane database holds zero patient-identifiable data.",
        ],
      },
      {
        name: "Casey Legal AI",
        subtitle: "Multi-Tenant B2B Legal AI Platform",
        link: null,
        status: "In Progress",
        stack: ["Node.js", "Apollo GraphQL", "Inngest", "MongoDB Change Streams", "Next.js 15", "FastAPI", "LangGraph"],
        bullets: [
          "Sole developer extending an existing multi-service Legal AI codebase (Node.js/Apollo GraphQL backend, Next.js 15 frontend, Python/FastAPI AI orchestration) for a B2B platform covering contract review and compliance research.",
          "Built end-to-end real-time AI document classification: document upload → Inngest async workflow (lightweight pdf-parse/mammoth extraction, bypassing Azure Document Intelligence to avoid rate-limit saturation on per-upload events) → MongoDB change-stream watcher → GraphQL subscription → live UI update with no polling. Added retry logic with optimistic UI rollback and a many-to-many evidence coverage map linking uploaded documents to compliance checklist items.",
        ],
      },
      {
        name: "KarmaTickets.ca",
        subtitle: "Canada-based E-commerce Ticketing Platform",
        link: null,
        stack: ["Node.js", "FeathersJS", "Next.js", "PostgreSQL", "MongoDB"],
        bullets: [
          "Owned production backend for a live ticketing platform — authentication, user management, and order processing pipelines.",
          "Designed multi-tier RBAC enforced at both route middleware and data-access layer, eliminating privilege escalation vectors across admin, organiser, and buyer roles.",
          "Resolved critical production bugs beyond assigned scope — recognised with Certificate of Appreciation for reliability and responsiveness.",
          "Introduced structured logging across backend and Linux device environments, reducing mean time to resolve production incidents from hours to minutes.",
        ],
        award: "Certificate of Appreciation",
      },
    ],
  },
];

export const projects = [
  {
    title: "RADX.report — Multi-Tenant Radiology SaaS Platform",
    type: "Production System",
    stack: ["React 18", "TypeScript", "Feathers.js", "PostgreSQL", "AWS Lambda", "SQS", "S3", "Gemini/Vertex AI", "Lexical", "Raspberry Pi", "pynetdicom"],
    link: "https://radx.report/",
    problem: "A network of radiology/ultrasound diagnostic centres needed a scalable SaaS platform to create, manage, and export structured clinical reports — with AI-assisted writing, async PDF generation, and automated DICOM image ingestion from medical devices.",
    built: "Full-stack multi-tenant SaaS — Lexical-based clinical report editor (variable nodes, templates, shorthands), async LLM pipeline (SQS → Lambda → Gemini/Vertex AI + AI chatbot), PDF export pipeline (S3 → SQS → Puppeteer Lambda), clinical calculators, licensing/billing enforcement, multi-tenant data isolation, and a DICOM SCP edge service on Raspberry Pi (C-STORE receive, SR parsing, prioritised S3 upload, FOTA with SHA256).",
    decision: "Chose async pipelines (SQS-driven) throughout — for LLM inference, PDF generation, and DICOM ingestion — to decouple processing from user-facing latency and ensure retry resilience at each stage.",
    outcome: "Running in production. Passed remote healthcare compliance audit. Largest single contributor — 1,300+ commits, ~130k lines added. Zero downtime since deployment.",
  },
  {
    title: "TachyonLeap",
    type: "In Progress",
    stack: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "AWS Cognito", "Redis", "Alembic"],
    link: null,
    problem: "Elder-care organisations ranging from small clinics to HIPAA-regulated US hospitals needed a SaaS platform with data isolation that matches their compliance tier — a one-size-fits-all model wasn't viable.",
    built: "Designed 3-tier multi-tenant isolation (shared / DB-isolated / fully-isolated) with a control-plane vs data-plane split. AWS Cognito multi-pool auth (one User Pool per org), multi-issuer JWT verification with Redis-cached JWKS, and PHI-safe phone hashing (HMAC-SHA256) so the control-plane database holds zero patient-identifiable data.",
    decision: "Chose per-org Cognito User Pools over a shared pool to ensure hard tenant isolation at the identity layer — shared pools require application-level tenant enforcement which is easier to misconfigure.",
    outcome: "Architecture designed and in active development. Targeting AWS Marketplace launch.",
  },
  {
    title: "Casey Legal AI",
    type: "In Progress",
    stack: ["Node.js", "Apollo GraphQL", "Inngest", "MongoDB Change Streams", "Next.js 15"],
    link: null,
    problem: "A B2B Legal AI platform needed real-time feedback to lawyers as they upload compliance evidence documents — waiting until batch processing was too slow for the workflow.",
    built: "End-to-end real-time classification pipeline as sole developer extending an existing codebase: upload → Inngest async workflow (pdf-parse/mammoth text extraction) → AI classification endpoint → MongoDB change-stream watcher → GraphQL subscription → live UI update, with no polling. Retry logic with optimistic UI rollback and a many-to-many evidence coverage map.",
    decision: "Used lightweight text extraction (pdf-parse/mammoth) instead of the existing Azure Document Intelligence pipeline — Azure is rate-limited and cost-prohibitive on per-upload frequency; the lightweight extractor is fast enough for classification without OCR overhead.",
    outcome: "Feature live in staging. Classification results pushed to UI in real time with zero polling.",
  },
  {
    title: "Secure REST API with RBAC",
    type: "Production Feature",
    stack: ["Node.js", "FeathersJS", "PostgreSQL", "MongoDB"],
    link: null,
    problem: "A live Canada-based ticketing platform needed structured access control across multiple user types with no privilege escalation risk.",
    built: "Designed multi-tier RBAC from scratch: role definitions, permission middleware, and data-layer enforcement for admin, organiser, and buyer roles.",
    decision: "Enforced permissions at both route and data-access layer — route-only RBAC is bypassable via direct service calls; dual-layer is not.",
    outcome: "Live on KarmaTickets.ca. Reduced access-related bugs and improved audit trail across all business-critical workflows.",
  },
  {
    title: "MedCMS — Clinical Content Management",
    type: "Production System",
    stack: ["React", "Node.js", "PostgreSQL"],
    link: "https://medcms.emrx.in/",
    problem: "Healthcare workflows needed a stable, auditable CMS for structured clinical data management.",
    built: "Delivered a full-stack CMS focused on stability and feature completeness for regulated healthcare environments.",
    decision: "Prioritised reliability and auditability over feature velocity given the clinical data sensitivity.",
    outcome: "Live in production. Reduced post-release defects through proactive QA collaboration.",
  },
];

export const education = {
  degree: "B.Tech, Textile Technology",
  institution: "PSG College of Technology",
  location: "Coimbatore, TN",
  period: "Jul 2015 – May 2019",
  note: "Non-CS background. Self-directed transition into software engineering through production projects, DSA training in Java/Spring Boot, and hands-on AWS & IoT development.",
};

export const achievements = [
  {
    title: "Certificate of Appreciation",
    issuer: "Rugas Technologies / KarmaTickets.ca",
    description: "Recognised for excellent commitment, prompt availability in addressing production issues, and strong cross-team collaboration.",
  },
  {
    title: "Lead Contributor — RADX.report",
    issuer: "Rugas Technologies",
    description: "Largest single contributor on a production multi-tenant SaaS radiology platform — 1,300+ commits, ~130k lines of code added across frontend, backend, and Lambda microservices over 20 months.",
  },
];
