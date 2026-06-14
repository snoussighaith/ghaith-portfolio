import portrait from "../assets/image.png";

export const personal = {
  name: "Ghaith Snoussi",
  title: "Data Science & Full Stack Developer",
  subtitle: "Master's student in Data Science · IoT · AI · MERN Stack",
  email: "ghaithsnoussi2@gmail.com",
  phone: "+216 51 714 728",
  location: "Mahdia, Tunisia",
  linkedin: "https://linkedin.com/in/ghaith-snoussi",
  github: "https://github.com/ghaith-snoussi",
  photoSrc: portrait,
  photoAlt: "Portrait of Ghaith Snoussi",
  summary:
    "Enthusiastic Data Science Master's student with a strong passion for programming, artificial intelligence, and crafting elegant algorithms. My journey through IoT and embedded systems has built a solid technological foundation and fueled my deep interest in intelligent systems, data analysis, and AI-driven innovation.",
};

export const skills = [
  {
    category: "Data & AI",
    items: ["Machine Learning", "Apache Kafka", "Apache Spark", "Feature Engineering", "Data Visualization", "Real-time Pipelines", "Interactive Dashboards"],
  },
  {
    category: "Web & Mobile",
    items: ["MERN Stack", "React", "Node.js", "Next.js", "Flutter", "REST APIs", "Full Stack Development"],
  },
  {
    category: "IoT & Embedded",
    items: ["IoT Systems", "RFID Technology", "AI-based Surveillance", "Embedded Systems"],
  },
  {
    category: "Languages & Tools",
    items: ["Python", "JavaScript", "TypeScript", "C++", "MongoDB", "Figma", "Git"],
  },
];

export const experience = [
  {
    role: "Final Year Intern",
    company: "Tunbra",
    period: "02/2025 – 06/2025",
    location: "Mahdia Business Incubator",
    description:
      "Developed and deployed a dual IoT system including a smart access control system for Fablab machines using RFID and a real-time visual surveillance system with AI-based people detection. Designed and implemented a full-featured MERN web application for user management, machine usage tracking, space reservations, and admin dashboards.",
    tags: ["MERN", "IoT", "RFID", "AI", "Node.js", "React"],
  },
];

export const projects = [
  {
    title: "Institutional Website — Climat Énergie Tunisie",
    category: "Freelance",
    description:
      "Developed and launched a full institutional website for Climat Énergie Tunisie. Improved user engagement, performance, and organic SEO reach significantly.",
    highlights: [
      "35% improvement in user engagement across devices",
      "40% reduction in page load time",
      "50% increase in organic traffic within 3 months",
    ],
    tags: ["Web Dev", "SEO", "Responsive Design", "Performance"],
    color: "from-slate-700 to-slate-900",
  },
  {
    title: "Credit Risk Analysis — German Credit",
    category: "Data Analysis",
    description:
      "Analyzed the German credit risk dataset to identify key predictors of loan defaults. Built classification models with high accuracy using preprocessing and feature engineering.",
    highlights: [
      "85%+ accuracy in credit risk prediction",
      "15% model performance gain via feature engineering",
      "Actionable insights for data-driven lending decisions",
    ],
    tags: ["Machine Learning", "Python", "Classification", "Feature Engineering"],
    color: "from-stone-600 to-stone-800",
  },
  {
    title: "Real-Time Tweet Analysis",
    category: "Big Data",
    description:
      "Processed over 1 million tweets in real-time using Apache Kafka and Spark. Extracted sentiment trends and visualized data patterns through interactive dashboards.",
    highlights: [
      "1M+ tweets processed in real-time at 95% accuracy",
      "40% latency reduction with Kafka + Spark pipeline",
      "30% efficiency gain in social media monitoring",
    ],
    tags: ["Apache Kafka", "Apache Spark", "Big Data", "NLP", "Dashboards"],
    color: "from-zinc-600 to-zinc-800",
  },
  {
    title: "Mobile App — MegaTel",
    category: "Mobile Development",
    description:
      "Contributed to an Agile/Scrum project to develop a mobile application for MegaTel. Handled UI/UX design and Flutter development.",
    highlights: [
      "Built with Flutter for cross-platform support",
      "UI/UX designed in Figma",
      "Agile Scrum methodology",
    ],
    tags: ["Flutter", "Figma", "Mobile", "Scrum"],
    color: "from-neutral-600 to-neutral-800",
  },
];

export const education = [
  {
    degree: "Master 1 — Data Science",
    school: "Institut Supérieur d'Informatique de Mahdia (ISIMA)",
    period: "2025 – 2027",
  },
  {
    degree: "Bachelor's Degree — Computer Engineering",
    school: "Institut Supérieur d'Informatique de Mahdia (ISIMA)",
    period: "2022 – 2025",
  },
];

export const certificates = [
  {
    title: "Full Stack Web Development",
    link: "https://www.coursera.org/account/accomplishments/verify/429FP1G8GAI2",
    linkLabel: "Add certificate link",
  },
  {
    title: "Automated Machine Learning for Beginners (Google & Apple)",
    link: "https://www.udemy.com/certificate/UC-689ab120-1898-4bbb-b48b-5e990eecc79d/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
    linkLabel: "Add certificate link",
  },
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    link: "https://www.coursera.org/account/accomplishments/verify/MQCMBE6XJW25?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    linkLabel: "Add certificate link",
  },
  
  {
    title: "Data Structures and OOP with C++ — CS104, CS105",
    link: "https://www.udemy.com/certificate/UC-1ffb3644-e90e-4537-8dc6-3b92afaa45cc/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
    linkLabel: "Add certificate link",
  },
  {
    title: "JavaScript Fundamentals to Advanced: Full Stack Development",
    link: "https://www.udemy.com/certificate/UC-6bdd9283-bb75-401d-96ee-9f7ba20e1c37/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
    linkLabel: "Add certificate link",
  },
];

export const languages = ["English", "French", "Arabic"];
