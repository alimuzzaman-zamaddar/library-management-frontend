import TeacherCard from "../../Cards/TeacherCard";
import { teacherDetials } from "../../StaticData/StaticData";
import {
  DollarSvg,
  FilterSvg,
  GlobePlane,
  ReleveanceSvg,
  SearchIconSmall,
} from "../../SvgContainer/SVgContainer";
import Button from "../../Tags/Button/Button";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";

const isAdminRoute =
  typeof window !== "undefined" &&
  window.location.pathname.startsWith("/dashboard");

  interface isHome {
    isHome: boolean;
  }

const AvailableTeacher: React.FC<isHome> = ({isHome}) => {
  return (
    <section
      className={`h-auto items-center w-auto container ${
        isHome ? "pt-20 pb-[120px] " : "py-8"
      } flex flex-col gap-y-20`}
    >
      <div
        {...(!isAdminRoute && {
          "data-aos": "fade-up",
          "data-aos-delay": "100",
        })}
        className=" h-auto w-full shadow-md bg-white border-[1px] rounded-[12px] border-solid border-alt-border p-8 flex flex-wrap xl:flex-row justify-between "
      >
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-wrap gap-y-4 xl:flex-row gap-x-5 ">
            <div className="h-auto w-auto gap-x-2 text-sm xl:text-lg p-2 xl:p-3 border-[1px] border-solid border-secondry-gray rounded-[12px] flex items-center">
              <div
                {...(!isAdminRoute && {
                  "data-aos": "fade-up",
                  "data-aos-delay": "100",
                })}
              >
                <FilterSvg />
              </div>
              <Heading
                className="text-md xl:text-lg font-[600]  text-primary-gray "
                Txt={"All Filters"}
              />
            </div>
            <div className="relative">
              <select
                {...(!isAdminRoute && {
                  "data-aos": "fade-up",
                  "data-aos-delay": "100",
                })}
                className="h-auto cursor-pointer text-sm xl:text-lg font-[600] outline-none  text-primary-gray w-auto  gap-x-2 pl-10 xl:py-3 py-2 pr-3  border-[1px] border-solid border-secondry-gray rounded-[12px] flex items-center "
                name=""
              >
                <option value="">Price Range</option>
                <option value="">$5 -$25</option>
                <option value="">$25 -$50</option>
                <option value="">$05 -$75</option>
              </select>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="absolute top-1/2 left-0  pl-2.5 -translate-y-1/2"
              >
                <DollarSvg />
              </div>
            </div>
            <div className="relative">
              <select
                {...(!isAdminRoute && {
                  "data-aos": "fade-up",
                  "data-aos-delay": "100",
                })}
                className="h-auto cursor-pointer text-sm xl:text-lg font-[600] outline-none  text-primary-gray w-auto  gap-x-2 pl-10 xl:py-3 py-2 pr-3  border-[1px] border-solid border-secondry-gray rounded-[12px] flex items-center "
                name=""
              >
                <option value="">Country</option>
                <option value="">USA</option>
                <option value="">UK</option>
                <option value="">KSA</option>
                <option value="">IRAN</option>
                <option value="">BD</option>
              </select>
              <div
                {...(!isAdminRoute && {
                  "data-aos": "fade-up",
                  "data-aos-delay": "100",
                })}
                className="absolute top-1/2 left-0 pl-2.5 -translate-y-1/2"
              >
                <GlobePlane />
              </div>
            </div>
            <div className="relative">
              <select
                {...(!isAdminRoute && {
                  "data-aos": "fade-up",
                  "data-aos-delay": "100",
                })}
                className="h-auto cursor-pointer text-sm xl:text-lg font-[600] outline-none  text-primary-gray w-auto  gap-x-2 pl-10 xl:py-3 py-2 pr-3  border-[1px] border-solid border-secondry-gray rounded-[12px] flex items-center "
                name=""
              >
                <option value="">English Tutor</option>
                <option value="">Italian Tutor</option>
                <option value="">Hindi Tutor</option>
                <option value="">Frehch Tutor</option>
                <option value="">Bangla Tutor</option>
              </select>
              <div
                {...(!isAdminRoute && {
                  "data-aos": "fade-up",
                  "data-aos-delay": "100",
                })}
                className="absolute top-1/2 left-0 pl-2.5 -translate-y-1/2"
              >
                <GlobePlane />
              </div>
            </div>
          </div>
          <div className="relative max-w-[275px] flex-1 mb-4">
            <div
              {...(!isAdminRoute && {
                "data-aos": "fade-up",
                "data-aos-delay": "100",
              })}
              className="absolute left-3 top-1/2 -translate-y-1/2"
            >
              <SearchIconSmall />
            </div>
            <input
              {...(!isAdminRoute && {
                "data-aos": "fade-up",
                "data-aos-delay": "100",
              })}
              type="text"
              placeholder="Search By Name"
              className="outline-none py-[8px] xl:py-[16.5px] rounded-[8px] border-[1px] border-solid border-secondry-gray text-sm pl-10 pr-4 text-text-gray w-full"
            />
          </div>
        </div>
        <div className="flex flex-row gap-x-2.5 items-start ">
          <div className="flex flex-row gap-x-3 items-center ">
            <Paragraph
              Txt="1,247 tutors"
              className="text-xs xl:text-lg font-normal text-primary-gray"
            />
            <div className="relative">
              <select
                {...(!isAdminRoute && {
                  "data-aos": "fade-up",
                  "data-aos-delay": "100",
                })}
                className="
            h-auto cursor-pointer text-sm xl:text-lg font-[600] text-primary-gray
            w-auto pl-10 pr-3 py-2 xl:py-3 
            border border-secondry-gray rounded-[12px]
            outline-none
        "
              >
                <option value="">Relevance</option>
                <option value="">Italian Tutor</option>
                <option value="">Hindi Tutor</option>
                <option value="">French Tutor</option>
                <option value="">Bangla Tutor</option>
              </select>
              <div
                {...(!isAdminRoute && {
                  "data-aos": "fade-up",
                  "data-aos-delay": "100",
                })}
                className="absolute left-3 top-1 translate-y-1/2 pointer-events-none"
              >
                <ReleveanceSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[60px] ">
        <div className="flex flex-col gap-y-6 items-start justify-start ">
          <Heading
            className="text-[32px] text-black font-bold"
            Txt={`200+ online teachers available`}
          />
          <div className="flex flex-col gap-y-14 xl:gap-y-8">
            {teacherDetials.map((item, idx) => {
              return (
                <TeacherCard
                  id={item.id}
                  key={idx}
                  tutorName={item.tutorName}
                  bgImgUrl={item.bgImgUrl}
                  designation={item.designation}
                  ratingCount={item.ratingCount}
                  reviewCount={item.reviewCount}
                  lessonsCount={item.lessonsCount}
                  hourlyRate={item.hourlyRate}
                  trialRate={item.trialRate}
                  shortDescreption={item.shortDescreption}
                  location={item.location}
                  languagePreferences={item.languagePreferences}
                  respondTime={item.respondTime}
                  expertise={item.expertise}
                  isAvailable={item.isAvailable}
                  introductionVideo={item.introductionVideo}
                  countryFlagImgUrl={item.countryFlagImgUrl}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-y-3 items-center ">
          <Button
            className="primary-btn !px-[53px] "
            Txt={"View More Tutors"}
          />
          <Paragraph
            className="text-base text-primary-gray font-normal"
            Txt={`Showing 4 of 1,247 tutors`}
          />
        </div>
      </div>
    </section>
  );
};

export default AvailableTeacher;
