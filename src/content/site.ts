/**
 * All copy for the home page. Source of truth: content/plan.md.
 * Components read from here; editing copy must never require touching components.
 *
 * `null` means "Kasun still has to supply this": components render a clear
 * placeholder. Never invent facts to fill these in.
 */

export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  url: string;
  /** Path under /public. Placeholder until Kasun adds the photo. */
  photo: string;
  /** Route that redirects to the CV PDF in /public. */
  cv: string;
  github: string;
  linkedin: string;
};

export type Role = {
  role: string;
  company: string;
  dates: string;
  summary: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Short text for the round badge on the hover card (1–3 letters) until real logos exist. */
  badge: string;
  /** Preview-card description (hover line). */
  hoverLine: string;
  stack: string[];
  /** Display date, e.g. "Nov 2025". */
  date: string;
  /** Machine-readable date (first of the month) for sorting / metadata. */
  isoDate: string;
};

export type AlsoBuiltItem = {
  name: string;
  /** Stack or descriptive note. */
  note: string;
  date?: string;
};

export type BeyondCodeItem = {
  kind: "education" | "award";
  title: string;
  org?: string;
  /** null = to fill in. */
  date: string | null;
};

export type Site = {
  profile: Profile;
  metaDescription: string;
  intro: { greeting: string; body: string; cta: string };
  roles: Role[];
  about: { bio: string; stack: string[] };
  projects: Project[];
  alsoBuilt: AlsoBuiltItem[];
  beyondCode: BeyondCodeItem[];
  footer: {
    /** Optional "Available for…" line. null = not shown. */
    availability: string | null;
  };
};

export const site: Site = {
  profile: {
    name: "Kasun Rathnayaka",
    title: "Software Engineer, Creative Software",
    location: "Colombo, Sri Lanka",
    email: "k.rathnayaka365@gmail.com",
    url: "https://kasun.tech",
    photo: "/images/kasun.jpg",
    cv: "/cv",
    github: "https://github.com/kasun-m-rathnayaka",
    linkedin: "https://www.linkedin.com/in/rathnayaka/",
  },

  metaDescription:
    "Kasun Rathnayaka, software engineer at Creative Software building .NET, Blazor and AI products. Based in Colombo, Sri Lanka.",

  intro: {
    greeting: "Hey, I'm Kasun.",
    body: "I build .NET and AI features for enterprise products, and tinker with web, hardware and games on the side. Based in Colombo, Sri Lanka.",
    cta: "Say hello",
  },

  // Newest first. The first entry is the current-role card; the rest sit
  // behind "Previous roles".
  roles: [
    {
      role: "Software Engineer",
      company: "Creative Software, Colombo",
      dates: "Jan 2026 – Present",
      summary:
        "Building Accure products: dashboards, AI search and Copilot features in .NET and Blazor",
    },
    {
      role: "Intern Software Engineer",
      company: "Creative Software",
      dates: "Jun 2025 – Dec 2025",
      summary:
        "Built the Accure AI token consumption dashboard and researched agentic workflows",
    },
    {
      role: "Web Developer",
      company: "Moms Do Digital",
      dates: "Apr 2024 – Dec 2025",
      summary:
        "Built and optimised responsive client websites, including Ceylon Literary Festival, RoofVo and gastro-colombo",
    },
    {
      role: "Chair, Media & IT Bureau",
      company: "Career Skills Development Society, USJ",
      dates: "Mar 2024 – Mar 2025",
      summary: "Ran the society's brand presence and digital projects",
    },
    {
      role: "Junior Treasurer",
      company: "Student Association of IT, USJ",
      dates: "Mar 2024 – Mar 2025",
      summary: "Managed the association's finances",
    },
  ],

  about: {
    bio: "Studied business and IT at Sri Jayewardenepura, then fell for building software. Now I work on Accure products at Creative Software, shipping dashboards, AI search and copilot features in .NET and Blazor. On the side I freelance on websites, experiment with computer vision, and lately tinker with ESP32 boards. I care about fast, clear interfaces and AI that actually helps.",
    stack: [
      "C#",
      ".NET",
      "Blazor",
      "TypeScript",
      "Next.js",
      "Python",
      "FastAPI",
      "LangChain",
      "Azure",
      "Cosmos DB",
    ],
  },

  // Order matters (plan: "Selected projects").
  projects: [
    {
      slug: "accure-copilot",
      badge: "AC",
      title: "Accure Copilot",
      hoverLine:
        "An in-product AI assistant with model picker, prompt templates and code diffs, plus per-tenant, per-user and per-app AI token tracking",
      stack: ["Blazor", ".NET", "Azure OpenAI"],
      date: "Nov 2025",
      isoDate: "2025-11-01",
    },
    {
      slug: "time-portal-dashboards",
      badge: "TP",
      title: "Time Portal role dashboards",
      hoverLine: "Role-based dashboards for admins, managers and PMs",
      stack: ["Blazor", ".NET", "Cosmos DB"],
      date: "Jun 2026",
      isoDate: "2026-06-01",
    },
    {
      slug: "building-block-ai-search",
      badge: "BB",
      title: "Building Block AI search",
      hoverLine:
        "An SDK that makes Accure building blocks searchable with AI search",
      stack: [".NET", "Azure Functions", "Azure AI Search", "Azure Artifacts"],
      date: "Feb 2026",
      isoDate: "2026-02-01",
    },
    {
      slug: "fall-detection",
      badge: "FD",
      title: "Fall detection for elderly care",
      hoverLine: "Real-time CCTV pose tracking that flags falls and anomalies",
      stack: ["YOLO", "MediaPipe", "OpenCV", "FastAPI"],
      date: "Jul 2025",
      isoDate: "2025-07-01",
    },
    {
      slug: "awe-dashboard",
      badge: "AWE",
      title: "AWE Solution dashboard",
      hoverLine:
        "A web dashboard that replaced an Excel-based process with live charts and automation",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React Query",
        "MongoDB",
      ],
      date: "Dec 2024",
      isoDate: "2024-12-01",
    },
    {
      slug: "roofvo",
      badge: "RV",
      title: "RoofVo website",
      hoverLine: "A marketing site for a rooftop restaurant",
      stack: ["WordPress", "Elementor", "PHP", "JavaScript"],
      date: "Dec 2024",
      isoDate: "2024-12-01",
    },
  ],

  alsoBuilt: [
    {
      name: "EduTrack university management system",
      note: "Next.js, TypeScript, shadcn/ui, MongoDB",
      date: "Nov 2024",
    },
    {
      name: "Department of IT digital thorana",
      note: "Next.js, Framer Motion",
      date: "Jun 2024",
    },
    {
      name: "PhotoGenic social app",
      note: "MERN, JWT",
      date: "May 2024",
    },
    {
      name: "Client sites",
      note: "Ceylon Literary Festival, gastro-colombo, Vinal portfolio and more",
    },
    {
      name: "ESP32-S3 experiments",
      note: "Added as they ship",
    },
  ],

  // Newest first.
  beyondCode: [
    {
      kind: "education",
      title: "B.Sc. (Hons) Business Information Systems",
      org: "University of Sri Jayewardenepura",
      date: "Dec 2025",
    },
    {
      kind: "award",
      title: "Japura Extreme finalist",
      org: "IEEE Student Branch",
      date: "Dec 2024",
    },
    {
      kind: "award",
      title: "Kikstart Weekend 1st runner-up and Most Popular Business Idea",
      date: "May 2024",
    },
    {
      kind: "award",
      title: "National Kabaddi Championship 1st runner-up",
      date: "Apr 2024",
    },
    {
      kind: "award",
      title: "Inter-university Kabaddi Championship 2nd runner-up",
      date: "Aug 2023",
    },
  ],

  footer: {
    // TODO(kasun): optional "Available for…" line; null hides it
    availability: null,
  },
};

/** Cover image path for a project (1200×630, placeholders until real covers exist). */
export const coverSrc = (slug: string) => `/projects/${slug}/cover.png`;
