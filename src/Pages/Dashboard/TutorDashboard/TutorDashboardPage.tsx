import clsx from "clsx";
import { FaBookOpen, FaCalendarAlt } from "react-icons/fa";
import Heading from "../../../components/Tags/Heading/Heading";
import Paragraph from "../../../components/Tags/Paragraph/Paragraph";
import Button from "../../../components/Tags/Button/Button";
import QuickMessages from "../../../components/CommonComponents/QuickMessages";

const cardStyles = {
  "Active Students": "bg-[#4D6BFF]",
  "Lessons This Month": "bg-[#5195D8]",
  "Monthly Earnings": "bg-[#662D91]",
  "Average Rating": "bg-[#00B5DB]",
};

const TutorDashboardPage = () => {
  const cards = [
    { title: "Active Students", value: 8 },
    { title: "Lessons This Month", value: 24 },
    { title: "Monthly Earnings", value: "$1,240" },
    { title: "Average Rating", value: 4.9 },
  ];
  const messages = [
    {
      name: "Darrell Steward",
      time: "5 min ago",
      message: "Great progress in today’s lesson! Keep practicing...",
      avatarUrl: "https://randomuser.me/api/portraits/men/30.jpg",
    },
    {
      name: "Arlene McCoy",
      time: "10 min ago",
      message: "Nice job, you’re doing well!",
      avatarUrl: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
      name: "Robert Fox",
      time: "15 min ago",
      message: "Keep up the hard work!",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  return (
    <div className="flex flex-col justify-between min-h-[calc(100vh-64px)]">
      <div>
        <div className="space-y-6 p-6">
          <Heading
            className="text-2xl font-bold text-[var(--color-primary-blue)]"
            Variant="h2"
            Txt="Welcome back, John! 👋"
          />
          <Paragraph
            className="text-sm text-[var(--color-text-gray)]"
            Txt="Manage your students and track your teaching progress"
          />

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className={clsx(
                  "rounded-lg p-4 text-white flex items-center justify-center h-[110px]",
                  cardStyles[card.title as keyof typeof cardStyles]
                )}
              >
                <div className="flex items-center gap-3">
                  <FaBookOpen className="w-6 h-6" />
                  <div className="flex flex-col">
                    <span className="text-sm">{card.title}</span>
                    <span className="text-2xl font-bold mt-1">
                      {card.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 border border-[var(--color-alt-border)]">
              <div className="flex justify-between items-center mb-4 bg-[var(--color-primary-blue)] text-[var(--color-secondary-white)]  p-4 rounded-lg">
                <Heading
                  Txt="Today's Schedule"
                  className="text-[16px] font-semibold leading-[150%]"
                  Variant="h3"
                />
                <FaCalendarAlt />
              </div>
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-md mb-2 border border-[var(--color-alt-border)] bg-gray-50"
                >
                  <div className="flex gap-3 items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      className="w-10 h-10 rounded-full"
                      alt="student"
                    />
                    <div>
                      <p className="font-medium">
                        Sarah Kim - English Conversation
                      </p>
                      <p className="text-sm text-gray-500">3:00 PM - 4:00 PM</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      Txt="Message"
                      className="border cursor-pointer border-[var(--color-alt-border)] px-3 py-1 rounded text-sm"
                    />
                    <Button
                      Txt="Join"
                      className="bg-[#051345] text-white px-3 py-1 rounded text-sm"
                    />
                  </div>
                </div>
              ))}
              <Button
                Txt="View Full Schedule"
                className="mt-4 w-full border cursor-pointer hover:bg-[var(--color-primary-blue)] hover:text-white duration-700 border-[var(--color-alt-border)] rounded py-2 font-medium"
              />
            </div>

            <QuickMessages
              title="Quick Messages"
              buttonText="View all Messages"
              messages={messages}
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mt-8">
            {/* Recent Students */}
            <div className="bg-white rounded-xl p-6 border border-[var(--color-alt-border)] xl:col-span-2">
              <div className="flex justify-between items-center mb-4 bg-[var(--color-primary-blue)] text-[var(--color-secondary-white)]  p-4 rounded-lg">
                <Heading
                  Txt="Recent Students"
                  className="text-[16px] font-semibold leading-[150%]"
                  Variant="h3"
                />
                <FaBookOpen />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[3, 4].map((lessons, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border border-[var(--color-alt-border)] rounded-md p-3"
                  >
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      className="w-10 h-10 rounded-full"
                      alt="avatar"
                    />
                    <div>
                      <p className="font-medium">
                        Sarah Kim - English Conversation
                      </p>
                      <p className="text-sm text-gray-500">
                        2025-06-16 ,3:00 PM - 4:00 PM
                      </p>
                      <div className="text-sm mt-1">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {lessons} Lessons
                        </span>
                        <span className="ml-4 text-gray-500">
                          Last: 2 days ago
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                Txt="View All Students"
                className="mt-4 w-full hover:bg-[var(--color-primary-blue)] hover:text-white duration-700 border cursor-pointer border-[var(--color-alt-border)] rounded py-2 font-medium"
              />
            </div>

            <div className="space-y-6 grid grid-cols-1 xl:grid-cols-2 gap-6 xl:col-span-2">
              <div className="bg-white rounded-xl p-6 border border-[var(--color-alt-border)]">
                <div className="flex justify-between items-center mb-4 bg-[var(--color-primary-blue)] text-[var(--color-secondary-white)]  p-4 rounded-lg">
                  <Heading
                    Txt="Earnings"
                    className="text-[16px] font-semibold leading-[150%]"
                    Variant="h3"
                  />
                  <FaCalendarAlt />
                </div>
                <p className="font-medium">This Week</p>
                <ul className="text-sm text-primary-black mt-2 space-y-1">
                  <li className="flex justify-between items-center">
                    Lessons Completed: <strong>12</strong>
                  </li>
                  <li className="flex justify-between items-center">
                    Hours Taught: <strong>18</strong>
                  </li>
                  <li className="flex justify-between items-center">
                    Earnings: <strong>$360</strong>
                  </li>
                </ul>
                <Button
                  Txt="View Details"
                  className="mt-4 w-full hover:bg-[var(--color-primary-blue)] hover:text-white duration-700 border cursor-pointer border-[var(--color-alt-border)] rounded py-2 font-medium"
                />
              </div>
              <div className="bg-white rounded-xl p-6 border border-[var(--color-alt-border)]">
                <div className="flex justify-between items-center mb-4 bg-[var(--color-primary-blue)] text-[var(--color-secondary-white)]  p-4 rounded-lg">
                  <Heading
                    Txt="Quick Actions"
                    className="text-[16px] font-semibold leading-[150%]"
                    Variant="h3"
                  />
                  <span>💬</span>
                </div>
 
                <div className="space-y-2">
                  

                
                  <Button
                    Txt="Manage Student"
                    className="mt-4 w-full hover:bg-[var(--color-primary-blue)] hover:text-white duration-700 border cursor-pointer border-[var(--color-alt-border)] rounded py-2 font-medium"
                  />
                  <Button
                    Txt="View Message"
                    className="mt-4 w-full hover:bg-[var(--color-primary-blue)] hover:text-white duration-700 border cursor-pointer border-[var(--color-alt-border)] rounded py-2 font-medium"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboardPage;
