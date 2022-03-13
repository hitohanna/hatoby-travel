import Hero from "../components/Hero";
import Jumbo from "../components/Jumbo";
import Layout from "../components/Layout";
import Penginapan from "../components/Penginapan";
import Why from "../components/Why";
import WisFavorit from "../components/WisFavorit";

export default function Home() {
  return (
    <Layout tittle="Hatoby Travel">
      <Hero />
      <WisFavorit />
      <Jumbo />
      <Penginapan />
      <Why />
    </Layout>
  );
}
