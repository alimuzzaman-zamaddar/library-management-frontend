import rating from '../../assets/images/rating.png'

// interface commonHeroBannerSchema {
//   title: string;
//   higlightedTxt: string;
//   videoLink: string;
//   descreption: string;
//   trendingSubject: {
//     label: string;
//   }[];
//   reviewCount: number;
// }

import bgVideo from "../../assets/videos/train.mp4";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";
import { SearchIconSvg } from "../SvgContainer/SVgContainer";

const CommonHeroBanner = () => {
  return (
    <div className="relative w-full h-[700px] flex flex-col  justify-center text-white">
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />

      <div className="flex flex-col gap-y-[60px] container max-w-[700px]  ">
        <div className="flex flex-col gap-y-8 ">
          <div className="flex flex-col gap-y-4 ">
            <div
              className="flex flex-col items-start gap-y-2
         "
            >
              <Heading
                className="text-white text-[64px] font-bold "
                Txt={"Learn Any Skill With"}
              />
              <Heading
                Txt={"Expert Tutors"}
                className="bg-[#6A307D] text-[64px] font-bold text-white rounded-[8px] h-auto w-auto px-2 py-1 "
              />
            </div>
            <Paragraph
              Txt={
                "Connect with professional tutors in languages, arts, photography, music and more. Start your learning journey today."
              }
              className=" text-secondary-white text-lg font-normal max-w-[728px] "
            />
          </div>
          <div className="flex flex-col  gap-y-3 ">
            <div className="relative ">
              <input
                data-aos="fade-up"
                data-aos-delay="100"
                type="text"
                placeholder="What would you like to learn"
                className=" bg-white outline-none py-2.5 rounded-[8px] border-[1px] border-solid text-lg pl-12 pr-4 text-alt-gray max-w-[610px] w-full "
              />
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="absolute top-0 left-0 z-5 transform translate-y-1/2 mx-4 "
              >
                <SearchIconSvg />
              </div>
            </div>
            <div className="flex flex-row gap-x-3  items-center font-normal ">
              <Heading
                Txt={"Trending:"}
                className="text-lg text-white font-[600]  "
              />
              <ul className="flex flex-row gap-x-2 ">
                {[0, 2, 3, 4, 5, 6].map((item) => {
                  return (
                    <li
                      data-aos="fade-up"
                      data-aos-delay="100"
                      key={item}
                      className="text-sm text-primary-gray font-normal py-1 px-2 bg-white rounded-[4px] "
                    >
                      language
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-5 justify-center items-center bg ">
          <div className="flex flex-row gap-x-4.5 ">
            <Heading
              Variant="h5"
              Txt={"Excellent"}
              className="text-lg text-white font-normal "
            />
            <img
              data-aos="fade-up"
              data-aos-delay="100"
              src={rating}
              alt="not found"
              className="w-[104px] h-5 object-cover"
            />
          </div>
          <Heading
            Variant="h5"
            Txt={"4.5 out of 5 based on 1663 reviews on trust pilot"}
            className="4.5 out of 5 based on 1663 reviews on trust pilot"
          />
        </div>
      </div>
    </div>
  );
};

export default CommonHeroBanner;
