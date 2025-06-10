import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faClock,
  faUsers,
  faChartLine,
  faHandHoldingUsd,
  faFileAlt,
  faEnvelopeOpenText,
  faUser,
  faCog,
  faSignOutAlt,
  faUserAlt
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import LogoBaru from '../assets/logobaru.png'
const Sidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  // const menu = [
  //   { icon: faTachometer, text: 'Dashboard', url: '/dashboard' },
  //   { icon: faClock, text: 'Riwayat Aktifitas', url: '/riwayataktifitas' },
  //   {icon : faUsers, text: 'Data User', url: '/datausers'},
  //   { icon: faChartLine, text: 'Statistik Saya', url: '/statistiksaya' },
  //   { icon: faCommentDots, text: 'Feedback Saya', url: '/feedbacksaya' },
  //   { icon: faGear, text: 'Pengaturan Akun', url: '/pengaturanakun' },
  //   { icon: faFileSignature, text: 'Ajukan Donasi', url: '/ajukandonasi' },
  //   { icon: faSignOut, text: 'Keluar', url: '/logout' },
  // ];

 const menu = [
  { icon: faTachometerAlt, text: 'Dashboard', url: '/dashboard' },
  { icon: faClock, text: 'Riwayat Aktifitas', url: '/riwayataktifitas' },
  { icon: faUsers, text: 'Data User', url: '/datausers' },
  { icon: faChartLine, text: 'Data Campaign', url: '/datacampaign' },
  { icon: faHandHoldingUsd, text: 'Donasi Masuk', url: '/donasimasuk' },
  { icon: faFileAlt, text: 'Pengajuan Kebutuhan', url: '/pengajuankebutuhan' },
   { icon: faEnvelopeOpenText, text: 'Kontak Masuk', url: '/kontakmasuk' },
   { icon: faUserAlt, text: 'Profil', url: '/profil' },
  { icon: faSignOutAlt, text: 'Keluar', url: '/logout' },
];

  return (
    <div className={`bg-[rgba(217,217,217,0.1)]  text-primary h-screen p-4 transition-all duration-300 ${collapsed ? 'w-16 md:w-16' : 'w-16 md:w-64'} flex flex-col justify-between`}>
      <div>
      <div className={`flex ${collapsed ? 'justify-center' : 'justify-between'} items-center mb-6`}>
        {/* <h1 className={`text-xl font-bold ${collapsed && 'hidden'}`}>Senyum</h1>
         */}
       <img
  src={LogoBaru}
  className={`w-44 ${collapsed ? 'hidden md:hidden' : 'hidden md:block'}`}
  alt=""
/>

        <button className='md:block hidden' onClick={() => setCollapsed(!collapsed)}>☰</button>
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

   
    </div>
    
  );
};

const SidebarItem = ({ icon, text, to, collapsed, active }) => (
  <Link
    to={to}
    className={`flex items-center w-auto  relative group space-x-2 gap-1 hover:bg-secondary p-2 rounded cursor-pointer transition-colors duration-200 
      ${active ? 'text-primary' : 'text-primary/50'}`}
  >
    <span><FontAwesomeIcon icon={icon} /></span>
    {!collapsed && <span className='hidden md:block'>{text}</span>}
    <div className='absolute left-12 top-1/2 -translate-y-1/2 z-99  bg-primary font-primary text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all  md:hidden inline-block'>
        {
          text
        }
    </div>
  </Link>
);

export default Sidebar;
