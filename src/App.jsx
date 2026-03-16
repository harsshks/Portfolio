import { lazy, Suspense } from "react";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import ImageGallery from "./sections/ImageGallery";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const Hero = lazy(() => import("./sections/Hero"));

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Hero />
      </Suspense>
      <About />
      <Projects />
      <Experiences />
      <ImageGallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
