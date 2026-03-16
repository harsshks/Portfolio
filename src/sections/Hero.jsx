import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Environment } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";
import Loader from "../components/Loader";
import ErrorBoundary from "../components/ErrorBoundary";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <ErrorBoundary>
          <Canvas camera={{ position: [0, 1, 3] }}>
            <Suspense fallback={<Loader />}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={0.9} />
              <Environment preset="city" />
              <Astronaut
                position={isMobile ? [0.6, -0.9, 0] : [1.8, -0.8, 0]}
                scale={isMobile ? 0.8 : 1.1}
              />
            </Suspense>
          </Canvas>
        </ErrorBoundary>
      </figure>
    </section>
  );
};

export default Hero;
