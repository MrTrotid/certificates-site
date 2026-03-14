import React, { useMemo } from 'react';
import clsx from 'clsx';

const CATEGORY_LABELS = {
  certification: 'Course Certifications',
  hackathon: 'Competitions',
  volunteering: 'Volunteering',
  eca: 'ECA',
  award: 'Awards',
};

function formatCategoryLabel(category) {
  return CATEGORY_LABELS[category] || category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ');
}

export default function FilterBar({ activeFilter, onFilterChange, certificates }) {
  const filters = useMemo(() => {
    const categories = [...new Set(certificates.map(c => c.category))];
    return [
      { label: 'All', value: 'all' },
      ...categories.map(cat => ({
        label: formatCategoryLabel(cat),
        value: cat
      }))
    ];
  }, [certificates]);

  const getCount = (value) => {
    if (value === 'all') return certificates.length;
    return certificates.filter(c => c.category === value).length;
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map(filter => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={clsx(
            'px-4 py-2 rounded-lg border font-mono text-sm transition-all duration-200',
            activeFilter === filter.value
              ? 'border-accent-green text-accent-green bg-tag-bg'
              : 'border-border-subtle text-text-muted hover:border-accent-green/50'
          )}
        >
          {filter.label} ({getCount(filter.value)})
        </button>
      ))}
    </div>
  );
}
