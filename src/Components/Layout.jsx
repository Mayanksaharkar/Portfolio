import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import React from "react";

function Layout() {

  return (
    <div className="flex flex-col min-h-screen justify-between items-center bg-base-100">
      
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
