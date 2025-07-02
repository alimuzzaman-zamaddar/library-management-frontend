import type React from "react";
import Image from "../Tags/Image/Image";
import Heading from "../Tags/Heading/Heading";
import { ArrowSvg, StarGroupSVg } from "../SvgContainer/SVgContainer";
import Paragraph from "../Tags/Paragraph/Paragraph";
import { useNavigate } from "react-router-dom";

interface terndingTutorsCardScheam {
  imgUrl: string;
  tutorName: string;
  redirectLink: string;
  language: string;
  experience: string;
  specialities: string;
  teachingSTyle: string;
  speaks: string;
  rating: number;
  totalLessons: number;
  from: string;
}

const TrendingTutorsCard: React.FC<terndingTutorsCardScheam> = ({
  imgUrl,
  tutorName,
  redirectLink,
  language,
  experience,
  specialities,
  teachingSTyle,
  speaks,
  from,
  totalLessons,
}) => {
  const navigate = useNavigate();
  return (
    <div className="h-auto relative w-auto max-w-[383px] rounded-[12px] shadow-md bg-white ArrowSvgArrowSvg border-alt-gray ">
      <div className="relative">
        <Image
          Src={imgUrl}
          className="w-full rounded-t-[12px] h-[300px] xl:h-[412px] object-top object-cover "
          Alt="not found"
        />
        <div className="absolute bottom-0 left-0 pl-[30px] flex flex-col gap-y-2 pb-[30px] ">
          <div data-aos="fade-up" data-aos-delay="100">
            <StarGroupSVg />
          </div>
          <Paragraph className="text-white text-lg font-[600] " Txt={`${totalLessons} Lessons`} />
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-b-[12px] p-5 h-auto w-auto gap-y-[27px]">
        <div className="flex items-center flex-row justify-between">
          <Heading
            Txt={tutorName}
            Variant="h5"
            className="text-2xl font-bold"
          />
          <div
            onClick={() => {
              navigate(redirectLink);
            }}
            data-aos="fade-up"
            data-aos-delay="100"
            className="cursor-pointer"
          >
            <ArrowSvg />
          </div>
        </div>
        <ul className="flex flex-col gap-y-4">
          <li className="grid grid-cols-[150px_1fr] items-start">
            <Heading
              className="text-lg font-[600] text-primary-gray"
              Txt="Language:"
            />
            <Paragraph
              className="text-base font-normal text-[#200E25]"
              Txt={language}
            />
          </li>
          <li className="grid grid-cols-[150px_1fr] items-start">
            <Heading
              className="text-lg font-[600] text-primary-gray"
              Txt="Teaching Style:"
            />
            <Paragraph
              className="text-base font-normal text-[#200E25]"
              Txt={teachingSTyle}
            />
          </li>
          <li className="grid grid-cols-[150px_1fr] items-start">
            <Heading
              className="text-lg font-[600] text-primary-gray"
              Txt="Specialties:"
            />
            <Paragraph
              className="text-base font-normal text-[#200E25]"
              Txt={specialities}
            />
          </li>
          <li className="grid grid-cols-[150px_1fr] items-start">
            <Heading
              className="text-lg font-[600] text-primary-gray"
              Txt="Experience:"
            />
            <Paragraph
              className="text-base font-normal text-[#200E25]"
              Txt={experience}
            />
          </li>
          <li className="grid grid-cols-[150px_1fr] items-start">
            <Heading
              className="text-lg font-[600] text-primary-gray"
              Txt="From:"
            />
            <Paragraph
              className="text-base font-normal text-[#200E25]"
              Txt={from}
            />
          </li>
          <li className="grid grid-cols-[150px_1fr] items-start">
            <Heading
              className="text-lg font-[600] text-primary-gray"
              Txt="Speaks:"
            />
            <Paragraph
              className="text-base font-normal text-[#200E25]"
              Txt={speaks}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TrendingTutorsCard;
