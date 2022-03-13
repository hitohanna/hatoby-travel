import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Navbar />
      <Footer />
    </Layout>
  );
}

export default MyApp;
