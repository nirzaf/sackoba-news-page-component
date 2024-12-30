import React from 'react';
import { ImageGrid } from './components/ImageGrid';
import { newsImages } from './data/images';
import { Camera } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Camera className="h-6 w-6 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-900">SACKOBA Photo Gallery</h1>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6">
        <ImageGrid images={newsImages} />
      </main>
    </div>
  );
}

export default App;