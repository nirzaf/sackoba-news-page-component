import { useState, useCallback } from 'react';
import type { NewsImage } from '../types/news';

export function useImageNavigation(images: NewsImage[]) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const closeImage = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setSelectedIndex(prev => {
      if (prev === null || prev >= images.length - 1) return prev;
      return prev + 1;
    });
  }, [images.length]);

  const previousImage = useCallback(() => {
    setSelectedIndex(prev => {
      if (prev === null || prev <= 0) return prev;
      return prev - 1;
    });
  }, []);

  return {
    selectedImage: selectedIndex !== null ? images[selectedIndex] : null,
    selectedIndex,
    openImage,
    closeImage,
    nextImage,
    previousImage,
    hasNext: selectedIndex !== null && selectedIndex < images.length - 1,
    hasPrevious: selectedIndex !== null && selectedIndex > 0
  };
}