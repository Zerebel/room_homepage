import Footer from "./components/footer";
import HeroSection from "./components/hero";
import { Navbar } from "./components/navbar";
import { pageData } from "./data/data";

function App() {
  return (
    <div className="mx-auto lg:max-w-[140rem] relative">
      <header className="sticky z-10">
        <Navbar />
      </header>
      <div className="lg:min-h-svh flex flex-col">
        <HeroSection info={pageData} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
