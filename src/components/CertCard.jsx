import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import TagPill from './TagPill';

const CATEGORY_LABELS = {
  certification: 'Course Certifications',
  hackathon: 'Competitions',
  volunteering: 'Volunteering',
  eca: 'ECA',
  award: 'Awards',
};

const CATEGORY_COLORS = {
  certification: 'text-accent-green bg-tag-bg border-accent-green/20',
  hackathon: 'text-accent-blue bg-tag-blue-bg border-accent-blue/20',
  volunteering: 'text-purple-400 bg-purple-900/20 border-purple-400/20',
  eca: 'text-orange-400 bg-orange-900/20 border-orange-400/20',
  award: 'text-accent-yellow bg-yellow-900/20 border-accent-yellow/20',
};

function formatCategoryLabel(category) {
  return CATEGORY_LABELS[category] || category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ');
}

function formatDate(dateStr) {
  const parts = dateStr.split('-');
  const year = parts[0];
  const month = parts[1];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (month) {
    return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
  }
  return year;
}

export default function CertCard({ cert, onImageClick }) {
  const categoryStyle = CATEGORY_COLORS[cert.category] || 'text-accent-green bg-tag-bg border-accent-green/20';
  const categoryLabel = formatCategoryLabel(cert.category);
  const hasCredential = cert.verify_url || cert.credential_id;

  return (
    <div className="bg-bg-surface border border-border-subtle rounded-lg p-5 transition-all duration-200 hover:border-accent-green/60 hover:shadow-[0_0_0_1px_#00ff88,0_0_16px_#00ff8822] flex flex-col h-full">
      {/* Image Section */}
      <div 
        className="w-full h-48 rounded-xl mb-4 cursor-pointer overflow-hidden group relative shrink-0 bg-bg-surface-hover flex items-center justify-center border border-border-subtle"
        onClick={() => onImageClick(cert.image)}
      >
        <img 
          src={cert.image} 
          alt={cert.title}
          className="max-w-full max-h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-200 rounded-xl">
          <span className="text-white opacity-0 group-hover:opacity-100 font-mono text-sm bg-black/50 px-3 py-1 rounded-lg">
            Click to enlarge
          </span>
        </div>
      </div>

      {/* Card Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs font-mono font-medium px-2 py-0.5 rounded border ${categoryStyle}`}>
          {categoryLabel}
        </span>
      </div>

      {/* Card Title */}
      <h3 className="font-mono font-semibold text-text-primary mb-1">{cert.title}</h3>
      
      {/* Card Meta */}
      <p className="text-text-muted text-sm font-sans mb-3">
        {cert.issuer} · {formatDate(cert.date)}
        {cert.expiry && ` · Expires ${formatDate(cert.expiry)}`}
      </p>

      {/* Card Description */}
      <p className="text-text-primary/80 text-sm font-sans line-clamp-3 mb-3">
        {cert.description}
      </p>

      {/* Card Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {cert.tags.filter(tag => tag !== 'important').map(tag => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>

      {/* Card Bottom - pushed to bottom with margin-top: auto */}
      <div className={`mt-auto ${hasCredential ? 'pt-3 border-t border-border-subtle' : ''}`}>
        {hasCredential && (
          <div className="flex items-center justify-between gap-3 bg-bg-surface-hover rounded-lg px-3 py-2 border border-border-subtle">
            {cert.credential_id && (
              <div className="flex items-center gap-2 min-w-0">
                <Award className="w-3 h-3 text-accent-green shrink-0" />
                <span className="text-text-muted text-[10px] font-mono truncate" title={cert.credential_id}>
                  {cert.credential_id}
                </span>
              </div>
            )}
            {cert.verify_url && (
              <a
                href={cert.verify_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 shrink-0 text-accent-blue text-xs font-mono hover:underline"
              >
                Verify <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
