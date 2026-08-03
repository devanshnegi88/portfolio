import { skills } from '../data/portfolioData';
import { SkillCard } from '../components/SkillCard';
import { SectionHeader } from '../components/SectionHeader';

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Technical Stack"
          title="Tools I"
          titleAccent="Build With"
          description="A production-oriented stack spanning backend systems, AI/ML pipelines, cloud infrastructure, and modern frontend."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((category, i) => (
            <SkillCard key={category.name} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
