import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";

type howitWorksSchema = {
  title: string;
  description: string;
  features: string[];
};

const howitWorksArr: howitWorksSchema[] = [
  {
    title: "Create Your Profile",
    description:
      "Complete your tutor profile with your expertise, experience, teaching style, and set your hourly rate.",
    features: [
      "Upload profile photo",
      "Add video introduction",
      "Set your rates",
      "List your specialties",
    ],
  },
  {
    title: "Get Students",
    description:
      "Our matching algorithm connects you with students who match your teaching style and expertise.",
    features: [
      "Smart matching",
      "Global student base",
      "Booking management",
      "Calendar integration",
    ],
  },
  {
    title: "Teach & Earn",
    description:
      "Conduct lessons through our HD video platform and get paid securely for every completed lesson.",
    features: [
      "HD video classroom",
      "Interactive tools",
      "Secure payments",
      "Teaching resources",
    ],
  },
];

const HowItWorksTutor = () => {
  return (
    <section className="h-auto w-auto flex flex-col gap-y-12 container  py-[120px]   ">
      <div className=" flex flex-col gap-y-4 items-center">
        <Heading
          Variant="h4"
          Txt={`Here's how it works`}
          className="common-heading "
        />
        <Paragraph
          className="common-sub-heading"
          Txt={"Curious about what your learning journey will look like?"}
        />
      </div>
      <div className=" flex flex-row gap-x-[30px] ">
        {howitWorksArr.map((item, idx) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              key={idx}
              className="h-auto w-auto p-8 bg-white border-[1px] border-solid rounded-[12px] border-secondary-white shadow-md flex flex-col gap-y-6   "
            >
              <div className="flex flex-col gap-y-5 ">
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="h-[50px] text-white text-[32px] font-bold leading-[75%] flex items-center justify-center w-[50px] p-4 rounded-[8px] bg-primary-blue "
                >
                  {idx + 1}
                </div>
                <div className="flex flex-col gap-y-4 ">
                  <Heading
                    Txt={item.title}
                    className=" text-2xl  font-bold text-secondary-black "
                  />
                  <Paragraph
                    Txt={`Complete your tutor profile with your expertise, experience, teaching style, and set your hourly rate.`}
                    className=" text-base max-w-[456px] font-normal text-text-gray list-disc"
                  />
                </div>
              </div>
              <ul className="flex pl-4 flex-col gap-y-3 ">
                {item.features.map((item, idx) => {
                  return (
                    <li
                      data-aos="fade-up"
                      data-aos-delay="100"
                      key={idx}
                      className=" text-base font-normal text-text-gray list-disc"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksTutor;
