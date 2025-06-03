import React from "react";
import Logo1 from "../assets/logo3.png"
const Footer = ({className}) => {
  return (
    <footer className={`${className} pb-20 md:pb-0 bg-primary font-primary text-white  rounded-t-xl`}>
    
      <div className="flex flex-col md:flex-row justify-between rounded-2xl items-center md:items-center p-6 md:p-8  md:gap-16">
        {/* Logo & Divider */}
        <div className="text-center   items-center md:items-center w-1/4 md:w-1/4">
          <img src={Logo1} alt="Senyum Kebaikan" className="md:mb-2 mx-auto  " />
        
        </div>
        {/* Menu Columns */}
        <div className="flex flex-col md:flex-row font-primary gap-6 text-sm md:text-lg w-full justify-around">
          <div className="flex flex-col text-center gap-1">
            <span>Mitra Kami</span>
            <span>Tentang Kami</span>
            <span>Pantau Donasi</span>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <span>Service</span>
            <span>Support</span>
            <span>Private Police</span>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <span>Donasi</span>
            <span>Informasi</span>
            <span>Pantau Donasi</span>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="bg-[#2f3e3d] font-primary text-center text-xs py-3 ">
        2024 © Nusantaranger | All Right reserved
      </div>
    </footer>
  );
};
export default Footer;