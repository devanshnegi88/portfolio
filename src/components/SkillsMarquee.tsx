import React from 'react';
import { skills as skillsData } from '../data/portfolioData';

function flattenSkills() {
  return skillsData.reduce<string[]>((acc, cat) => acc.concat(cat.skills), []);
}

export function SkillsMarquee() {
  const items = flattenSkills();

  return (
    <section aria-label="Skills marquee" className="py-6">
      <div className="container-custom">
        <div className="skills-marquee bg-[#07070b] rounded-xl py-3 px-2 border border-white/6">
          <div className="skills-track" role="list">
            {items.concat(items).map((s, i) => {
              const palette = ['#06B6D4', '#6366F1', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'];
              const color = palette[i % palette.length];
              return (
                <div key={`${s}-${i}`} role="listitem" className="skill-pill" style={{ ['--accent' as any]: color }}>
                  {s}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsMarquee;
