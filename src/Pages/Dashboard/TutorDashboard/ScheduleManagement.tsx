import { useState } from "react";
import { LessonCard } from "./LessonCard";
import Heading from "../../../components/Tags/Heading/Heading";
import { FaAngleLeft } from "react-icons/fa";
import Schedule from "./Schedule";
import Paragraph from "../../../components/Tags/Paragraph/Paragraph";

const todaysLessons = [
  {
    id: 1,
    subject: "English Conversation",
    instructor: "John Doe",
    time: "2:00 PM - 3:00 PM",
    status: "Regular",
    statusColor: "bg-blue-100 text-blue-600",
    joinable: true,
  },
  {
    id: 2,
    subject: "English Conversation",
    instructor: "John Doe",
    time: "2:00 PM - 3:00 PM",
    status: "Trail",
    statusColor: "bg-green-100 text-green-600",
    joinable: false,
  },
];

const upcomingLessons = [
  {
    id: 3,
    subject: "English Conversation",
    instructor: "John Doe",
    time: "Tomorrow • 10:00 AM - 11:00 AM",
    status: "Regular",
    statusColor: "bg-blue-100 text-blue-600",
    joinable: false,
  },
  {
    id: 4,
    subject: "English Conversation",
    instructor: "John Doe",
    time: "Dec 18 • 3:00 PM - 4:00 PM",
    status: "Regular",
    statusColor: "bg-blue-100 text-blue-600",
    joinable: false,
  },
]

const upcomingLessonss = [
  {
    id: 3,
    subject: "English Conversation",
    instructor: "John Doe",
    time: "Tomorrow • 10:00 AM - 11:00 AM",
    status: "Regular",
    statusColor: "bg-blue-100 text-blue-600",
    joinable: false,
  },
  {
    id: 4,
    subject: "English Conversation",
    instructor: "John Doe",
    time: "Dec 18 • 3:00 PM - 4:00 PM",
    status: "Regular",
    statusColor: "bg-blue-100 text-blue-600",
    joinable: false,
  },
  {
    id: 4,
    subject: "English Conversation",
    instructor: "John Doe",
    time: "Dec 18 • 3:00 PM - 4:00 PM",
    status: "Regular",
    statusColor: "bg-blue-100 text-blue-600",
    joinable: false,
  },

];

const ScheduleManagement = () => {
  const [activeTab, setActiveTab] = useState("today");

  return (
    <div className="flex gap-6">
      <div className="">
        <button
          onClick={() => window.history.back()}
          className=" border border-[var(--color-alt-border)] bg-white hover:bg-bg-blue text-[var(--button-bg-blue)] duration-700 hover:text-text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
        >
          <FaAngleLeft /> Back to Search
        </button>
      </div>

      <section className=" p-6 mt-8">
        <div className="bg-primary-blue p-8 rounded-xl mb-8">
          <Heading
            Variant="h2"
            Txt="Schedule Management"
            className="text-[32px] text-text-white font-semibold mb-1"
          />
          <Paragraph
            className="text-secondary-white font-normal text-[16px]  leading-[150%] "
            Txt="Manage your teaching schedule and availability"
          />
        </div>

        {/* Tabs */}
        <div className="flex mb-6 p-2  bg-light-gray rounded-md">
          <button
            className={`py-1 px-6 text-[16px] cursor-pointer leading-[150%] font-semibold ${
              activeTab === "today"
                ? " bg-bg-white  rounded-2xl text-primary-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("today")}
          >
            Today's Lessons
          </button>
          <button
            className={`py-1 px-6 text-[16px] cursor-pointer leading-[150%] font-semibold ${
              activeTab === "calendar"
                ? "bg-bg-white  rounded-2xl text-primary-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("calendar")}
          >
            Calendar View
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "today" && (
          <div className="flex gap-6 items-center">
            <div className="bg-bg-white border border-alt-border rounded-xl p-6">
              <Heading
                className="text-2xl font-bold text-primary-blue mb-8"
                Variant="h2"
                Txt="Today's Lessons"
              />
              <div className="space-y-4">
                {todaysLessons.map(lesson => (
                  <LessonCard key={lesson.id} lesson={lesson} />
                ))}
              </div>
            </div>
            <div className="bg-bg-white border border-alt-border rounded-xl p-6">
              <Heading
                className="text-2xl font-bold text-primary-blue mb-8"
                Variant="h2"
                Txt="Upcoming Lessons"
              />
              <div className="space-y-4">
                {upcomingLessons.map(lesson => (
                  <LessonCard key={lesson.id} lesson={lesson} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "calendar" && (
          <div className="space-y-4 flex self-start gap-5">
            <div className="">
              <Schedule />
            </div>
            <div className="bg-bg-white border border-alt-border rounded-xl p-6">
              <Heading
                className="text-2xl font-bold text-primary-blue mb-8"
                Variant="h2"
                Txt="Upcoming Lessons"
              />
              <div className="space-y-4 w-2xl">
                {upcomingLessonss.map(lesson => (
                  <LessonCard key={lesson.id} lesson={lesson} />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ScheduleManagement;
