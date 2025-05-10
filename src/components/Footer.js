import styles from './Footer.module.css'; // We'll create this CSS module next

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.section}>
          <h4>Rem Anahtar</h4>
          <p>Oto Elektronik Anahtar Çözümleri</p>
          <p>&copy; {new Date().getFullYear()} Rem Anahtar. Tüm hakları saklıdır.</p>
        </div>
        <div className={styles.section}>
          <h4>Hızlı Linkler</h4>
          <ul>
            <li><a href="/">Anasayfa</a></li>
            <li><a href="/hakkimizda">Hakkımızda</a></li>
            <li><a href="/hizmetlerimiz">Hizmetlerimiz</a></li>
            <li><a href="/bize-ulasin">Bize Ulaşın</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>İletişim</h4>
          <p>Adres: Örnek Mahallesi, Anahtar Sokak No:123, İstanbul</p>
          <p>Telefon: +90 555 123 4567</p>
          <p>Email: bilgi@remanahtar.com</p>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>Bu site bir klon projesidir.</p>
      </div>
    </footer>
  );
};

export default Footer;
