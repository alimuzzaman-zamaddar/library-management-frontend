import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import verifiedCustomer from "../../../assets/images/syntax-master/verified-customer.png";
import money from "../../../assets/images/syntax-master/money.png";
import schedule from "../../../assets/images/syntax-master/schedule.png";
import travel from "../../../assets/images/syntax-master/travel.png";
import Image from "../../Tags/Image/Image";

type syntaxMasterSchema = {
  bgImgUrl: string;
  title: string;
  descreption: string;
};

const syntaxMasterArr: syntaxMasterSchema[] = [
  {
    bgImgUrl: verifiedCustomer,
    title: "Verified tutors",
    descreption:
      "Our community has over 2,000 expert tutors – all with prior teaching experience.",
  },
  {
    bgImgUrl: money,
    title: "Affordable",
    descreption:
      "With lesson prices starting at $10, Verbling provides remote language learning to fit any budget.",
  },
  {
    bgImgUrl: schedule,
    title: "Flexible schedule",
    descreption:
      " We make learning happen on your schedule. Book lessons when you want to learn.",
  },
  {
    bgImgUrl: travel,
    title: "Travel Assistance",
    descreption:
      "Prepare for that big trip the right way. Know the language and customs. Do's and don't. Change the experience to your trip from typical Tourist to local.",
  },
];

const SyntaxMaster = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="100"
      className="h-auto w-auto container py-5 xl:py-[120px] "
    >
      <div className="h-auto w-auto flex flex-col gap-y-[70px]  bg-rgba-gray px-5 xl:px-[170px] rounded-3xl xl:rounded-[100px] py-20 ">
        <div className=" flex flex-col  gap-y-4  items-center">
          <Heading
            Variant="h4"
            Txt={`Learn languages online with the world's best tutors`}
            className="common-heading"
          />
          <Paragraph
            className="common-sub-heading"
            Txt={"Tutors from all over the world offer online language lessons"}
          />
        </div>
        <div className="flex items-center  flex-col xl:flex-row gap-y-5 xl:gap-x-[72px] ">
          {syntaxMasterArr.map((item, idx) => {
            return (
              <div key={idx} className="flex items-center flex-col gap-y-6">
                <Image
                  Src={item.bgImgUrl}
                  Alt="not found"
                  className=" w-20 h-20 object-cover"
                />
                <div className="flex items-center flex-col gap-y-4">
                  <Heading
                    className=" text-2xl text-primary-gray font-[600] "
                    Txt={item.title}
                  />
                  <Paragraph
                    className=" text-base text-center text-primary-gray font-normal max-w-[239px] "
                    Txt={item.descreption}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SyntaxMaster;
