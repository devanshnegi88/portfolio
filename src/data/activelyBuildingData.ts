import { Bot, Search, Server, Layers, Workflow, Database, Cloud, Activity, type LucideIcon } from 'lucide-react';

export interface FocusArea {
  label: string;
  icon: LucideIcon;
}

export const focusAreas: FocusArea[] = [
  { label: 'Multi-Agent AI Systems', icon: Bot },
  { label: 'Retrieval-Augmented Generation (RAG)', icon: Search },
  { label: 'Backend APIs with FastAPI', icon: Server },
  { label: 'Full-Stack AI Applications', icon: Layers },
  { label: 'LangGraph & LangChain', icon: Workflow },
  { label: 'PostgreSQL & Redis', icon: Database },
  { label: 'Docker & Cloud Deployment', icon: Cloud },
  { label: 'AI Evaluation & Observability', icon: Activity },
];
