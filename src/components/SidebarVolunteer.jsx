import { useEffect, useState } from 'react';
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
  faSignOut,
  faUserAlt,
  faMagnifyingGlass,
  faHandsHelping,
  faFileCircleCheck
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import LogoBaru from '../assets/logobaru.png'
const SidebarVolunteer = ( {collapsed, setCollapsed }) => {
      const signOut = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
const menu = [
  { icon: faTachometerAlt, text: 'Dashboard', url: '/dashboardvolunteer' },
  { icon: faClock, text: 'Ajukan Program Baru', url: '/ajukanprogrambaru' },
  { icon: faHandHoldingUsd, text: 'Program Aktif', url: '/programaktif' },
  { icon: faEnvelopeOpenText, text: 'Update Distribusi', url: '/updatedistribusi' },
  { icon: faFileAlt, text: 'Laporan Kegiatan', url: '/laporankegiatan' },
  { icon: faFileCircleCheck, text: 'Pesan Ke Admin', url: '/pesankeadmin' },
  { icon: faUserAlt, text: 'Riwayat Aktifitas', url: '/riwayataktifitasvolunteer' },


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

      <nav className="space-y-2 ">
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
          <button className={`flex items-center  ${collapsed ? 'mx-0' : 'mx-3'}  w-auto text-sm 2xl:text-base relative group space-x-2 gap-1 hover:bg-secondary p-2 rounded cursor-pointer transition-colors duration-200 
              text-primary/50`} onClick={signOut}>
                   <span><FontAwesomeIcon icon={faSignOut} /></span>
            {!collapsed && <span className='hidden md:block'>Logout</span>}
            <div className='absolute left-12 top-1/2 -translate-y-1/2 z-99  bg-primary font-primary text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all  md:hidden inline-block'>
               
                  Logout
                
            </div>
                </button>
      </nav>
      </div>

   
    </div>
    
  );
};

const SidebarItem = ({ icon, text, to, collapsed, active }) => (
  <Link
    to={to}
    className={`flex items-center  ${collapsed ? 'mx-0' : 'mx-3'}  w-auto text-sm 2xl:text-base relative group space-x-2 gap-1 hover:bg-secondary p-2 rounded cursor-pointer transition-colors duration-200 
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




export default SidebarVolunteer;