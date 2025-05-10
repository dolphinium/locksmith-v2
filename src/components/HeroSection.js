import Image from 'next/image'; // Using next/image for optimization
import styles from './HeroSection.module.css';

// Placeholder data - in a real app, this would come from an API or CMS
const featuredServices = [
  {
    id: 1,
    brand: 'RENAULT',
    title: 'Renault Kadjar Yedek Anahtar Yapımı',
    editor: 'Editör',
    date: '5 Kasım 2024',
    imageUrl: '/placeholder-car1.jpg', // Replace with actual or better placeholder
    bgColor: '#2c3e50', // Example background color for the card
  },
  {
    id: 2,
    brand: 'SEAT',
    title: 'Seat Ibiza Yedek Anahtar Yapımı',
    editor: 'Editör',
    date: '22 Mayıs 2024',
    imageUrl: '/placeholder-car2.jpg',
    bgColor: '#34495e',
  },
  {
    id: 3,
    brand: 'SSANGYONG',
    title: 'Ssangyong Tivoli Yedek Anahtar Yapımı',
    editor: 'Editör',
    date: '5 Kasım 2024',
    imageUrl: '/placeholder-car3.jpg',
    bgColor: '#2c3e50',
  },
  {
    id: 4,
    brand: 'SUBARU',
    title: 'Subaru Outback Yedek Anahtar Yapımı',
    editor: 'Editör',
    date: '5 Kasım 2024',
    imageUrl: '/placeholder-car4.jpg',
    bgColor: '#34495e',
  },
];

// Simple SVG for placeholder icons
const EditorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
);

const BookmarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
);


const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.grid}>
        {featuredServices.map((service) => (
          <div key={service.id} className={styles.card} style={{ backgroundColor: service.bgColor }}>
            <div className={styles.imageContainer}>
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                className={styles.image}
              />
              <span className={styles.brandLabel}>{service.brand}</span>
            </div>
            <div className={styles.cardContent}>
              <h3>{service.title}</h3>
              <div className={styles.meta}>
                <span className={styles.editor}><EditorIcon /> {service.editor}</span>
                <span className={styles.date}>{service.date}</span>
              </div>
            </div>
            <div className={styles.bookmark}>
              <BookmarkIcon />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
