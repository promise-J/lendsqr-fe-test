import  { useState } from "react";
import "./dashboard.scss";

import {Outlet} from 'react-router-dom'
import './dashboardLayout.scss'
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const DashboardLayout = () => {
 const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <div className="dashboard">
      <Header setShowMenu={setShowMenu} />
      <main>
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
