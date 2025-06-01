import Layout from '@/components/Layout';
import Image from 'next/image';
import styles from '@/styles/Hakkimizda.module.css';

const HakkimizdaPage = () => {
  const galleryImages = [
    { id: 1, src: '/dukkan-dis.jpeg'},
    { id: 2, src: '/dukkan-main.jpg'},
    { id: 3, src: '/dukkan-dis-2.jpeg'},
    { id: 4, src: '/dukkan-dis-3.jpeg'},
  ];

  return (
    <Layout title="Hakkımızda - Anahtarcı Osman">
      <div className={styles.hakkimizdaPage}>
        <div className={styles.pageHeader}>
          <p className={styles.subTitle}>Şirket Profili</p>
          <h1 className={styles.mainTitle}>Hakkımızda</h1>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.imageSection}>
            <Image
              src="/dukkan-ic.jpeg" // Replace with actual image path
              width={600} // Adjust as per original image aspect ratio
              height={400} // Adjust as per original image aspect ratio
              className={styles.mainImage}
            />
          </div>
          <div className={styles.textSection}>
            <h2>HAKKIMIZDA</h2>
            <p>
              Osman Levent Kaya yönetimindeki Anahtarcı Osman, 1995 yılından bu yana Erdemli ve çevresinde profesyonel çilingirlik ve anahtar çözümleri sunmaktadır.
            </p>
            <p>
              Müşteri memnuniyetini ön planda tutarak, 7 gün 24 saat kesintisiz hizmet vermekteyiz.
            </p>
            <p>
              Ev, oto, kasa çilingir hizmetlerinin yanı sıra, kumandalı anahtar yapımı, yedek anahtar çoğaltma, kilit sistemleri ve garaj/kepenk kumanda tamiri gibi geniş bir yelpazede hizmet sunuyoruz.
            </p>
            <p>
              Teknolojiyi yakından takip ederek, elektronik anahtar çözümlerinde de yanınızdayız.
            </p>
          </div>

        </div>

        {galleryImages.length > 0 && (
          <div className={styles.gallerySection}>
            <h3>Galerimiz</h3>
            <div className={styles.galleryGrid}>
              {galleryImages.map((image) => (
                <div key={image.id} className={styles.galleryItem}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={150}
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HakkimizdaPage;
