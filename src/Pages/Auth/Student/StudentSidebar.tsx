
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaHome, FaChalkboardTeacher, FaComments, FaCalendarAlt, FaCreditCard, FaCog } from "react-icons/fa";
import clsx from "clsx";
import logoimg from "../../../assets/images/LogoDashboard.png"
import Image from "../../../components/Tags/Image/Image";

const studentNavLinks = [
  { id: 1, icon: <FaHome />, path: "/dashboard", title: "Dashboard" },
  { id: 2, icon: <FaChalkboardTeacher />, path: "/find-tutors", title: "Find Tutors" },
  { id: 3, icon: <FaChalkboardTeacher />, path: "/lessons", title: "My Lessons" },
  { id: 4, icon: <FaComments />, path: "/messages", title: "Message" },
  { id: 5, icon: <FaCalendarAlt />, path: "/schedule", title: "Schedule" },
  { id: 6, icon: <FaCreditCard />, path: "/subscription", title: "Subscription" },
  { id: 7, icon: <FaCog />, path: "/settings", title: "Setting" },
];

const StudentSidebar = ({ navLinks = studentNavLinks, showSidebar, setShowSidebar }: any) => {
  return (
    <aside
      className={clsx(
        "fixed xl:relative top-0 left-0 h-screen w-64 bg-white z-40 shadow-md transition-transform duration-300 ease-in-out",
        showSidebar ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
      )}
    >
      {/* Close button for mobile */}
      <div className="xl:hidden flex justify-end p-4">
        <button onClick={() => setShowSidebar(false)}>
          <IoClose size={24} className="text-gray-700 hover:text-red-500" />
        </button>
      </div>

      <div className="p-6 pt-0 xl:pt-6 flex flex-col justify-between h-full">
        <div>
          {/* Logo */}
          <Image Alt="Logo" Src={logoimg} className="mb-10" />


          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link: any) => (
              <NavLink
                key={link.id}
                to={link.path}
                onClick={() => setShowSidebar(false)}
                className={({ isActive }) =>
                  `text-[18px] flex gap-x-5 items-center pl-10 font-medium px-4 py-3 rounded-[10px] transition-all duration-200 cursor-pointer capitalize ${
                    isActive
                      ? "bg-[#051345] text-white"
                      : "text-[#051345] hover:text-white hover:bg-[#051345]"
                  }`
                }
              >
                {link.icon}
                <span className="text-sm font-medium">{link.title}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Profile Preview */}
        <div className="flex items-center gap-3 pl-10 mt-8">
          <div className="w-10 h-10 bg-[#051345] text-white flex items-center justify-center rounded-full font-bold">
            JD
          </div>
          <div>
            <div className="text-sm font-semibold">John Doe</div>
            <div className="text-xs text-gray-500">Dashboard</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default StudentSidebar;
