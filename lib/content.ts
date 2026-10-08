export const site = {
  name: "Shyam Mahato",
  role: "Senior Software Developer",
  tagline: "Full-Stack Developer · Technical Lead",
  location: "Panchkula, Haryana",
  email: "er.shyam413@gmail.com",
  phone: "+91 84270 45734",
  phoneHref: "tel:+918427045734",
  linkedin: "https://www.linkedin.com/in/shyam-mahato-2603311b5",
  github: "https://github.com/ershyam413",
  whatsapp: "https://wa.me/918427045734",
  studio: "https://www.dynoserve.com/",
  resumeHref:
    "/Shyam_Mahato_Senior_Software_Developer_Full_Stack_Resume_Final.pdf",
  resumeFileName: "Shyam-Mahato-Senior-Software-Developer-Full-Stack.pdf",
  availability: "Available for freelance, contract, and product teams",
  mailSubject: "Hello Shyam — software project",
  headline:
    "Senior Software Developer with 5+ years shipping production software — web apps, enterprise portals, dashboards, booking platforms, and business systems. Full-stack across UI, APIs, data, and delivery.",
  briefing:
    "I take software from brief to production: React / Next.js / TypeScript, Node.js, PostgreSQL, Prisma and REST APIs — plus Java, Python, Spring Boot, React Native, Flutter, Android and iOS when the product needs a broader stack. Auth, payments, admin, SEO, and CI/CD included. Shipped work spans News18 / CNBC TV18 / Storyboard18, Tawseel, Bharat Caravans, ExploreSathi, JobTracking, Secova, and telecom / hospitality products across US, UK, UAE, Sweden, and India.",
  summary:
    "Senior Software Developer and Full-Stack Developer with 5+ years building production web applications, enterprise portals, dashboards, booking platforms, and business systems. Hands-on in React, Next.js, TypeScript, Node.js, PostgreSQL, and REST APIs. Java, Python, Spring Boot, React Native, Flutter, Android and iOS through technical leadership and a multidisciplinary delivery team. Available for freelance and contract software projects end to end.",
} as const;

export const socials = [
  {
    id: "email",
    label: "Email",
    href: "mailto:er.shyam413@gmail.com?subject=Hello%20Shyam%20%E2%80%94%20software%20project",
    external: false,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/918427045734?text=Hi%20Shyam%2C%20I%20found%20your%20portfolio.",
    external: true,
  },
  {
    id: "phone",
    label: "Call",
    href: "tel:+918427045734",
    external: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shyam-mahato-2603311b5",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/ershyam413",
    external: true,
  },
] as const;

export const nav = [
  { href: "/#hire", label: "Hire" },
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#expertise", label: "Stack" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export const practices = [
  "Full-stack web apps",
  "SaaS · CRM · ERP",
  "Admin panels & dashboards",
  "Booking & e-commerce",
  "REST APIs & payments",
  "Java · Python · Spring Boot",
  "React Native · Flutter",
  "Android & iOS",
  "End-to-end product delivery",
] as const;

export const services = [
  {
    title: "Web apps & SaaS",
    body: "Production React / Next.js applications with TypeScript — authenticated product surfaces, not landing-page templates.",
  },
  {
    title: "Admin panels & dashboards",
    body: "Role-scoped portals: tables, KPIs, graphs, pie charts, and workflows operators can run without a spreadsheet.",
  },
  {
    title: "Booking, e-commerce & payments",
    body: "Funnels, inventories, and Razorpay with webhook verification — ExploreSathi and Bharat Caravans class of work.",
  },
  {
    title: "Enterprise portals",
    body: "Logistics, telecom, workforce, and health-tech systems: RBAC, live maps, invoicing, surveys, and CI that actually gates releases.",
  },
  {
    title: "APIs & data",
    body: "Node.js, Express, REST, PostgreSQL, Prisma, Supabase, MongoDB — schema, auth, and the contract the UI ships against.",
  },
  {
    title: "Public sites & technical SEO",
    body: "SSR/SSG, Core Web Vitals, semantic HTML, and metadata. Storyboard18 went 100K → 180K organic impressions; News18 Group 2M → 4M.",
  },
  {
    title: "Mobile — Android & iOS",
    body: "React Native and Flutter apps for both stores, plus native Android and iOS when the product needs them. One technical lead across web and mobile.",
  },
  {
    title: "Java, Python & Spring",
    body: "Enterprise backends and scripts: Java, Spring Boot, Python APIs and automation — shipped with me as lead plus the Dynoserve delivery team.",
  },
] as const;

export const metrics = [
  { value: "4M+", label: "Monthly search impressions" },
  { value: "10s → 3s", label: "Page load on Storyboard18" },
  { value: "+80%", label: "Organic growth, Storyboard18" },
  { value: "500+", label: "Employees on JobTracking" },
] as const;

export const skills = [
  {
    group: "Frontend",
    items: [
      "Next.js",
      "React.js",
      "Vite",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive UI",
    ],
  },
  {
    group: "Dashboards & design",
    items: [
      "Analytics dashboards",
      "Graphs & bar charts",
      "Pie / donut charts",
      "Data tables",
      "KPI cards",
      "Component & visual design",
    ],
  },
  {
    group: "Architecture",
    items: [
      "Microfrontends (Module Federation)",
      "SSR / SSG",
      "Microservices",
      "Component-driven design",
      "RBAC & route guarding",
    ],
  },
  {
    group: "Performance & SEO",
    items: [
      "Core Web Vitals",
      "Semantic HTML",
      "Structured metadata",
      "Lazy loading",
      "Image optimization",
      "Google Search Console",
    ],
  },
  {
    group: "Backend & data",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Java",
      "Spring Boot",
      "Python",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "MongoDB",
    ],
  },
  {
    group: "Mobile",
    items: [
      "React Native",
      "Flutter",
      "Android",
      "iOS",
      "Kotlin",
      "Swift",
    ],
  },
  {
    group: "Languages we ship",
    items: [
      "TypeScript",
      "JavaScript",
      "Java",
      "Python",
      "Kotlin",
      "Swift",
      "SQL",
      "HTML / CSS",
    ],
  },
  {
    group: "Delivery",
    items: [
      "GitHub Actions (CI/CD)",
      "Git",
      "Linux CLI",
      "Webpack",
      "npm",
    ],
  },
  {
    group: "Integrations",
    items: [
      "Live tracking maps",
      "Razorpay",
      "Google Ad Manager",
      "Third-party ad networks",
    ],
  },
  {
    group: "Product delivery",
    items: [
      "Client-facing technical discussions",
      "End-to-end ownership",
      "Technical leadership",
      "React Native / Flutter / Android / iOS",
      "Java · Python · Spring Boot delivery",
    ],
  },
] as const;

export const stackNote =
  "I personally ship React, Next.js, TypeScript, Node.js, and PostgreSQL in production. Java, Spring Boot, Python, React Native, Flutter, Android, and iOS ship with me as technical lead plus the Dynoserve team — so a freelance brief is not limited to one language.";

export const learning = {
  intro:
    "Hands-on production is React, Next.js, Node, and PostgreSQL. Java, Spring Boot, Python, and mobile (React Native, Flutter, Android, iOS) are stacks I take on as technical lead with Dynoserve — I am also deepening Java / Spring and applied AI myself.",
  tracks: [
    {
      title: "Backend — Java & Spring Boot",
      status: "In progress",
      why: "Many enterprise briefs still specify Spring. I already own Node/REST APIs in production; this track is so I can sit in those stacks without a translation layer.",
      items: [
        {
          name: "Core Java",
          detail:
            "OOP, collections, exception handling, generics, multithreading, JVM, and writing code that other Java engineers can review.",
        },
        {
          name: "Advanced Java",
          detail:
            "JDBC, servlets, JSP/JSTL foundations, JPA/Hibernate concepts, and how web apps sit on the JVM.",
        },
        {
          name: "Spring Boot",
          detail:
            "REST APIs, Spring MVC, Spring Data, validation, configuration, and the path to production services — the backend language stack companies hire for.",
        },
      ],
    },
    {
      title: "AI courses",
      status: "In progress",
      why: "Product teams now expect engineers who can use models in real UIs — not just talk about them. I am taking applied AI courses alongside the Java track.",
      items: [
        {
          name: "Generative AI",
          detail:
            "How LLMs work in practice, where they fail, and how to ship features around them instead of demos.",
        },
        {
          name: "Prompt engineering & RAG",
          detail:
            "Structured prompts, retrieval-augmented generation, and grounding answers in product data.",
        },
        {
          name: "Applied AI in products",
          detail:
            "Chat and assistant UX, evaluation, safety, and wiring AI into Next.js / portal workflows I already build.",
        },
      ],
    },
  ],
} as const;

export type Project = {
  slug: string;
  number: string;
  title: string;
  brand: string;
  oneLiner: string;
  sector: string;
  year: string;
  stack: string[];
  liveUrl?: string;
  liveLabel?: string;
  extraLinks?: { href: string; label: string }[];
  origin?: "Altruist" | "Independent";
  role: string;
  problem: string;
  approach: string[];
  outcomes: { value: string; label: string }[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "news18-cnbctv18",
    number: "01",
    title: "News18 / CNBC TV18 / Storyboard18",
    brand: "Network18",
    oneLiner:
      "High-traffic media platforms — SSR, SEO, ads, and a live election dashboard at national scale.",
    sector: "Media · SEO · Realtime",
    year: "2021 — Present",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux",
      "SSR / SSG",
      "Google Ad Manager",
    ],
    liveUrl: "https://www.news18.com",
    liveLabel: "news18.com",
    extraLinks: [
      { href: "https://www.cnbctv18.com", label: "cnbctv18.com" },
      { href: "https://www.storyboard18.com", label: "storyboard18.com" },
    ],
    role: "Frontend engineer — architecture, performance, SEO, and feature delivery across three properties.",
    problem:
      "Media properties were losing organic discovery and paying a 10-second load tax. Story pages needed to be crawlable, monetized with ads, and still hold Core Web Vitals. Election night required live constituency updates without full-page refreshes.",
    approach: [
      "Rebuilt Storyboard18 on Next.js with SSR/SSG so article HTML is available to crawlers on first response — not after a client hydrate.",
      "Applied semantic HTML, structured metadata, and Search Console-driven iteration. Organic impressions became a product metric, not an afterthought.",
      "Cut load from ~10s to ~3s with SSR/SSG, lazy loading, and image optimization, validated in Lighthouse.",
      "Integrated Google Ad Manager and third-party ad scripts across five properties with a hard budget: under 2% regression on Core Web Vitals.",
      "Shipped a News18 Election 2023 dashboard using polling and Redux so 30+ constituencies updated live without a reload — result views with graphs operators could read on air.",
      "Standardized Redux across three large Next.js apps, removing prop-drilling through 10+ component layers.",
    ],
    outcomes: [
      { value: "100K → 180K", label: "Storyboard18 organic impressions (+80%)" },
      { value: "2M → 4M", label: "News18 Group impressions (+100%)" },
      { value: "~10s → ~3s", label: "Storyboard18 page load" },
      { value: "<2%", label: "CWV impact from ads across 5 properties" },
    ],
    highlights: [
      "Delivered the complete Storyboard18 site — UI modules, dynamic story pages, listings — in a 3-month window with zero critical defects.",
      "Treated ads as a performance constraint, not a dump of third-party scripts.",
      "Left a shared state contract that other engineers could extend without re-threading props.",
    ],
  },
  {
    slug: "janakpurzone",
    number: "02",
    title: "JanakpurZone",
    brand: "tridevgurukul.com",
    oneLiner:
      "News and article publication platform for Nepal — complete public site and admin CMS on Next.js, Prisma, and Supabase.",
    sector: "Media · CMS · Full-stack",
    year: "Independent · Nepal",
    stack: [
      "Next.js",
      "Next.js backend",
      "Prisma",
      "Supabase",
      "Admin CMS",
      "SSR / SEO",
    ],
    liveUrl: "https://www.tridevgurukul.com/",
    liveLabel: "tridevgurukul.com",
    role: "Full-stack owner — public news frontend, editorial admin, schema, and APIs.",
    problem:
      "A Nepal-focused publisher needed a real news product, not a brochure: editors had to file stories in an admin, readers needed a fast multilingual site with sections, breaking news, galleries, and SEO-ready article pages.",
    approach: [
      "Built the public website and the complete admin on Next.js — frontend and backend in one stack — so editorial workflows and reader pages share one contract.",
      "Modelled articles, sections, authors, and media in Prisma, with Supabase as the data layer for publishing and content operations.",
      "Shipped a reader experience used in Nepal: breaking ticker, sectioned news (Politics, Technology, AI, Business, Finance, Economy), featured and trending modules, photo gallery, videos, regional Nepal/India desks, newsletter, and article pages.",
      "Supported English, Hindi, Nepali, and Maithili so the same CMS can serve Mithila and the wider region without a separate frontend.",
      "Designed both the public layout and the admin publishing UI — listings, story composition, and how an editor moves a draft to live.",
    ],
    outcomes: [
      { value: "Live", label: "Public news site in Nepal" },
      { value: "Admin + web", label: "CMS and reader product shipped together" },
      { value: "4 languages", label: "EN · हिन्दी · नेपाली · मैथिली" },
      { value: "Full-stack", label: "Next.js · Prisma · Supabase" },
    ],
    highlights: [
      "This is ownership of a news product end to end: schema, admin, and the public frontend readers actually use.",
      "Same class of problem as Network18 — story pages, sections, SEO — shipped as an independent CMS rather than a page in a larger org.",
    ],
  },
  {
    slug: "tawseel-logistics",
    number: "03",
    title: "Tawseel Logistics",
    brand: "portal.tawseel.ae",
    oneLiner:
      "Enterprise fleet portal for UAE operations — live GPS, RBAC, invoicing, and analytics.",
    sector: "Enterprise · Fleet · Maps",
    year: "Altruist",
    stack: ["Vite", "React", "TypeScript", "RBAC", "Live tracking maps"],
    liveUrl: "https://portal.tawseel.ae",
    liveLabel: "portal.tawseel.ae",
    role: "Frontend owner for the operations portal: vehicle and rider management, tracking, invoicing, and reports.",
    problem:
      "A logistics operator needed a single authenticated surface for fleet status, rider assignment, invoices, and analytics. SEO was irrelevant; reliability, role boundaries, and live location were the product.",
    approach: [
      "Built the complete frontend in Vite + React for UAE fleet operations, including vehicle/rider management, live GPS tracking, invoicing, and analytics dashboards.",
      "Designed dashboard views with graphs, pie charts, and KPI summaries so dispatch can read fleet status without exporting to a spreadsheet.",
      "Integrated live tracking maps so dispatch can see GPS routes and vehicle status in real time.",
      "Implemented role-based access so vehicle data, rider profiles, and reports are scoped to the right operators — not a single god-mode UI.",
      "Shipped the full frontend surface: fleet management, invoicing, and analytics, not a thin dashboard shell.",
    ],
    outcomes: [
      { value: "Full FE", label: "Portal owned end-to-end" },
      { value: "Live GPS", label: "Route and fleet visibility" },
      { value: "RBAC", label: "Scoped access to sensitive ops data" },
    ],
    highlights: [
      "Built for operators, not for a landing page. Every screen maps to a job: assign, track, invoice, audit.",
      "Security is a UX problem here — the wrong role seeing the wrong vehicle is a business incident.",
    ],
  },
  {
    slug: "bharat-caravans",
    number: "04",
    title: "Bharat Caravans",
    brand: "bharatcaravans.com",
    oneLiner:
      "Full-stack travel booking platform — 12+ pages, LCP cut ~70%, booking workflows, and a microfrontend admin.",
    sector: "Travel · Microfrontends",
    year: "Altruist",
    stack: [
      "Next.js",
      "React",
      "Module Federation",
      "RBAC",
      "Core Web Vitals",
    ],
    liveUrl: "https://bharatcaravans.com/",
    liveLabel: "bharatcaravans.com",
    extraLinks: [
      { href: "https://admin.bharatcaravans.com/", label: "admin.bharatcaravans.com" },
    ],
    role: "Full-stack delivery on the travel booking platform — 12+ user-facing pages, performance, booking workflows, and a microfrontend admin.",
    problem:
      "The booking product needed a fast, multi-page funnel. The admin product needed three teams to ship without blocking on a monolith release train. Unauthorized routes were a launch risk.",
    approach: [
      "Built the end-to-end booking workflow and 12+ pages in Next.js, then attacked Largest Contentful Paint — LCP improved by ~70%.",
      "Architected the Admin Panel as a microfrontend with Module Federation so three teams could deploy independently.",
      "Implemented role-based route guarding in React. Post-launch: zero unauthorized access incidents.",
    ],
    outcomes: [
      { value: "~70%", label: "LCP improvement on the booking funnel" },
      { value: "12+", label: "Pages shipped in the booking flow" },
      { value: "3 teams", label: "Independent admin deployments" },
      { value: "0", label: "Unauthorized access incidents after launch" },
    ],
    highlights: [
      "Module Federation was a team-topology decision: independent deploys, not a buzzword.",
      "Route guards were treated as a production invariant, not a nice-to-have.",
    ],
  },
  {
    slug: "exploresathi",
    number: "05",
    title: "ExploreSathi",
    brand: "exploresathi.com",
    oneLiner:
      "Solo full-stack trip planner — Next.js, Node, PostgreSQL/Prisma, Supabase realtime, Razorpay with webhook idempotency.",
    sector: "Full-stack · Payments",
    year: "Independent delivery",
    stack: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Razorpay",
    ],
    liveUrl: "https://exploresathi.com",
    liveLabel: "exploresathi.com",
    role: "Independent owner — product, schema, API, payments, and UI.",
    problem:
      "A trip-planning product needed a real booking path, not a brochure. That meant a relational model, a payment lifecycle that does not double-charge, and a realtime layer for trip state.",
    approach: [
      "Designed the PostgreSQL schema and delivered the stack with Next.js, Node.js, and Prisma.",
      "Used Supabase as the realtime data layer where live trip state mattered.",
      "Integrated Razorpay with webhook verification and idempotent order processing so retries cannot create duplicate paid orders.",
    ],
    outcomes: [
      { value: "Solo", label: "Full-stack ownership" },
      { value: "Idempotent", label: "Payment orders under webhook retry" },
      { value: "Realtime", label: "Trip state via Supabase" },
    ],
    highlights: [
      "Payments were designed for failure: verify the webhook, key the order, never trust the client as source of truth.",
      "Evidence I can drop below the frontend line when the product needs a schema and an API.",
    ],
  },
  {
    slug: "jobtracking",
    number: "06",
    title: "JobTracking Portal",
    brand: "jobtracking.altruistindia.com",
    oneLiner:
      "Workforce system for 500+ employees — 5-tier RBAC, live progress, and CI that stopped broken builds.",
    sector: "Internal tools · RBAC",
    year: "In-house · Altruist",
    stack: [
      "React.js",
      "Full-stack",
      "RBAC",
      "GitHub Actions",
      "CI/CD",
    ],
    liveUrl: "https://jobtracking.altruistindia.com",
    liveLabel: "jobtracking.altruistindia.com",
    role: "Full-stack engineer for an internal job-lifecycle product used company-wide.",
    problem:
      "Job progress was tracked manually. Different roles needed different dashboards. Broken builds were reaching people who just needed to assign a task.",
    approach: [
      "Replaced manual tracking with a portal covering assignment through completion for 500+ employees.",
      "Implemented a 5-tier RBAC model (Super Admin → Employee) with scoped dashboards and permissions — not a single boolean admin flag.",
      "Built task assignment, real-time progress monitoring, and role-scoped dashboards in React — including graphs and status breakdowns so managers can see workload at a glance.",
      "Configured GitHub Actions for automated lint and build checks, driving broken production builds to zero.",
    ],
    outcomes: [
      { value: "500+", label: "Employees on the system" },
      { value: "5-tier", label: "RBAC with scoped dashboards" },
      { value: "0", label: "Broken builds after CI gates" },
    ],
    highlights: [
      "Internal tools are judged on trust. Wrong permissions or a red build both destroy it.",
      "CI was part of the product: lint and build on every push, not a wiki page about 'best practices'.",
    ],
  },
];

export const shippedSites: Project[] = [
  {
    slug: "cmoaxis",
    number: "A1",
    title: "CMO Axis",
    brand: "cmoaxis.com",
    oneLiner:
      "Marketing Process Outsourcing company site — services, positioning, and a public face for an Altruist group brand.",
    sector: "Corporate · Altruist",
    year: "Altruist",
    origin: "Altruist",
    stack: ["Next.js / React", "Responsive UI", "Corporate web"],
    liveUrl: "https://www.cmoaxis.com/",
    liveLabel: "cmoaxis.com",
    role: "Frontend for the public CMO Axis website, built while at Altruist.",
    problem:
      "CMO Axis needed a clear public site for India’s first Marketing Process Outsourcing company — services (MarCom, MarTech, content, design, leads, digital, media) without feeling like a generic brochure.",
    approach: [
      "Shipped the marketing website at cmoaxis.com: homepage, service lines, and the story of MPO since 2008.",
      "Structured the frontend so service verticals (MarComAxis, MarTechAxis, ContentAxis, DesignAxis, LeadAxis, DigitalAxis, MediaAxis) are scannable for Fortune-500 and startup buyers.",
      "Aligned layout and visual system with a corporate brand that has to sit next to other Altruist group properties.",
    ],
    outcomes: [
      { value: "Live", label: "Public company site" },
      { value: "Altruist", label: "Group brand, company delivery" },
      { value: "MPO", label: "Marketing process outsourcing" },
    ],
    highlights: [
      "Company work: a group brand site, not a side project.",
      "Same frontend craft as product work — hierarchy, performance, and a story that sales can send.",
    ],
  },
  {
    slug: "glow-networks",
    number: "A2",
    title: "Glow Networks",
    brand: "glownetworks.com",
    oneLiner:
      "US telecom company site plus TRACE — the portal for tracking resources, allocation, costs, and efficiency.",
    sector: "Corporate · Telecom · Altruist",
    year: "Altruist",
    origin: "Altruist",
    stack: ["Frontend", "Corporate web", "Operational portal"],
    liveUrl: "https://www.glownetworks.com/",
    liveLabel: "glownetworks.com",
    extraLinks: [
      { href: "https://trace.glownetworks.com/", label: "trace.glownetworks.com" },
    ],
    role: "Frontend for Glow Networks’ public site and the TRACE operations portal, delivered through Altruist.",
    problem:
      "A US telecom firm needed a site that explained Network Design & Engineering, Field Deployment & Migration, and Network Operations & Optimization — plus an internal portal to track resources, allocation, costs, and efficiency.",
    approach: [
      "Built the public Glow Networks site: home, services, company, careers, blogs, and contact.",
      "Shipped TRACE (trace.glownetworks.com) as the ops portal for Tracking Resources, Allocation, Costs & Efficiency.",
      "Kept the visual system corporate and calm — telecom buyers do not want a startup landing page.",
    ],
    outcomes: [
      { value: "Live", label: "Company site + TRACE portal" },
      { value: "Altruist", label: "Client delivery from company" },
      { value: "3 lines", label: "Design · Deploy · Operate" },
    ],
    highlights: [
      "Company delivery for a US telecom brand, not a template swap.",
      "Frontend that has to carry certifications and service lines without looking noisy.",
    ],
  },
  {
    slug: "teligent",
    number: "A3",
    title: "Teligent Telecom",
    brand: "teligent.se",
    oneLiner:
      "Public site for Teligent Telecom — network engineering and infrastructure, Altruist group, Sweden HQ with UK and US operations.",
    sector: "Corporate · Telecom · Altruist",
    year: "Altruist",
    origin: "Altruist",
    stack: ["Frontend", "Corporate web", "Responsive UI"],
    liveUrl: "https://teligent.se/",
    liveLabel: "teligent.se",
    role: "Frontend for Teligent’s public website, delivered through Altruist.",
    problem:
      "Teligent needed a carrier-facing site that could explain plan/design, build, deploy, and operate — and sit next to the operational portal that runs network-tower surveys in the US, UK, and Sweden.",
    approach: [
      "Shipped teligent.se as the public face: solutions, P90/E platform story, Firebird engagement, and operator clients.",
      "Structured service lines (Plan & Design through Modernize & Evolve) so a network buyer can scan without a brochure PDF.",
      "Kept the visual system corporate and international — Sweden headquarters, UK and US presence, Altruist India Group.",
    ],
    outcomes: [
      { value: "Live", label: "Public telecom company site" },
      { value: "SE · UK · US", label: "Markets the brand has to hold" },
      { value: "Altruist", label: "Group delivery" },
    ],
    highlights: [
      "Company site for a Swedish telecom brand, not a landing-page template.",
      "Pairs with the tower-survey portal: website for buyers, portal for field operations.",
    ],
  },
  {
    slug: "beta-labs-telecom",
    number: "A4",
    title: "Beta Labs Telecom",
    brand: "telecom.thebetalabs.com",
    oneLiner:
      "Website and operations portal for network-tower surveys across the US, UK, and Sweden — sites, status, and field workflow in one surface.",
    sector: "Portal · Telecom · Surveys",
    year: "Altruist",
    origin: "Altruist",
    stack: ["React", "Operational portal", "Multi-region UI"],
    liveUrl: "https://telecom.thebetalabs.com/",
    liveLabel: "telecom.thebetalabs.com",
    role: "Frontend for the telecom website and the portal that manages network-tower surveys in the US, UK, and Sweden.",
    problem:
      "Tower surveys across three countries could not live in spreadsheets. Field and ops needed one portal to track sites, survey status, and regional work — next to a public telecom surface.",
    approach: [
      "Built the frontend for telecom.thebetalabs.com: the public site and the authenticated portal used to manage network-tower surveys.",
      "Designed flows so US, UK, and Sweden work can be scoped by country without three separate products.",
      "Shipped operational UI — listings, survey status, and site-level views — so dispatch and field teams share one source of truth.",
    ],
    outcomes: [
      { value: "US · UK · SE", label: "Tower surveys in three countries" },
      { value: "Site + portal", label: "Public web and ops in one delivery" },
      { value: "Live", label: "telecom.thebetalabs.com" },
    ],
    highlights: [
      "This is ops software: tower sites and survey state, not a marketing page with a map widget.",
      "Same class of problem as Tawseel — multi-region operational UI with a real job attached to every screen.",
    ],
  },
  {
    slug: "altruist-india",
    number: "A5",
    title: "The Altruist India",
    brand: "thealtruistindia.com",
    oneLiner:
      "Hospitality and living ecosystem site for the Altruist group — hotels, guest houses, travel, workforce stays.",
    sector: "Corporate · Altruist",
    year: "Altruist",
    origin: "Altruist",
    stack: ["Frontend", "Corporate web", "Responsive UI"],
    liveUrl: "https://thealtruistindia.com/",
    liveLabel: "thealtruistindia.com",
    role: "Frontend for The Altruist public site, built at Altruist.",
    problem:
      "The group needed one public surface for hotels, Oxfordcaps, guest houses, travel management, industrial worker stays, bachelor housing, and CSR — not six disconnected microsites.",
    approach: [
      "Shipped thealtruistindia.com as a unified hospitality/living story: hero metrics, business verticals, CSR, and leadership.",
      "Designed the frontend so 10K+ corporate clients / 100+ properties reads as proof, not decoration.",
      "Kept navigation and vertical cards clear enough for a guest, a corporate travel buyer, and an industrial facilities lead.",
    ],
    outcomes: [
      { value: "Live", label: "Group hospitality site" },
      { value: "Altruist", label: "Company delivery" },
      { value: "6 verticals", label: "Hotels to workforce stays" },
    ],
    highlights: [
      "Company brand site: the group’s public hospitality face.",
      "Frontend that has to hold several businesses in one information architecture.",
    ],
  },
  {
    slug: "altruist-hotels",
    number: "A6",
    title: "The Altruist Hotels",
    brand: "thealtruisthotels.com",
    oneLiner:
      "Hotel-chain booking site — properties across Mumbai, Bengaluru, Pune, Gurugram and other Indian cities, with stay search and loyalty.",
    sector: "Hospitality · Altruist",
    year: "Altruist",
    origin: "Altruist",
    stack: ["Frontend", "Booking UI", "Responsive web"],
    liveUrl: "https://thealtruisthotels.com/",
    liveLabel: "thealtruisthotels.com",
    role: "Frontend for The Altruist Hotels public site, built at Altruist.",
    problem:
      "The hotel chain needed a consumer booking surface — city, dates, rooms — not only a group hospitality brochure.",
    approach: [
      "Shipped thealtruisthotels.com: presence across Indian cities, stay search, why-stay, reviews, and loyalty.",
      "Designed the booking path so a business traveller can pick a city and dates without a call centre.",
      "Kept the visual system consistent with the Altruist hospitality brands.",
    ],
    outcomes: [
      { value: "Live", label: "Hotel booking site" },
      { value: "India", label: "Multi-city hotel chain" },
      { value: "Altruist", label: "Company delivery" },
    ],
    highlights: [
      "A booking product, not a brochure with a phone number.",
      "Same group as The Altruist India — this is the hotel-chain surface guests actually use.",
    ],
  },
  {
    slug: "altruist-world",
    number: "A7",
    title: "Altruist World",
    brand: "altruistworld.com",
    oneLiner:
      "Global group site — telecom, logistics, hospitality, BPO and AI businesses across 19 countries.",
    sector: "Corporate · Altruist",
    year: "Altruist",
    origin: "Altruist",
    stack: ["Frontend", "Corporate web", "Responsive UI"],
    liveUrl: "https://www.altruistworld.com/",
    liveLabel: "altruistworld.com",
    role: "Frontend for the Altruist World group site, built at Altruist.",
    problem:
      "The diversified group needed one global surface for verticals and subsidiaries — not a stack of disconnected brand pages.",
    approach: [
      "Shipped altruistworld.com as the group story: verticals, group companies, and 30+ locations across 19 countries.",
      "Structured the frontend so a buyer can go from ‘who we are’ to a subsidiary without a PDF.",
      "Kept the system corporate enough for telecom, logistics, hospitality, and BPO in one IA.",
    ],
    outcomes: [
      { value: "Live", label: "Global group site" },
      { value: "19 countries", label: "International footprint" },
      { value: "Altruist", label: "Company delivery" },
    ],
    highlights: [
      "The holding-company face: several industries, one information architecture.",
      "Company work at group scale, not a single-brand landing page.",
    ],
  },
  {
    slug: "secova",
    number: "A8",
    title: "Secova",
    brand: "secova.com",
    oneLiner:
      "US health-tech — public sites on secova.com and secovahealth.com, plus the benefits-admin portal at admin.secova.com.",
    sector: "Health-tech · Altruist",
    year: "Altruist",
    origin: "Altruist",
    stack: ["Frontend", "Corporate web", "Admin portal"],
    liveUrl: "https://secova.com/",
    liveLabel: "secova.com",
    extraLinks: [
      { href: "https://secovahealth.com/", label: "secovahealth.com" },
      { href: "https://admin.secova.com/", label: "admin.secova.com" },
    ],
    role: "Frontend for Secova’s public sites and the admin portal, delivered through Altruist.",
    problem:
      "A US benefits-admin company needed a public site for HR buyers, a healthcare staffing brand, and an authenticated admin portal — not only a marketing page.",
    approach: [
      "Shipped secova.com: benefits administration, Dependent Eligibility Verification Audit (DEVA), and enterprise proof (members, hours saved, efficiency).",
      "Shipped secovahealth.com as the healthcare and scientific staffing surface for the same Altruist group brand family.",
      "Built the frontend for admin.secova.com — the operations portal behind the benefits-admin product.",
    ],
    outcomes: [
      { value: "Live", label: "Site + admin portal" },
      { value: "BAS + DEVA", label: "Benefits admin on secova.com" },
      { value: "Staffing", label: "Healthcare recruiting on secovahealth.com" },
    ],
    highlights: [
      "US enterprise health-tech: public brands and the admin surface operators actually use.",
      "Same split as Bharat Caravans — consumer/company site plus a real admin portal.",
    ],
  },
  {
    slug: "dynoserve",
    number: "B1",
    title: "Dynoserve Infotech",
    brand: "dynoserve.com",
    oneLiner:
      "Independent studio site — web, app, backend, and AI teams. India HQ and Nepal branch. Built outside Altruist.",
    sector: "Studio · Independent",
    year: "Independent",
    origin: "Independent",
    stack: ["Next.js", "React", "TypeScript", "UI design"],
    liveUrl: "https://www.dynoserve.com/",
    liveLabel: "dynoserve.com",
    role: "Frontend and product UI for the Dynoserve studio — independent work outside Altruist.",
    problem:
      "The studio needed a site that sells scoped freelance, dedicated teams, and products (ExploreSathi, JanakpurZone, and others) without looking like a generic agency template.",
    approach: [
      "Designed and built dynoserve.com: services, selected work, products, process, stack, and contact — including the Nepal branch surface.",
      "Shipped interactive work cards (Explore Sathi, JZ Janakpur / JanakpurZone, ReferHive, white-label, AI calling, lead engine, Demomart) so visitors can scan delivery, not just read slogans.",
      "Wired the same Next.js / React / TypeScript language the studio actually ships for clients.",
    ],
    outcomes: [
      { value: "Independent", label: "Outside Altruist" },
      { value: "Studio", label: "India HQ · Nepal branch" },
      { value: "Live", label: "dynoserve.com" },
    ],
    highlights: [
      "This is independent work: a studio I help run and ship, not a ticket from a client roster.",
      "The site has to demonstrate the same frontend and design bar as the products it sells.",
    ],
  },
];

export const allWork = [...projects, ...shippedSites];

export const experience = {
  company: "Altruist Technologies Pvt. Ltd.",
  title: "Senior Software Developer",
  period: "Aug 2021 — Present",
  location: "Haryana, India",
  summary:
    "5+ years building production web applications, enterprise portals, dashboards, booking platforms, and business systems. Hands-on in React, Next.js, TypeScript, Node.js, PostgreSQL, and REST APIs — architecture, performance, SEO, authentication, payments, admin panels, and CI/CD. Client-facing technical discussions and end-to-end product delivery across media, logistics, telecom, travel, health-tech, and workforce products.",
  earlier: {
    title: "React Developer → Software Engineer → Senior Software Developer",
    note: "Promoted internally. Same company, expanding from UI delivery to architecture, full-stack ownership, and technical lead on product delivery.",
  },
};

export const education = [
  {
    school:
      "Swami Vivekanand Institute of Engineering & Technology, Ram Nagar, Banur",
    credential: "M.Tech, Computer Science & Engineering",
    detail: "CGPA 8.63 / 10",
    period: "August 2025",
  },
  {
    school:
      "Swami Vivekanand Institute of Engineering & Technology, Ram Nagar, Banur",
    credential: "B.Tech, Computer Science Engineering",
    detail: "CGPA 8.63 / 10",
    period: "2018 — 2022",
  },
  {
    school: "Bridgewater International College, Kathmandu, Nepal",
    credential: "Higher Secondary (10+2)",
    detail: "",
    period: "2017",
  },
] as const;

export function getProject(slug: string) {
  return allWork.find((project) => project.slug === slug);
}
