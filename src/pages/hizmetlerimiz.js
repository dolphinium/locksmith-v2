import Layout from '@/components/Layout';
import ServicesSection from '@/components/ServicesSection';
import styles from '@/styles/Hizmetlerimiz.module.css';

const HizmetlerimizPage = () => {
  return (
    <Layout title="Hizmetlerimiz - Anahtarcı Osman">
      <div className={styles.hizmetlerimizPage}>
        <div className={styles.pageHeader}>
          <p className={styles.subTitle}>Sunduğumuz Çözümler</p>
          <h1 className={styles.mainTitle}>Hizmetlerimiz</h1>
        </div>
        
        <ServicesSection />
      </div>
    </Layout>
  );
};

export default HizmetlerimizPage;
