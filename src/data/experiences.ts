export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Founder & Creative Director",
    company: "Clothing Brand",
    period: "2023 - 2024",
    description:
      "Launched and managed a successful clothing brand, handling everything from design to marketing strategy. Developed e-commerce solutions and digital marketing campaigns.",
    highlights: [
      "E-commerce Development",
      "Brand Strategy",
      "Digital Marketing",
      "Product Design",
    ],
  },
  {
    title: "Software Engineer",
    company: "Medical Device Company",
    period: "2020 - 2023",
    description:
      "Developed embedded software for critical medical devices using C++ and Python. Ensured compliance with strict regulatory standards and implemented real-time data processing systems.",
    highlights: [
      "Embedded C++",
      "Python",
      "Medical Device Software",
      "Real-time Systems",
      "FDA Compliance",
    ],
  },
];
