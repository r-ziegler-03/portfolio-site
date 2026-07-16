export type Project = {
  slug: string;
  name: string;
  stack: string[];
  period: string;
  summary: string;
  highlights: string[];
  /** Omit until a real, working link exists — never fabricate one. */
  repoUrl?: string;
  /** YouTube video ID, e.g. the "v=" param — not the full URL. */
  youtubeId?: string;
  screenshots?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "game-analytics-db",
    name: "Game Analytics Database",
    stack: ["PostgreSQL", "Python"],
    period: "2026",
    summary:
      "A relational analytics database for Overwatch-style match data, built around a deliberately planted behavioral hypothesis and the SQL to test it.",
    highlights: [
      "Designed a 7-table schema modeling multiplayer match and session data, including mid-match hero-switching and ability-level event tracking.",
      "Built a Python generator producing a 23.6M-row synthetic dataset (3,000 players, ~9,900 matches) with a known ragequit mechanic baked in as ground truth.",
      "Diagnosed a production-scale performance bottleneck (per-row inserts + FK constraint checks) via pg_stat_activity, cutting generation time from a multi-hour projection to under 4 minutes.",
      "Wrote analytical SQL — window functions, CTEs, self-joins — recovering a 2.6x ragequit correlation, cohort retention curves, and a corrected-for-confound churn analysis.",
    ],
    repoUrl: "https://github.com/r-ziegler-03/game-analytics-db",
    featured: true,
  },
  {
    slug: "agent-memory-cli",
    name: "Agent Memory CLI",
    stack: ["Python"],
    period: "2026",
    summary:
      "A minimal, file-based memory store for AI agents — markdown notes and keyword search, no vector database, no dependencies beyond the standard library.",
    highlights: [
      "Notes are plain markdown with lightweight frontmatter (title, tags, date) — retrieval is a readable scoring function, not a search engine.",
      "`prime` pulls back only the notes relevant to a task and prints them as one block, ready to paste into an LLM's context, instead of dumping an entire note collection into every prompt.",
      "Inspired by the same core idea as jaredrhod/ai-memory-vault (persistent, file-based AI memory) — built from scratch as an original implementation, credited in the README.",
    ],
    repoUrl: "https://github.com/r-ziegler-03/agent-memory-cli",
  },
  {
    slug: "wizard-king",
    name: "Wizard King",
    stack: ["C#", "Unity"],
    period: "Sep 2025 – May 2026",
    summary:
      "A Souls-like game shipped to Steam by a 4-person team over a 9-month production cycle — placed 3rd at the IEEE GameSig development competition.",
    highlights: [
      "Built custom 3D levels, animation systems, and combat mechanics as the team's level designer.",
      "Produced original art and audio assets end-to-end for a distinct visual and audio identity.",
      "Ran Agile sprints and coordinated development across the team using Git/GitHub and Jira.",
    ],
    youtubeId: "qtlCggLxMR0",
    // TODO(Ross): add screenshots to public/wizard-king/ and list the filenames here, e.g. ["/wizard-king/01.png"].
    screenshots: [],
    // TODO(Ross): add the Steam / itch.io link once you have one to share.
  },
  {
    slug: "fullstack-mysql-app",
    name: "Full-Stack Application Development",
    stack: ["Python", "MySQL", "Tkinter"],
    period: "Nov 2025 – Dec 2025",
    summary:
      "A full-stack application spanning schema design through UI, built to exercise real database fundamentals under concurrent use.",
    highlights: [
      "Designed the MySQL schema and built a Python/Tkinter frontend on top of it.",
      "Implemented indexes, views, and transactions to optimize queries and enforce ACID compliance.",
    ],
    repoUrl: "https://github.com/r-ziegler-03/game-rating-app",
  },
];

export const contact = {
  email: "rossziegler03@gmail.com",
  github: "https://github.com/r-ziegler-03",
  linkedin: "https://www.linkedin.com/in/ross-ziegler-260891281",
  resumeUrl: "/resume.pdf",
};
