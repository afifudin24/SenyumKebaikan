import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSignOut, faTachometer, faClock, faChartLine, faCommentDots, faGear, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import LogoBaru from '../assets/logobaru.png'
const Sidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  const menu = [
    { icon: faTachometer, text: 'Dashboard', url: '/dashboard' },
    { icon: faClock, text: 'Riwayat Aktifitas', url: '/riwayataktifitas' },
    { icon: faChartLine, text: 'Statistik Saya', url: '/statistiksaya' },
    { icon: faCommentDots, text: 'Feedback Saya', url: '/feedbacksaya' },
    { icon: faGear, text: 'Pengaturan Akun', url: '/pengaturanakun' },
    { icon: faFileSignature, text: 'Ajukan Donasi', url: '/ajukandonasi' },
    { icon: faSignOut, text: 'Keluar', url: '/logout' },
  ];

  return (
    <div className={`bg-[rgba(217,217,217,0.1)] text-primary h-screen p-4 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} flex flex-col justify-between`}>
      <div>
      <div className={`flex ${collapsed ? 'justify-center' : 'justify-between'} items-center mb-6`}>
        {/* <h1 className={`text-xl font-bold ${collapsed && 'hidden'}`}>Senyum</h1>
         */}
        <img src={LogoBaru} className={`w-44 ${collapsed && 'hidden'}`} alt="" />
        <button onClick={() => setCollapsed(!collapsed)}>☰</button>
      </div>

      <nav className="space-y-4 ">
        {menu.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            to={item.url}
            collapsed={collapsed}
            active={location.pathname === item.url}
          />
        ))}
      </nav>
      </div>

      <div className='flex gap-2 flex-col text-center justify-center items-center'>
        <FontAwesomeIcon className='text-2xl' icon={faUser} />
        <p className='text-sm font-semibold'>Admin</p>
        <p>naufalnurcahyo@gmail.com</p>
      </div>
    </div>
    
  );
};

const SidebarItem = ({ icon, text, to, collapsed, active }) => (
  <Link
    to={to}
    className={`flex items-center space-x-2 gap-1 hover:bg-secondary p-2 rounded cursor-pointer transition-colors duration-200 
      ${active ? 'text-primary' : 'text-primary/50'}`}
  >
    <span><FontAwesomeIcon icon={icon} /></span>
    {!collapsed && <span>{text}</span>}
  </Link>
);

export default Sidebar;
