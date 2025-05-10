import Link from 'next/link';
import styles from './Header.module.css'; // We'll create this CSS module next

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/" legacyBehavior>
          <a className={styles.logo}>
            remanahatar
            <span className={styles.logoSubtitle}>Oto Elektronik Anahtar</span>
          </a>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/" legacyBehavior><a>Anasayfa</a></Link>
        <Link href="/hakkimizda" legacyBehavior><a>Hakkımızda</a></Link>
        <Link href="/hizmetlerimiz" legacyBehavior><a>Hizmetlerimiz</a></Link>
        <Link href="/bize-ulasin" legacyBehavior><a>Bize Ulaşın</a></Link>
      </nav>
      <div className={styles.actions}>
        {/* Search Icon Removed */}
      </div>
    </header>
  );
};

export default Header;
