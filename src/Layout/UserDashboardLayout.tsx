import { useState } from "react";
import { Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import TutorSidebar from "../Dashboard/TutorDashboard/TutorSidebar";
import StudentSidebar from "../Pages/Auth/Student/StudentSidebar";
import { MdDashboard } from "react-icons/md";
import { GiClassicalKnowledge } from "react-icons/gi";

const role: "student" | "tutor" = "student"; // Replace with actual role logic

const tutorNavLinks = [
  { id: 1, icon: <MdDashboard />, path: "/dashboard", title: "Dashboard" },
  {
    id: 2,
    icon: <GiClassicalKnowledge />,
    path: "/find-tutors",
    title: "My Classes",
  },
  { id: 3, icon: <GiClassicalKnowledge />, path: "/lessons", title: "Message" },
  {
    id: 4,
    icon: <GiClassicalKnowledge />,
    path: "/messages",
    title: "Earnings",
  },
  {
    id: 5,
    icon: <GiClassicalKnowledge />,
    path: "/schedule",
    title: "Availability",
  },
  {
    id: 6,
    icon: <GiClassicalKnowledge />,
    path: "/subscription",
    title: "Reviews",
  },
  {
    id: 7,
    icon: <GiClassicalKnowledge />,
    path: "/settings",
    title: "Setting",
  },
];

const studentNavLinks = [
  { id: 1, icon: <MdDashboard />, path: "/dashboard", title: "Dashboard" },
  {
    id: 2,
    icon: <GiClassicalKnowledge />,
    path: "/find-tutors",
    title: "Find Tutors",
  },
  {
    id: 3,
    icon: <GiClassicalKnowledge />,
    path: "/lessons",
    title: "My Lessons",
  },
  {
    id: 4,
    icon: <GiClassicalKnowledge />,
    path: "/messages",
    title: "Messages",
  },
  {
    id: 5,
    icon: <GiClassicalKnowledge />,
    path: "/schedule",
    title: "Schedule",
  },
  {
    id: 6,
    icon: <GiClassicalKnowledge />,
    path: "/subscription",
    title: "Subscription",
  },
  {
    id: 7,
    icon: <GiClassicalKnowledge />,
    path: "/settings",
    title: "Settings",
  },
];

const UserDashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex bg-[#F8F8F8] min-h-screen">
      {/* Mobile hamburger button */}
      {!showSidebar && (
        <button
          className="xl:hidden fixed top-[10px] left-2 z-30 bg-white p-2 rounded shadow"
          onClick={() => setShowSidebar(true)}
        >
          <HiMenu size={22} />
        </button>
      )}

      {/* Conditionally render sidebar based on role */}
      {role === "student" ? (
        <StudentSidebar
          navLinks={studentNavLinks}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      ) : role === "tutor" ? (
        <TutorSidebar
          navLinks={tutorNavLinks}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      ) : null}

      {/* Main content area */}
      <div className="flex-1 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboardLayout;
