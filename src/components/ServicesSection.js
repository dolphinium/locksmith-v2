import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';

const servicesData = [
  {
    id: 1,
    title: 'Yedek Anahtar',
    description: 'Her marka ve model aracınız için yedek anahtar talebinizi yerine getiriyoruz. Bu işlem için araç sahibi ve ruhsatın olması birincil kuralımızdır.',
    imageUrl: '/placeholder-service1.jpg', // Replace with actual or better placeholder
    videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Example video link
  },
  {
    id: 2,
    title: 'Kayıp Anahtar',
    description: 'Kayıp anahtar işlemi için, kaybolan anahtarlarınızın işlevini sonlandırarak yeni bir anahtar üretiyoruz. Bu işlem için araç sahibi ve ruhsatın olması birincil kuralımızdır.',
    imageUrl: '/placeholder-service2.jpg',
  },
  {
    id: 3,
    title: 'Kumanda Tamiri',
    description: 'Araçlarınızın uzaktan kumanda tamirlerini uzman ekibimiz ile Rem Anahtar servisimizde sorunsuz bir şekilde gerçekleştiriyoruz.',
    imageUrl: '/placeholder-service3.jpg',
  },
  {
    id: 4,
    title: 'Immobilizer',
    description: 'Aracınız için immobilizer anahtar, çoğaltma, kopyalama, değiştirme, tamir ve yenileme hizmetlerimiz mevcuttur.',
    imageUrl: '/placeholder-service4.jpg',
  },
  {
    id: 5,
    title: 'Kumanda Kap & Pil Değişimi',
    description: 'Aracınızın yıpranmış, tuşları bozulmuş veya deforme olmuş kumandalarınızı yeniliyoruz. Kumandanızın pili kullanım ömrü doldu ise kumanda pilinizi değiştiriyoruz.',
    imageUrl: '/placeholder-service5.jpg',
  },
  // Add more services as needed from the original site
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
