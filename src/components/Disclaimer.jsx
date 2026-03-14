import React from 'react';
import { Info, Star } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="mb-8 p-4 bg-bg-surface border border-border-subtle rounded-lg">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
        <div className="text-sm text-text-muted">
          <p className="mb-2">
            This page showcases all the certifications I have achieved throughout my life. 
            While I have tried to include every single one, some may be missing.
          </p>
          <p className="text-text-muted/70 text-xs">
            For more details, check my CV/Resume.
          </p>
        </div>
      </div>
    </div>
  );
}
