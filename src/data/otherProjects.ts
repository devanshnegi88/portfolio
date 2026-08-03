import type { FeaturedProject } from './featuredProjects';

/**
 * Every project outside the top 4 featured picks, rendered with the exact
 * same FeaturedProjectCard + ProjectDetailModal used above — no separate
 * card component, no separate modal.
 */
export const otherProjects: FeaturedProject[] = [
  {
    id: 'golf-charity',
    title: 'Golf Charity Platform',
    status: 'live',
    category: 'Full Stack',
    dateAdded: '2026-06-01',
    description:
      'Full-stack charity management platform with Stripe subscription billing, webhook processing, donor management, RBAC, and a real-time admin dashboard.',
    tech: ['Next.js', 'React', 'Supabase', 'PostgreSQL', 'Stripe', 'TypeScript'],
    highlights: [
      'Stripe subscription billing',
      'Webhook-driven payment events',
      'Role-based access control',
      'Real-time donor leaderboard',
      'Campaign analytics dashboard',
      'Automated email receipts',
    ],
    architecture: ['Next.js Frontend', 'Supabase Auth', 'PostgreSQL', 'Stripe Webhooks', 'Edge Functions'],
    links: {
      github: 'https://github.com/devanshnegi88/Golf--Charity--Platform',
      live: 'https://par4good-gamma.vercel.app/',
    },
    detail: {
      overview:
        'A SaaS-style charity platform built for a golf tournament fundraiser: Stripe handles tiered subscription billing, Supabase provides auth and real-time data, and a role-based admin interface manages donors, organisers, and campaigns end to end.',
      problem:
        'Charity organisers needed a single platform to manage recurring donations, verify who could see or edit campaign data, and see fundraising progress live, rather than piecing it together from spreadsheets and a generic payment link.',
      solution:
        'Combined Stripe subscription billing with webhook-driven event processing so payment state stays in sync automatically, layered a three-tier RBAC system (admin, organiser, donor) on top, and used Supabase real-time subscriptions to power a live donor leaderboard.',
      challenges: [
        'Keeping subscription state consistent between Stripe webhooks and the PostgreSQL donor records',
        'Designing RBAC so organisers can manage their own campaigns without seeing others\u2019 donor data',
        'Making the donor leaderboard update in real time without over-fetching from Supabase',
      ],
      features: [
        'Stripe subscription management with webhook processing',
        'RBAC across admin, organiser, and donor roles',
        'Real-time donor leaderboard',
        'Campaign analytics dashboard',
        'Automated email receipts for donations',
      ],
      lessons: [
        'Webhooks need their own retry/idempotency handling independent of the main request flow',
        'Real-time subscriptions are worth the setup cost for anything leaderboard-shaped',
      ],
    },
  },
  {
    id: 'ai-smart-study-assistant',
    title: 'AI Smart Study Assistant',
    status: 'live',
    category: 'AI',
    dateAdded: '2026-06-10',
    description:
      'Full-stack AI learning platform with personalized study plans, AI chat, quiz generation, reminders, and analytics.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Flask', 'MongoDB', 'Gemini API', 'Whisper'],
    highlights: [
      'AI tutor',
      'Quiz generation',
      'Study planner',
      'Progress analytics',
      'Authentication',
      'Video-to-notes',
    ],
    architecture: ['Student Input', 'AI Processing Layer', 'Study Planner', 'Quiz Generator', 'Whisper Transcription', 'MongoDB Atlas', 'Dashboard Analytics'],
    links: {
      github: 'https://github.com/devanshnegi88/Smart-Study-Assistant',
      live: 'https://ai-smart-study-assistant-2.onrender.com',
    },
    detail: {
      overview:
        'An educational platform that turns raw study material into an AI tutor, personalized study plans, generated quizzes and flashcards, and lecture-video transcriptions, backed by MongoDB Atlas and a Gemini-powered processing layer.',
      problem:
        'Students juggle scattered notes and recordings with no fast way to turn that material into a personalized plan or practice questions, and generic study apps rarely adapt to what a student has actually covered.',
      solution:
        'Built an AI processing layer that grounds quiz and flashcard generation in the student\u2019s own source material, added a Whisper-based video-to-notes pipeline for lecture recordings, and layered a study planner and analytics dashboard on top so progress stays visible.',
      challenges: [
        'Keeping generated quizzes and flashcards grounded in the source material instead of hallucinating facts',
        'Transcribing and summarizing longer lecture videos efficiently with Whisper',
        'Personalizing a study plan without over-fitting to a single session\u2019s material',
      ],
      features: [
        'AI tutor for academic questions',
        'Quiz generation grounded in study material',
        'Personalized study planner',
        'Progress analytics dashboard',
        'Secure authentication',
        'Video-to-notes transcription via Whisper',
      ],
      lessons: [
        'Grounding generation in retrieved source text substantially reduced hallucinated quiz answers',
        'Long lecture videos needed an async transcription queue rather than blocking the request',
      ],
    },
  },
  {
    id: 'rag-memory-intelligence-platform',
    title: 'Memory Intelligence & Conflict Resolution Platform',
    status: 'live',
    category: 'AI',
    dateAdded: '2026-06-08',
    description:
      'Advanced AI memory platform that combines conversation intelligence, adaptive persona tracking, offline intent classification, and conflict-aware RAG retrieval for long-term contextual understanding.',
    tech: ['Python', 'FAISS', 'RAG', 'TF-IDF', 'Scikit-learn', 'Streamlit', 'NLP'],
    highlights: [
      'Adaptive persona drift detection',
      'Offline intent classification',
      'Conflict-aware memory retrieval',
      'Contradiction detection across memories',
      'Hybrid semantic + keyword search',
      'Privacy-first local inference',
    ],
    architecture: ['Conversation Dataset', 'Persona Engine', 'Intent Classifier', 'Conflict Resolver', 'FAISS Index', 'Intelligence Dashboard'],
    links: {
      github: 'https://github.com/devanshnegi88/rag-memory-intelligence',
      live: 'https://rag-memory-intelligence-3dgd3haetusnuka2ybwe2m.streamlit.app/',
    },
    detail: {
      overview:
        'A conversational memory system that goes beyond simple retrieval: it tracks how a user\u2019s persona drifts over time, classifies intent offline, and explicitly detects when two remembered facts contradict each other instead of silently picking one.',
      problem:
        'Long-running conversational systems accumulate memories that can contradict each other over time, and most RAG pipelines retrieve whichever memory is most similar without ever checking whether it conflicts with something already known.',
      solution:
        'Built a persona engine that tracks trait drift over time, an offline intent classifier so routing doesn\u2019t depend on an API call, and a conflict resolver that flags contradictions between retrieved memories before they reach the response layer.',
      challenges: [
        'Detecting genuine contradictions between memories versus natural evolution of a user\u2019s preferences',
        'Keeping intent classification accurate while running fully offline',
        'Balancing semantic and keyword retrieval so conflict detection has the right candidates to compare',
      ],
      features: [
        'Adaptive persona drift detection',
        'Offline intent classification engine',
        'Conflict-aware memory retrieval',
        'Contradiction detection across memories',
        'Conversation intelligence analytics',
      ],
      lessons: [
        'Treating contradiction detection as its own explicit step surfaced issues silent retrieval was hiding',
        'Offline intent classification traded a little accuracy for meaningfully lower latency',
      ],
    },
  },
  {
    id: 'ocr-receipt-information-extraction',
    title: 'OCR-Based Receipt Information Extraction',
    status: 'live',
    category: 'Automation',
    dateAdded: '2026-06-03',
    description:
      'Document intelligence system that extracts structured information from receipt images using OCR, image preprocessing, confidence scoring, and automated field detection.',
    tech: ['Python', 'OpenCV', 'OCR', 'NumPy'],
    highlights: [
      'Image denoising and enhancement',
      'Automatic deskew correction',
      'Field-level confidence scoring',
      'Pattern-based validation',
      'Structured JSON output',
      'Handles noisy, partial receipts',
    ],
    architecture: ['Receipt Image', 'Image Preprocessing', 'OCR Engine', 'Field Detection', 'Confidence Scoring', 'Structured JSON Output'],
    links: {
      github: 'https://github.com/devanshnegi88/OCR-Pipeline',
      live: 'https://ocr-pipeline-aleumdqrqs9dne3fpsomr4.streamlit.app/',
    },
    detail: {
      overview:
        'An OCR pipeline that turns unstructured receipt photos into structured JSON: image enhancement and deskewing clean up the input, OCR extracts raw text, and a field-detection + confidence-scoring layer identifies store name, date, items, and totals.',
      problem:
        'Receipt photos are inconsistently lit, skewed, and noisy, so raw OCR output on its own is unreliable enough that automated bookkeeping or expense tools can\u2019t trust it without manual review.',
      solution:
        'Added a preprocessing stage (denoising, deskew correction) before OCR, then layered a field-detection step with pattern-based validation and a confidence score per field, so uncertain extractions can be flagged instead of silently trusted.',
      challenges: [
        'Correcting skew and noise across wildly inconsistent phone-camera photos',
        'Building field detection that generalizes across different receipt layouts',
        'Producing a confidence score that actually correlates with extraction accuracy',
      ],
      features: [
        'Receipt information extraction pipeline',
        'Image denoising and deskew correction',
        'Field-level confidence scoring',
        'Pattern-based validation engine',
        'Structured JSON output generation',
      ],
      lessons: [
        'Preprocessing quality mattered more for accuracy than swapping OCR engines',
        'A per-field confidence score was far more useful downstream than a single overall score',
      ],
    },
  },
];
