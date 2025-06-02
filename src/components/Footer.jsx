import React from "react";
import Logo1 from "../assets/logo3.png"
const Footer = ({className}) => {
  return (
    <footer className={`${className} bg-primary text-white rounded-xl`}>
    
      <div className="flex flex-col md:flex-row justify-between rounded-2xl items-start md:items-center p-6 md:p-8 gap-6 md:gap-16">
        {/* Logo & Divider */}
        <div className="flex flex-col items-center md:items-center w-full md:w-1/4">
          <img src={Logo1} alt="Senyum Kebaikan" className="mb-2 scale-150" />
          <div className="hidden md:block h-full w-px bg-gray-300 mt-2"></div>
        </div>
        {/* Menu Columns */}
        <div className="flex flex-col md:flex-row font-primary gap-6 text-sm w-full justify-around">
          <div className="flex flex-col gap-1">
            <span>Mitra Kami</span>
            <span>Tentang Kami</span>
            <span>Pantau Donasi</span>
          </div>
          <div className="flex flex-col gap-1">
            <span>Service</span>
            <span>Support</span>
            <span>Private Police</span>
          </div>
          <div className="flex flex-col gap-1">
            <span>Donasi</span>
            <span>Informasi</span>
            <span>Pantau Donasi</span>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="bg-[#2f3e3d] text-center text-xs py-3 rounded-b-xl">
        2024 © Nusantaranger | All Right reserved
      </div>
    </footer>
  );
};
export default Footer;