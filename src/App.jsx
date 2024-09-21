import "./App.css";
import Banner2 from "./Components/Banner2";
import BannerSection from "./Components/BannerSection";
import Footer from "./Components/Footer";

import HeroSection from "./Components/HeroSection";
import ServicesSection from "./Components/ServicesSection";
import SubScripeBannerSection from "./Components/SubScripeBannerSection";

function App() {
  return (
    <main className="overflow-x-hidden bg-white text-dark" >
      <HeroSection />
      <ServicesSection/>
      {/* <BannerSection/> */}
      <SubScripeBannerSection/>
      {/* <Banner2/> */}
      <Footer/>
    </main>
  );
}

export default App;
