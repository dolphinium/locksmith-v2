import Link from 'next/link';
import styles from './Footer.module.css'; // We'll create this CSS module next

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.section}>
          <h4>Anaharcı Osman</h4>
          <p>Oto Elektronik Anahtar ve Çilingirlik Hizmetleri</p>
          <p>&copy; {new Date().getFullYear()} Anahtarcı Osman. Tüm hakları saklıdır.</p>
        </div>
        <div className={styles.section}>
          <h4>Hızlı Linkler</h4>
          <ul>
            <li><Link href="/" legacyBehavior><a>Anasayfa</a></Link></li>
            <li><Link href="/hakkimizda" legacyBehavior><a>Hakkımızda</a></Link></li>
            <li><Link href="/hizmetlerimiz" legacyBehavior><a>Hizmetlerimiz</a></Link></li>
            <li><Link href="/bize-ulasin" legacyBehavior><a>Bize Ulaşın</a></Link></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>İletişim</h4>
          <p>Adres: Merkez Mah. Şehit Süleyman Şahin Sk. No:4/A Erdemli/Mersin, 33780</p>
          <p>Telefon: +90 532 586 22 28</p>
          <p>Email: anahtarciosman33@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
