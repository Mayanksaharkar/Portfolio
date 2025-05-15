import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer p-10 lg:px-36  bg-transparent backdrop-blur-sm text-neutral">
      <aside>
        <div>
          <span className="lg:text-4xl font-extrabold text-2xl">
            Thanks For Visiting!
          </span>
          <br />

          <div className="lg:text-lg mt-6 text-sm">
            Got questions, comments, or feedback?
            <br />
            Feel free to reach out and contact me.
          </div>
          <a
            href="mailto:mayanksaharkar@gmail.com?subject=Hello!"
            target="_blank"
            className="btn mt-5 bg-primary text-base-100 rounded-xl drop-shadow-2xl border-none hover:bg-base-100 hover:text-primary lg:mt-4 lg:text-2xl text-lg"
            rel="noreferrer"
          >
            Contact
          </a>
        </div>
      </aside>
      <nav>
        <header className="footer-title text-primary sm:text-base">
          Social
        </header>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.hackerrank.com/profile/mayanksaharkar"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="fill-neutral lg:w-10 lg:h-10 w-8 h-8 hover:fill-primary animate-pulse hover:scale-150 hover:animate-none transition-transform"
            >
              <path d="M477.5 128C463 103.1 285.1 0 256.2 0S49.3 102.8 34.8 128s-14.5 230.8 0 256 192.4 128 221.3 128S463 409.1 477.5 384s14.5-231 0-256zM316.1 414.2c-4 0-40.9-35.8-38-38.7 .9-.9 6.3-1.5 17.6-1.8 0-26.2 .6-68.6 .9-86.3 0-2-.4-3.4-.4-5.9h-79.9c0 7.1-.5 36.2 1.4 72.9 .2 4.5-1.6 6-5.7 5.9-10.1 0-20.3-.1-30.4-.1-4.1 0-5.9-1.5-5.7-6.1 .9-33.4 3-84-.2-212.7v-3.2c-9.7-.4-16.4-1-17.3-1.8-2.9-2.9 34.5-38.7 38.5-38.7s41.2 35.8 38.3 38.7c-.9 .9-7.9 1.5-16.8 1.8v3.2c-2.4 25.8-2 79.6-2.6 105.4h80.3c0-4.6 .4-34.7-1.2-83.6-.1-3.4 1-5.2 4.2-5.2 11.1-.1 22.2-.1 33.2-.1 3.5 0 4.6 1.7 4.5 5.4C333 354.6 336 341.3 336 373.7c8.9 .4 16.8 1 17.7 1.8 2.9 2.9-33.6 38.7-37.6 38.7z" />
            </svg>
          </a>
          <a
            href="http://www.linkedin.com/in/mayank-saharkar-508038275"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="fill-neutral lg:w-10 lg:h-10 w-8 h-8 hover:fill-primary animate-pulse hover:scale-150 hover:animate-none transition-transform"
            >
              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
          </a>
          <a
            href="https://github.com/Mayanksaharkar"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              className="fill-neutral lg:w-10 lg:h-10 w-8 h-8 hover:fill-primary animate-pulse hover:scale-150 hover:animate-none transition-transform"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
            </svg>
          </a>
        </div>
      </nav>
      <nav className="opacity-80  w-full lg:justify-center">
        <header className="footer-title text-primary sm:text-base">
          Navigation
        </header>
        <div className="grid grid-flow-row gap-4 lg:text-lg font-semibold ml-4 text-sm">
          <Link
            className="hover:text-primary hover:scale-150 transition"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-primary  hover:scale-150 transition"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="hover:text-primary hover:scale-150 transition"
            to="/about"
          >
            About
          </Link>
          {/* <Link
            className="hover:text-primary hover:scale-150 transition"
            to="/"
          >
            Contact
          </Link> */}
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
