import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menus from "./components/Menus/menus";
import Banner from "./components/Banners/Banner";
import Banner2 from "./components/Banners/Banner2";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Menus />
        <Banner/>
        <Banner2/>
        <Footer></Footer>
      </main>
    </>
  );
};

export default App;
