import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='navbar bg-base-100 drop-shadow-lg rounded-lg'>
      <div className='navbar-start '>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-primary'
          >
            <li>
              <Link to='/home'>home</Link>
            </li>

            <li>
              <Link to='portfolio'>portfolio</Link>
            </li>

            <li>
              <Link to='about'>about</Link>
            </li>
          </ul>
        </div>
        <Link to='/home' className='btn btn-ghost text-lg text-nuetral'>
          Mayank Saharkar
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 font-semibold text-primary '>
          <li>
            <Link to='/home'>home</Link>
          </li>

          <li>
            <Link to='portfolio'>portfolio</Link>
          </li>

          <li>
            <Link to='about'>about</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <a className='btn bg-primary border-none text-primary-content  drop-shadow-md hover:text-primary '>
          Contact
        </a>
      </div>
    </div>
  );
}

export default Header;
