import rating from "../../assets/images/rating.png";

interface commonHeroBannerSchema {
  title: string;
  higlightedTxt?: string;
  videoLink: string;
  descreption: string;
  trendingSubject?: {
    label: string;
    id: number;
  }[];
  reviewCount?: number;
  variant: "home" | "become-tutor" | "find-tutor";
  communityCont?: number | string;
  activeMember?: number;
  authenticCount?: number;
}

import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";
import {
  CommunitySvg,
  LocationSvg,
  RewardIcon,
  SearchIconSmall,
  SearchIconSvg,
  VerifiedIcon,
} from "../SvgContainer/SVgContainer";
import type React from "react";
import Button from "../Tags/Button/Button";

const CommonHeroBanner: React.FC<commonHeroBannerSchema> = ({
  title,
  higlightedTxt,
  videoLink,
  descreption,
  trendingSubject,
  variant,
  authenticCount,
  activeMember,
  communityCont,
}) => {
  return (
    <div className="relative w-full h-[700px] flex flex-col  justify-center text-white">
      <video
        src={videoLink}
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
              {variant === "become-tutor" && (
                <Heading
                  Txt={higlightedTxt}
                  className=" bg-light-pink text-lg font-normal text-white rounded-[8px] h-auto w-auto  py-2.5 px-4 "
                />
              )}
              <Heading
                className="text-white text-[64px] font-bold "
                Txt={title}
              />
              {variant === "home" && (
                <Heading
                  Txt={"Expert Tutors"}
                  className="bg-[#6A307D] text-[64px] font-bold text-white rounded-[8px] h-auto w-auto px-2 py-1 "
                />
              )}
            </div>
            <Paragraph
              Txt={descreption}
              className=" text-secondary-white text-lg font-normal max-w-[728px] "
            />
          </div>
          <div className="flex flex-col  gap-y-3 ">
            {variant === "home" && (
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
            )}
            {variant === "find-tutor" && (
              <div className="bg-white flex flex-row gap-x-4 items-center rounded-[12px] py-4 px-5 border-[1px] border-solid border-alt-gray w-full max-w-[657px]">
                {/* SEARCH INPUT */}
                <div className="relative flex-1">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                  >
                    <SearchIconSmall />
                  </div>
                  <input
                    data-aos="fade-up"
                    data-aos-delay="100"
                    type="text"
                    placeholder="What would you like to learn"
                    className="outline-none py-[16.5px] rounded-[8px] border-[1px] border-solid border-secondry-gray text-sm pl-10 pr-4 text-text-gray w-full"
                  />
                </div>

                {/* LOCATION INPUT */}
                <div className="relative flex-1">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                  >
                    <LocationSvg />
                  </div>
                  <input
                    data-aos="fade-up"
                    data-aos-delay="100"
                    type="text"
                    placeholder="Location"
                    className="outline-none py-[16.5px] rounded-[8px] border-[1px] border-solid border-secondry-gray text-sm pl-[36px] pr-4 text-text-gray w-full"
                  />
                </div>

                {/* BUTTON */}
                <div className="flex-shrink-0">
                  <Button
                    Txt="Find Tutor"
                    className="primary-btn !py-[13.5px] !px-[37.5px]"
                  />
                </div>
              </div>
            )}
            {variant === "become-tutor" && (
              <div className="bg-white relative grid grid-cols-2 gap-4 items-center rounded-[12px] py-4 px-5 border border-solid border-alt-gray w-full max-w-[648px]">
                <Button
                  Txt="Apply as a Tutor"
                  className="primary-btn w-full !py-[13.5px]"
                />
                <Button
                  Txt="How Its Work"
                  className="reverse-primary-btn w-full !py-[13.5px]"
                />
              </div>
            )}

            <div className="flex flex-row gap-x-3  items-center font-normal ">
              {variant === "home" && (
                <Heading
                  Txt={"Trending:"}
                  className="text-lg text-white font-[600]  "
                />
              )}
              {variant !== "become-tutor" && (
                <ul className="flex flex-row gap-x-2 ">
                  {trendingSubject?.map(item => {
                    return (
                      <li data-aos="fade-up" data-aos-delay="100" key={item.id}>
                        <div className="text-sm hover:bg-transparent ease-in-out duration-300 hover:text-white hover:border-white border-[1px] hover:border-solid cursor-pointer text-primary-gray font-normal py-1 px-2 bg-white rounded-[4px] ">
                          {" "}
                          {item.label}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
        {variant === "home" && (
          <div className="w-full flex flex-col gap-y-5 justify-center items-center  ">
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
        )}
        {variant !== "home" && (
          <div className="w-full flex flex-row gap-x-6">
            <div className="flex flex-row gap-x-3 items-center ">
              <CommunitySvg />
              <Paragraph
                className="text-lg text-white font-normal "
                Txt={`${
                  variant === "find-tutor"
                    ? `${communityCont}+ Expert Tutors`
                    : `$${communityCont} Hourly Rate`
                }`}
              />
            </div>
            <div className="flex flex-row gap-x-3 items-center ">
              <RewardIcon />
              <Paragraph
                className="text-lg text-white font-normal "
                Txt={` ${
                  variant === "find-tutor"
                    ? `${activeMember} Average Rating`
                    : `${activeMember}k+ Active Students`
                }`}
              />
            </div>
            <div className="flex flex-row gap-x-3 items-center ">
              <VerifiedIcon />
              <Paragraph
                className="text-lg text-white font-normal "
                Txt={`${authenticCount}% ${
                  variant === "find-tutor" ? "Verified" : "Flexibility"
                }`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonHeroBanner;
