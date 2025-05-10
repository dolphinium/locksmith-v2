import Layout from '@/components/Layout';
import Image from 'next/image';
import styles from '@/styles/Hakkimizda.module.css'; // We'll create this CSS module

const HakkimizdaPage = () => {
  const galleryImages = [
    { id: 1, src: '/placeholder-gallery1.jpg', alt: 'Remkeys Gallery Image 1' },
    { id: 2, src: '/placeholder-gallery2.jpg', alt: 'Remkeys Gallery Image 2' },
    { id: 3, src: '/placeholder-gallery3.jpg', alt: 'Remkeys Gallery Image 3' },
    { id: 4, src: '/placeholder-gallery4.jpg', alt: 'Remkeys Gallery Image 4' },
  ];

  return (
    <Layout title="Hakkımızda - Rem Anahtar">
      <div className={styles.hakkimizdaPage}>
        <div className={styles.heroBanner}>
          {/* The original site has a large banner image here, often part of the header or a separate component.
              For simplicity, we'll use a colored div or a simple banner text.
              The actual header is handled by Layout.js.
              The "OTO ANAHTARCI GİRİŞİ" button is also part of the main header.
          */}
          <h1 className={styles.pageTitle}>Hakkımızda</h1>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.imageSection}>
            <Image
              src="/placeholder-remkeys-main.jpg" // Replace with actual image path
              alt="Remkeys Automotive Locksmith Supply"
              width={600} // Adjust as per original image aspect ratio
              height={400} // Adjust as per original image aspect ratio
              className={styles.mainImage}
            />
          </div>
          <div className={styles.textSection}>
            <h2>HAKKIMIZDA</h2>
            <p>
              Rem Anahtar, Oto Çilingir Ürünleri tedariğinde uzmanlaşmış,
              Hollanda ve Türkiye merkezli bir şirkettir.
            </p>
            <p>
              Hem orijinal hem de satış sonrası araç uzaktan kumandası ve
              transponder anahtarlarının dünya çapında distribütörüyüz.
            </p>
            <p>
              Geniş ürün yelpazemiz, en son teknolojiye sahip anahtar kesme
              makineleri, programlama cihazları ve her türlü oto anahtar
              ekipmanlarını kapsamaktadır. Müşteri memnuniyetini ön planda
              tutarak, sektördeki en kaliteli ürünleri ve hizmetleri sunmayı
              amaçlıyoruz.
            </p>
            <p>
              Uzman ekibimiz, sürekli olarak kendini geliştirmekte ve en yeni
              teknolojileri takip ederek müşterilerimize en iyi çözümleri
              sunmaktadır.
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
