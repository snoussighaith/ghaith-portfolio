import portrait from "../assets/image.png";

export const personal = {
  name: "Ghaith Snoussi",
  title: "Data Science Master's Student | AI Engineer | ML & Full-Stack Developer",
  subtitle: "Currently pursuing Master's degree in Data Science at ISIMA Mahdia (2025-2027)",
  website: "https://ghaithsnoussi.dev",
  email: "ghaithsnoussi2@gmail.com",
  phone: "+216 51 714 728",
  location: "Mahdia, Tunisia",
  linkedin: "https://linkedin.com/in/ghaith-snoussi",
  github: "https://github.com/ghaith-snoussi",
  resumes: {
    english: "/CV_Ghaith_Snoussi_EN.pdf",
    french: "/CV_Ghaith_Snoussi_FR.pdf",
  },
  photoSrc: portrait,
  photoAlt: "Portrait of Ghaith Snoussi",
  summary:
    "Enthusiastic Data Science Master's student with a strong passion for programming, artificial intelligence, and crafting elegant algorithms. My journey through IoT and embedded systems has built a solid technological foundation and fueled my deep interest in intelligent systems, data analysis, and AI-driven innovation.",
};

export const skills = [
  {
    category: "AI & Data Science",
    items: ["Python", "Machine Learning", "NLP", "RAG", "spaCy", "Sentence Transformers", "scikit-learn", "Pandas"],
  },
  {
    category: "Backend Engineering",
    items: ["FastAPI", "REST APIs", "PostgreSQL", "SQLAlchemy", "Node.js", "Express.js", "MongoDB"],
  },
  {
    category: "Full-Stack",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts", "Docker"],
  },
  {
    category: "Data & DevOps",
    items: ["Apache Spark", "Apache Kafka", "Docker Compose", "Git", "Linux", "SEO"],
  },
];

export const experience = [
  {
    role: "Master's in Data Science",
    company: "ISIMA Mahdia",
    period: "2025 – 2027",
    location: "Mahdia, Tunisia",
    description:
      "Currently pursuing a Master's degree in Data Science, deepening expertise in machine learning, NLP, data engineering, and AI-powered applications.",
    tags: ["Data Science", "Machine Learning", "NLP", "AI"],
  },
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
    slug: "ai-recruitment-assistant",
    number: "01",
    title: "AI-Powered Recruitment Assistant",
    category: "AI & Full-Stack Development",
    shortDescription:
      "A professional SaaS-style recruitment platform that turns CV analysis and candidate matching into a fast, explainable workflow.",
    description:
      "An intelligent recruitment platform designed to automate CV analysis, extract relevant candidate information, and identify the most suitable candidates for job opportunities.",
    highlights: ["71% matching accuracy", "NLP-powered candidate analysis", "Semantic ranking dashboard"],
    tags: ["Python", "spaCy", "FastAPI", "Next.js", "PostgreSQL", "Docker"],
    github: "https://github.com/snoussighaith/AI-Recrutement-Assistant",
    color: "from-emerald-500 to-cyan-600",
    accent: "#10b981",
    result: "71%",
    resultLabel: "Matching accuracy",
    context:
      "Recruitment teams need to evaluate many resumes consistently while keeping human judgment at the center of the hiring process.",
    problem:
      "Manual CV screening is time-consuming, difficult to scale, and can make it harder to compare candidates against a common set of job requirements.",
    objectives: [
      "Automate structured information extraction from resumes.",
      "Compare candidate profiles with job descriptions semantically.",
      "Present ranked candidates and matching scores in an accessible dashboard.",
      "Provide a maintainable full-stack architecture with separated API, data, and frontend layers.",
    ],
    features: [
      "Automated CV parsing and information extraction.",
      "NLP-based candidate analysis using spaCy.",
      "Semantic matching between CVs and job descriptions.",
      "Sentence Transformers embeddings.",
      "Cosine similarity-based candidate ranking.",
      "Recruitment analytics dashboard.",
    ],
    architecture: [
      { label: "Frontend", detail: "Next.js & TypeScript" },
      { label: "API", detail: "FastAPI REST services" },
      { label: "AI", detail: "spaCy & Sentence Transformers" },
      { label: "Data", detail: "PostgreSQL" },
      { label: "Delivery", detail: "Docker Compose" },
    ],
    implementation:
      "The system separates document ingestion, NLP processing, semantic matching, persistence, and presentation into maintainable application layers. FastAPI exposes the recruitment workflow to a Next.js and TypeScript interface, while PostgreSQL stores application data. Docker Compose standardizes local deployment across services.",
    challenges: [
      {
        challenge: "Transforming unstructured resumes into comparable profile data.",
        solution: "Applied PyMuPDF document extraction and spaCy NLP processing to identify and structure relevant candidate information.",
      },
      {
        challenge: "Capturing meaning beyond keyword overlap.",
        solution: "Used Sentence Transformers embeddings with cosine similarity to rank candidate relevance against job descriptions.",
      },
      {
        challenge: "Keeping technical AI output understandable for recruiters.",
        solution: "Exposed ranked results and matching scores through a focused recruitment dashboard.",
      },
    ],
    results: [
      "Achieved 71% matching accuracy using semantic matching techniques.",
      "Created a reusable end-to-end AI recruitment workflow.",
      "Combined NLP, vector similarity, APIs, database design, and modern frontend engineering.",
    ],
    visual: "recruitment",
  },
  {
    slug: "climat-energie-tunisie",
    number: "02",
    title: "Institutional Website — Climat Énergie Tunisie",
    category: "Freelance / Web Development",
    shortDescription:
      "A modern institutional web presence built to improve brand clarity, accessibility, performance, and organic discovery.",
    description:
      "Designed and developed a modern, responsive institutional website for Climat Énergie Tunisie, focusing on user experience, accessibility, performance, responsive design and search engine optimization.",
    highlights: [
      "+35% user engagement",
      "-40% page load time",
      "+50% organic traffic",
    ],
    github: "https://github.com/snoussighaith/stClimat-Energie",
    tags: ["Web Dev", "SEO", "Responsive Design", "Performance"],
    color: "from-emerald-500 to-cyan-600",
    accent: "#0ea5e9",
    result: "+35%",
    resultLabel: "User engagement",
    context:
      "Climat Énergie Tunisie needed an institutional website that communicates its activity clearly and provides a dependable experience across devices.",
    problem:
      "A modern institutional presence required improved navigation, responsive layouts, search discoverability, and faster loading without losing a clear visual identity.",
    objectives: [
      "Design a complete institutional information architecture.",
      "Improve usability and accessibility across screen sizes.",
      "Optimize page delivery and core web assets.",
      "Strengthen organic visibility through practical SEO improvements.",
    ],
    features: [
      "Complete institutional website design.",
      "Modern and responsive UI/UX.",
      "Improved navigation and information architecture.",
      "Responsive layouts for desktop, tablet and mobile.",
      "SEO optimization.",
      "Performance optimization.",
    ],
    architecture: [
      { label: "Experience", detail: "Responsive UI/UX" },
      { label: "Structure", detail: "Institutional information architecture" },
      { label: "Discovery", detail: "Technical SEO" },
      { label: "Performance", detail: "Asset and delivery optimization" },
    ],
    implementation:
      "The project combined visual identity, content hierarchy, responsive layouts, navigation design, SEO, and performance-oriented implementation. The result was structured as a professional institutional experience for clear business communication and accessibility.",
    challenges: [
      {
        challenge: "Balancing a modern visual identity with institutional clarity.",
        solution: "Used a clear layout system, restrained visual hierarchy, and structured content sections to keep information readable.",
      },
      {
        challenge: "Delivering a consistent experience across devices.",
        solution: "Designed responsive layouts and navigation for desktop, tablet, and mobile breakpoints.",
      },
      {
        challenge: "Improving reach and delivery speed.",
        solution: "Applied SEO and performance improvements to strengthen organic discovery and reduce page load time.",
      },
    ],
    results: [
      "+35% user engagement.",
      "-40% page load time.",
      "+50% organic traffic within three months.",
    ],
    visual: "institutional",
  },
  {
    slug: "rag-document-platform",
    number: "03",
    title: "RAG Platform for Document Collections",
    category: "NLP & Retrieval-Augmented Generation",
    shortDescription:
      "An end-to-end RAG platform combining multilingual retrieval, hybrid search, fusion, reranking, and reproducible deployment.",
    description:
      "A RAG platform for processing and querying document collections, designed to compare hybrid retrieval strategies and evaluate answer support through measurable retrieval metrics.",
    highlights: [
      "100% Recall@5",
      "96% MRR@10 with reranking",
      "42-question evaluation set",
    ],
    tags: ["Python", "Sentence Transformers", "FAISS", "ChromaDB", "BM25", "Ollama", "Docker"],
    github: "https://github.com/snoussighaith/RAG-Platform-for-Processing-and-Querying-Document-Collections",
    color: "from-violet-500 to-cyan-500",
    accent: "#8b5cf6",
    result: "100%",
    resultLabel: "Recall@5",
    context:
      "Document-heavy workflows require a retrieval system that can find relevant passages before generating useful answers.",
    problem:
      "A single retrieval strategy can miss relevant documents across languages or when meaning differs from exact keywords.",
    objectives: [
      "Build an end-to-end document ingestion and querying pipeline.",
      "Compare lexical and semantic retrieval approaches.",
      "Combine retrieval signals through RRF fusion and reranking.",
      "Evaluate the system with reproducible metrics and deployment.",
    ],
    features: [
      "Document ingestion and multiple chunking strategies.",
      "Multilingual Sentence Transformers embeddings.",
      "BM25 lexical search.",
      "FAISS and ChromaDB vector search.",
      "RRF fusion for hybrid retrieval.",
      "Cross-encoder reranking.",
      "Docker Compose deployment with Ollama.",
    ],
    architecture: [
      { label: "Ingestion", detail: "Document processing and chunking" },
      { label: "Lexical", detail: "BM25 search" },
      { label: "Vector", detail: "FAISS and ChromaDB" },
      { label: "Fusion", detail: "RRF and reranking" },
      { label: "Runtime", detail: "Ollama and Docker Compose" },
    ],
    implementation:
      "The platform implements document ingestion and multiple chunking strategies, multilingual embeddings, BM25 lexical search, vector search, reciprocal rank fusion, and cross-encoder reranking. Docker Compose and Ollama provide a reproducible execution environment.",
    challenges: [
      {
        challenge: "No single retrieval method captures every relevant document.",
        solution: "Combined BM25 lexical search with semantic vector retrieval and fused ranking signals using RRF.",
      },
      {
        challenge: "Retrieval quality can be difficult to compare consistently.",
        solution: "Evaluated 42 questions and measured Recall@5 and MRR@10 before and after reranking.",
      },
      {
        challenge: "Deploying an RAG system should remain reproducible.",
        solution: "Containerized the workflow with Docker Compose and Ollama.",
      },
    ],
    results: [
      "Reached 100% Recall@5.",
      "Reached 96% MRR@10 with reranking.",
      "Built and evaluated the pipeline across 42 questions.",
    ],
    visual: "rag",
  },
  {
    slug: "ai-smartfactory",
    number: "04",
    title: "AI SmartFactory",
    category: "Machine Learning & Predictive Maintenance",
    shortDescription:
      "A predictive maintenance dashboard that applies preprocessing, PCA, clustering, and classification to industrial sensor data.",
    description:
      "An AI SmartFactory project for predictive maintenance, using the AI4I 2020 sensor dataset to explore preprocessing, dimensionality reduction, clustering, and machine-learning classification.",
    highlights: [
      "PCA dimensionality reduction",
      "K-Means clustering",
      "Interactive Streamlit dashboard",
    ],
    tags: ["Python", "Machine Learning", "Streamlit", "PCA", "K-Means", "Classification"],
    github: "https://github.com/snoussighaith/Ai-SmartFactory",
    color: "from-orange-500 to-amber-400",
    accent: "#f97316",
    result: "PCA",
    resultLabel: "Dimensionality reduction",
    context:
      "Industrial equipment generates sensor data that can help maintenance teams identify patterns associated with machine failures.",
    problem:
      "Raw predictive-maintenance datasets contain multiple correlated variables and require preprocessing, exploration, and interpretable models before operational insights emerge.",
    objectives: [
      "Prepare and analyze AI4I 2020 sensor data.",
      "Reduce dimensionality with PCA.",
      "Explore equipment patterns using K-Means clustering.",
      "Present predictive-maintenance insights in a Streamlit dashboard.",
    ],
    features: [
      "Sensor data preprocessing.",
      "Exploratory data visualization.",
      "PCA dimensionality reduction.",
      "K-Means pattern clustering.",
      "Machine-learning classification.",
      "Interactive Streamlit dashboard.",
    ],
    architecture: [
      { label: "Data", detail: "AI4I 2020 sensor dataset" },
      { label: "Prepare", detail: "Cleaning and preprocessing" },
      { label: "Reduce", detail: "Principal Component Analysis" },
      { label: "Cluster", detail: "K-Means analysis" },
      { label: "Visualize", detail: "Streamlit dashboard" },
    ],
    implementation:
      "The project applies preprocessing and exploratory analysis to industrial sensor data, PCA for dimensionality reduction, K-Means for pattern discovery, and classification models for predictive maintenance. Streamlit provides an interactive dashboard for exploring the workflow.",
    challenges: [
      {
        challenge: "Industrial sensor variables can be numerous and correlated.",
        solution: "Used PCA to reduce dimensionality and expose a more compact representation of the data.",
      },
      {
        challenge: "Machine patterns are not always explicitly labeled by operating state.",
        solution: "Applied K-Means clustering to explore natural groups within the processed sensor data.",
      },
      {
        challenge: "Technical findings need to remain accessible.",
        solution: "Presented preprocessing, visualizations, and model exploration through a Streamlit interface.",
      },
    ],
    results: [
      "Built a predictive-maintenance analytics dashboard.",
      "Applied PCA and K-Means to AI4I 2020 sensor data.",
      "Combined preprocessing, clustering, and classification in one project.",
    ],
    visual: "smartfactory",
  },
  {
    slug: "potato-disease-classification",
    number: "05",
    title: "Potato Disease Classification",
    category: "Computer Vision & Deep Learning",
    shortDescription:
      "A TensorFlow-based image classification project for detecting potato leaf health and common blight diseases.",
    description:
      "A computer vision project based on the PlantVillage dataset that trains and evaluates a TensorFlow image classifier for potato leaf disease detection.",
    highlights: [
      "3 potato disease and health classes",
      "TensorFlow image classification",
      "FastAPI inference endpoint",
    ],
    tags: ["Python", "TensorFlow", "Keras", "Computer Vision", "FastAPI", "PlantVillage"],
    github: "https://github.com/snoussighaith/Potato-diseases",
    color: "from-green-500 to-lime-400",
    accent: "#22c55e",
    result: "3",
    resultLabel: "Disease and health classes",
    context:
      "Plant imagery can support early identification of potato diseases and help distinguish unhealthy leaves from healthy crops.",
    problem:
      "Visual symptoms can be difficult to classify consistently across images, lighting conditions, and disease stages.",
    objectives: [
      "Prepare and organize the PlantVillage potato image dataset.",
      "Train a TensorFlow and Keras image classification model.",
      "Evaluate classification across healthy and diseased potato leaves.",
      "Expose inference through a Python API.",
    ],
    features: [
      "PlantVillage image dataset processing.",
      "TensorFlow and Keras model training.",
      "Image preprocessing and batching.",
      "Classification for Early Blight, Late Blight, and healthy leaves.",
      "FastAPI inference integration.",
    ],
    architecture: [
      { label: "Dataset", detail: "PlantVillage potato images" },
      { label: "Preprocess", detail: "256 x 256 image batching" },
      { label: "Model", detail: "TensorFlow / Keras" },
      { label: "Classes", detail: "Early blight, late blight, healthy" },
      { label: "API", detail: "FastAPI inference" },
    ],
    implementation:
      "The project uses TensorFlow datasets and Keras for image classification training on 256 x 256 potato leaf images. The repository includes a training notebook, PlantVillage data, a FastAPI application, TensorFlow Serving-related code, and a project report.",
    challenges: [
      {
        challenge: "Images from different classes can contain subtle visual differences.",
        solution: "Used TensorFlow image batching and preprocessing to train a deep-learning classifier on the PlantVillage dataset.",
      },
      {
        challenge: "A model needs an accessible inference interface.",
        solution: "Added FastAPI files for serving predictions and included TensorFlow Serving integration code.",
      },
    ],
    results: [
      "Classifies three potato conditions: Early Blight, Late Blight, and healthy.",
      "Includes reproducible notebook-based model development.",
      "Provides an API-oriented inference structure.",
    ],
    visual: "potato",
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
