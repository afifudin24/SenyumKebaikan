import { useState } from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="grid grid-cols-[auto_1fr] h-screen">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main className="p-6 overflow-y-auto bg-white">{children}</main>
    </div>
  );
};

export default DashboardLayout;
