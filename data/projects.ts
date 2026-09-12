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
    links: [{ label: "Open Post", href: "https://lnkd.in/dQYNEmyj" }, {label: "Open Source Code", href: "https://github.com/cthleen/fp-pcv"}],
  },
  {
    index: "04",
    title: "BatikGAN",
    image: "/img/batikgan.png",
    description:
      "Generative Adversarial Network project synthesizing new Indonesian batik patterns from a 5330-image dataset. Compared Vanilla GAN, DCGAN, ProGAN, StyleGAN, and StyleGAN2-ADA, with StyleGAN2-ADA performing best (FID 121.99).",
    tags: ["Python", "PyTorch", "GAN", "StyleGAN2-ADA"],
    links: [
      {
        label: "Read Article",
        href: "https://medium.com/@kecivi0/batikgan-synthesizing-and-generating-unique-batik-patterns-using-generative-adversarial-networks-920fe2514c44",
      },
    ],
  },
  {
    index: "05",
    title: "IF-Rekom",
    image: "/img/ifrekom.png",
    description:
      "AI-based course recommendation system helping ITS Informatics students choose electives that match their interests and Final Project plans, avoiding misaligned course choices and wasted SKS.",
    tags: ["AI", "Recommendation System"],
    links: [
      { label: "View Pitch Deck", href: "/Pitching-RSBP.pdf" },
      { label: "Open Source Code", href: "https://github.com/cthleen/fp-rsbp" },
    ],
  },
];
