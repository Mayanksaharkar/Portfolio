import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import {particlesOptions} from "./particlesOptions";
import ScrollToTop from "./ScrollToTop";
function Layout() {
  

  
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
      className="flex flex-col justify-between w-full items-center"
    >
      {init && <Particles options={particlesOptions} />}
      <ScrollToTop smooth={true} duration={1000} />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      ></div>

      <div
        className="top-0 z-10 backdrop-blur-sm lg:w-[80%] w-full border border-neutral-content lg:rounded-3xl bg-opacity-50"
        style={{
          position: "relative",
          backgroundColor: "",
        }}
      >
        <Header />
      </div>

      <div
        style={{ position: "relative", zIndex: 1 }}
        className="lg:px-40 md:px-4 sm:px-2"
      >
        <Outlet />
      </div>

      <div className="drop-shadow-xl w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
