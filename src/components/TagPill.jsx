import React from 'react';

export default function TagPill({ tag }) {
  return (
    <span className="bg-tag-bg text-accent-green text-xs font-mono rounded-full px-2 py-0.5 border border-accent-green/20">
      {tag}
    </span>
  );
}
