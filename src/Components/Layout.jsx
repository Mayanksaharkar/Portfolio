import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ParticleBackground from "react-particle-backgrounds";

function Layout() {
  const settings2 = {
    particle: {
      particleCount: 150,
      color: "#6587ff",
      maxSize: 3,
    },
    velocity: {
      directionAngle: 180,
      directionAngleVariance: 60,
      minSpeed: 0.1,
      maxSpeed: 0.5,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 10000,
    },
  };

  return (
    <div
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
      className="flex flex-col justify-between w-full items-center" 
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <ParticleBackground settings={settings2} />
      </div>

      <div
        className="sticky top-0 z-10 backdrop-blur-sm lg:w-[80%] w-full border border-neutral-content lg:rounded-3xl  bg-opacity-50"
        style={{
          position: "sticky",
          top: 0,
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

      <div className="drop-shadow-xl mb-8 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
