import { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="grid grid-cols-[auto_1fr] overflow-hidden h-screen">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className='overflow-y-auto relative'>
      {/* <DashboardHeader /> */}
      <main className="p-6   bg-white">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
