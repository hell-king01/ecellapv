import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

type ImageType = {
  id: number;
  src: string;
  category: string;
};

const categories = [
  { id: 'all', name: 'All' },
  { id: 'team', name: 'Team' },
  { id: 'pitchnova', name: 'Pitchnova' },
  { id: 'seminar', name: 'Seminar' },
  { id: 'quiznova', name: 'Quiznova' },
  { id: 'grpdis', name: 'Group Discussion' },
  { id: 'lnkdinpres', name: 'LinkedIn Presentation' },
  { id: 'illuminate', name: 'Illuminate' },
];

// Gallery images organized by category
const allImages: ImageType[] = [
  // Team photo
  { id: 0, src: '/group photo.png', category: 'team' },
  
  //Group Discussion images
  { id: 1, src: '/grpdis1.jpg', category: 'grpdis' },
  { id: 2, src: '/grpdis2.JPG', category: 'grpdis' },

  //LinkedIn Presentation images
  { id: 3, src: '/lnkdinpress1.JPG', category: 'lnkdinpres' },
  { id: 4, src: '/lnkdinpress2.JPG', category: 'lnkdinpres' },
  { id: 5, src: '/lnkdinpress3.JPG', category: 'lnkdinpres' },
  { id: 6, src: '/lnkdinpress4.png', category: 'lnkdinpres' },
  { id: 7, src: '/lnkdinpress5.png', category: 'lnkdinpres' },

  // Illuminate images
  { id: 8, src: '/illu1.jpeg', category: 'illuminate' },
  { id: 9, src: '/illu2.jpeg', category: 'illuminate' },
  { id: 10, src: '/illu3.jpeg', category: 'illuminate' },
  { id: 11, src: '/illu4.jpeg', category: 'illuminate' },
  { id: 12, src: '/illu5.jpeg', category: 'illuminate' },
  { id: 13, src: '/illu6.jpeg', category: 'illuminate' },
  { id: 14, src: '/illu7.jpeg', category: 'illuminate' },
  { id: 15, src: '/illu8.jpeg', category: 'illuminate' },
  
  // Pitchnova images
  { id: 16, src: '/pitch1.jpeg', category: 'pitchnova' },
  { id: 17, src: '/pitch2.jpeg', category: 'pitchnova' },
  { id: 18, src: '/pitch3.jpeg', category: 'pitchnova' },
  { id: 19, src: '/pitch4.jpeg', category: 'pitchnova' },
  { id: 20, src: '/pitch5.jpeg', category: 'pitchnova' },
  { id: 21, src: '/pitch6.jpeg', category: 'pitchnova' },
  { id: 22, src: '/pitch7.jpeg', category: 'pitchnova' },
  { id: 23, src: '/pitch8.jpeg', category: 'pitchnova' },
  { id: 24, src: '/pitch9.jpeg', category: 'pitchnova' },
  
  // Seminar images
  { id: 25, src: '/semin1.jpeg', category: 'seminar' },
  { id: 26, src: '/semin2.jpeg', category: 'seminar' },
  { id: 27, src: '/semin3.jpeg', category: 'seminar' },
  { id: 28, src: '/semin4.jpeg', category: 'seminar' },
  
  // Quiz Nova images
  { id: 29, src: '/quizn1.jpeg', category: 'quiznova' },
  { id: 30, src: '/quizn2.jpeg', category: 'quiznova' },
  { id: 31, src: '/quizn3.jpeg', category: 'quiznova' },
  { id: 32, src: '/quizn4.jpeg', category: 'quiznova' },
  { id: 33, src: '/quizn5.jpeg', category: 'quiznova' },
];

// Helper function to shuffle array using Fisher-Yates algorithm
const shuffleArray = (array: any[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [shuffledImages, setShuffledImages] = useState<ImageType[]>(allImages);

  // Shuffle images when 'all' category is selected
  useEffect(() => {
    if (selectedCategory === 'all') {
      setShuffledImages(shuffleArray([...allImages]));
    }
  }, [selectedCategory]);

  const filteredImages = selectedCategory === 'all' 
    ? shuffledImages 
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
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={image.src}
                    alt={`${image.category} ${image.id}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMxZDI0MmUiLz48dGV4dCB4PSIzNSIgeT0iNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjN2c4Y2FmIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+PC9zdmc+';
                    }}
                  />
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
              <div className="w-full max-h-[80vh] rounded-lg overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={`${selectedImage.category} ${selectedImage.id}`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMxZDI0MmUiLz48dGV4dCB4PSIzNSIgeT0iNTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjN2c4Y2FmIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+PC9zdmc+';
                  }}
                />
              </div>
              <p className="text-gray-400 text-center mt-4">
                {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)} - Image {selectedImage.id}
              </p>
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
