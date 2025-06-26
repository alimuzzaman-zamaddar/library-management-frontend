import { useState } from "react";
import { FaBookOpen, FaStar } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FiVideo } from "react-icons/fi";
import { MessageButtonSvg, MyLocationSvg, MyThreeDots } from "../../../components/SvgContainer/SVgContainer";
import { HiOutlineVideoCamera } from "react-icons/hi";
const statCards = [
  { title: "Total Lessons", value: 24, bg: "bg-[#4D6BFF]" },
  { title: "Hours Learned", value: 36, bg: "bg-[#5195D8]" },
  { title: "Active Tutors", value: "03", bg: "bg-[#662D91]" },
];
export const MyLessons = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingLessons = [1, 2, 3];
  const pastLessons = [1, 2];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-1">My Lessons</h1>
      <p className="text-sm text-gray-500 mb-6">Manage your learning journey</p>

      {/* Stats */}
        <div
          
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
        >
          {statCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-lg p-8 text-white ${card.bg}`}
            >
              <div className="flex justify-center items-center gap-6">
                <FaBookOpen className="text-white w-6 h-6 mb-2" />
                <div className="flex flex-col gap-4">
                  <p className="text-sm">{card.title}</p>
                  <p className="text-2xl font-bold">{card.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-4 border-b border-[var(--color-alt-border)]">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`pb-2 font-medium ${
            activeTab === "upcoming"
              ? "border-b-2 border-black text-black"
              : "text-gray-500"
          }`}
        >
          Upcoming ({upcomingLessons.length})
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={`pb-2 font-medium ${
            activeTab === "past"
              ? "border-b-2 border-black text-black"
              : "text-gray-500"
          }`}
        >
          Past Lessons ({pastLessons.length})
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Lessons List */}
        <div className="lg:col-span-2">
          {(activeTab === "upcoming" ? upcomingLessons : pastLessons).map((_, i) => (
            <div
              key={i}
              className="bg-white border border-[var(--color-alt-border)] rounded-lg p-8 mb-4 shadow-sm"
            >
              {/* Header */}
              <div className="flex justify-between items-end mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/45.jpg"
                    className="w-12 h-12 rounded-full"
                    alt="avatar"
                  />
                  <div className="flex flex-col gap-3">
                    <h2 className="font-medium">English Conversation Practice</h2>
                    <div className="text-sm text-gray-600 flex items-center gap-3">
                        Sarah Johnson·
                      <FaStar className="text-yellow-500" />
                      4.9 · 1247 lessons
                    </div>
                    <div className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                      <span><MyLocationSvg/></span> Today at 3:00 PM <span><MyLocationSvg/></span>60 min ·
                      <span className="ml-1 bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">
                        Lesson 12
                      </span>
                    </div>
                  </div>
                </div>
                <div className="font-bold text-lg">
                  <div className="flex items-center gap-5">
                  <p>$25</p>
                  <MyThreeDots/>
                  </div>
             
                  </div>
              </div>

              {/* Active lesson banner only for first upcoming */}
              {activeTab === "upcoming" && i === 0 ? (
                <div className="rounded-[12px] border border-[rgba(37,99,235,0.4)] bg-[#EFF6FF] p-6  flex justify-between items-center">
                  <div className="text-sm text-gray-700">
                    Your lesson is ready to start! <br />
                    <span className="text-gray-500 text-xs">
                      Join now or wait for your tutor
                    </span>
                  </div>
               <div  className="flex justify-end gap-3">
                  <button className="border border-[var(--color-alt-border)] gap-3 cursor-pointer duration-700 hover:text-white hover:bg-[var(--button-bg-blue)] bg-white rounded-[8px] px-6 py-2 text-sm flex items-center">
                    <MessageButtonSvg /> Message
                  </button>
                  <button className="bg-[#051345] border hover:border-[var(--color-alt-border)] hover:bg-white hover:text-[var(--button-bg-blue)] duration-700 text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3">
                    <HiOutlineVideoCamera /> Join
                  </button>
                </div>
                </div>
              ) : (
               <div  className="flex justify-end gap-3">
                  <button className="border border-[var(--color-alt-border)] hover:border-[var(--color-alt-border)] gap-3 cursor-pointer duration-700 hover:text-white hover:bg-[var(--button-bg-blue)] bg-white rounded-[8px] px-6 py-2 text-sm flex items-center">
                    <MessageButtonSvg /> Message
                  </button>
                  <button className="bg-[#051345] border hover:border-[var(--color-alt-border)] hover:bg-white hover:text-[var(--button-bg-blue)] duration-700 text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3">
                    <HiOutlineVideoCamera /> Join
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Sidebar: Summary Card */}
        <div className="bg-white border  border-[var(--color-alt-border)] rounded-lg p-8 shadow-sm self-start">
          <div className="flex justify-between text-sm mb-1">
          <h3 className="font-semibold mb-3">Total lessons bought:</h3>
          <p>10</p>
          </div>

          <div className="flex justify-between text-sm mb-[23px]">
            <span>Completed:</span>
            <span>4</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Remaining:</span>
            <span>6</span>
          </div>
          <div className="mt-3">
            <div className="text-sm mb-1">Progress</div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-blue-500 h-2 w-[40%] rounded"></div>
            </div>
            <div className="text-right text-xs mt-1 text-gray-500">4/10</div>
          </div>
          <div className="mt-4 text-xs bg-yellow-100 text-yellow-800 px-3 py-2 rounded">
            Expires: March 15, 2024
          </div>
        </div>
      </div>
    </div>
  );
};
