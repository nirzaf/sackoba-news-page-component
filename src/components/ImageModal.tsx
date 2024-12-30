import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { NewsImage } from '../types/news';

interface ImageModalProps {
  image: NewsImage;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export function ImageModal({ 
  image, 
  onClose, 
  onNext, 
  onPrevious, 
  hasNext, 
  hasPrevious 
}: ImageModalProps) {
  // Close modal when clicking escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="relative w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        {hasPrevious && (
          <button 
            onClick={onPrevious}
            className="absolute left-4 text-white hover:text-gray-300 p-2"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
        )}

        {hasNext && (
          <button 
            onClick={onNext}
            className="absolute right-4 text-white hover:text-gray-300 p-2"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        )}

        <div className="max-w-[90vw] max-h-[90vh]">
          <img
            src={image.url}
            alt={image.title}
            className="max-w-full max-h-[90vh] object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
            <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
            <p className="text-sm text-gray-200">{image.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}