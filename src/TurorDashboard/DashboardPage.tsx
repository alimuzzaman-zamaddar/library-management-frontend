import TNavbar from "./TNavbar";
import clsx from "clsx";
import { FaBookOpen } from "react-icons/fa";
import Heading from "../components/Tags/Heading/Heading";
import Paragraph from "../components/Tags/Paragraph/Paragraph";

const cardStyles = {
  "Active Students": "bg-[#4D6BFF]",
  "Lessons This Month": "bg-[#5195D8]",
  "Monthly Earnings": "bg-[#662D91]",
  "Average Rating": "bg-[#00B5DB]",
};

const DashboardPage = () => {
  const cards = [
    { title: "Active Students", value: 8 },
    { title: "Lessons This Month", value: 24 },
    { title: "Monthly Earnings", value: "$1,240" },
    { title: "Average Rating", value: 4.9 },
  ];

  return (
    <>
      <TNavbar />
      <div className="space-y-6 p-6">
        <Heading className="text-2xl pl-[50px] xl:pl-0 font-bold text-[var(--color-primary-blue)] "  Variant="h2"  Txt="Welcome back, John! 👋" />
        <Paragraph className="text-sm pl-[50px] xl:pl-0 text-[var(--color-text-gray)]"   
          Txt="Here’s a quick overview of your teaching dashboard"/>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className={clsx(
                "rounded-lg p-4 text-white flex flex-col items-start justify-center h-[110px]",
                cardStyles[card.title as keyof typeof cardStyles]
              )}
            >
              <div className="flex justify-center items-center gap-3">
                <div className="flex items-center gap-3">
                <FaBookOpen className="w-6 h-6" />
                <div className="flex flex-col">
                  <span className="text-sm">{card.title}</span>
                  <span className="text-2xl font-bold mt-1">{card.value}</span>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

