import { useState } from 'react';
import Sidebar from './Sidebar';
import SidebarUser from './SidebarUser';
import DashboardHeader from './DashboardHeader';
const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [user, setUser] = useState(() => {
    return JSON.parse( localStorage.getItem("user"));
  })
  console.log(user);
  return (
    <div className="grid grid-cols-[auto_1fr] overflow-hidden h-screen">
      {
        user.role === 'admin' ?
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} /> :
        <SidebarUser collapsed={collapsed} setCollapsed={setCollapsed} />
      }
    
      <div className='overflow-y-auto relative'>
      {/* <DashboardHeader /> */}
      <main className="p-6   bg-white">{children}</main>
      </div>
    </div>
  );
};
export default DashboardLayout;