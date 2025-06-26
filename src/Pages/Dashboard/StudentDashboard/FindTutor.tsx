
import { useEffect } from "react";
import AvailableTeacher from "../../../components/Pages/FindTutors/AvailableTeacher";
import TutorsOrigin from "../../../components/Pages/Home/TutorsOrigin";
import Aos from "aos";
import Heading from "../../../components/Tags/Heading/Heading";
import { SearchIconSvg } from "../../../components/SvgContainer/SVgContainer";
import AvailableTeacher from "../../../components/Pages/FindTutors/AvailableTeacher";
import TutorsOrigin from "../../../components/Pages/Home/TutorsOrigin";


const FindTutor = () => {


  const trendingSubjects = [
    { id: 1, label: "Web Development" },
    { id: 2, label: "Data Science" },
    { id: 3, label: "Machine Learning" },
    { id: 4, label: "Cybersecurity" },
  ];

  return (
    <section className="flex flex-col h-auto w-auto     ">
      <div className="h-auto w-auto container">
        <div className="h-auto rounded-[12px]  w-full flex flex-row py-[111px]  bg-primary-blue px-[150px]  ">
          <Heading
            Variant="h4"
            className="text-[32px] text-white font-bold max-w-[673px]"
            Txt={`There are 3,785 tutors ready to help you succeed at work`}
          />

          <div className="flex flex-col gap-y-2.5 con ">
            <div className="relative ">
              <input
                type="text"
                placeholder="What would you like to learn"
                className=" bg-white outline-none py-2.5 rounded-[8px] border-[1px] border-solid text-lg pl-12 pr-4 text-alt-gray max-w-[610px] w-full "
              />
              <div className="absolute top-0 left-0 z-5 transform translate-y-1/2 mx-4 ">
                <SearchIconSvg />
              </div>
            </div>
            <div className="flex flex-row gap-x-3  items-center font-normal ">
              <Heading
                Txt={"Trending:"}
                className="text-lg text-white font-[600]  "
              />
              <ul className="flex flex-row gap-x-2 ">
                {trendingSubjects?.map(item => {
                  return (
                    <li key={item.id}>
                      <div className="text-sm hover:bg-transparent ease-in-out duration-300 hover:text-white hover:border-white border-[1px] hover:border-solid cursor-pointer text-primary-gray font-normal py-1 px-2 bg-white rounded-[4px] ">
                        {" "}
                        {item.label}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <TutorsOrigin isHome={false} />
      <AvailableTeacher isHome={false} />
    </section>
  );
};

export default FindTutor;
