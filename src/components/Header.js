import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/" legacyBehavior>
          <a className={styles.logo}>
            Anahtarcı Osman
            <span className={styles.logoSubtitle}>Oto Elektronik Anahtar ve Çilingirlik Hizmetleri</span>
          </a>
        </Link>
      </div>
      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menüyü aç/kapat">
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <Link href="/" legacyBehavior><a onClick={toggleMenu}>Anasayfa</a></Link>
        <Link href="/hakkimizda" legacyBehavior><a onClick={toggleMenu}>Hakkımızda</a></Link>
        <Link href="/hizmetlerimiz" legacyBehavior><a onClick={toggleMenu}>Hizmetlerimiz</a></Link>
        <Link href="/bize-ulasin" legacyBehavior><a onClick={toggleMenu}>Bize Ulaşın</a></Link>
      </nav>
      <div className={styles.actions}>
        {/* Search Icon Removed */}
      </div>
    </header>
  );
};

export default Header;
