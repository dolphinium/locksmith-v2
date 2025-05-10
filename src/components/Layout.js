import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Layout = ({ children, title = 'Rem Anahtar' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Add other common meta tags here if needed */}
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <style jsx global>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          line-height: 1.6;
          background-color: #f0f2f5; /* A light grey background, can be adjusted */
        }
        main {
          min-height: calc(100vh - 120px); /* Adjust based on header/footer height */
          padding: 1rem; /* Add some padding to the main content area */
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default Layout;
