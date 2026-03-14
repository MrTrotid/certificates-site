import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 py-8 border-t border-border-subtle">
      <div className="flex items-center justify-center">
        <a 
          href="https://bamanguragain.com.np" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-bg-surface border border-border-subtle rounded-lg text-text-muted hover:text-accent-green hover:border-accent-green transition-all duration-200 font-mono text-sm"
        >
          <ExternalLink className="w-4 h-4" />
          Main Portfolio
        </a>
      </div>
    </footer>
  );
}
