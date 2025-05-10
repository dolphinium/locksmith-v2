import Layout from '@/components/Layout';
import ServicesSection from '@/components/ServicesSection';
import styles from '@/styles/Hizmetlerimiz.module.css'; // We'll create this for page-specific styles if needed

const HizmetlerimizPage = () => {
  return (
    <Layout title="Hizmetlerimiz - Rem Anahtar">
      <div className={styles.hizmetlerimizPage}>
        {/* Optional: Add a hero banner similar to Hakkimizda if the live site has one for this page */}
        {/* <div className={styles.heroBanner}>
          <h1 className={styles.pageTitle}>Hizmetlerimiz</h1>
        </div> */}
        
        {/* The ServicesSection already has its own title "HİZMETLERİMİZ" */}
        <ServicesSection />
      </div>
    </Layout>
  );
};

export default HizmetlerimizPage;
