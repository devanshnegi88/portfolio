import type {
  SiteMeta,
  NavLink,
  Hero,
  About,
  Stat,
  SkillCategory,
  Experience,
  Project,
  Certification,
  Education,
  Contact,
  Footer,
  PersonalInfo,
} from '../types';

export const personal: PersonalInfo = {
  name: 'Devansh Negi',
  email: 'devanshnegi88@gmail.com',
  github: 'https://github.com/devanshnegi88',
  githubUsername: 'devanshnegi88',
  linkedin: 'https://linkedin.com/in/devansh-negi005',
  location: 'Dehradun, India',
  resume: '/Devansh_Backend_v2.docx',
  profileImage: '/profile.jpeg',
};

export const siteMeta: SiteMeta = {
  title: 'Devansh Negi — Full Stack & Backend Engineer',
  description:
    'Full Stack & Backend Engineer specializing in scalable APIs, AI-powered applications, and cloud-native systems. Based in India.',
  url: 'https://devanshnegi.dev',
  author: 'Devansh Negi',
  keywords: [
    'Backend Engineer',
    'Full Stack Developer',
    'FastAPI',
    'Python',
    'RAG',
    'AI Engineer',
    'Node.js',
    'PostgreSQL',
    'Docker',
    'LangChain',
    'India',
  ],
  ogImage: '/profile.jpeg',
};

export const navLinks: NavLink[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export const hero: Hero = {
  greeting: '',
  name: 'Devansh Negi',
  title: 'Backend &',
  titleAccent: 'AI Engineer',
  tagline:
    'Building scalable backend systems, Agentic RAG applications, AI-powered products, and cloud-native APIs using Python, FastAPI, and modern LLM frameworks.',
  cta: [
    { label: 'View Projects', href: '#projects', variant: 'primary' },
    { label: 'Download Resume', href: '/Devansh_Backend_v2.docx', variant: 'secondary' },
    { label: 'GitHub', href: 'https://github.com/devanshnegi88', variant: 'ghost' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/devansh-negi005', variant: 'ghost' },
  ],
  availableForWork: false,
};

export const about: About = {
  bio: [
    'I\'m a backend-focused engineer who ships production systems — not demos. My work spans payment orchestration, AI-powered RAG pipelines, and multi-gateway financial platforms that handle real transactions.',
    'I care deeply about system design, performance engineering, and writing code that scales. When I\'m not building APIs, I\'m exploring LLM integration patterns, vector databases, and agentic workflows.',
  ],
  highlights: [
    { icon: 'MapPin', label: 'Location', value: 'Dehradun, India' },
    { icon: 'Briefcase', label: 'Focus', value: 'Backend & AI Systems' },
    { icon: 'Zap', label: 'Stack', value: 'Python · FastAPI · Node.js' },
    { icon: 'Globe', label: 'Deployments', value: 'Render · Vercel · Railway' },
  ],
};

export const stats: Stat[] = [
  {
    value: 5,
    suffix: '+',
    label: 'Production Systems',
    description: 'Built and deployed to live environments',
  },
  {
    value: 3,
    suffix: '+',
    label: 'Live Deployments',
    description: 'Publicly accessible, active projects',
  },
  {
    value: 35,
    suffix: '%',
    label: 'API Performance Gain',
    description: 'Query & response time improvement',
  },
  {
    value: 170,
    suffix: '+',
    label: 'Github Contributions',
    description: '',
  },
];

export const skills: SkillCategory[] = [
  {
    name: 'Backend',
    color: 'indigo',
    skills: ['Python', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'GraphQL', 'JWT/OAuth'],
  },
  {
    name: 'AI/ML',
    color: 'violet',
    skills: ['LLMs', 'Agentic RAG', 'LangChain', 'LangGraph', 'OpenAI', 'Gemini', 'Scikit-learn', 'TensorFlow'],
  },
  {
    name: 'Databases',
    color: 'cyan',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'FAISS', 'Vector DBs', 'Supabase'],
  },
  {
    name: 'Cloud & DevOps',
    color: 'emerald',
    skills: ['Docker', 'AWS', 'Linux', 'CI/CD', 'GitHub Actions', 'Vercel', 'Render'],
  },
  {
    name: 'Frontend',
    color: 'indigo',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
];

export const experience: Experience[] = [
  {
    role: 'Backend Developer Intern',
    company: 'Visiomatix Media Pvt. Ltd.',
    type: 'Internship',
    period: 'May 2026 – Jun 2026',
    location: 'Remote',
    current: false,
    achievements: [
      'Built and maintained 10+ production REST APIs serving live traffic',
      'Improved average API response time by 25% through query optimization and caching',
      'Implemented JWT authentication and OAuth2 authorization across the platform',
      'Optimized PostgreSQL database queries, reducing p99 latency by 30%',
      'Collaborated on API design reviews and wrote comprehensive endpoint documentation',
    ],
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'JWT', 'OAuth2', 'Docker'],
  },
  {
    role: 'Web Development Intern',
    company: 'Opto Electronics Factory (OEF)',
    type: 'Traineeship',
    period: 'Jun 2025 – Jul 2025',
    location: 'Dehradun, India',
    current: false,
    achievements: [
      'Built and shipped new application features within an Agile sprint cycle',
      'Optimized MySQL queries and reduced data-fetch overhead on key pages',
      'Resolved production-blocking bugs under deadline pressure',
      'Worked within a structured engineering team with code review processes',
    ],
    tech: ['Node.js', 'MySQL', 'HTML/CSS', 'JavaScript'],
  },
  {
    role: 'Full Stack & Backend Developer',
    company: 'Independent Projects',
    type: 'Self-Directed',
    period: '2023 – Present',
    location: 'Dehradun, India',
    current: false,
    achievements: [
      'Architected and shipped a multi-gateway Payment Orchestration Platform with circuit-breaker logic',
      'Built production RAG pipelines using LangChain, FAISS, and Gemini API — deployed on Render',
      'Developed a Golf Charity Platform with Stripe subscriptions, RBAC, and admin dashboards',
      'Created a Hybrid Disease Prediction System combining ML models with semantic vector search',
      'Managed full deployment lifecycle: containerisation, CI/CD, cloud hosting, monitoring',
    ],
    tech: ['FastAPI', 'LangChain', 'FAISS', 'React', 'Next.js', 'Supabase', 'Docker', 'Redis'],
  },
];

export const projects: Project[] = [
  {
    id: 'payment-orchestration',
    title: 'Payment Orchestration Platform',
    description:
      'Multi-gateway payment router with circuit-breaker logic, Redis caching, and real-time monitoring. Handles Stripe, Razorpay, PayU, and UPI routing with automatic failover.',
    longDescription:
      'A production-grade payment infrastructure layer that abstracts multiple payment providers behind a single API. Features intelligent routing based on gateway health scores, automatic failover when providers degrade, Redis-backed response caching, and a real-time monitoring dashboard. Built to handle concurrent transaction load with JWT-secured endpoints.',
    image: '/projects/payment.png',
    tech: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'JWT', 'Stripe', 'Razorpay'],
    highlights: [
      'Multi-gateway routing: Stripe, Razorpay, PayU, UPI',
      'Circuit-breaker pattern for automatic failover',
      'Redis caching layer for sub-50ms response times',
      'Real-time transaction monitoring dashboard',
      'JWT-secured API with role-based permissions',
    ],
    architecture: [
      'Client Request',
      'FastAPI Gateway',
      'Circuit Breaker',
      'Redis Cache',
      'PostgreSQL',
      'Payment Providers',
    ],
    links: {
      github: 'https://github.com/devanshnegi88',
      live: undefined,
    },
    featured: true,
    status: 'live',
    metrics: [
      { label: 'Response Time', value: '<50ms' },
      { label: 'Gateways', value: '4' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },



  {
    id: 'multimodal-agentic-rag',
    title: 'Multimodal Agentic RAG System',
    description:
      'Production-grade multi-agent Retrieval-Augmented Generation platform supporting documents, images, intelligent routing, vector search, and agent conflict resolution.',

    longDescription:
      'A full-stack AI platform built using LangGraph and LangChain that orchestrates multiple specialized AI agents for planning, retrieval, reasoning, validation, and response generation. The system supports multimodal document understanding, vector search using FAISS, conversation memory, intelligent agent routing, and conflict resolution between agents. Designed for scalable enterprise knowledge retrieval and contextual AI assistance.',

    image: '/projects/multimodal-rag.png',

    tech: [
      'Python',
      'FastAPI',
      'LangGraph',
      'LangChain',
      'FAISS',
      'Gemini API',
      'OpenAI API',
      'React',
      'TypeScript',
      'Docker'
    ],

    highlights: [
      '8 specialized AI agents with coordinated workflows',
      'Agent conflict detection and resolution engine',
      'Multimodal document and image processing',
      'Vector search powered by FAISS embeddings',
      'Conversation memory and contextual retrieval',
      'Streaming AI responses with source citations',
      'Scalable FastAPI backend architecture',
      'Modern React + TypeScript frontend'
    ],

    architecture: [
      'User Query',
      'Coordinator Agent',
      'Planner Agent',
      'Retriever Agent',
      'FAISS Vector Store',
      'Reasoning Agent',
      'Validator Agent',
      'Response Generator'
    ],

    links: {
      github: 'https://github.com/devanshnegi88',
      live: undefined,
    },

    featured: true,

    status: 'live',

    metrics: [
      {
        label: 'AI Agents',
        value: '8'
      },
      {
        label: 'Architecture',
        value: 'Multi-Agent'
      },
      {
        label: 'Search',
        value: 'Vector RAG'
      }
    ]
  },
  {
    id: 'golf-charity',
    title: 'Golf Charity Platform',
    description:
      'Full-stack charity management platform with Stripe subscription billing, webhook processing, donor management, RBAC, and a real-time admin dashboard.',
    longDescription:
      'A complete SaaS-style charity platform built for a golf tournament fundraiser. Features tiered subscription management via Stripe, real-time webhook processing for payment events, a role-based admin interface for managing donors and campaigns, and PostgreSQL-backed donor records with Supabase real-time updates.',
    image: '/projects/golf-charity.png',
    tech: ['Next.js', 'React', 'Supabase', 'PostgreSQL', 'Stripe', 'TypeScript'],
    highlights: [
      'Stripe subscription management with webhook processing',
      'RBAC system with admin, organiser, and donor roles',
      'Real-time donor leaderboard via Supabase subscriptions',
      'Campaign analytics dashboard with contribution tracking',
      'Automated email receipts for donations',
    ],
    architecture: [
      'Next.js Frontend',
      'Supabase Auth',
      'PostgreSQL',
      'Stripe Webhooks',
      'Edge Functions',
    ],
    links: {
      github: 'https://github.com/devanshnegi88',
      live: 'https://par4good-gamma.vercel.app/',
    },
    featured: true,
    status: 'live',
    metrics: [
      { label: 'Stack', value: 'Full Stack' },
      { label: 'Auth', value: 'RBAC' },
      { label: 'Billing', value: 'Stripe' },
    ],
  },

{
  id: 'hybrid-disease-prediction-system',

  title: 'Hybrid Disease Prediction System',

  description:
    'AI-powered healthcare decision support platform that predicts diseases from user symptoms and recommends suitable hospitals using machine learning models and intelligent healthcare analytics.',

  longDescription:
    'A full-stack healthcare intelligence platform designed to assist users with preliminary disease prediction and medical guidance. The system processes user symptoms through trained machine learning models, predicts the most probable disease, performs risk assessment, and recommends relevant hospitals for further consultation. Built with Flask, Scikit-learn, and modern web technologies, the platform provides fast, reliable, and user-friendly healthcare decision support while maintaining scalability and accessibility.',

  image: '/projects/disease-prediction.png',

  tech: [
    'Python',
    'Flask',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Bootstrap'
  ],

  highlights: [
    'Symptom-based disease prediction engine',
    'Machine learning-powered diagnosis assistance',
    'Hospital recommendation system',
    'Real-time prediction results',
    'Risk assessment and health insights',
    'Responsive and user-friendly interface',
    'Input validation and error handling',
    'Scalable Flask backend architecture'
  ],

  architecture: [
    'User Symptoms',
    'Input Processing',
    'ML Prediction Model',
    'Disease Prediction',
    'Risk Assessment',
    'Hospital Recommendation'
  ],

  links: {
    github: 'https://github.com/devanshnegi88/hybrid-disease-prediction-system',
    live: 'https://hybrid-disease-prediction-system-1.onrender.com/'
  },

  featured: false,

  status: 'live',

  metrics: [
    {
      label: 'ML',
      value: 'Scikit-learn'
    },
    {
      label: 'Domain',
      value: 'Healthcare'
    },
    {
      label: 'Deploy',
      value: 'Render'
    }
  ]
},


{
  id: 'rag-conversation-intelligence',

  title: 'RAG-Based Conversation Intelligence System',

  description:
    'AI-powered conversation intelligence platform that combines topic-aware RAG retrieval, persona extraction, semantic search, and conversational analytics to transform raw conversations into structured knowledge.',

  longDescription:
    'An advanced Retrieval-Augmented Generation system designed for analyzing large-scale conversation datasets. The platform processes conversations chronologically, automatically detects topic transitions, generates topic summaries, extracts user persona traits, and enables intelligent querying through a chatbot interface. By combining dense vector embeddings with keyword-based retrieval, the system delivers highly relevant responses while maintaining contextual understanding across long conversations.',

  image: '/projects/rag-conversation-intelligence.png',

  tech: [
    'Python',
    'Flask',
    'FAISS',
    'Sentence Transformers',
    'RAG',
    'NLP',
    'HTML',
    'CSS',
    'JavaScript'
  ],

  highlights: [
    'Topic-aware Retrieval-Augmented Generation',
    'Chronological conversation processing',
    'Automatic topic segmentation',
    'Persona extraction engine',
    'Hybrid semantic and keyword retrieval',
    'Conversation intelligence dashboard',
    'Evidence-backed persona insights',
    'Interactive chatbot interface'
  ],

  architecture: [
    'Conversation Dataset',
    'Topic Detection',
    'Summarization Engine',
    'Persona Extraction',
    'FAISS Index',
    'Hybrid Retrieval',
    'Chatbot Interface'
  ],

  links: {
    github: 'https://github.com/devanshnegi88/rag-conversation-system',
    live: 'https://rag-system-xbm3bvqedmhjys3uxkvbzn.streamlit.app/'
  },

  featured: false,

  status: 'live',

  metrics: [
    {
      label: 'Retrieval',
      value: 'Hybrid'
    },
    {
      label: 'Analysis',
      value: 'Persona'
    },
    {
      label: 'Search',
      value: 'FAISS'
    }
  ]
},


{
  id: 'rag-memory-intelligence-platform',

  title: 'Memory Intelligence & Conflict Resolution Platform',

  description:
    'Advanced AI memory platform that combines conversation intelligence, adaptive persona tracking, offline intent classification, and conflict-aware RAG retrieval for long-term contextual understanding.',

  longDescription:
    'A next-generation conversational intelligence system designed to transform raw conversations into structured memory. The platform introduces adaptive persona drift analysis, offline intent classification, and conflict-aware retrieval mechanisms to solve challenges associated with long-term conversational memory. By combining semantic search, temporal reasoning, and contradiction detection, the system delivers context-aware responses while explicitly handling conflicting information across evolving user histories.',

  image: '/projects/memory-intelligence.png',

  tech: [
    'Python',
    'FAISS',
    'RAG',
    'TF-IDF',
    'Scikit-learn',
    'Logistic Regression',
    'Streamlit',
    'NLP',
    'Vector Search'
  ],

  highlights: [
    'Adaptive persona drift detection',
    'Temporal personality evolution tracking',
    'Offline intent classification engine',
    'Conflict-aware memory retrieval',
    'Contradiction detection across memories',
    'Hybrid semantic and keyword search',
    'Conversation intelligence analytics',
    'Privacy-first local inference architecture'
  ],

  architecture: [
    'Conversation Dataset',
    'Persona Engine',
    'Intent Classifier',
    'Conflict Resolver',
    'FAISS Index',
    'Hybrid Retrieval',
    'Intelligence Dashboard'
  ],

  links: {
    github: 'https://github.com/devanshnegi88/rag-memory-intelligence',
    live: 'https://rag-memory-intelligence-3dgd3haetusnuka2ybwe2m.streamlit.app/'
  },

  featured: false,

  status: 'live',

  metrics: [
    {
      label: 'Memory',
      value: 'Adaptive'
    },
    {
      label: 'Intent',
      value: '<3ms'
    },
    {
      label: 'Retrieval',
      value: 'Conflict-Aware'
    }
  ]
},

{
  id: 'ai-smart-study-assistant',

  title: 'AI-Powered Smart Study Assistant',

  description:
    'Intelligent learning platform that combines AI-powered academic assistance, personalized study planning, automated note summarization, quiz generation, flashcards, and progress analytics to improve student productivity.',

  longDescription:
    'A full-stack educational intelligence platform designed to create personalized learning experiences for students. The system leverages Large Language Models to provide academic assistance, generate summaries, create quizzes and flashcards, build customized study plans, and track learning progress. With integrated analytics, reminders, and AI-driven learning support, the platform helps students study more efficiently and maintain consistent academic growth.',

  image: '/projects/study-assistant.png',

  tech: [
    'Python',
    'Flask',
    'MongoDB Atlas',
    'OpenAI API',
    'Gemini API',
    'REST APIs',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Bootstrap',
    'Jinja2',
    'Chart.js'
  ],

  highlights: [
    'AI-powered academic assistant',
    'Personalized study planner',
    'Automated notes summarization',
    'Quiz generation from study materials',
    'Flashcard creation using AI',
    'Progress tracking dashboard',
    'Smart study reminders',
    'Secure authentication system'
  ],

  architecture: [
    'Student Input',
    'AI Processing Layer',
    'Study Planner',
    'Quiz Generator',
    'Flashcard Generator',
    'MongoDB Atlas',
    'Dashboard Analytics'
  ],

  links: {
    github: 'https://github.com/devanshnegi88/Smart-Study-Assistant',
    live: 'https://ai-smart-study-assistant-1.onrender.com/'
  },

  featured: false,

  status: 'live',

  metrics: [
    {
      label: 'AI',
      value: 'LLM Powered'
    },
    {
      label: 'Database',
      value: 'MongoDB'
    },
    {
      label: 'Modules',
      value: '6+'
    }
  ]
},

{
  id: 'ocr-receipt-information-extraction',

  title: 'OCR-Based Receipt Information Extraction',

  description:
    'Document intelligence system that extracts structured information from receipt images using OCR, image preprocessing, confidence scoring, and automated field detection.',

  longDescription:
    'An OCR-powered document processing pipeline designed to convert unstructured receipt images into structured, machine-readable data. The system performs image enhancement, noise reduction, skew correction, text extraction, and intelligent field detection to identify store names, transaction dates, purchased items, prices, and total amounts. A confidence scoring engine combines OCR confidence, pattern validation, and keyword matching to improve extraction reliability and flag uncertain results.',

  image: '/projects/ocr-receipt-extraction.png',

  tech: [
    'Python',
    'OCR',
    'OpenCV',
    'Computer Vision',
    'Image Processing',
    'JSON',
    'NumPy'
  ],

  highlights: [
    'Receipt information extraction pipeline',
    'Image denoising and enhancement',
    'Automatic deskew correction',
    'Store and transaction data extraction',
    'Field-level confidence scoring',
    'Pattern-based validation engine',
    'JSON structured output generation',
    'Support for noisy and partially visible receipts'
  ],

  architecture: [
    'Receipt Image',
    'Image Preprocessing',
    'OCR Engine',
    'Field Detection',
    'Confidence Scoring',
    'Structured JSON Output'
  ],

  links: {
    github: 'https://github.com/devanshnegi88/OCR-Pipeline',
    live: 'undefined'
  },

  featured: true,

  status: 'completed',

  metrics: [
    {
      label: 'Domain',
      value: 'Document AI'
    },
    {
      label: 'Output',
      value: 'JSON'
    },
    {
      label: 'Vision',
      value: 'OCR'
    }
  ]
},

  // {
  //   id: 'volunteer-management-system',
  //   title: 'Volunteer Information Management System',
  //   description:
  //     'Scalable backend system to manage volunteer onboarding, scheduling, task assignment, and compliance tracking for large-scale NGO operations.',
  //   longDescription:
  //     'A robust backend architecture designed to handle thousands of concurrent volunteer records. The system provides role-based access control, automated email notifications for shifts, real-time task assignments, and comprehensive reporting. Built with Python and FastAPI, it ensures high performance, data consistency, and seamless integration with front-end platforms.',
  //   image: '/projects/volunteer-system.png',
  //   tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Celery', 'Redis', 'JWT'],
  //   highlights: [
  //     'Automated shift scheduling and task assignment',
  //     'Real-time compliance tracking and reporting',
  //     'Role-based access control (RBAC)',
  //     'Background job processing with Celery and Redis',
  //     'Scalable REST API architecture'
  //   ],
  //   architecture: [
  //     'Client Request',
  //     'FastAPI Backend',
  //     'Celery Workers',
  //     'Redis Broker',
  //     'PostgreSQL DB',
  //     'Email Service'
  //   ],
  //   links: {
  //     github: 'https://github.com/devanshnegi88',
  //     live: undefined
  //   },
  //   featured: true,
  //   status: 'live',
  //   metrics: [
  //     { label: 'Architecture', value: 'Microservices' },
  //     { label: 'Database', value: 'PostgreSQL' },
  //     { label: 'Uptime', value: '99.9%' }
  //   ]
  // }
];

export const certifications: Certification[] = [
  {
    title: 'Backend Developer Internship Certificate',
    issuer: 'Visiomatix Media Pvt. Ltd.',
    date: '2026',
    type: 'work',
  },
  {
    title: 'Project Work Experience Certificate',
    issuer: 'Payment Orchestration Layer',
    date: '2025',
    type: 'project',
  },
  {
    title: 'Machine Learning using Python',
    issuer: 'Simplilearn',
    date: '2024',
    type: 'course',
  },
  {
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Simplilearn',
    date: '2024',
    type: 'course',
  },
  {
    title: 'AWS AI Practitioner Challenge',
    issuer: 'Udacity',
    date: 'Feb 2026',
    type: 'course',
  },
  {
    title: 'AWS AI & ML Scholars - 2026 Challenge Completion',
    issuer: 'Udacity',
    date: 'Mar 2026',
    type: 'course',
  },
  {
    title: 'AWS Scholars Program Project Badge: Build Your First AI Productivity App',
    issuer: 'Udacity',
    date: 'Mar 2026',
    type: 'project',
  },
  {
    title: 'AWS Scholars Program Project Badge: Analyze Data using AI with PartyRock',
    issuer: 'Udacity',
    date: 'Mar 2026',
    type: 'project',
  },
];

export const education: Education = {
  degree: 'Diploma in Computer Science & Engineering',
  institution: 'Government Polytechnic Dehradun',
  period: '2024 – 2026',
  location: 'Dehradun, Uttarakhand',
  focus: 'Computer Science Engineering',
};

export const contact: Contact = {
  headline: "Let's Build Something Great",
  subheadline:
    "I'm actively looking for backend, full stack, and AI engineering roles. If you're building something ambitious, let's talk.",
  email: 'devanshnegi88@gmail.com',
  github: 'https://github.com/devanshnegi88',
  linkedin: 'https://linkedin.com/in/devansh-negi005',
  resume: '/Devansh_Backend_v2.docx',
  // Optional: set to a Formspree or server endpoint to receive form submissions.
  // Example: 'https://formspree.io/f/your-id' or '/api/contact'
  formEndpoint: '/api/contact',
};

export const footer: Footer = {
  note: 'Designed & built by Devansh Negi — React + TypeScript + Tailwind + Framer Motion',
  links: [
    { label: 'GitHub', href: 'https://github.com/devanshnegi88' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/devansh-negi005' },
    { label: 'Email', href: 'mailto:devanshnegi88@gmail.com' },
  ],
};
