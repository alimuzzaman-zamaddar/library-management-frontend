import  { useState } from "react";
import Button from "../../Tags/Button/Button";
import Heading from "../../Tags/Heading/Heading";
import Image from "../../Tags/Image/Image";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import itGirl from "../../../assets/images/tutors/it-girl.png";
import { BombSvg, Certificate } from "../../SvgContainer/SVgContainer";

const WhySyntaxMaster = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      title: "Career Growth",
      description:
        "Earn $10-80 per hour based on your expertise and experience",
      features: [
        "Professional development",
        "Career workshops",
        "Promotion paths",
      ],
      bgColor: "#9762FD",
      icon: <BombSvg />,
    },
    {
      title: "Professional Support",
      description:
        "Earn $10-80 per hour based on your expertise and experience",
      features: ["24/7 assistance", "Resource library", "Mentorship programs"],
      bgColor: "#4A90E2",
      icon: <Certificate />,
    },
    {
      title: "Complete Flexibility",
      description:
        "Earn $10-80 per hour based on your expertise and experience",
      features: ["Set your hours", "Remote options", "Flexible contracts"],
      bgColor: "#333333",
      icon: <BombSvg />,
    },
    {
      title: "Excellent Earnings",
      description:
        "Earn $10-80 per hour based on your expertise and experience",
      features: [
        "Set your own rates",
        "Weekly payments",
        "No hidden fees",
        "Bonus incentives",
      ],
      bgColor: "#2E3192",
      icon: <BombSvg />,
    },
  ];

  // Reduced spacing between cards
  const CARD_SPACING = 80;
  const HOVER_LIFT = 30;

  return (
    <section className="h-auto w-full pb-[120px] flex container  flex-col gap-y-[80px] ">
      <div className="flex flex-col items-center gap-y-4 ">
        <Heading
          Variant="h4"
          Txt={`Why Teach with Syntax Master`}
          className="common-heading"
        />
        <Paragraph
          className="common-sub-heading"
          Txt={
            "Join thousands of tutors who have transformed their passion into a thriving career"
          }
        />
      </div>

      <div className=" pl-5 xl:pl-[150px] flex w-full ">
        <div className="  flex flex-col xl:flex-row xl:gap-x-[280px] items-center ">
          {/* Left Side */}
          <div className="flex flex-col gap-y-6">
            <Image
              className=" h-auto w-full xl:h-[617px] scale-x-[-1] xl:w-[526px] object-cover"
              Alt="not found"
              Src={itGirl}
            />
            <Button Txt={`Apply as a Tutor`} className="primary-btn !w-full" />
          </div>

          {/* Right Side */}
          <div
            className="relative  "
            style={{ height: `${cards.length * CARD_SPACING + 60}px` }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className={`absolute  cursor-pointer w-[250px] xl:w-[440px] rounded-[12px] flex flex-col gap-y-4 p-5
            transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]
            ${hoveredCard === index ? "z-10 shadow-lg" : "z-[1] shadow-md"}`}
                style={{
                  backgroundColor: card.bgColor,
                  top: `${index * CARD_SPACING}px`,
                  transform:
                    hoveredCard === index
                      ? `translateY(-${HOVER_LIFT}px) scale(1.02)`
                      : "translateY(0) scale(1)",
                  transitionProperty: "transform, box-shadow",
                  willChange: "transform",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex flex-row gap-x-4 items-center">
                  <div className="h-10 w-10 bg-secondary-black rounded-full flex items-center justify-center">
                    {card.icon}
                  </div>
                  <Heading
                    Txt={card.title}
                    className="text-2xl font-[600] text-white whitespace-normal"
                  />
                </div>
                <Paragraph
                  Txt={card.description}
                  className="text-lg font-normal max-w-[439px] text-white whitespace-normal"
                />
                <div className="flex flex-col gap-y-2">
                  {card.features.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-row gap-x-2 items-center"
                    >
                      <span className="text-green-400">✔</span>
                      <Paragraph
                        Txt={item}
                        className="text-lg font-normal text-white whitespace-normal"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySyntaxMaster;
