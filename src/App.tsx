import Footer from "./components/footer";
import HeroSection from "./components/hero";

function App() {
  return (
    <div className="mx-auto lg:max-w-[140rem]">
      <div className="lg:min-h-svh flex flex-col">
        <HeroSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
