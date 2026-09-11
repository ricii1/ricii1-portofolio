export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  index: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Study Buddy",
    image: "/img/studybuddy.jpeg",
    description:
      "Website created for Insysfest Competition 2024, a platform for students to study together, keep notes, and track tasks. Responsible for front-end and back-end development.",
    tags: ["Next.js", "TypeScript", "Prisma"],
    links: [
      {
        label: "Open Source Code",
        href: "https://github.com/ricii1/deployInsysfest",
      },
    ],
  },
  {
    index: "02",
    title: "Student Performance Dataset",
    image: "/img/SPD.png",
    description:
      "Analysis of student performance data from a Kaggle dataset to find the factors affecting performance and visualize the results, including a GPA prediction model.",
    tags: ["Python", "Pandas", "Matplotlib"],
    links: [
      {
        label: "Open Source Code",
        href: "https://github.com/ricii1/Student-Performance-Dataset",
      },
    ],
  },
  {
    index: "03",
    title: "Signature Verification Pipeline",
    image: "/img/signature-verification.png",
    description:
      "AI-based signature verification pipeline using YOLO for object detection and a Siamese CNN for similarity learning and verification.",
    tags: ["Python", "YOLO", "OpenCV"],
    links: [{ label: "Open Post", href: "https://lnkd.in/dQYNEmyj" }],
  },
];
