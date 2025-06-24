import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import clsx from "clsx"; // Optional for cleaner class merging

const TutorSidebar = ({ navLinks, showSidebar, setShowSidebar }: any) => {
  return (
    <aside
      className={clsx(
        "fixed xl:relative top-0 left-0 h-screen w-64 bg-white z-40 shadow-md transition-transform duration-300 ease-in-out",
        showSidebar ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
      )}
    >
      {/* Mobile close button */}
      <div className="xl:hidden flex justify-end p-4">
        <button onClick={() => setShowSidebar(false)}>
          <IoClose size={24} className="text-gray-700 hover:text-red-500" />
        </button>
      </div>

      {/* Sidebar content */}
      <div className="p-6 pt-0 xl:pt-6">
        <h2 className="text-xl font-bold mb-6 text-primary">Syntax Master</h2>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link: any) => (
            <NavLink
              key={link.id}
              to={link.path}
              onClick={() => setShowSidebar(false)}
              className={({ isActive }) =>
                `text-[18px] flex gap-x-5 items-center pl-10 font-medium px-4 py-3 rounded-[10px] transition-all duration-200 cursor-pointer capitalize ${
                  isActive ? "bg-[#051345] text-white" : "text-[#051345] hover:text-white hover:bg-[#051345]"
                }`
              }
            >
              {link.icon}
              <span className="text-sm font-medium">{link.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default TutorSidebar;
