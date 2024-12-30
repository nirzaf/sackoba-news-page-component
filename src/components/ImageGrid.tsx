import React from 'react';
import type { NewsImage } from '../types/news';
import { ImageCard } from './ImageCard';
import { ImageModal } from './ImageModal';
import { useImageNavigation } from '../hooks/useImageNavigation';

interface ImageGridProps {
  images: NewsImage[];
}

export function ImageGrid({ images }: ImageGridProps) {
  const {
    selectedImage,
    openImage,
    closeImage,
    nextImage,
    previousImage,
    hasNext,
    hasPrevious
  } = useImageNavigation(images);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 p-4">
        {images.map((image, index) => (
          <ImageCard 
            key={index} 
            image={image} 
            onClick={() => openImage(index)}
          />
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={closeImage}
          onNext={nextImage}
          onPrevious={previousImage}
          hasNext={hasNext}
          hasPrevious={hasPrevious}
        />
      )}
    </>
  );
}