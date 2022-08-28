import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroFooter from "./components/HeroFooter";
import Navbar from "./components/Navbar";
import Premium from "./components/Premium";
import TeachersTracks from "./components/Teachers";
import Testimonials from "./components/Testimonials";
import Tracks from "./components/Tracks";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HeroFooter/>
      <Tracks/>
      <Premium/>
      <Testimonials/>
      <TeachersTracks/>
      <Footer/>
    </>
  );
}

export default App;
