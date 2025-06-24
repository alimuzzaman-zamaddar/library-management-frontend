import { GiClassicalKnowledge } from "react-icons/gi";


const TNavbar = () => {
  return (
    <div className="hidden xl:block">
    <header className="w-full shadow-sm bg-white p-4 flex items-center justify-end z-20 sticky top-0">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 text-sm border border-gray-300 rounded-md w-72 focus:outline-none"
        />
        <GiClassicalKnowledge className="w-5 h-5 text-gray-500" />
      </div>
      <div className="flex items-center gap-6">
        <GiClassicalKnowledge className="w-6 h-6 text-gray-600 cursor-pointer" />
        <div className="w-8 h-8 rounded-full bg-gray-200" />
      </div>
    </header>
    </div>
  );
};

export default TNavbar;