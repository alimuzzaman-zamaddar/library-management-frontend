// DashboardLayout.tsx - Inspired by ProfessionalSpaceLayout
import  { useState } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";

import { HiMenu } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { GiClassicalKnowledge } from "react-icons/gi";
import TutorSidebar from "../TurorDashboard/TutorSidebar";


const navLinks = [
  { id: 1, icon: <MdDashboard />, path: "/dashboard", title: "Dashboard" },
  { id: 2, icon: <GiClassicalKnowledge />, path: "/students", title: "My Classes" },
  { id: 3, icon: <GiClassicalKnowledge />, path: "/messages", title: "Messages" },
  { id: 4, icon: <GiClassicalKnowledge />, path: "/earnings", title: "Earnings" },
  { id: 5, icon: <GiClassicalKnowledge />, path: "/availability", title: "Availability" },
  { id: 6, icon: <GiClassicalKnowledge />, path: "/settings", title: "Settings" },
];

const TutorDashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  if (location.pathname === "/") {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
      <div className="flex bg-[#F8F8F8] min-h-screen">
        <div className="flex">
          {/* Hamburger Menu */}
          {!showSidebar && (
            <button
              className="xl:hidden fixed top-[10px] left-2 z-30 bg-white p-2 rounded shadow"
              onClick={() => setShowSidebar(true)}
            >
              <HiMenu size={22} />
            </button>
          )}
            <TutorSidebar
            navLinks={navLinks}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
        </div>

        <div className="flex-1 w-full">
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default TutorDashboardLayout;
