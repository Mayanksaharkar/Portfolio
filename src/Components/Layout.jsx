import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import { Fade } from "react-reveal";

function Layout() {
  return (
    <>
      <div className='lg:px-80 md:px-4 sm:px-2'>
        {/* <Fade bottom> */}
        <div className='sticky top-0 z-50 backdrop-blur-lg   rounded-3xl border border-base-300'>
          <Header />
        </div>
        <Outlet />
        <div className='drop-shadow-xl'>
          <Footer />
        </div>
        {/* </Fade> */}
      </div>
    </>
  );
}

export default Layout;
