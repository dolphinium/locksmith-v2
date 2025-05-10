import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import VideosSection from '@/components/VideosSection';
// import MostReadSection from '@/components/MostReadSection'; // Removed
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
// Import section components once they are created

export default function HomePage() {
  return (
    <Layout title="Rem Anahtar - Anasayfa">
      <HeroSection />
      <ServicesSection />
      <VideosSection />
      {/* <MostReadSection /> Removed */}
      <WhatsAppButton />
      <CallButton />
      {/* Placeholder text removed, sections will fill the page */}
    </Layout>
  );
}
