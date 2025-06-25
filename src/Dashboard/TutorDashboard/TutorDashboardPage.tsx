import TNavbar from "../TNavbar";
import clsx from "clsx";
import { FaBookOpen } from "react-icons/fa";
import Heading from "../../components/Tags/Heading/Heading";
import Paragraph from "../../components/Tags/Paragraph/Paragraph";
import DashboardFooter from "../DashboardFooter";

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

  return (
    <div className="flex flex-col justify-between min-h-[calc(100vh-64px)]">
      <div>
        <TNavbar />
        <div className="space-y-6 p-6">
          <Heading
            className="text-2xl font-bold text-[var(--color-primary-blue)]"
            Variant="h2"
            Txt="Welcome back, John! 👋"
          />
          <Paragraph
            className="text-sm text-[var(--color-text-gray)]"
            Txt="Here’s a quick overview of your teaching dashboard"
          />
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
                    <span className="text-2xl font-bold mt-1">{card.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
};

export default TutorDashboardPage;
