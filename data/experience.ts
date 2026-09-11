export type Experience = {
  index: string;
  role: string;
  org: string;
  period: string;
  image: string;
  imagePosition?: "center" | "top" | "bottom";
  imageAspect?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    index: "01",
    role: "Head of Programmer",
    org: "ITS ABU Robocon",
    period: "Aug 2025 - Present",
    image: "/img/exp-robocon.jpg",
    bullets: [
      "Lead the programming division developing an autonomous and a semi-auto robot for KRAI and International ABU Robocon using ROS2, and operate the autonomous robot.",
      "2026: guided the team to 1st place & Best Design nationally, top 8 globally, and the Best Idea Award.",
    ],
  },
  {
    index: "02",
    role: "Backend Developer",
    org: "Student Competition & Event Platforms (Schematics, Futurest, Ini Lho ITS!)",
    period: "Mar 2024 - Dec 2025",
    image: "/img/exp-backend.png",
    imageAspect: "503/651",
    bullets: [
      "Built and maintained 4 registration/event platforms handling 15000+ concurrent users, with auth, file uploads, and verification workflows.",
      "Mentored backend staff on Go APIs, enforcing Clean Architecture for long-term maintainability.",
    ],
  },
  {
    index: "03",
    role: "Administrator Coordinator",
    org: "Algorithm and Programming Laboratory",
    period: "May 2025 - Present",
    image: "/img/exp-lab-admin.jpg",
    imageAspect: "2/3",
    bullets: [
      "Led communications with lecturers, coordinating laboratory activities and academic requirements.",
      "Served as Fundamental Programming Teaching Assistant Coordinator, managing communication between lecturers, assistants, and students.",
    ],
  },
  {
    index: "04",
    role: "AI Engineer",
    org: "BrainAI - PKM KC",
    period: "Aug 2025 - Nov 2025",
    image: "/img/exp-brainai.jpg",
    bullets: [
      "Engineered a diagnostic system using a fine-tuned Vision Large Language Model during a 3-month government-funded research program (PKM-KC).",
      "Reported progress through rigorous Monitoring & Evaluation (Monev) phases, optimizing the system based on reviewer feedback.",
      "Presented AI architectures and outcomes to evaluation committees, communicating technical concepts to non-technical stakeholders.",
    ],
  },
  {
    index: "05",
    role: "Teaching Assistant",
    org: "Fundamental Programming, Data Structures, Operating Systems",
    period: "Feb 2025 - Jul 2026",
    image: "/img/exp-teaching.jpg",
    bullets: [
      "Mentored 100+ students across three CS subjects: C/C++, linked lists, dynamic arrays, bash scripting, process management.",
      "Designed exercises and delivered live coding demonstrations for complex problem-solving.",
    ],
  },
];
