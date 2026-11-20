# kasun.tech — content plan

Source of truth for all site copy. Exported from the "Portfolio Content Plan" doc on 2026-11-20.
"TBC" / "to fill in" = Kasun still has to supply it; show a placeholder, never invent it.

## Profile

- Name: Kasun Rathnayaka
- Title: Software Engineer, Creative Software
- Location: Colombo, Sri Lanka
- Email: k.rathnayaka365@gmail.com
- GitHub: https://github.com/kasun-m-rathnayaka
- LinkedIn: https://www.linkedin.com/in/rathnayaka/
- Domain: https://kasun.tech
- Photo: `public/images/kasun.jpg` (Kasun adds it during the build)
- CV: `public/Kasun_Rathnayaka_CV.pdf` (Kasun adds the updated PDF)

## Intro

**Hey, I'm Kasun.** I build .NET and AI features for enterprise products, and tinker with web, hardware and games on the side. Based in Colombo, Sri Lanka. [Say hello](mailto:k.rathnayaka365@gmail.com)

Meta description: "Kasun Rathnayaka, software engineer at Creative Software building .NET, Blazor and AI products. Based in Colombo, Sri Lanka."

## Work (newest first)

The first entry is the current-role card; the rest sit behind "Previous roles".

| Role | Company | Dates | One line |
| --- | --- | --- | --- |
| Software Engineer | Creative Software, Colombo | Jan 2026 – Present | Building Accure products: dashboards, AI search and Copilot features in .NET and Blazor |
| Intern Software Engineer | Creative Software | Jun 2025 – Dec 2025 | Built the Accure AI token consumption dashboard and researched agentic workflows |
| Web Developer | Moms Do Digital | Apr 2024 – Dec 2025 | Built and optimised responsive client websites, including Ceylon Literary Festival, RoofVo and gastro-colombo |
| Chair, Media & IT Bureau | Career Skills Development Society, USJ | Mar 2024 – Mar 2025 | Ran the society's brand presence and digital projects |
| Junior Treasurer | Student Association of IT, USJ | Mar 2024 – Mar 2025 | Managed the association's finances |

## What I do

Studied business and IT at Sri Jayewardenepura, then fell for building software. Now I work on Accure products at Creative Software, shipping dashboards, AI search and copilot features in .NET and Blazor. On the side I freelance on websites, experiment with computer vision, and lately tinker with ESP32 boards. I care about fast, clear interfaces and AI that actually helps.

Stack line: C# · .NET · Blazor · TypeScript · Next.js · Python · FastAPI · LangChain · Azure · Cosmos DB

## Selected projects

Order matters. "Hover line" is the preview-card description.

| # | Slug | Project | Hover line | Stack | Date |
| --- | --- | --- | --- | --- | --- |
| 1 | accure-copilot | Accure Copilot | An in-product AI assistant with model picker, prompt templates and code diffs, plus per-tenant, per-user and per-app AI token tracking | Blazor, .NET, Azure OpenAI | Nov 2025 |
| 2 | time-portal-dashboards | Time Portal role dashboards | Role-based dashboards for admins, managers and PMs | Blazor, .NET, Cosmos DB | Jun 2026 |
| 3 | building-block-ai-search | Building Block AI search | An SDK that makes Accure building blocks searchable with AI search | .NET, Azure Functions, Azure AI Search, Azure Artifacts | Feb 2026 |
| 4 | fall-detection | Fall detection for elderly care | Real-time CCTV pose tracking that flags falls and anomalies | YOLO, MediaPipe, OpenCV, FastAPI | Jul 2025 |
| 5 | awe-dashboard | AWE Solution dashboard | A web dashboard that replaced an Excel-based process with live charts and automation | Next.js, TypeScript, Tailwind CSS, React Query, MongoDB | Dec 2024 |
| 6 | roofvo | RoofVo website | A marketing site for a rooftop restaurant | WordPress, Elementor, PHP, JavaScript | Dec 2024 |

### 1. Accure Copilot

**Problem:** Accure users needed AI help inside the product, not in a separate chat tool, and the team needed to see who was using AI and how much.

**What I built:** A slide-out assistant with a model selector, prompt templates, a code diff viewer, message persistence and custom content modes. Alongside it, a token consumption dashboard tracking Accure Copilot and Accure AI usage per tenant, per user and per application, with daily trends. I also researched agentic workflows for client onboarding.

**Outcome:** To fill in (adoption, teams using it, decisions the usage data informed).

### 2. Role-based dashboards for the Time Portal

**Problem:** Admins, managers and project managers each needed a different view of time and leave data.

**What I built:** A set of role-based dashboards. Each user sees the ones that match their role and can switch from the home page. Admins get a team heatmap of hours logged per person each month. A member-by-day leave calendar shows submitted and approved leave, working days, weekends and public holidays. Project managers can filter by project and customer key, and "view all" opens grids that are already filtered.

**How:** A shared colour palette keeps the charts consistent. I removed repeated queries to keep the dashboards fast, and reviewed the code with a teammate before check-in.

### 3. Building Block AI search indexing

**Problem:** IDM building blocks couldn't be found with AI search, and every app would otherwise rebuild the same indexing logic.

**What I built:** The indexing flow covers single blocks, removal on delete, and automatic indexing when a block is created. I packaged it as a Building Block Search SDK on Azure Artifacts, backed by an Azure Function and shared DTOs so other apps can reuse it.

**How:** I integrated it into the customer portal and the building block list page behind a feature toggle for a safe rollout. When a teammate's tree simplification changed the block structure, I updated the SDK to match.

### 4. Real-time fall detection for elderly care

**Problem:** Falls among elderly people living alone often go unnoticed for too long.

**What I built:** A CCTV monitoring system that tracks human pose in real time with YOLO and MediaPipe, detects falls and unusual behaviour, and serves alerts through FastAPI.

**Outcome:** To fill in (accuracy or frames per second, demo video or GIF).

### 5. AWE Solution dashboard

**Problem:** AWE ran a core process in Excel, which was slow to update and hard to share.

**What I built:** A web dashboard that replaced the spreadsheet, with real-time charts and automated workflow steps, on Next.js, React Query and MongoDB behind a REST API.

**Outcome:** To fill in (hours saved per week, number of users).

### 6. RoofVo website

**Problem:** A rooftop restaurant needed a site that sells the experience and brings in bookings.

**What I built:** A marketing website on WordPress and Elementor, with custom PHP, JavaScript and CSS, built through Moms Do Digital.

**Outcome:** To fill in (traffic or booking changes, link to the live site).

## Also built

- EduTrack university management system (Next.js, TypeScript, shadcn/ui, MongoDB), Nov 2024
- Department of IT digital thorana (Next.js, Framer Motion), Jun 2024
- PhotoGenic social app (MERN, JWT), May 2024
- Client sites: Ceylon Literary Festival, gastro-colombo, Vinal portfolio and more
- ESP32-S3 experiments, added as they ship

## Beyond code (newest first)

- B.Sc. (Hons) Business Information Systems, University of Sri Jayewardenepura (graduation date TBC)
- Japura Extreme finalist, IEEE Student Branch, Dec 2024
- Kikstart Weekend 1st runner-up and Most Popular Business Idea, May 2024
- National Kabaddi Championship 1st runner-up, Apr 2024
- Inter-university Kabaddi Championship 2nd runner-up, Aug 2023

Not on the site on purpose: coursework, volunteer list, references, phone number (the CV covers them).

## Footer

Links: GitHub · LinkedIn · Email · CV. Script signature "kasun". Optional "Available for…" line (TBC).

## Still open

- Measurable outcomes for projects 1, 4, 5, 6
- Graduation date
- Photo and updated CV PDF
- Which GitHub repos (if any) to link from project pages
