import { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const GallerySection = ({ title, images }) => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="photo-sub">
      {/* Section Title */}
      <h2>{title}</h2>

      {/* The Grid */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
            <img src={img.src} alt={`${title} ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* The Lightbox Modal (Only shows if currentIndex is not null) */}
      {currentIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[currentIndex].src} alt="Full screen" />
            
            {/* Buttons */}
            <div className="lightbox-close" onClick={closeLightbox}><FaTimes /></div>
            <div className="lightbox-nav nav-prev" onClick={showPrev}><FaChevronLeft /></div>
            <div className="lightbox-nav nav-next" onClick={showNext}><FaChevronRight /></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;