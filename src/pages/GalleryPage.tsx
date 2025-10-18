import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

type ImageType = {
  id: number;
  src: string;
  category: string;
};

const categories = [
  { id: 'all', name: 'All' },
  { id: 'team', name: 'Team' },
  { id: 'bts', name: 'Behind The Scenes' },
  { id: 'illuminate', name: 'Illuminate' },
  { id: 'pitchnova', name: 'Pitchnova' },
  { id: 'other', name: 'Other Events' }
];

// Sample images - replace with your actual image paths
const allImages: ImageType[] = [
  { id: 1, src: '/images/gallery/team1.jpg', category: 'team' },
  { id: 2, src: '/images/gallery/team2.jpg', category: 'team' },
  { id: 3, src: '/images/gallery/bts1.jpg', category: 'bts' },
  { id: 4, src: '/images/gallery/illuminate1.jpg', category: 'illuminate' },
  { id: 5, src: '/images/gallery/pitchnova1.jpg', category: 'pitchnova' },
  { id: 6, src: '/images/gallery/event1.jpg', category: 'other' },
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const filteredImages = selectedCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(filteredImages[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    let newIndex: number;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    } else {
      newIndex = (currentIndex + 1) % filteredImages.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D1F] to-[#151522] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-[#A259FF] to-[#00F0FF] bg-clip-text text-transparent">
          Gallery
        </h1>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Relive the moments from our events and activities
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-[#A259FF] text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-xl cursor-pointer aspect-square bg-gray-800/50 border border-gray-700/50
                          transition-transform duration-300 hover:scale-103"
                onClick={() => openLightbox(index)}
              >
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-gray-500" />
                  <span className="text-gray-400 text-sm mt-2">{image.category}</span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No images found in this category.</p>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            style={{
              opacity: selectedImage ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors p-2"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="max-w-4xl w-full">
              <div className="w-full aspect-video bg-gray-800/50 rounded-lg flex flex-col items-center justify-center">
                <ImageIcon className="w-16 h-16 text-gray-500" />
                <p className="text-gray-400 mt-2">Image preview: {selectedImage.category}</p>
              </div>
            </div>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors p-2"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
