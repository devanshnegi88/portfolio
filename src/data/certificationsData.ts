export type CertCategory = 'work' | 'course' | 'project';

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: CertCategory;
  description: string;
  skills: string[];
  credentialUrl: string;
  /** Short mark shown in the logo tile since no official org logo assets are available. */
  orgInitials: string;
  /** Tailwind gradient stops for the logo tile + accent, kept within the site's existing palette. */
  accent: {
    from: string;
    to: string;
    text: string;
    ring: string;
  };
}

const accents: Record<CertCategory, CertificationItem['accent']> = {
  work: { from: 'from-emerald-500/20', to: 'to-emerald-400/5', text: 'text-emerald-300', ring: 'ring-emerald-400/25' },
  course: { from: 'from-indigo-500/20', to: 'to-cyan-400/5', text: 'text-indigo-300', ring: 'ring-indigo-400/25' },
  project: { from: 'from-violet-500/20', to: 'to-violet-400/5', text: 'text-violet-300', ring: 'ring-violet-400/25' },
};

export const certificationItems: CertificationItem[] = [
  {
    id: 'visiomatix-internship',
    title: 'Backend Developer Internship Certificate',
    issuer: 'Visiomatix Media Pvt. Ltd.',
    date: '2026',
    category: 'work',
    description: 'Hands-on backend engineering experience earned during a professional internship.',
    skills: ['Backend Development', 'API Design', 'Python'],
    credentialUrl: '/Certificate For intrenship.pdf',
    orgInitials: 'VM',
    accent: accents.work,
  },
  {
    id: 'payment-orchestration-cert',
    title: 'Project Work Experience Certificate',
    issuer: 'Payment Orchestration Layer',
    date: '2025',
    category: 'project',
    description: 'Recognition for designing and building a production-style payment orchestration system.',
    skills: ['System Design', 'Payment Systems', 'Backend Architecture'],
    credentialUrl: '/payment.pdf',
    orgInitials: 'PO',
    accent: accents.project,
  },
  {
    id: 'intro-to-mcp',
    title: 'Introduction to MCP',
    issuer: 'Course',
    date: '2026',
    category: 'course',
    description: 'Foundational concepts of the Model Context Protocol for connecting AI models to tools.',
    skills: ['MCP', 'AI Tooling', 'LLM Integration'],
    credentialUrl: '/Introduction to mcp.pdf',
    orgInitials: 'MCP',
    accent: accents.course,
  },
  {
    id: 'mcp-advanced',
    title: 'MCP Advanced Concepts',
    issuer: 'Course',
    date: '2026',
    category: 'course',
    description: 'Advanced patterns for building agentic, tool-using systems on top of MCP.',
    skills: ['MCP', 'Agentic Systems', 'Tool Orchestration'],
    credentialUrl: '/certificate-j3ki86pwinkm-1781276597.pdf',
    orgInitials: 'MCP',
    accent: accents.course,
  },
  {
    id: 'ml-using-python',
    title: 'Machine Learning using Python',
    issuer: 'Simplilearn',
    date: '2024',
    category: 'course',
    description: 'Core machine learning concepts and model-building workflows using Python.',
    skills: ['Machine Learning', 'Python', 'Scikit-learn'],
    credentialUrl: '/ml using python.pdf',
    orgInitials: 'SL',
    accent: accents.course,
  },
  {
    id: 'aws-ai-practitioner',
    title: 'AWS AI Practitioner Challenge',
    issuer: 'Udacity',
    date: 'Feb 2026',
    category: 'course',
    description: 'Applied challenge covering practical AI fundamentals on AWS cloud infrastructure.',
    skills: ['AWS', 'Cloud Computing', 'AI Fundamentals'],
    credentialUrl: 'https://www.udacity.com/certificate/e/bf90b114-28c9-11f1-b2e3-e3a9b4f10d84',
    orgInitials: 'UD',
    accent: accents.course,
  },
];
