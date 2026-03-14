import React, { useState, useMemo } from 'react';
import HeroStats from './HeroStats';
import FilterBar from './FilterBar';
import SearchBar from './SearchBar';
import CertCard from './CertCard';
import Lightbox from './Lightbox';
import Footer from './Footer';

export default function CertificatesApp({ certificates }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxUrl, setLightboxUrl] = useState(null);

  const filtered = useMemo(() => {
    return certificates
      .filter(c => activeFilter === 'all' || c.category === activeFilter)
      .filter(c => {
        const q = searchQuery.toLowerCase();
        return (
          c.title.toLowerCase().includes(q) ||
          c.issuer.toLowerCase().includes(q) ||
          c.tags.some(t => t.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.date.localeCompare(a.date);
      });
  }, [certificates, activeFilter, searchQuery]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <HeroStats certificates={certificates} />
      
      <SearchBar value={searchQuery} onSearch={setSearchQuery} />
      <FilterBar 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
        certificates={certificates}
      />

      {filtered.length === 0 ? (
        <div className="col-span-full text-center py-16 text-text-muted font-mono">
          <p className="text-4xl mb-4">¯\_(ツ)_/¯</p>
          <p>No certificates found for "{searchQuery}"</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(cert => (
            <CertCard 
              key={cert.id} 
              cert={cert} 
              onImageClick={setLightboxUrl} 
            />
          ))}
        </div>
      )}

      <Lightbox 
        isOpen={!!lightboxUrl}
        imageUrl={lightboxUrl}
        onClose={() => setLightboxUrl(null)}
      />

      <Footer />
    </div>
  );
}
