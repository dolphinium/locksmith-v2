import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';

const servicesData = [
  {
    id: 1,
    title: '7/24 Çilingir Hizmeti (Ev, Oto, Kasa)',
    description: 'Günün her saati ev, araç veya kasa çilingir hizmeti sağlıyoruz. Acil durumlarınızda güvenli ve hızlı çözümler sunuyoruz.',
    imageUrl: '/cilingir.webp'
  },
  {
    id: 2,
    title: 'Kumandalı Anahtar Yapımı',
    description: 'Araç ve benzeri sistemler için kumandalı anahtar üretimi yapıyoruz. Orijinaline en yakın kalitede çözümler sunuyoruz.',
    imageUrl: '/kumandalı_anahtar.webp',
  },
  {
    id: 3,
    title: 'Yedek Anahtar Çoğaltma',
    description: 'Ev, araç ve iş yeri anahtarlarınız için hızlı ve güvenilir yedek anahtar çoğaltma hizmeti sağlıyoruz.',
    imageUrl: '/anahtar_cogaltma.webp',
  },
  {
    id: 4,
    title: 'Kilit Sistemleri Montaj ve Tamiri',
    description: 'Tüm kilit sistemlerinin montajı, bakımı ve tamiri uzman ekibimiz tarafından titizlikle yapılmaktadır.',
    imageUrl: '/kilit_montaj.webp',
  },
  {
    id: 5,
    title: 'Kumanda Tamiri (Garaj, Kepenk vb.)',
    description: 'Garaj, kepenk ve benzeri sistemlere ait kumandaların tamiri, tuş değişimi ve teknik desteği sağlıyoruz.',
    imageUrl: '/kumanda_tamiri.webp',
  },
  {
    id: 6,
    title: 'Elektronik Anahtar Çözümleri',
    description: 'Modern araçlar ve güvenlik sistemleri için elektronik anahtar üretimi, kodlama ve çoğaltma hizmetleri sunuyoruz.',
    imageUrl: '/elektronik-anahtar.webp',
  },
];


const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.titleContainer}>
        <span className={styles.titleHighlight}></span>
        <h2 className={styles.title}>HİZMETLERİMİZ</h2>
      </div>
      <div className={styles.grid}>
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            videoLink={service.videoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
