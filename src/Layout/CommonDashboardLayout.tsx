import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { GiClassicalKnowledge } from "react-icons/gi";
import DashboardFooter from "../Pages/Dashboard/Shared/DashboardFooter";
import DashboardNavbar from "../Pages/Dashboard/Shared/DashboardNavbar";
import Sidebar from "../Pages/Dashboard/Shared/Sidebar";
import { HomeSvg } from "../components/SvgContainer/SVgContainer";
import { FaCalculator } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { ScrollRestoration } from "react-router-dom";

const tutorNavLinks = [
  { id: 1, icon: HomeSvg, path: "/dashboard", title: "Dashboard" },
  {
    id: 2,
    icon: GiClassicalKnowledge,
    path: "/find-tutors",
    title: "My Classes",
  },
  { id: 3, icon: GiClassicalKnowledge, path: "/lessons", title: "Message" },
  {
    id: 4,
    icon: GiClassicalKnowledge,
    path: "/messages",
    title: "Earnings",
  },
  {
    id: 5,
    icon: GiClassicalKnowledge,
    path: "/schedule",
    title: "Availability",
  },
  {
    id: 6,
    icon: GiClassicalKnowledge,
    path: "/subscription",
    title: "Reviews",
  },
  {
    id: 7,
    icon: GiClassicalKnowledge,
    path: "/settings",
    title: "Setting",
  },
];

const studentNavLinks = [
  { id: 1, icon: HomeSvg, path: "/dashboard", title: "Dashboard" },
  {
    id: 2,
    icon: FiSearch,
    path: "/dashboard/find-tutors",
    title: "Find Tutors",
  },
  {
    id: 3,
    icon: FaCalculator ,
    path: "my-lessons",
    title: "My Lessons",
  },
  {
    id: 4,
    icon: GiClassicalKnowledge,
    path: "/dashboard/messages",
    title: "Messages",
  },
  {
    id: 5,
    icon: GiClassicalKnowledge,
    path: "/schedule",
    title: "Schedule",
  },
  {
    id: 6,
    icon: GiClassicalKnowledge,
    path: "/subscription",
    title: "Subscription",
  },
  {
    id: 7,
    icon: GiClassicalKnowledge,
    path: "/settings",
    title: "Settings",
  },
];

type UserRole = "student" | "tutor";

interface CommonDashboardLayoutProps {
  role: UserRole;
}

const CommonDashboardLayout: React.FC<CommonDashboardLayoutProps> = ({
  role,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex h-screen bg-[#F8F8F8]">
      {/* Sidebar */}
      {role === "student" && (
        <Sidebar
          navLinks={studentNavLinks}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      )}
      {role === "tutor" && (
        <Sidebar
          navLinks={tutorNavLinks}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 h-screen ">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 right-0 z-20">
          <DashboardNavbar />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto mt-[60px] pb-10 px-4 py-10 ">
          <Outlet />
          <ScrollRestoration />
        </div>
        {/* Fixed Footer aligned to content area only */}
        <div className="flex-0 container mb-6   ">
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};

export default CommonDashboardLayout;
