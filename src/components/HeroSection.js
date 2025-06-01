import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const images = [
  '/placeholder-gallery1.jpg',
  '/tablet.jpg',
  '/mercedes.jpg',
  '/tablet-2.jpg',
  '/mercedes-2.jpg',
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1); // State for opacity

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0); // Start fading out
      // After a short delay (less than the transition duration), update the image source
      const timeout = setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setOpacity(1); // Fade back in
      }, 500); // Delay should be less than CSS transition duration (1s)
      return () => clearTimeout(timeout); // Clean up timeout
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval
  }, [images.length]); // Depend on images.length if it could change

  return (
    <section className={styles.heroSection}>
      <img
        src={images[currentImageIndex]}
        alt="Background"
        className={styles.backgroundImage}
        style={{ opacity: opacity }} // Apply opacity from state
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Anahtarcı Osman</h1>
        <p>Anahtarcı Osman olarak, yıllardır müşterilerimize güvenilir ve hızlı anahtar çözümleri sunuyoruz.</p>
        {/* Add button or other content here */}
      </div>
    </section>
  );
};

export default HeroSection;
