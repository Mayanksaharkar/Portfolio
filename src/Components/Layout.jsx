import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className='lg:px-40 md:px-4 sm:px-2'>
        {/* <Fade bottom> */}
        <div
          className='sticky top-0 z-20 mt-8
         backdrop-blur-lg   rounded-3xl border border-base-300'
        >
          <Header />
        </div>
        <Outlet />
        <div className='drop-shadow-xl mb-8'>
          <Footer />
        </div>
        {/* </Fade> */}
      </div>
    </>
  );
}

export default Layout;
