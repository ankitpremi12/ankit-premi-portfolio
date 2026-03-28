export const PERSONAL = {
  name: "Ankit Premi",
  title: "AI/ML Engineer",
  subtitle: "GenAI · MLOps · NLP Specialist",
  email: "ankitpremiji@gmail.com",
  phone: "+91 8368680573",
  linkedin: "https://linkedin.com/in/ankit-premi",
  leetcode: "https://leetcode.com/u/ankitpremiji/",
  github: "https://github.com/ankitpremiji",
  location: "Delhi, India",
  college: "Maharaja Agrasen Institute of Technology",
  cgpa: "8.5/10",
  graduation: "2026",
};

export const HERO_LINES = [
  "Code the Impossible",
  "Build the Future",
  "Engineer Intelligence",
];

export const SKILLS = [
  {
    category: "GenAI & LLMs",
    sword: "Wado Ichimonji",
    color: "#00ff88",
    items: ["GPT-4", "Claude", "LangChain", "LlamaIndex", "Hugging Face", "RAG", "Fine-tuning", "Prompt Engineering"],
    level: 95,
  },
  {
    category: "MLOps & Cloud",
    sword: "Sandai Kitetsu",
    color: "#e63946",
    items: ["AWS SageMaker", "Lambda", "S3", "Docker", "CI/CD", "MLflow", "W&B", "A/B Testing", "Azure ML", "GCP"],
    level: 88,
  },
  {
    category: "ML / DL / CV",
    sword: "Shusui",
    color: "#ffd700",
    items: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "CNNs", "YOLO", "OpenCV"],
    level: 90,
  },
  {
    category: "Full Stack",
    sword: "Enma",
    color: "#6a0572",
    items: ["Python", "FastAPI", "React", "Next.js", "Node.js", "TypeScript", "Three.js", "SQL", "JavaScript"],
    level: 82,
  },
  {
    category: "Data & Databases",
    sword: "Yoru",
    color: "#f4a261",
    items: ["Pandas", "NumPy", "Plotly", "Power BI", "Tableau", "MySQL", "PostgreSQL", "MongoDB", "Pinecone", "FAISS"],
    level: 85,
  },
];

export const EXPERIENCE = [
  {
    company: "VOIS (Vodafone Intelligent Solutions)",
    role: "Data Analyst Intern",
    period: "Sep 2025 – Oct 2025",
    type: "Remote",
    color: "#e63946",
    symbol: "◈",
    highlights: [
      "Automated enterprise reporting using RAG with LLMs, reducing manual work by 75%",
      "Architected API-driven data pipeline with real-time LLM summarization",
      "Achieved 92% stakeholder satisfaction via context-aware AI reports",
      "Launched Slack-integrated analytics system serving 50+ stakeholders daily",
      "Operationalized scalable inference workflows on AWS Lambda and S3",
    ],
    tech: ["Python", "GPT-4/Claude", "LangChain", "RAG", "REST APIs", "AWS Lambda", "S3"],
    metrics: { "Manual Work Reduced": "75%", "Stakeholder Satisfaction": "92%", "Daily Users": "50+" },
  },
  {
    company: "Centre for Development of Telematics (C-DOT)",
    role: "Research & Development Intern",
    period: "Jul 2025 – Aug 2025",
    type: "New Delhi",
    color: "#00ff88",
    symbol: "⬡",
    highlights: [
      "Developed phishing detection ML system benchmarked on 1,00,000+ live URLs",
      "Engineered 45+ features: regex patterns, TLD signals, URLNet embeddings, semantic vectors",
      "Optimized RF+XGBoost ensemble improving F1-score by 12%",
      "Productionized automated ML pipeline for preprocessing, training, evaluation",
    ],
    tech: ["Python", "XGBoost", "Scikit-learn", "Feature Engineering", "MLOps"],
    metrics: { Precision: "89%", Recall: "86%", "URLs Tested": "100K+", "F1 Improvement": "+12%" },
  },
];

export const PROJECTS = [
  {
    name: "Agentic AI Analytics Assistant",
    period: "Jan 2026 – Feb 2026",
    color: "#00ff88",
    category: "GenAI / Agentic AI",
    description: "Autonomous AI agent for BI with dynamic task planning and tool invocation",
    highlights: [
      "Designed autonomous AI agent for BI with dynamic task planning and tool invocation",
      "Integrated hybrid RAG (vector + structured retrieval) achieving 95% accuracy",
      "Implemented tool-calling framework for DB queries, statistical analysis, summaries",
      "Deployed scalable inference solution on AWS SageMaker",
    ],
    tech: ["LangChain", "RAG", "Vector DBs", "AWS SageMaker", "Python", "FastAPI"],
    metrics: { "RAG Accuracy": "95%", Platform: "SageMaker" },
    github: "https://github.com/ankitpremiji",
  },
  {
    name: "Predictive Customer Analytics Platform",
    period: "Aug – Nov 2025",
    color: "#e63946",
    category: "MLOps / Production ML",
    description: "Churn prediction model with real-time API and RAG-based explainability",
    highlights: [
      "Developed churn prediction model with 30+ behavioral features",
      "Integrated RAG-based explainability layer for natural language insights",
      "Implemented real-time API serving 1000+ req/day with <200ms latency",
      "Orchestrated production deployment using Docker, AWS Lambda, and S3",
    ],
    tech: ["XGBoost", "FastAPI", "Docker", "AWS Lambda", "S3", "RAG"],
    metrics: { Accuracy: "87%", "AUC-ROC": "0.82", "Req/Day": "1000+", Latency: "<200ms" },
    github: "https://github.com/ankitpremiji",
  },
  {
    name: "Disease Spread Simulation",
    period: "Mar – Jun 2025",
    color: "#ffd700",
    category: "Graph Algorithms / Simulation",
    description: "Epidemic simulation on 10K+ node networks with graph optimization",
    highlights: [
      "Simulated epidemics on 10K+ node networks with 82% alignment with real-world data",
      "Implemented BFS, DFS, Dijkstra with O(V+E) optimization",
      "Accelerated runtime by 70% using NumPy vectorization",
    ],
    tech: ["Python", "NumPy", "Graph Algorithms", "NetworkX", "Matplotlib"],
    metrics: { "Network Nodes": "10K+", "Real-World Alignment": "82%", "Speed Boost": "70%" },
    github: "https://github.com/ankitpremiji",
  },
  {
    name: "Phishing Detection System",
    period: "Jul – Aug 2025",
    color: "#6a0572",
    category: "Cybersecurity ML",
    description: "ML-powered phishing URL detection benchmarked on 100K+ live URLs",
    highlights: [
      "45+ engineered features including URLNet embeddings and semantic vectors",
      "RF+XGBoost ensemble with F1 improvement of 12%",
      "Benchmarked on 1,00,000+ live URLs in production",
    ],
    tech: ["XGBoost", "Scikit-learn", "Feature Engineering", "Python", "MLOps"],
    metrics: { Precision: "89%", Recall: "86%", "URLs": "100K+" },
    github: "https://github.com/ankitpremiji",
  },
];

export const ACHIEVEMENTS = [
  { label: "LeetCode Solved", value: 101, suffix: "+", color: "#ffd700" },
  { label: "Internships", value: 2, suffix: "", color: "#00ff88" },
  { label: "Live Projects", value: 4, suffix: "+", color: "#e63946" },
  { label: "Stakeholders Served", value: 50, suffix: "+", color: "#6a0572" },
  { label: "ML Precision", value: 89, suffix: "%", color: "#f4a261" },
  { label: "CGPA", value: 8.5, suffix: "/10", color: "#00ff88" },
];

export const CERTIFICATIONS = [
  { name: "GenAI Essentials", issuer: "Microsoft", color: "#0078d4" },
  { name: "Vertex AI Gemini", issuer: "Google Cloud", color: "#4285f4" },
  { name: "ML Specialization", issuer: "DeepLearning.AI", color: "#00a0d2" },
  { name: "BigQuery Analytics", issuer: "Google", color: "#4285f4" },
  { name: "Python", issuer: "Google", color: "#4285f4" },
  { name: "Statistics for Data Science", issuer: "Stanford", color: "#8c1515" },
];

export const NAV_ITEMS = [
  { label: "Grand Line", href: "#hero", icon: "⚓" },
  { label: "Skills", href: "#skills", icon: "⚔️" },
  { label: "Experience", href: "#experience", icon: "📜" },
  { label: "Projects", href: "#projects", icon: "🔧" },
  { label: "Analytics", href: "#analytics", icon: "🗺️" },
  { label: "Achievements", href: "#achievements", icon: "🎯" },
  { label: "Contact", href: "#contact", icon: "🏴‍☠️" },
];
