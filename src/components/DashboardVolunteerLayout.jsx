import React from "react";
import { useState } from "react";
import SidebarVolunteer from "./SidebarVolunteer";
const DashboardVolunteerLayout = ({ children }) => {
     const [collapsed, setCollapsed] = useState(false);
  
  return (
    <div className="grid grid-cols-[auto_1fr] overflow-hidden h-screen">
    
      <SidebarVolunteer collapsed={collapsed} setCollapsed={setCollapsed} />
    
      <div className='overflow-y-auto relative'>
      {/* <DashboardHeader /> */}
      <main className="p-6   bg-white">{children}</main>
      </div>
    </div>
  );
}
export default DashboardVolunteerLayout;