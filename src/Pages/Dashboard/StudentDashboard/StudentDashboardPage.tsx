import Paragraph from "../../../components/Tags/Paragraph/Paragraph";
import {
  FaBookOpen,
  FaClock,
  FaCalendarAlt,
  FaRegComments,
} from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BsStarFill } from "react-icons/bs";
import Button from "../../../components/Tags/Button/Button";
import Heading from "../../../components/Tags/Heading/Heading";
import { CalenderIcon } from "../../../components/SvgContainer/SVgContainer";

const statCards = [
  { title: "Total Lessons", value: 24, bg: "bg-[#4D6BFF]" },
  { title: "Hours Learned", value: 36, bg: "bg-[#5195D8]" },
  { title: "Active Tutors", value: "03", bg: "bg-[#662D91]" },
];

const StudentDashboardPage = () => {
  return (
    <section className="flex flex-col h-auto justify-between">
      <div className="space-y-6 p-6">
        <Heading
          Txt="Welcome back, Jonathan! 👋"
          className="text-2xl font-bold text-[var(--color-primary-blue)] mt-15 xl:mt-0"
          Variant="h2"
        />
        <Paragraph
          Txt="Ready for your next learning session?"
          className="text-sm text-[var(--color-text-gray)]"
        />

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {statCards.map(card => (
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

        {/* Lessons + Messages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Upcoming Lessons */}
          <div className="bg-white border border-[var(--color-alt-border)] rounded-xl p-8">
            <div className="flex justify-between items-center mb-4 bg-[var(--color-primary-blue)] text-[var(--color-secondary-white)] p-4 rounded-lg">
              <Heading
                Txt="Upcoming Lessons"
                className="text-[16px] font-semibold leading-[150%]"
                Variant="h3"
              />
              <CalenderIcon />
            </div>
            {["Ronald Richards", "Ronald Richards"].map((name, i) => (
              <div
                key={i}
                className={`flex justify-between items-center p-4 rounded-lg mb-3 ${
                  i === 0
                    ? "bg-gray-100"
                    : "bg-white border border-[var(--color-alt-border)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={`https://randomuser.me/api/portraits/${
                      i === 0 ? "men/32" : "women/44"
                    }.jpg`}
                    className="w-10 h-10 rounded-full"
                    alt="avatar"
                  />
                  <div>
                    <div className="flex items-center gap-2 font-medium">
                      {name} <BsStarFill className="text-yellow-500 w-4 h-4" />{" "}
                      4.9
                    </div>
                    <p className="text-sm text-[var(--color-text-gray)]">
                      English Conversation
                    </p>
                    <div className="flex gap-4 text-xs text-gray-500 mt-1">
                      <span>
                        <FaCalendarAlt className="inline mr-1" /> Friday, 2:00
                        PM
                      </span>
                      <span>
                        <FaClock className="inline mr-1" /> 50 min
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="border border-[var(--color-alt-border)] rounded px-3 py-1 text-sm flex items-center gap-1">
                    <FiMessageSquare /> Message
                  </button>
                  <button className="bg-[#051345] text-white px-3 py-1 rounded flex items-center gap-1">
                    <HiOutlineVideoCamera /> Join
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Messages */}
          <div className="bg-white border border-[var(--color-alt-border)] rounded-xl p-8">
            <div className="flex justify-between items-center mb-4 bg-[var(--color-primary-blue)] text-[var(--color-secondary-white)] p-4 rounded-lg">
              <Heading
                Txt="Quick Messages"
                className="text-[16px] font-semibold leading-[150%]"
                Variant="h3"
              />
              <FaRegComments />
            </div>
            {["Darrell Steward", "Arlene McCoy", "Robert Fox"].map(
              (name, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 p-3 rounded-md ${
                    i === 0 ? "bg-blue-50" : "hover:bg-gray-50"
                  }`}
                >
                  <img
                    src={`https://randomuser.me/api/portraits/men/${
                      30 + i
                    }.jpg`}
                    className="w-10 h-10 rounded-full"
                    alt="avatar"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between text-sm font-medium">
                      {name}
                      <span className="text-xs text-gray-500">5 min ago</span>
                    </div>
                    <p className="text-sm text-[var(--color-text-gray)]">
                      Great progress in today’s lesson! Keep practicing...
                    </p>
                  </div>
                </div>
              )
            )}
            <button className="w-full border border-[var(--color-alt-border)] mt-4 py-2 rounded text-sm font-medium hover:bg-gray-100">
              View all Message
            </button>
          </div>
        </div>

        {/* Previous Lessons + Lesson Package */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Previous Lessons */}
          <div className="bg-white border border-[var(--color-alt-border)] rounded-xl p-8">
            <div className="flex justify-between items-center mb-4 bg-[var(--color-primary-blue)] text-white p-4 rounded-lg">
              <Heading
                Txt="Previous Lesson"
                className="text-[16px] font-semibold leading-[150%]"
                Variant="h3"
              />
              <FaBookOpen />
            </div>
            {[1, 2, 3].map(i => (
              <div key={i} className="flex justify-between items-center py-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/45.jpg"
                    className="w-10 h-10 rounded-full"
                    alt="avatar"
                  />
                  <div>
                    <div className="font-medium">Cameron Williamson</div>
                    <div className="text-sm text-[var(--color-text-gray)]">
                      English Conversation <br />
                      Yesterday, 2:00 PM · 50 min
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {i === 1 && (
                    <Button
                      Txt="Rate"
                      className="border px-3 py-1 rounded text-sm font-medium"
                    />
                  )}
                  <Button
                    Txt="Review Lesson"
                    className="border px-3 py-1 rounded text-sm font-medium"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Lesson Package */}
          <div className="bg-white border border-[var(--color-alt-border)] rounded-xl p-8">
            <div className="flex justify-between items-center mb-4 bg-[var(--color-primary-blue)] text-white p-4 rounded-lg">
              <Heading
                Txt="Lesson Package"
                className="text-[16px] font-semibold leading-[150%]"
                Variant="h3"
              />
              <FaBookOpen />
            </div>
            <p>
              Total lessons bought: <strong>10</strong>
            </p>
            <p className="text-sm text-[var(--color-text-gray)] mt-1">
              Completed: 4
            </p>
            <p className="text-sm text-[var(--color-text-gray)]">
              Remaining: 6
            </p>
            <p className="text-sm mt-2">
              Progress <strong>4/10</strong>
            </p>
            <div className="w-full bg-gray-200 h-2 rounded mt-1">
              <div className="bg-[#0053CF] h-2 rounded w-[40%]"></div>
            </div>
            <div className="mt-3 bg-yellow-100 text-yellow-800 p-2 rounded text-sm">
              Expires: March 15, 2024
            </div>
          </div>
        </div>

        {/* Feedback Section — Aligned and Sized Correctly */}
        <div className="rounded-lg border border-[var(--color-alt-border)] p-8 flex flex-col md:flex-row items-end md:items-center justify-between w-full">
          <div className="flex flex-col gap-y-3">
            <h4 className="text-lg font-semibold text-secondary-black">
              Have feedback for us?
            </h4>
            <p className="text-sm font-medium text-text-gray">
              Your feedback is anonymous unless you choose to include your name.
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-4 py-2 border border-primary-blue text-primary-blue rounded hover:bg-primary-blue hover:text-white transition-all text-sm font-medium cursor-pointer duration-500">
            Confidential Feedback
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentDashboardPage;
