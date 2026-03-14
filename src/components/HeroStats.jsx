import React, { useMemo } from 'react';

const CATEGORY_LABELS = {
  certification: 'Certifications',
  hackathon: 'Competitions',
  volunteering: 'Volunteering',
  eca: 'ECA',
  award: 'Awards',
};

function formatCategoryLabel(category) {
  return CATEGORY_LABELS[category] || category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ');
}

export default function HeroStats({ certificates }) {
  const stats = useMemo(() => {
    const counts = {};
    certificates.forEach(cert => {
      counts[cert.category] = (counts[cert.category] || 0) + 1;
    });
    return counts;
  }, [certificates]);

  const total = certificates.length;

  return (
    <div className="py-16">
      <h1 className="font-mono text-4xl md:text-[2.25rem] font-bold mb-2">
        <span className="text-accent-green">&gt;_</span> certificates
      </h1>
      <p className="text-text-muted font-sans mb-8">Achievements, Certs & Milestones</p>
      
      <div className="flex flex-wrap gap-4">
        <div className="bg-bg-surface border border-border-subtle rounded-lg px-4 py-2 font-mono text-sm">
          <span className="text-accent-green">{total}</span>
          <span className="text-text-muted ml-1">Total</span>
        </div>
        {Object.entries(stats).map(([category, count]) => (
          <div key={category} className="bg-bg-surface border border-border-subtle rounded-lg px-4 py-2 font-mono text-sm">
            <span className="text-accent-green">{count}</span>
            <span className="text-text-muted ml-1">{formatCategoryLabel(category)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
