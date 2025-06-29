import { FaAngleLeft } from "react-icons/fa";
import { MessageButtonSvg } from "../../../components/SvgContainer/SVgContainer";
import Heading from "../../../components/Tags/Heading/Heading";
import Paragraph from "../../../components/Tags/Paragraph/Paragraph";

const studentData = [
  {
    id: 1,
    name: "Sarah Kim - English Conversation",
    date: "2025-06-16, 3:00 PM - 4:00 PM",
    lessons: 1,
    status: "Regular",
    statusColor: "bg-blue-100 text-blue-600",
    last: "2 days ago",
  },
  {
    id: 2,
    name: "Sarah Kim - English Conversation",
    date: "2025-06-16, 3:00 PM - 4:00 PM",
    lessons: 1,
    status: "Trail",
    statusColor: "bg-red-100 text-red-600",
    last: "2 days ago",
  },
  {
    id: 3,
    name: "Sarah Kim - English Conversation",
    date: "2025-06-16, 3:00 PM - 4:00 PM",
    lessons: 2,
    status: "Regular",
    statusColor: "bg-blue-100 text-blue-600",
    last: "2 days ago",
  },
  {
    id: 4,
    name: "Sarah Kim - English Conversation",
    date: "2025-06-16, 3:00 PM - 4:00 PM",
    lessons: 4,
    status: "Trail",
    statusColor: "bg-red-100 text-red-600",
    last: "2 days ago",
  },
  {
    id: 5,
    name: "Sarah Kim - English Conversation",
    date: "2025-06-16, 3:00 PM - 4:00 PM",
    lessons: 4,
    status: "Regular",
    statusColor: "bg-blue-100 text-blue-600",
    last: "2 days ago",
  },
];

const RecentStudents = () => {
  return (
    <div className="">
      <div className="">
        <button
          onClick={() => window.history.back()}
          className=" border border-[var(--color-alt-border)] bg-white hover:bg-bg-blue text-[var(--button-bg-blue)] duration-700 hover:text-text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
        >
          <FaAngleLeft /> Back to Search
        </button>
      </div>
      <section className=" max-w-3xl mx-auto  ">
        <div className="bg-primary-blue p-8 rounded-xl mb-8">
          <Heading
            Variant="h2"
            Txt="Recent Students"
            className="text-[32px] text-text-white font-semibold mb-1"
          />
          <Paragraph
            className="text-secondary-white font-normal text-[16px]  leading-[150%] "
            Txt="Manage your teaching schedule and availability"
          />
        </div>
        <div className="grid grid-cols-1 border border-alt-border bg-white p-6 rounded-lg  gap-4">
          {studentData.map((student, i) => (
            <div>
              <div className="bg-bg-light-gray rounded-xl">
                <div
                  key={i}
                  className=" border border-[var(--color-alt-border)] rounded-xl p-5"
                >
                  <div className="flex justify-between items-center">
                    <div className="w-[60%]">
                      <div className="flex items-center gap-3 mb-5 ">
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          className="w-10 h-10 rounded-full"
                          alt="avatar"
                        />
                        <div>
                          <p className="font-medium text-primary-black text-[14px] mb-1">
                            {student.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {student.date}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm mt-1 flex justify-between items-center">
                        <span className="bg-bg-light-gray text-xs text-gray-700 px-2 py-1 rounded-[24px]">
                          Lessons {student.lessons}
                        </span>
                        <span>Last: {student.last}</span>
                        <span
                          className={`text-sm px-4 py-1 rounded-full ${student.statusColor}`}
                        >
                          {student.status}
                        </span>
                      </div>
                    </div>

                    <div className="w-[40%] flex justify-end items-center">
                      <MessageButtonSvg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecentStudents;
