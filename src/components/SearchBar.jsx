import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ value, onSearch }) {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search by title, issuer, or tag..."
        className="w-full bg-bg-surface border border-border-subtle rounded-lg py-3 pl-10 pr-4 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green/50 transition-all duration-200"
      />
    </div>
  );
}
