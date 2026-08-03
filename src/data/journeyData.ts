import { Rocket, Server, Brain, Code2, Globe, type LucideIcon } from 'lucide-react';

export interface JourneyItem {
  id: string;
  title: string;
  company?: string;
  duration: string;
  description: string;
  /** Optional bullet highlights — omit for a simple one-paragraph entry. */
  highlights?: string[];
  icon: LucideIcon;
  current?: boolean;
}

/**
 * The timeline renders every entry in this array, in order, alternating
 * card sides automatically by index. To add a new milestone, just push a
 * new object here — no other file needs to change.
 */
export const journeyItems: JourneyItem[] = [
  {
    id: 'independent-backend-ai-developer',
    title: 'Independent Backend & AI Developer',
    duration: 'Jan 2024 – Present',
    description:
      'Building production-ready backend systems, AI-powered applications, and full-stack products using Python, FastAPI, React, LangChain, LangGraph, PostgreSQL, Redis, Docker, and modern LLM frameworks.',
    highlights: [
      'Designed scalable REST APIs and backend architectures.',
      'Built RAG pipelines and Agentic AI systems.',
      'Developed end-to-end full-stack AI products.',
      'Deployed cloud-ready applications using modern development practices.',
    ],
    icon: Rocket,
    current: true,
  },
  {
    id: 'visiomatix-backend-intern',
    title: 'Backend Developer Intern',
    company: 'Visiomatix Media Pvt. Ltd.',
    duration: 'May 2026 – Jun 2026',
    description:
    'Developed scalable backend services using Node.js,React,Express.js PostgreSQL, Redis, authentication systems, and third-party API integrations.',
      highlights: [
      "Implemented Google OAuth authentication and Firebase integration for secure user authentication, authorization, and backend data management",
      "Integrated Twilio APIs for automated messaging and notifications, while debugging and optimizing API performance and backend reliability."
    ],
    icon: Server,
  },
  
  {
    id: 'oef-web-dev-intern',
    title: 'Web Development Intern',
    company: 'Opto Electronics Factory',
    duration: 'Jun 2025 – Jul 2025',
    description: 'Developed responsive web applications using PHP and SOL while strengthening frontend, backend, and database development skills.',
    highlights:[
      "Developed and maintained web applications using PHP, MySQL, HTML, CSS, and JavaScript.",
      "Built backend functionality and integrated MySQL databases for data storage and retrieval.",
      "Collaborated with team members to identify and resolve technical issues while ensuring timely project delivery.",
    ],
    icon: Globe,
  },
];
