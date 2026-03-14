import React from 'react';

export default function HeroStats({ certificates }) {
  return (
    <div className="py-6">
      <h1 className="font-mono text-4xl md:text-[2.25rem] font-bold mb-2">
        <span className="text-accent-green">&gt;_</span> certificates
      </h1>
      <p className="text-text-muted font-sans">Achievements, Certs & Milestones</p>
    </div>
  );
}
