export type ProjectId = "hr" | "readfam" | "posco";

export type Project = {
  id: ProjectId;
  num: string;
  name: string;
  type: string;
  cats: string[];
  role: string;
  team: string;
  tools: string;
  timeline: string;
  mockClass: "mock-hr" | "mock-readfam" | "mock-posco";
  short: string;
  context: string;
  problem: string;
  goal: string;
  challenge: string;
  hypothesis?: string;
  research: string[];
  users: { t: string; d: string }[];
  personas?: Array<{
    name: string;
    age: string;
    education: string;
    occupation: string;
    tech: string;
    status: string;
    goals: string[];
    pains: string[];
  }>;
  whatWhoWhyHow?: { what: string; who: string; why: string; how: string };
  taskFlows?: string[];
  userStories?: string[];
  styleGuide?: {
    typography: string;
    colors: Array<{ name: string; hex: string }>;
    icons?: string;
    notes?: string;
  };
  pain: string[];
  flow: string[];
  decisions: { p: string; d: string; w: string }[];
  reflect: { worked: string; learned: string; improve: string };
  images?: string[]; // public/cases/{id}/* — real screenshots to replace mock when available
  wireframeImage?: string; // single flow/wireframe for low-fi section
};

export const PROJECTS: Project[] = [
  {
    id: "hr",
    num: "01",
    name: "HR Management Software",
    type: "Web + Mobile Product Design",
    cats: ["web", "mobile", "enterprise", "ux", "ui"],
    role: "UI/UX Designer",
    team: "Team Lead, Product Manager, Developers",
    tools: "Figma, FigJam, Google Forms",
    timeline: "April 2025 – June 2025",
    mockClass: "mock-hr",
    short:
      "Redesigning core HR workflows — attendance, leave, payroll and approvals — so everyday tasks take fewer steps.",
    context:
      "ACE Data Systems' HR platform covers check-in/check-out, attendance, leave requests, employee profiles, manager approvals, overtime, payroll viewing and dashboard navigation for internal teams.",
    problem:
      "Frequent actions were buried behind unnecessary steps, feature discoverability was low, and the system rarely communicated clearly what had just happened after an action.",
    hypothesis:
      "Making check-in/check-out directly visible on the main dashboard — not hidden in menus — will reduce confusion and time delays.",
    goal: "Reduce the steps required for daily actions, surface the most-used features, and give people clear, immediate feedback from the system.",
    challenge:
      "Employees and managers used the same product for very different jobs — quick daily check-ins versus multi-step approval chains — so the interface had to flex between fast, low-friction actions and more considered review workflows without feeling like two different products.",
    research: [
      "Reviewed existing workflows with the product and dev team — mapped travel, announcement, leave and payroll flows",
      "Competitive analysis via demos, marketing videos and reviews: most HR systems are feature-rich but hard to navigate, check-in is often hidden in menus",
      "Short structured interviews with day-to-day users — positioned check-in on dashboard to reduce hunting",
    ],
    whatWhoWhyHow: {
      what: "A platform to manage HR tasks like attendance, leave and employee records.",
      who: "Employees and HR managers.",
      why: "To make HR activities easy and on time.",
      how: "With clear dashboards and visible check-in/out buttons.",
    },
    users: [
      {
        t: "Employees",
        d: "Check in/out daily, request leave, view payroll — want speed and confirmation.",
      },
      {
        t: "Managers",
        d: "Review and approve requests, track team attendance and overtime — want oversight without clutter.",
      },
    ],
    personas: [
      {
        name: "Lila",
        age: "26",
        education: "Bachelor’s in Business",
        occupation: "New full-time at international company",
        tech: "Mostly mobile, non-work tasks",
        status: "Lives alone, has boyfriend",
        goals: ["Quickly check in/out daily", "Reduce manual admin and save time"],
        pains: ["Too many steps for simple updates/approvals", "Can’t see pending requests or team attendance"],
      },
      {
        name: "Wut Hmone",
        age: "25",
        education: "Bachelor’s in HR Management",
        occupation: "HR Executive",
        tech: "Comfortable with HR software, Excel/Sheets",
        status: "Has boyfriend",
        goals: ["Approve leave and check attendance quickly", "Ensure payroll/benefits are correct on time"],
        pains: ["No clear pending/on-leave status", "Confusing forms → incorrect fills and delays"],
      },
    ],
    taskFlows: [
      "Employee Check-In / Check-Out (with location validation)",
      "Leave Request",
      "Employee Profile Update",
      "Manager Approval Flow (Leave/OT)",
      "Payroll Slip Viewing",
    ],
    styleGuide: {
      typography: "Noto Sans — humanist sans-serif for headings & body, balanced and legible",
      colors: [
        { name: "Soft White", hex: "#F9F9F7" },
        { name: "Vibrant Blue", hex: "#1E3A8A" },
        { name: "Warm Orange", hex: "#F97316" },
      ],
      icons: "Phosphor — modern, clear, consistent",
      notes: "Buttons: straightforward label, contrasting color, generous padding. Desktop + mobile variants.",
    },
    pain: [
      "Too many taps to complete a daily check-in",
      "Approval actions were hidden inside secondary menus",
      "No clear confirmation after submitting a request",
      "Dashboard mixed personal and team data with no hierarchy",
    ],
    flow: [
      "Log in",
      "Dashboard",
      "Select action",
      "Check-in / Leave / Approval",
      "Confirmation",
    ],
    decisions: [
      {
        p: "Check-in required multiple screens",
        d: "Moved check-in to a single persistent action on the dashboard",
        w: "It's the most frequent action — it deserved the shortest path.",
      },
      {
        p: "Approvals were easy to miss",
        d: "Added a dedicated approvals queue with clear counts",
        w: "Managers needed a single place to see what needs their attention.",
      },
      {
        p: "Silent state changes",
        d: "Introduced consistent confirmation states after every submission",
        w: "People need to trust the system did what they asked.",
      },
    ],
    reflect: {
      worked: "The simplified check-in flow was adopted quickly by the internal team.",
      learned:
        "Manager and employee needs diverge more than expected inside one product.",
      improve:
        "Payroll viewing could use its own dedicated information hierarchy.",
    },
    images: [
      "/cases/hr/hero.png",
      "/cases/hr/c1UCOeCsjnlw53UJ786Ss528978.png",
      "/cases/hr/phone-checkin.png",
    ],
  },
  {
    id: "readfam",
    num: "02",
    name: "Readfam",
    type: "Reading & Writing Mobile App",
    cats: ["mobile", "ux", "ui"],
    role: "UI/UX Designer",
    team: "Solo / Freelance project",
    tools: "Figma, FigJam, Google Forms, Pen & Paper",
    timeline: "8+ weeks (Discovery 2w + Design & Testing 6w)",
    mockClass: "mock-readfam",
    short:
      "A reading and writing app for readers, writers and aspiring creators — designed solo end to end.",
    context:
      "Readfam supports reading stories, writing stories, publishing chapters, saving drafts, following authors, personalised content, story discovery, book details, reading progress, offline-friendly reading and community interaction.",
    problem:
      "Readers and writers have different goals inside the same app — discovering stories versus drafting and publishing them — and the product needed to serve both without either feeling like an afterthought.",
    goal: "Design a mobile experience that feels equally considered for reading and writing, with smooth discovery and a low-friction path from draft to published chapter.",
    challenge:
      "Balancing a calm, immersive reading experience against a more functional writing and publishing workflow, inside a single consistent visual system. Added Myanmar context: low adoption of digital reading, low-end devices, onboarding for first-time users.",
    research: [
      "Interviews with 2 groups (savvy mobile users vs casual limited experience) on reading/writing habits, navigation, discovery, community",
      "Survey of 5 participants: savvy highlighted community/interactive, casual flagged engagement challenges",
      "Competitive (Myanmar): Shwe Mee Eain (read-only) vs Worldreader (consumption) — Readfam advantage is read+write + offline + community + Burmese/English tailored",
    ],
    whatWhoWhyHow: {
      what: "Simple community-driven platform for reading and writing.",
      who: "Students, young adults, aspiring writers in Myanmar.",
      why: "Few local options support both reading and writing.",
      how: "Intuitive IA, offline access, community features, personalized recommendations.",
    },
    users: [
      {
        t: "Readers",
        d: "Discover stories, track progress, follow favourite authors.",
      },
      {
        t: "Writers",
        d: "Draft chapters, publish on their own schedule, build an audience.",
      },
    ],
    personas: [
      {
        name: "Aung Kyaw",
        age: "19",
        education: "Pursuing B.C.Sc",
        occupation: "University student",
        tech: "Moderate — daily smartphone",
        status: "Single",
        goals: ["Track progress & organize favorites", "Read offline on commute/poor internet", "Discover Burmese + English stories"],
        pains: ["Existing apps read-only, no writing/interaction", "Hard to find Burmese local content", "Limited offline access"],
      },
      {
        name: "Thiri Hlaing",
        age: "25",
        education: "B.A. English Literature",
        occupation: "Junior office worker / part-time writer",
        tech: "Moderate — mobile & social",
        status: "Has boyfriend",
        goals: ["Get feedback and build following", "Track drafts and publish without barriers"],
        pains: ["No local read+write platform", "No writer community/engagement", "Complicated sign-up/publish flow"],
      },
    ],
    taskFlows: [
      "Reader: Discover → Book Details → Start Reading → Track Progress → Follow Author",
      "Writer: Open app → Create Story → Add details + cover → Write chapter → Save Draft / Publish",
    ],
    styleGuide: {
      typography: "Clean sans for body + warm serif for headings — onboarding uses welcoming illustrations",
      colors: [
        { name: "Primary Accent", hex: "#7657FF" },
        { name: "Secondary", hex: "#5BE7FF" },
        { name: "Soft Surface", hex: "#F8F7F2" },
      ],
      notes: "Homepage: Following (social quotes) + For You (personalized) tabs. Create/Edit Story mirrors layout for familiarity.",
    },
    pain: [
      "Discovery felt generic rather than personal",
      "Switching between reading and writing modes felt disjointed",
      "Drafts were easy to lose track of",
      "Offline reading was unreliable",
    ],
    flow: [
      "Discover",
      "Book details",
      "Start reading",
      "Track progress",
      "Follow author",
    ],
    decisions: [
      {
        p: "Discovery felt generic",
        d: "Introduced personalised shelves based on reading behaviour",
        w: "Helps readers feel the app understands their taste.",
      },
      {
        p: "Writing felt disconnected from reading",
        d: "Unified navigation with a clear mode switch instead of separate apps",
        w: "Keeps one coherent product for people who do both.",
      },
      {
        p: "Drafts got lost",
        d: "Added an always-visible drafts shelf with autosave status",
        w: "Writers need confidence their work is safe.",
      },
    ],
    reflect: {
      worked:
        "The personalised shelves made discovery feel noticeably more relevant in testing.",
      learned:
        "Writers and readers want very different pacing from the same interface.",
      improve: "Offline sync could be made more transparent to the user.",
    },
    images: [
      "/cases/readfam/hero.png",
      "/cases/readfam/bq7azE95E1HfEVf8XDJm1hMLiI.png",
      "/cases/readfam/Ea2ZmMD1oEx8aZ09vY1lHcnGKm8.png",
    ],
    wireframeImage: "/cases/readfam/FRXkjQeMO2nE1piCxFK86Yz7g.png",
  },
  {
    id: "posco",
    num: "03",
    name: "POSCO Internal Operations",
    type: "Enterprise Operations Dashboard",
    cats: ["web", "enterprise", "ux", "ui"],
    role: "UI/UX Designer",
    team: "Team Lead, Product Manager, Developers",
    tools: "Figma",
    timeline: "July 2025 – September 2025",
    mockClass: "mock-posco",
    short:
      "A data-dense operations dashboard consolidating observation status, HSE indicators and project summaries.",
    context:
      "A Korea-based internal web application consolidating observation status, observation charts, HSE lagging indicators, project status summaries and real-time operational monitoring.",
    problem:
      "Dense operational data was hard to scan quickly, navigation between related views took too long, and the system didn't clearly communicate current status at a glance.",
    goal: "Faster task completion, simpler navigation, clearer system feedback and easier interpretation of operational data.",
    challenge:
      "Presenting genuinely dense, technical data in a way that stays fast to scan under real operating conditions, without stripping out the detail specialists rely on.",
    research: [
      "Walkthroughs of the existing internal system with stakeholders",
      "Review of reporting requirements with the project team",
      "Competitive scan: many ops dashboards hide key HSE metrics behind deep menus",
    ],
    userStories: [
      "As an employee, I want to easily navigate and find features quickly, so I don’t waste time searching.",
      "As a manager, I want clear reports and summaries to understand data and decide easily.",
      "As a user, I want clear notifications/messages so I know what is required/updated.",
      "As an admin, I want to quickly update system content so users always see accurate information.",
    ],
    users: [
      {
        t: "Site operators",
        d: "Need fast, accurate status at a glance during active monitoring.",
      },
      {
        t: "Project managers",
        d: "Need consolidated summaries across sites and indicators.",
      },
    ],
    pain: [
      "Related information spread across too many separate views",
      "Charts lacked clear visual hierarchy",
      "Status indicators weren't consistent across sections",
      "Frequent tasks took too many steps to reach",
    ],
    flow: [
      "Login",
      "Overview dashboard",
      "Select indicator",
      "Detailed chart view",
      "Status summary",
    ],
    taskFlows: ["Employee submits request: Open app → Fill form → Receive confirmation (reduced steps)"],
    styleGuide: {
      typography: "Helvetica Neue — A–Z, a–z, 0–9 for dense dashboard legibility",
      colors: [
        { name: "Primary", hex: "#05507D" },
        { name: "Secondary", hex: "#2ABFBF" },
        { name: "Bg", hex: "#F7F7F7" },
        { name: "Text", hex: "#4C4C4C" },
      ],
      notes: "Palette shown as case artifact only — Aurora site tokens unchanged. Final dashboard: HSE indicators, incidents, observations via simple visuals.",
    },
    decisions: [
      {
        p: "Scattered related views",
        d: "Consolidated observation status, charts and indicators into one navigable dashboard",
        w: "Reduces the number of context switches during monitoring.",
      },
      {
        p: "Inconsistent status indicators",
        d: "Standardised a single status colour system across every panel",
        w: "Consistency lets people scan for problems instantly.",
      },
      {
        p: "Dense charts, unclear hierarchy",
        d: "Reworked chart typography and spacing to foreground the number that matters most",
        w: "Operational decisions depend on speed of interpretation.",
      },
    ],
    reflect: {
      worked:
        "The unified status system made problem-scanning noticeably faster in walkthroughs.",
      learned:
        "Enterprise dashboards benefit hugely from ruthless information hierarchy.",
      improve:
        "Could extend the standardised status system to reporting exports.",
    },
    images: [
      "/cases/posco/hero.png",
      "/cases/posco/NS3XnXE8HSPO9bflytBAmcBCy0.png",
    ],
    wireframeImage: "/cases/posco/zhbhte3jwsaLEIhZwSbM5YcBpu8.png",
  },
];

export const EXPERTISE = [
  {
    t: "Product Experience",
    items: [
      "Mobile App Design",
      "Web App Design",
      "Dashboard Design",
      "Responsive Products",
    ],
  },
  {
    t: "UX Thinking",
    items: [
      "User Research",
      "Competitive Analysis",
      "Personas",
      "User Flows",
      "Information Architecture",
      "Usability Testing",
    ],
  },
  {
    t: "Interface Craft",
    items: [
      "Visual Design",
      "Design Systems",
      "Components",
      "Prototyping",
      "UI Motion",
    ],
  },
  {
    t: "Collaboration",
    items: [
      "Developer Handoff",
      "Product Collaboration",
      "Iteration",
      "Design Documentation",
    ],
  },
] as const;

export const JOURNEY = [
  { n: "01", t: "Discover", m: ["Interviews", "Surveys", "Competitive analysis"] },
  { n: "02", t: "Define", m: ["Personas", "Problems", "Goals"] },
  {
    n: "03",
    t: "Structure",
    m: ["Information architecture", "Task flow", "User flow"],
  },
  { n: "04", t: "Explore", m: ["Sketching", "Wireframes", "Concepts"] },
  {
    n: "05",
    t: "Design",
    m: ["Visual UI", "Components", "Responsive states"],
  },
  { n: "06", t: "Test", m: ["Prototype", "Usability testing", "Feedback"] },
  {
    n: "07",
    t: "Iterate",
    m: ["Refinement", "Developer handoff", "Validation"],
  },
] as const;

export const PROCESS_FULL = [
  {
    n: "01",
    t: "Discover",
    purpose:
      "Understand the people, context and constraints before proposing any solution.",
    methods: [
      "Stakeholder interviews",
      "User interviews",
      "Contextual research",
      "Competitive analysis",
    ],
    outputs: ["Research notes", "Opportunity areas", "Key questions"],
    artifact: "Interview notes & thematic clusters",
  },
  {
    n: "02",
    t: "Define",
    purpose:
      "Turn research into a clear, shared understanding of the problem worth solving.",
    methods: ["Personas", "Problem statements", "Goal setting"],
    outputs: ["Personas", "Problem statement", "Success criteria"],
    artifact: "One-page problem framing",
  },
  {
    n: "03",
    t: "Structure",
    purpose: "Give the product a skeleton before it has a face.",
    methods: ["Information architecture", "Task flows", "User flows"],
    outputs: ["Sitemap", "Flow diagrams"],
    artifact: "User flow diagram",
  },
  {
    n: "04",
    t: "Explore",
    purpose:
      "Generate and compare directions quickly, before committing visually.",
    methods: ["Sketching", "Low-fidelity wireframes", "Concept variations"],
    outputs: ["Wireframes", "Concept options"],
    artifact: "Grayscale wireframe set",
  },
  {
    n: "05",
    t: "Design",
    purpose:
      "Bring the chosen direction to a considered, systemised visual form.",
    methods: [
      "Visual UI",
      "Design systems",
      "Components",
      "Responsive states",
    ],
    outputs: ["High-fidelity screens", "Component library"],
    artifact: "Component & style board",
  },
  {
    n: "06",
    t: "Prototype",
    purpose: "Make the idea feel real enough to react to.",
    methods: ["Interactive prototyping", "Micro-interactions", "Motion"],
    outputs: ["Clickable prototype"],
    artifact: "Prototype flow",
  },
  {
    n: "07",
    t: "Test",
    purpose:
      "Check assumptions against real people before they reach production.",
    methods: ["Usability testing", "Feedback sessions"],
    outputs: ["Findings", "Prioritised fixes"],
    artifact: "Usability findings summary",
  },
  {
    n: "08",
    t: "Iterate",
    purpose: "Refine, hand off, and keep improving after release.",
    methods: ["Refinement", "Developer handoff", "Documentation", "Validation"],
    outputs: ["Handoff specs", "Release notes"],
    artifact: "Developer handoff spec",
  },
] as const;

export const EXPERIENCE = [
  {
    co: "ACE Data Systems",
    role: "UI/UX Designer",
    dates: "Apr 2025 — Present",
    d: "Product design for internal HR software — check-in/out, leave, payroll and dashboards. Design-system thinking with Team Lead, PM and Developers; assigned based on prior HR domain experience.",
  },
  {
    co: "Freelance",
    role: "UI/UX Designer",
    dates: "Jan 2025 — Present",
    d: "Two mobile apps: mood tracker (emotion logging) and Readfam — Wattpad-like reading & writing with offline, community and Following/For You. Solo from research to Figma prototypes and usability testing, balancing user needs with feasibility.",
  },
  {
    co: "QHRM",
    role: "Jr. UI/UX Designer",
    dates: "Dec 2023 — Mar 2025",
    d: "HR software across mobile/web/dashboard — research, wireframes, mockups, prototypes, usability testing. Contributed to QHRM Connect 2024 materials; collaborated with Senior Designers, Developers, AGM (CRM) and Senior BA.",
  },
] as const;

export const TOOLS = [
  "Figma",
  "FigJam",
  "Framer",
  "Adobe Photoshop",
  "Maze",
  "InVision",
  "Notion",
  "HTML",
  "CSS",
] as const;

export const SKILLS = [
  "User Experience Design",
  "User Interface Design",
  "Product Design",
  "Mobile App Design",
  "Web App Design",
  "Dashboard Design",
  "UX Research",
  "User Interviews",
  "Competitive Analysis",
  "User Personas",
  "User Journeys",
  "Task Flows",
  "User Flows",
  "Information Architecture",
  "Wireframing",
  "Interactive Prototyping",
  "Usability Testing",
  "Design Systems",
  "UI Animation",
  "Responsive Design",
  "Developer Handoff",
] as const;

export const SOFT = [
  "Problem Solving",
  "Creativity",
  "Empathy",
  "Communication",
  "Collaboration",
  "Time Management",
] as const;

export const PRINCIPLES = [
  "Clarity over decoration",
  "Design for people, not screens",
  "Understand before designing",
  "Consistency creates confidence",
  "Details matter",
  "Design is collaborative",
] as const;

export function getProject(id: string) {
  return PROJECTS.find((p) => p.id === id);
}
export function getNextProject(id: string) {
  const idx = PROJECTS.findIndex((p) => p.id === id);
  return PROJECTS[(idx + 1) % PROJECTS.length];
}
