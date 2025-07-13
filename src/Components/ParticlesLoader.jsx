import React, { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./particlesOptions";

const ParticlesLoader = () => {
  const [init, setInit] = useState(false);
  const [ParticlesComponent, setParticlesComponent] = useState(null);

  useEffect(() => {
    // Only load particles after initial render to improve performance
    const loadParticles = async () => {
      try {
        const { default: Particles } = await import("@tsparticles/react");
        setParticlesComponent(() => Particles);
        
        await initParticlesEngine(async (engine) => {
          await loadFull(engine);
        });
        
        setInit(true);
      } catch (error) {
        console.warn("Failed to load particles:", error);
      }
    };

    // Delay loading to prioritize critical content
    const timer = setTimeout(loadParticles, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!init || !ParticlesComponent) {
    return null;
  }

  return <ParticlesComponent options={particlesOptions} />;
};

export default ParticlesLoader;