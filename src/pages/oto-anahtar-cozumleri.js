import Layout from '@/components/Layout';

export default function OtoAnahtarCozumleriPage() {
  return (
    <Layout title="Oto Anahtar Çözümleri - Anahtarcı Osman">
      <div className="container">
        <h1>Oto Anahtar Çözümleri</h1>
        <p>
          Bu sayfa "Oto Anahtar Çözümleri" içeriğini gösterecektir. Klonlama
          sürecinde doldurulacaktır.
        </p>
      </div>
      <style jsx>{`
        .container {
          padding: 2rem;
          text-align: center;
        }
        h1 {
          color: #333;
          margin-bottom: 1rem;
        }
        p {
          color: #555;
          font-size: 1.1rem;
        }
      `}</style>
    </Layout>
  );
}
