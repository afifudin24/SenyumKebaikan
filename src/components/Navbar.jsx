import React from 'react';
import logo2 from "../assets/logo2.png"
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCircle, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons/faHandHoldingHeart';
const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  
  const isActive = (path) => {
     if (path === '/') {
    return currentPath === '/';
  }
  const map = {
    '/donasi': ['/donasi', '/detaildonasi'],
    '/pantau-donasi': ['/pantau-donasi'],
    '/cari-kebutuhan': ['/cari-kebutuhan'],
    '/': ['/'],
  };

  return map[path]?.some(p => currentPath.startsWith(p));
};

    const navItems = [
        { label: 'Home', path: '/', icon: faHome },
        { label: 'Donasi', path: '/donasi', icon: faHandHoldingHeart },
        { label: 'Pantau Donasi', path: '/pantau-donasi', icon: faChartLine },
        { label: 'Cari Kebutuhan', path: '/cari-kebutuhan', icon: faSearch },
      ];
    return (
      <div className='fixed top-0 left-0 right-0 z-70 bg-white px-6 py-4 shadow-sm'>
    <nav className="flex items-center justify-between  w-12/12 mx-auto md:w-10/12 ">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo2} alt="Logo" className="h-8" />
       
      </div>

      {/* Menu Tengah */}
      <ul className="hidden md:flex gap-3 text-primary text-sm font-secondary items-center">
      {navItems.map((item, index) => (
        <div className="flex items-center gap-3" key={item.path}>
          <li>
            <Link
              to={item.path}
              className={`relative px-2 cursor-pointer ${
                isActive(item.path)
                  ? 'font-semibold text-primary after:content-[""] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-primary after:rounded-full'
                  : 'hover:text-black text-primary'
              }`}
            >
              {item.label}
            </Link>
          </li>
          {index !== navItems.length - 1 && (
            <FontAwesomeIcon icon={faCircle} className="text-xxs scale-25" />
          )}
        </div>
      ))}
    </ul>

      {/* Aksi */}
                <div className="flex font-secondary  gap-4 items-center">
                    <Link className='hidden md:block' to={"/register"}>
                    <button className="text-primary hover:text-black text-sm">Daftar</button>
                    </Link>
                    <Link to="/login">
        <button className="bg-primary cursor-pointer text-white px-4 py-1.5 rounded-full text-sm">Log in</button>
                    </Link>
      </div>
            </nav>

        <nav className='fixed bottom-0 left-0 right-0 z-70 rounded-t-xl px-4 py-4 shadow-up md:hidden bg-white'>
          <div className='flex items-center justify-between'>
            <ul className="flex gap-3 w-11/12 text-primary  mx-auto justify-between text-sm font-secondary items-center">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`relative items-center justify-center  flex gap-2 flex-col  cursor-pointer ${
                      isActive(item.path)
                        ? 'font-semibold text-primary after:content-[""] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-primary after:rounded-full'
                        : 'hover:text-black text-primary'
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-md" />
                    <p className='text-xs text-center'>
                    
                    {item.label}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
            </div>
  );
};

export default Navbar;
