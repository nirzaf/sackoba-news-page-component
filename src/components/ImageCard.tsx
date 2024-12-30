import React from 'react';
import type { NewsImage } from '../types/news';

interface ImageCardProps {
  image: NewsImage;
  onClick: () => void;
}

export function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <div className="break-inside-avoid mb-4">
      <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
        onClick={onClick}
      >
        <div className="relative">
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute top-2 right-2">
            <span className="px-2 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full">
              {image.category}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{image.title}</h3>
          <p className="text-sm text-gray-600">{image.description}</p>
        </div>
      </div>
    </div>
  );
}