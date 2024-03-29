import FastSection from "./components/FastSection";
import Footer from "./components/Footer";
import LightSection from "./components/LightSection";
import Navbar from "./components/Navbar";
import PowerfulSection from "./components/PowerfulSection";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Navbar />
      <Product />
      <LightSection />
      <FastSection />
      <PowerfulSection />
      <Footer />
    </div>
  );
};

export default App;
