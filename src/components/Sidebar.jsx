import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSignOut } from '@fortawesome/free-solid-svg-icons';
const Sidebar = ({ collapsed, setCollapsed }) => {
  return (
    <div className={`bg-green-900 text-white h-screen p-4 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-xl font-bold ${collapsed && 'hidden'}`}>Senyum</h1>
        <button onClick={() => setCollapsed(!collapsed)}>☰</button>
      </div>

      <nav className="space-y-4">
        <SidebarItem icon={faHome} text="Dashboard" collapsed={collapsed} />
        <SidebarItem icon={faUser } text="Pengaturan Akun" collapsed={collapsed} />
        <SidebarItem icon={faSignOut} text="Keluar" collapsed={collapsed} />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, text, collapsed }) => (
  <div className="flex items-center space-x-2 hover:bg-green-800 p-2 rounded cursor-pointer">
    <span><FontAwesomeIcon icon={icon} /></span>
    {!collapsed && <span>{text}</span>}
  </div>
);

export default Sidebar;
