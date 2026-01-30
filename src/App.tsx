import Header from './components/Header';
import PromoStrip from './components/PromoStrip';
import Hero from './components/Hero';
import MenuCategories from './components/MenuCategories';
import Offers from './components/Offers';
import WhyKFC from './components/WhyKFC';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <PromoStrip />
      <Header />
      <Hero />
      <MenuCategories />
      <Offers />
      <WhyKFC />
      <Footer />
    </div>
  );
}

export default App;
