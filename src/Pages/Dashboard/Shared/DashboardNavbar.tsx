import { NotificationSvg } from "../../../components/SvgContainer/SVgContainer";

const DashboardNavbar = () => {
  return (
    <div className=" w-full bg-white  h-auto py-5">
      <header className="w-full  gap-x-3 flex items-center justify-end z-20 sticky top-0 pr-10 ">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2.5 text-sm border border-gray-300 rounded-[16px] w-72 focus:outline-none"
          />
          <div className="cursor-pointer" >
            <NotificationSvg />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-8 h-8 rounded-full cursor-pointer bg-gray-200" />
        </div>
      </header>
    </div>
  );
};

export default DashboardNavbar;
