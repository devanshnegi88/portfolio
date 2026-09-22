export type FeaturedStatus = 'production' | 'live' | 'development';
export type ProjectCategory = 'AI' | 'Backend' | 'Full Stack' | 'ML' | 'Automation';

export interface FeaturedProjectLinks {
  github?: string;
  live?: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  status: FeaturedStatus;
  category: ProjectCategory;
  /** Approximate month this project was shipped — used for sorting only. */
  dateAdded: string;
  description: string;
  tech: string[];
  highlights: string[];
  architecture: string[];
  links: FeaturedProjectLinks;
  detail: {
    overview: string;
    problem: string;
    solution: string;
    challenges: string[];
    features: string[];
    lessons: string[];
  };
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'multimodal-agentic-rag',
    title: 'Multimodal Agentic RAG Platform',
    status: 'production',
    category: 'AI',
    dateAdded: '2026-06-30',
    description:
      'Production-grade multi-agent AI platform capable of understanding and retrieving knowledge from PDFs, DOCX, PPTX, images, audio, video, spreadsheets, and web sources.',
    tech: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'React', 'Qdrant', 'Redis', 'PostgreSQL', 'Docker', 'Gemini', 'Cohere'],
    highlights: [
      'Multi-agent orchestration',
      'Hybrid search (dense + sparse + reranking)',
      'Memory-aware conversations',
      'Streaming responses',
      'Multimodal document processing',
      'Production-ready architecture',
    ],
    architecture: [
      'Coordinator Agent',
      'Planner Agent',
      'Retrieval Agent',
      'Vision Agent',
      'Web Search Agent',
      'Memory Agent',
      'Critic Agent',
      'Answer Agent',
    ],
    links: {
      github: 'https://github.com/devanshnegi88/Multimodal-Agentic-RAG',
    },
    detail: {
      overview:
        'A full-stack agentic RAG system built around 8 specialized LangGraph agents that plan, retrieve, verify, and answer over documents, images, audio, video, and the web. Hybrid Qdrant + FAISS retrieval with Cohere reranking feeds an LLM fallback chain (Claude → Gemini → OpenAI), all served through a WebSocket-streamed FastAPI backend with JWT auth and a React + TanStack Query + Zustand frontend, deployed on Render.',
      problem:
        'Knowledge in real organizations is scattered across formats, PDFs, slide decks, spreadsheets, images, recordings, and web pages, and single-agent RAG pipelines struggle to plan retrieval, verify answers, and reason over that many modalities reliably.',
      solution:
        'Split the pipeline into eight specialized agents with a strict coordinator contract, so planning, retrieval, vision, web search, memory, and critique each stay independently testable while still sharing one conversation state. Hybrid dense + sparse retrieval with a reranking pass keeps answers grounded, and a provider fallback chain keeps the system answering even if one LLM API degrades.',
      challenges: [
        'Coordinating agent handoffs without losing shared context across the LangGraph state',
        'Reconciling dense (Qdrant) and sparse (FAISS) retrieval scores before reranking',
        'Keeping WebSocket-streamed responses stable while falling back across LLM providers mid-request',
        'Synchronizing vision, audio, and video ingestion pipelines with the core text retrieval flow',
      ],
      features: [
        '8 specialized LangGraph agents with coordinated workflows',
        'Hybrid retrieval: dense + sparse + Cohere reranking',
        'LLM fallback chain: Claude → Gemini → OpenAI',
        'WebSocket streaming responses',
        'JWT-authenticated FastAPI backend',
        'Multimodal ingestion: PDF, DOCX, PPTX, images, audio, video, spreadsheets, web',
      ],
      lessons: [
        'Agent specialization pays off, but only with a strict coordinator contract to avoid duplicated work',
        'A reranking pass after hybrid retrieval improved answer quality more than adding further agents',
        'A multi-provider LLM fallback chain is worth the added complexity for production reliability',
      ],
    },
  },
  {
    id: 'payment-orchestration',
    title: 'Payment Orchestration Platform',
    status: 'production',
    category: 'Backend',
    dateAdded: '2026-06-15',
    description:
      'Scalable backend platform that routes payments across multiple providers while handling authentication, retries, webhooks, and asynchronous processing.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Stripe', 'Razorpay', 'Docker'],
    highlights: [
      'Multi-provider routing',
      'Secure payment processing',
      'Webhook handling',
      'Background workers',
      'Transaction monitoring',
      'Scalable backend architecture',
    ],
    architecture: [
      'Client Request',
      'FastAPI Gateway',
      'Circuit Breaker',
      'Redis Cache',
      'Celery Workers',
      'PostgreSQL',
      'Payment Providers',
    ],
    links: {
      github: 'https://github.com/devanshnegi88/payment-orchestration-platform',
    },
    detail: {
      overview:
        'A production-style payment infrastructure layer that abstracts Stripe and Razorpay behind a single API, with circuit-breaker routing, Redis-backed caching, Celery background workers, and JWT-secured endpoints for handling concurrent transaction load.',
      problem:
        'Routing every payment through a single provider creates a single point of failure: rate limits, outages, or region-specific declines on one gateway can block transactions that a second provider would have accepted.',
      solution:
        'Introduced a routing layer that scores provider health and picks a gateway per transaction, wrapped every provider call in a circuit breaker, and moved webhook processing and reconciliation onto asynchronous Celery workers so the API layer stays fast and responsive.',
      challenges: [
        'Making webhook handling idempotent so retried provider callbacks never double-charge or double-record a transaction',
        'Tuning retry and backoff behavior without duplicating charges under provider timeouts',
        'Keeping transaction state consistent across the synchronous API and asynchronous workers',
      ],
      features: [
        'Multi-gateway routing across Stripe and Razorpay',
        'Circuit-breaker pattern for automatic failover',
        'Redis caching layer for fast repeated lookups',
        'Celery background workers for webhook processing and reconciliation',
        'JWT-secured API with role-based permissions',
        'Transaction monitoring',
      ],
      lessons: [
        'Idempotency keys on every webhook handler are non-negotiable once real money is involved',
        'Circuit breakers meaningfully reduce cascading failures during provider incidents',
        'Background workers need their own observability, not just logging inherited from the API layer',
      ],
    },
  },
  {
    id: 'hybrid-disease-prediction-system',
    title: 'Hybrid Disease Prediction System',
    status: 'live',
    category: 'ML',
    dateAdded: '2023-11-01',
    description:
      'AI-powered healthcare decision support platform that predicts diseases from user symptoms and recommends suitable hospitals using machine learning models.',
    tech: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'Bootstrap'],
    highlights: [
      'Symptom-based disease prediction',
      'ML-powered diagnosis assistance',
      'Hospital recommendation engine',
      'Real-time prediction results',
      'Risk assessment scoring',
      'Responsive Flask + Bootstrap UI',
    ],
    architecture: [
      'User Symptoms',
      'Input Processing',
      'ML Prediction Model',
      'Risk Assessment',
      'Hospital Recommendation',
    ],
    links: {
      github: 'https://github.com/devanshnegi88/hybrid-disease-prediction-system',
      live: 'https://hybrid-disease-prediction-system-1.onrender.com/',
    },
    detail: {
      overview:
        'A full-stack healthcare decision-support tool that takes user-reported symptoms, runs them through trained Scikit-learn models to predict the most likely disease, scores the associated risk, and recommends nearby hospitals for follow-up.',
      problem:
        'People often don\u2019t know how urgently to act on a set of symptoms or which type of specialist or hospital to consult, and most self-diagnosis tools online give a wall of unranked possibilities instead of a clear next step.',
      solution:
        'Trained multiple classification models on symptom-disease datasets, combined their outputs into a hybrid prediction pipeline, added a risk-assessment layer on top of the raw prediction, and paired the result with a hospital recommendation step.',
      challenges: [
        'Handling incomplete or ambiguous symptom input without producing an overconfident prediction',
        'Combining multiple models into one hybrid pipeline without one model\u2019s bias dominating the result',
        'Keeping inference fast enough for a responsive Flask request/response cycle',
      ],
      features: [
        'Symptom-based disease prediction engine',
        'Hospital recommendation system',
        'Risk assessment and health insights',
        'Input validation and error handling',
      ],
      lessons: [
        'Combining models helped more with edge-case symptoms than any single model tuning pass',
        'Clear input validation mattered as much as model accuracy for a trustworthy user experience',
      ],
    },
  },
  {
    id: 'rag-conversation-intelligence',
    title: 'RAG Conversation Intelligence System',
    status: 'production',
    category: 'AI',
    dateAdded: '2026-06-05',
    description:
      'Backend AI platform that performs semantic retrieval, topic segmentation, persona extraction, and contextual question answering.',
    tech: ['FastAPI', 'LangChain', 'FAISS', 'Gemini', 'MongoDB'],
    highlights: [
      'Semantic search',
      'Topic segmentation',
      'Persona detection',
      'Vector retrieval',
      'Context-aware AI',
    ],
    architecture: [
      'Conversation Dataset',
      'Topic Detection',
      'Summarization Engine',
      'Persona Extraction',
      'FAISS Index',
      'Hybrid Retrieval',
      'Chatbot Interface',
    ],
    links: {
      github: 'https://github.com/devanshnegi88/rag-conversation-system',
      live: 'https://rag-system-xbm3bvqedmhjys3uxkvbzn.streamlit.app/',
    },
    detail: {
      overview:
        'A Retrieval-Augmented Generation system for analyzing large conversation datasets: it processes conversations chronologically, detects topic transitions, extracts evidence-backed persona traits, and answers questions through a hybrid semantic + keyword retrieval layer over FAISS.',
      problem:
        'Raw conversation logs are hard to search or summarize at scale, and users need topic-level structure and persona insight rather than a wall of undifferentiated transcript.',
      solution:
        'Chronological topic segmentation breaks conversations into coherent sections, a summarization pass generates topic summaries, and a persona extraction step ties every trait back to a specific evidence line, all queryable through hybrid semantic + keyword retrieval.',
      challenges: [
        'Detecting topic boundaries in free-flowing conversation without hard-coded rules',
        'Keeping persona extraction evidence-backed rather than speculative',
        'Balancing semantic versus keyword retrieval weighting for relevance',
      ],
      features: [
        'Topic-aware retrieval-augmented generation',
        'Chronological conversation processing',
        'Automatic topic segmentation',
        'Evidence-backed persona extraction',
        'Hybrid semantic and keyword retrieval',
        'Interactive chatbot interface',
      ],
      lessons: [
        'Hybrid retrieval consistently outperformed pure semantic search on this dataset',
        'Requiring an evidence citation for every persona trait made the output far more trustworthy',
      ],
    },
  },
];
