import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState, Suspense, lazy } from "react";
import ScrollToTop from "./ScrollToTop";

// Lazy load particles for better initial load performance
const Particles = lazy(() => import("@tsparticles/react"));
const ParticlesLoader = lazy(() => import("./ParticlesLoader.jsx"));

function Layout() {
  const [init, setInit] = useState(false);

  return (
    <div className="flex flex-col min-h-screen justify-between items-center bg-base-100">
      <Suspense fallback={null}>
        <ParticlesLoader />
      </Suspense>
      <ScrollToTop />
      <Header />
      <main className="flex-grow min-h-[100dvh]  z-40">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
