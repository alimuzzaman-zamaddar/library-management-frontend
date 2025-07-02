import { useState } from "react";
import Button from "../../Tags/Button/Button";
import Heading from "../../Tags/Heading/Heading";

import women from "../../../assets/images/tutors/women-1.jpg";
import women2 from "../../../assets/images/tutors/women-2.jpg";
import women3 from "../../../assets/images/tutors/women-3.jpg";
import women4 from "../../../assets/images/tutors/women-4.jpg";
import TrendingTutorsCard from "../../Cards/TrendingTutorsCard";

const trendingOption: string[] = [
  "All",
  "Art",
  "Music",
  "Chess",
  "Yoga",
  "Wrinting",
  "Martial Arts & Fitness",
];

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

const trendingTutors: terndingTutorsCardScheam[] = [
  {
    imgUrl: women4,
    tutorName: "Maria Gonzalez",
    from: "Madrid, Spain",
    redirectLink: "#",
    language: "Spanish",
    experience: "8+ years",
    specialities: "Spanish, DELE prep, Beginner to Advanced",
    teachingSTyle: "Friendly, interactive with real-life scenarios",
    speaks: "Spanish, English",
    rating: 4.9,
    totalLessons: 1200,
    
  },
  {
    imgUrl: women3,
    tutorName: "Sofia Alvarez",
    from: "Madrid, Spain",
    redirectLink: "#",
    language: "French",
    experience: "5 years",
    specialities: "French conversation, DELF preparation",
    teachingSTyle: "Engaging, focus on pronunciation",
    speaks: "French, English",
    rating: 4.8,
    totalLessons: 950,
  },
  {
    imgUrl: women2,
    tutorName: "Emma Johansson",
    from: "Madrid, Spain",
    redirectLink: "#",
    language: "German",
    experience: "7 years",
    specialities: "Business German, A1-C2",
    teachingSTyle: "Structured, goal-oriented",
    speaks: "German, English",
    rating: 4.7,
    totalLessons: 1023,
  },
  {
    imgUrl: women,
    tutorName: "Isabella Rossi",
    from: "Madrid, Spain",
    redirectLink: "#",
    language: "Italian",
    experience: "4 years",
    specialities: "Italian conversation, CILS prep",
    teachingSTyle: "Casual, practice-focused",
    speaks: "Italian, English",
    rating: 4.6,
    totalLessons: 890,
  },
  {
    imgUrl: women4,
    tutorName: "Maria Gonzalez",
    from: "Madrid, Spain",
    redirectLink: "#",
    language: "Spanish",
    experience: "8+ years",
    specialities: "Spanish, DELE prep, Beginner to Advanced",
    teachingSTyle: "Friendly, interactive with real-life scenarios",
    speaks: "Spanish, English",
    rating: 4.9,
    totalLessons: 1200,
  },
  {
    imgUrl: women3,
    tutorName: "Sofia Alvarez",
    from: "Madrid, Spain",
    redirectLink: "#",
    language: "French",
    experience: "5 years",
    specialities: "French conversation, DELF preparation",
    teachingSTyle: "Engaging, focus on pronunciation",
    speaks: "French, English",
    rating: 4.8,
    totalLessons: 950,
  },
  {
    imgUrl: women2,
    tutorName: "Emma Johansson",
    from: "Madrid, Spain",
    redirectLink: "#",
    language: "German",
    experience: "7 years",
    specialities: "Business German, A1-C2",
    teachingSTyle: "Structured, goal-oriented",
    speaks: "German, English",
    rating: 4.7,
    totalLessons: 1023,
  },
  {
    imgUrl: women,
    tutorName: "Isabella Rossi",
    from: "Madrid, Spain",
    redirectLink: "#",
    language: "Italian",
    experience: "4 years",
    specialities: "Italian conversation, CILS prep",
    teachingSTyle: "Casual, practice-focused",
    speaks: "Italian, English",
    rating: 4.6,
    totalLessons: 890,
  },
];


const TrendingTutors = () => {
  const [AcitveTab, setAcitveTab] = useState<string | undefined>(
    trendingOption[0]
  );

  return (
    <section className="flex flex-col  gap-y-[60px] h-auto pb-[80px]  items-center justify-center  w-full container ">
      <div className="flex flex-col items-center gap-y-10">
        <Heading Variant="h4" Txt={`Trending`} className="common-heading " />
        <div className="flex justify-center xl:justify-start flex-wrap gap-y-2 md:gap-y-4 gap-x-3 md:gap-x-6 ">
          {trendingOption.map((item, idx) => {
            return (
              <Button
                key={idx}
                onClick={() => {
                  setAcitveTab(item);
                }}
                className={`
                  ${
                    AcitveTab === item
                      ? " bg-primary-blue text-white  "
                      : "border-solid border-alt-gray text-primary-blue "
                  }
                  h-auto w-auto cursor-pointer rounded-[60px]  py-2 md:py-4 px-[28px] border-[1px] font-medium ease-in-out duration-300 text-sm md:text-base
                  `}
                Txt={item}
              />
            );
          })}
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[30px] items-center justify-center flex-wrap ">
        {trendingTutors.map((item, idx) => {
          return (
            <TrendingTutorsCard
              key={idx}
              imgUrl={item.imgUrl}
              redirectLink={item.redirectLink}
              tutorName={item.tutorName}
              language={item.language}
              experience={item.experience}
              specialities={item.specialities}
              teachingSTyle={item.teachingSTyle}
              speaks={item.speaks}
              rating={item.rating}
              totalLessons={item.totalLessons}
              from={item.from}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TrendingTutors;
