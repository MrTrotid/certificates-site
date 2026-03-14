import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Lightbox({ isOpen, imageUrl, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-auto"
      onClick={onClose}
    >
      <button
        className="fixed top-4 right-4 text-white hover:text-accent-green transition-colors z-50 bg-black/50 rounded-full p-2"
        onClick={onClose}
      >
        <X className="w-8 h-8" />
      </button>
      <div 
        className="flex items-center justify-center min-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={imageUrl} 
          alt="Certificate"
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          style={{
            maxWidth: '90vw',
            maxHeight: '90vh'
          }}
        />
      </div>
    </div>
  );
}
