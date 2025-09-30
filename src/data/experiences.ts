export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Founder & Solo Developer",
    company: "Anchor – Nonprofit Mobile App",
    period: "2025 – Present",
    description:
      "Built and launched a nonprofit accountability app helping young men overcome pornography addiction. Available free on the App Store, with daily AI-generated content, streak tracking, and anonymous community features.",
    highlights: [
      "React Native + Expo",
      "Firebase (Auth, Firestore, Cloud Functions)",
      "Push Notifications",
      "AI Content Generation",
      "End-to-End Product Design & Launch",
    ],
  },
  {
    title: "Founder & Co-owner",
    company: "RAYN – Clothing Brand",
    period: "2023 – 2025",
    description:
      "Founded and scaled a direct-to-consumer clothing brand that hit six figures in sales on launch day. Managed everything from product design and supply chain to e-commerce and digital marketing.",
    highlights: [
      "E-commerce Development",
      "Brand Strategy",
      "Digital Marketing",
      "Product Design",
      "International Logistics",
    ],
  },
  {
    title: "Software Engineer",
    company: "ZOLL Medical",
    period: "2019 – 2023",
    description:
      "Developed embedded software for life-saving medical devices using C++ and Python. Led feature design, implemented real-time data systems, and ensured compliance with FDA regulations.",
    highlights: [
      "Embedded C++",
      "Python",
      "Feature Architecture",
      "Real-time Systems",
      "FDA Compliance",
    ],
  },
];
