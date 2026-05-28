export const siteConfig = {
  name: "Kumaresan M",
  title: "Backend & Cloud Engineer",
  subtitle: "Node.js · AWS · Distributed Systems · IoT",
  tagline: "Building production-grade backend systems at the intersection of cloud, APIs, and edge devices.",
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
    icon: "Cpu",
    title: "IoT & Edge Devices",
    description: "Python edge services on Raspberry Pi — Bluetooth pairing, FOTA firmware updates, Linux device management.",
  },
];

export const skillCategories = [
  { category: "Backend",      items: ["Node.js", "Python", "Express.js", "FeathersJS", "REST APIs", "RBAC", "WebSockets"] },
  { category: "Cloud & AWS",  items: ["S3", "SQS", "Lambda", "Secrets Manager", "Async Pipelines", "Event-driven Arch"] },
  { category: "Databases",    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"] },
  { category: "Frontend",     items: ["React.js", "Next.js", "Redux Toolkit", "TypeScript", "Tailwind CSS"] },
  { category: "IoT & Edge",   items: ["Raspberry Pi", "Bluetooth", "FOTA / OTA", "Linux", "DICOM Imaging"] },
  { category: "Practices",    items: ["Microservices", "Structured Logging", "Swagger", "Agile / Scrum", "Git"] },
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
        subtitle: "Medical Ultrasound Reporting Platform",
        link: "https://radx.report/",
        stack: ["AWS S3", "SQS", "Lambda", "Python", "FeathersJS", "React", "DICOM"],
        bullets: [
          "Architected end-to-end async DICOM image ingestion pipeline: S3 upload → SQS event → Lambda processor → metadata storage. Chose SQS over direct Lambda for retry resilience and decoupled scaling.",
          "Built Python edge service on Raspberry Pi managing Bluetooth device pairing, secure cloud sync, structured logging, and FOTA firmware deployment — zero-touch remote updates across production medical devices.",
          "Integrated FeathersJS backend with React frontend for DICOM-based radiologist reporting workflows; secured credentials via AWS Secrets Manager.",
          "System passed remote compliance audit. Running in production with zero critical incidents since deployment.",
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
    title: "Async DICOM Imaging Pipeline",
    type: "Production System",
    stack: ["AWS S3", "SQS", "Lambda", "Python", "FeathersJS"],
    link: "https://radx.report/",
    problem: "A medical ultrasound platform needed scalable, automated ingestion of DICOM images — manual handling was not viable at production scale.",
    built: "Designed and deployed a fully async AWS pipeline: images upload to S3, trigger SQS events, Lambda functions process and store DICOM metadata.",
    decision: "Chose SQS over direct Lambda invocation for retry resilience, exactly-once delivery semantics, and decoupled scaling between ingestion and processing.",
    outcome: "Running in production. Passed remote healthcare compliance audit. Zero manual image handling since deployment.",
  },
  {
    title: "Raspberry Pi IoT Edge Service",
    type: "Production System",
    stack: ["Python", "Raspberry Pi", "Bluetooth", "Linux", "FOTA"],
    link: null,
    problem: "Medical devices in the field needed remote firmware management — updates required costly on-site engineer visits.",
    built: "Built a Python background daemon on Raspberry Pi: Bluetooth device pairing, secure REST cloud sync, structured logging, and FOTA firmware deployment.",
    decision: "Used FOTA to enable zero-touch remote updates, eliminating on-site intervention across all production devices.",
    outcome: "Deployed across production medical devices. Remote firmware management now fully automated.",
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
    title: "DSA in Java + Spring Boot",
    issuer: "Completion Certificate",
    description: "Hands-on training in data structures, algorithms, and backend specialisation with Spring and Spring Boot.",
  },
];
