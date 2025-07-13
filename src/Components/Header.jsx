import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback, memo } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

const Header = memo(function Header() {
  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem("isdark"))
  );
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    localStorage.setItem("isdark", JSON.stringify(isdark));
    const body = document.getElementsByTagName("body")[0];
    if (isdark) {
      body.setAttribute("data-theme", "light");
    } else {
      body.setAttribute("data-theme", "dark");
    }
  }, [isdark]);

  const handleThemeToggle = useCallback(() => {
    setIsdark(!isdark);
  }, [isdark]);

  const handleNavToggle = useCallback(() => {
    setOpenNav(!openNav);
  }, [openNav]);

  const closeNav = useCallback(() => {
    setOpenNav(false);
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 p-6 lg:p-2 lg:flex-row lg:items-center lg:gap-6 lg:text-xl text-base font-extrabold 
                 lg:bg-transparent lg:shadow-none lg:border-none lg:rounded-none lg:backdrop-blur-none
                 bg-base-100/95 backdrop-blur-xl shadow-2xl border border-primary/10 rounded-3xl 
                 transition-all duration-300 ease-in-out max-w-sm mx-auto lg:max-w-none">
    
    
    <Typography
      as="li"
      variant="small"
      className="p-2 font-myfont font-bold transition-all duration-200 rounded-xl hover:bg-primary/10 hover:scale-105"
    >
      <Link
        to="/home"
        onClick={closeNav}
        className="flex text-neutral items-center font-myfont justify-center lg:justify-start py-2 px-3"
      >
        Home
      </Link>
    </Typography>
    
    <Typography
      as="li"
      variant="small"
      className="p-2 font-bold font-myfont transition-all duration-200 rounded-xl hover:bg-primary/10 hover:scale-105"
    >
      <Link
        to="/projects"
        onClick={closeNav}
        className="flex text-neutral items-center justify-center lg:justify-start py-2 px-3"
      >
        Projects
      </Link>
    </Typography>
    
    <Typography
      as="li"
      variant="small"
      className="p-2 text-neutral font-bold font-myfont transition-all duration-200 rounded-xl hover:bg-primary/10 hover:scale-105"
    >
      <Link
        to="/about"
        onClick={closeNav}
        className="flex text-neutral items-center justify-center lg:justify-start py-2 px-3"
      >
        About
      </Link>
    </Typography>

    {/* Theme Toggle */}
    <div className="flex justify-center items-center my-4 lg:my-0">
      <div className="bg-primary/5 p-2 rounded-2xl border border-primary/20 shadow-lg lg:bg-transparent lg:rounded-full lg:border-none lg:shadow-none">
        <label className="swap swap-rotate p-3 lg:p-2 rounded-xl cursor-pointer transition-colors duration-200 hover:bg-primary/10">
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
            onChange={handleThemeToggle}
          />
          <svg
            className="swap-on fill-primary w-8 h-8 lg:w-10 lg:h-10 transition-transform duration-200 hover:scale-110"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-off fill-primary w-8 h-8 lg:w-10 lg:h-10 transition-transform duration-200 hover:scale-110"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>

    {/* Contact Button */}
    <div className="flex justify-center items-center mt-4 lg:mt-0">
      <Typography
        as="li"
        variant="small"
        className="p-2 font-normal"
      >
        <a
          href="mailto:mayanksaharkar@gmail.com?subject=Hello!"
          target="_blank"
          className="btn bg-primary text-base-100 rounded-2xl drop-shadow-xl border-none 
                     hover:bg-base-100 hover:text-primary hover:scale-105 
                     transition-all duration-300 ease-in-out
                     px-8 py-3 text-base font-semibold shadow-lg
                     min-w-[120px] justify-center w-full lg:w-auto"
          rel="noreferrer"
        >
          Contact
        </a>
      </Typography>
    </div>
  </ul>
);

  return (
    <>
      <Navbar className="border-none sticky lg:mt-4 bg-base-100/95  z-50 lg:w-[80%]  backdrop-blur-lg w-full rounded-none  lg:rounded-3xl   flex-row shadow-base-300 shadow-md align-middle justify-between top-0  h-max max-w-full px-4 py-4 pb-2 lg:px-8 lg:py-2 ">
        <div className="flex items-center justify-between text-primary  rounded-md">
          <Link
            to={"/"}
            className="mr-4  py-1.5  font-bold lg:text-2xl md:text-lg sm:text-md"
          >
            Mayank Saharkar
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden   lg:block">{navList}</div>

            <IconButton
              variant="text"
              className=" items-center h-full justify-center flex text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={handleNavToggle}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </>
  );
});

export default Header;
