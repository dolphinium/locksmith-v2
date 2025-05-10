import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
// import MostReadSection from '@/components/MostReadSection'; // Removed
// Import section components once they are created

export default function HomePage() {
  return (
    <Layout title="Anahtarcı Osman - Anasayfa">
      <HeroSection />
      <ServicesSection />
      {/* <MostReadSection /> Removed */}
      {/* Placeholder text removed, sections will fill the page */}
    </Layout>
  );
}
