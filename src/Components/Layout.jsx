import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./particlesOptions";
import ScrollToTop from "./ScrollToTop";
function Layout() {
  const [init, setInit] = useState(false);

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true); // Trigger fade-in effect
    }, 100); // Delay to ensure smooth transition
    return () => clearTimeout(timer);
  }, []);
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
    // <div
    //   className={`transition-opacity duration-1000 ${
    //     fadeIn ? "opacity-100" : "opacity-0"
    //   }`}
    // >
    //   <div
    //     style={{  minHeight: "100vh", overflow: "hidden" }}
    //     className="flex flex-col justify-between w-full items-center"
    //   >
    //     {init && <Particles options={particlesOptions} />}
    //     <ScrollToTop smooth={true} duration={1000} />

    //     <div
    //       // className="top-0  sticky  z-50 backdrop-blur-sm lg:w-[80%] w-full border border-neutral-content lg:rounded-3xl bg-opacity-50"

    //     >
    //       <Header />
    //     </div>

    //     <div
    //       style={{ position: "" }}
    //       className="lg:px-40 md:px-4 sm:px-2"
    //     >
    //       <Outlet />
    //     </div>

    //     <div className="drop-shadow-xl w-full">
    //       <Footer />
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col min-h-screen justify-between items-center bg-base-100">
      {init && <Particles options={particlesOptions} />}
       <ScrollToTop smooth={true} duration={1000} />
       {/* <div className="lg:w-[80%] bg-transparent backdrop-blur-sm w-full border border-neutral-content lg:rounded-3xl "> */}
      <Header />
      {/* </div> */}
      <main className="flex-grow p-4 z-40">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
