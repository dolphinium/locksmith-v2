import Layout from '@/components/Layout';
import Image from 'next/image';
import styles from '@/styles/BizeUlasin.module.css'; // We'll create this CSS module

// Placeholder SVGs for social icons - replace with actual icons or a library
const FacebookIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="#1877F2"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.142v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="url(#instaGradient)"><defs><radialGradient id="instaGradient" cx=".3" cy="1.2" r="1.2"><stop offset="0" stopColor="#F09433"/><stop offset=".1" stopColor="#E6683C"/><stop offset=".3" stopColor="#DC2743"/><stop offset=".5" stopColor="#CC2366"/><stop offset=".7" stopColor="#BC1888"/><stop offset=".9" stopColor="#772FBD"/><stop offset="1" stopColor="#4F5BD5"/></radialGradient></defs><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.172.052 1.796.248 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.432.36 1.055.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.583-.07 4.849c-.052 1.172-.248 1.796-.413 2.227a3.487 3.487 0 01-.896 1.382c-.42.419-.82.679-1.381.896-.431.164-1.055.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.583-.013-4.849-.07c-1.172-.052-1.796-.248-2.227-.413a3.492 3.492 0 01-1.381-.896 3.492 3.492 0 01-.896-1.381c-.164-.432-.36-1.055-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.052-1.171.248-1.795.413-2.226a3.492 3.492 0 01.896-1.381 3.492 3.492 0 011.381-.896c.432-.164 1.055-.36 2.227-.413A37.718 37.718 0 0112 2.163zm0 1.802c-3.143 0-3.499.01-4.717.066a2.079 2.079 0 00-1.518.407 2.079 2.079 0 00-.883 1.518c-.056 1.217-.066 1.573-.066 4.717s.01 3.499.066 4.717c.036.78.258 1.25.883 1.518.336.15.77.258 1.518.407 1.217.056 1.573.066 4.717.066s3.499-.01 4.717-.066c.78-.036 1.25-.258 1.518-.407a2.083 2.083 0 00.883-1.518c.056-1.217.066-1.573.066-4.717s-.01-3.499-.066-4.717a2.083 2.083 0 00-.883-1.518 2.079 2.079 0 00-1.518-.407C15.499 3.975 15.143 3.965 12 3.965zM12 9.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm0 7.312a4.562 4.562 0 110-9.123 4.562 4.562 0 010 9.123zM16.802 6.11a1.265 1.265 0 100 2.53 1.265 1.265 0 000-2.53z"/></svg>;


const BizeUlasinPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Mesajınız gönderildi! (Bu bir placeholder mesajıdır.)');
  };

  return (
    <Layout title="Bize Ulaşın - Anahtarcı Osman">
      <div className={styles.bizeUlasinPage}>
        <div className={styles.pageHeader}>
          <p className={styles.subTitle}>Bize Ulaşın</p>
          <h1 className={styles.mainTitle}>Anahtarcı Osman - Lokasyon</h1>
        </div>

        <div className={styles.mapSection}>
          {/* Placeholder for Google Map iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.8182067678995!2d34.3111746!3d36.606687199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d8636756298dbf%3A0x6e8c105691364e49!2sAnahtarc%C4%B1%20Osman!5e0!3m2!1sen!2str!4v1748529134332!5m2!1sen!2str"
            width="100%"
            height="450"
            style={{ border:0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Anahtarcı Osman Lokasyonu"
          ></iframe>
        </div>

        <div className={styles.contactDetailsSection}>
          <div className={styles.infoAndImage}>
            <div className={styles.infoImageContainer}>
              <Image src="/placeholder-remkeys-main.jpg" alt="Remkeys Mağaza" width={400} height={300} objectFit="cover" className={styles.infoImage} />
            </div>
            <div className={styles.infoText}>
              <h3>İletişim Bilgileri</h3>
              <p><strong>Adres:</strong> Merkez Mah. Şehit Süleyman Şahin Sk. No:4/A Erdemli/Mersin, 33780</p>
              <p><strong>Tel:</strong> <a href="tel:+90 532 586 22 28">+90 532 586 22 28</a></p>
              <p><strong>E-Posta:</strong> <a href="mailto:osmananahtarci@gmail.com">osmananahtarci@gmail.com</a></p>
              <h4>Çalışma Saatlerimiz:</h4>
              <p>7/24</p>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <h3>Sosyal Medya Hesaplarımız</h3>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/osmanlevent.kaya.3/" target="_blank" rel="noopener noreferrer"><FacebookIcon /> Facebook</a>
              {/* <a href="https://twitter.com/anahtarciosman" target="_blank" rel="noopener noreferrer"><XIcon /> X</a> */}
              <a href="https://www.instagram.com/anahtarciosman" target="_blank" rel="noopener noreferrer"><InstagramIcon /> Instagram</a>
              {/* <a href="https://www.youtube.com/anahtarciosman" target="_blank" rel="noopener noreferrer"><YouTubeIcon /> Youtube</a> */}
            </div>
          </div>
        </div>

        <div className={styles.contactFormSection}>
          <h3>İletişim Formu</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Ad/Soyad *</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">E-posta *</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Telefon</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Konu *</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mesajınız *</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Gönder</button>
          </form>
        </div>

      </div>
    </Layout>
  );
};

export default BizeUlasinPage;
