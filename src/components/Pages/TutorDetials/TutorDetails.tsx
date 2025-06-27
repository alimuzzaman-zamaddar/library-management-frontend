import {
  GlobePlain,
  Graduate,
  Lessons,
  WhiteHeart,
} from "../../SvgContainer/SVgContainer";
import Button from "../../Tags/Button/Button";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import {  useParams } from "react-router-dom";
import { teacherDetials } from "../../StaticData/StaticData";
import Heading from "../../Tags/Heading/Heading";
import Image from "../../Tags/Image/Image";

const TutorDetails = () => {

  let { id } = useParams();

  const tutorId = id ? Number(id) : undefined;

  const activeTutor = teacherDetials.find(tutor => tutor.id === tutorId);



  return (
    <section className="h-auto w-auto    flex flex-col container gap-y-10  ">
      <div className="flex flex-row  overflow-y-hidden  gap-x-8 ">
        <div className="flex flex-col gap-y-8 ">
          <div className="h-auto w-auto p-8 shadow-md rounded-[12px] bg-primary-blue flex flex-row gap-x-[240px]  ">
            <div className="flex flex-row gap-x-4  ">
              <Image
                Src={activeTutor?.bgImgUrl ?? "/"}
                Alt="not found"
                className="h-[120px] w-[120px] rounded-full object-cover "
              />
              <div className="flex flex-col gap-y-8  ">
                <div className="flex flex-row gap-x-4 items-center ">
                  <Heading
                    className="text-[32px] text-white font-[600] "
                    Txt={activeTutor?.tutorName}
                  />
                  <Image
                    Src={activeTutor?.countryFlagImgUrl ?? "/"}
                    Alt="not found"
                    className="h-8 w-8 object-cover "
                  />
                </div>
                <div className="flex flex-row gap-x-8 ">
                  <Paragraph
                    className="text-lg text-white font-normal "
                    Txt={`⭐${activeTutor?.ratingCount} (${activeTutor?.reviewCount} reviews)`}
                  />
                  <div className="flex items-center flex-row gap-x-[4.5px] ">
                    <GlobePlain />
                    <Paragraph
                      Txt={activeTutor?.country}
                      className="text-lg text-white font-normal "
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-x-8 items-center ">
                  <div className="flex items-center flex-row gap-x-2 ">
                    <Lessons />
                    <Paragraph
                      Txt={`${activeTutor?.lessonsCount} lessons taught`}
                      className="text-lg text-white font-normal "
                    />
                  </div>
                  <div className="flex items-center flex-row gap-x-2 ">
                    <Graduate />
                    <Paragraph
                      Txt={`${activeTutor?.studentCount.toFixed(
                        0
                      )} lessons taught`}
                      className="text-lg text-white font-normal "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 items-end ">
              <div className="flex flex-row gap-x-4 items-center">
                <Heading
                  Variant="h4"
                  Txt={`$${activeTutor?.hourlyRate}`}
                  className="text-[32px] font-bold text-white"
                />
                <div className="h-auto w-auto cursor-pointer border-[1px] p-[6.54px]  border-solid border-secondry-gray rounded-[8px] ">
                  <WhiteHeart />
                </div>
              </div>
              <Heading
                Variant="h6"
                Txt={`Per hour`}
                className="text-base font-normal text-white"
              />
              <div className="px-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[8px] py-1">
                <Heading
                  Variant="h6"
                  Txt={`Trail: $${activeTutor?.trialRate}`}
                  className="text-base font-normal text-white"
                />
              </div>
            </div>
          </div>
          <div className="h-auto w-auto p-8 border-[1px] border-solid rounded-[12px] border-alt-border flex flex-col gap-y-8   ">
            <div className="flex flex-col gap-y-4 ">
              <Heading
                className="text-secondary-black text-2xl font-bold "
                Txt={`About ${activeTutor?.tutorName} `}
              />
              <Paragraph
                className="text-sm font-normal max-w-[940px] text-primary-gray "
                Txt={activeTutor?.shortDescreption}
              />
            </div>
            <div className="flex flex-col gap-y-5 ">
              <Heading
                className="text-secondary-black text-lg font-bold "
                Txt={`Education `}
              />
              <div className="flex flex-row gap-x-3  ">
                {activeTutor?.languagePreferences
                  ?.split(", ")
                  .map((item, idx) => (
                    <span
                      key={idx}
                      className="text-sm text-secondary-black px-3 py-1  rounded-[12px] bg-light-gray "
                    >
                      {item}
                      {idx <
                        activeTutor.languagePreferences.split(", ").length -
                          1 && ", "}
                    </span>
                  ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-5 ">
              <Heading
                className="text-secondary-black text-lg font-bold "
                Txt={`Education`}
              />
              <div className="flex flex-col gap-y-3 ">
                {activeTutor?.educationDeatisArr.map((item, idx) => {
                  return (
                    <div key={idx} className="flex flex-col gap-y-1 ">
                      <Heading
                        className="text-secondary-black text-lg font-bold "
                        Txt={item?.institutionName}
                      />
                      <Heading
                        className="text-primary-gray text-sm font-normal "
                        Txt={item?.qulifiactionName}
                      />
                    </div>
                  );
                })}
              </div>
              <div className=" max-w-[452px] p-4 h-auto w-auto bg-white rounded-lg flex flex-col gap-y-3 shadow-md ">
                <div className="flex items-center space-x-2 text-gray-600">
                  <span className="text-yellow-500">📜</span>
                  <h3 className="text-lg font-semibold text-shadow-primary-blue">
                    Professional Credentials
                  </h3>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  View verified certificates, diplomas and qualifications
                </p>
                <Button
                  className="primary-btn !text-sm "
                  Txt={`View Certificates & Credentials →`}
                />
              </div>
            </div>
          </div>
          <div className="h-auto w-auto p-8 bg-white border-[1px] border-solid rounded-[12px] border-alt-border shadow-md flex flex-col gap-y-6 ">
            <div className="flex flex-col gap-y-5 ">
              <Heading
                className="text-secondary-black text-2xl font-bold "
                Txt={`Subjects & Specialties`}
              />
              <Heading
                className="text-secondary-black text-lg font-bold "
                Txt={`Subjects`}
              />
              <div className="flex flex-row gap-x-3  ">
                {activeTutor?.subjects.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-sm  text-capitalize px-3 py-1 text-white  rounded-[12px] bg-[#1c4d92f8] "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-5 ">
              <Heading
                className="text-secondary-black text-lg font-bold "
                Txt={`Specialties`}
              />
              <div className="flex flex-row gap-x-3  ">
                {activeTutor?.specialities.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-sm  px-3 py-1 text-white  rounded-[12px] bg-[#6A307D] "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-5 ">
              <Heading
                className="text-secondary-black text-lg font-bold "
                Txt={`Education `}
              />
              <div className="flex flex-row gap-x-3  ">
                {activeTutor?.languagePreferences
                  ?.split(", ")
                  .map((item, idx) => (
                    <span
                      key={idx}
                      className="text-sm text-secondary-black px-3 py-1  rounded-[12px] bg-light-gray "
                    >
                      {item}
                      {idx <
                        activeTutor.languagePreferences.split(", ").length -
                          1 && ", "}
                    </span>
                  ))}
              </div>
            </div>
          </div>
          <div className="h-auto w-auto p-8 bg-white border-[1px] border-solid rounded-[12px] border-alt-border shadow-md flex flex-col gap-y-6 ">
            <Heading
              className="text-secondary-black text-lg font-bold "
              Txt={`Student Reviews`}
            />
            <div className="flex flex-col gap-y-5 ">
              {activeTutor?.review?.map((item, idx) => {
                const ratingCount = item.rating;

                return (
                  <div key={idx} className="flex flex-col gap-y-5">
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex flex-row gap-x-2 items-center">
                        <Heading
                          className="text-base font-[600] text-primary-gray"
                          Txt={item.name}
                        />
                        <div className="flex flex-row items-center gap-x-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => {
                              const starNumber = i + 1;

                              if (starNumber <= Math.floor(ratingCount)) {
                                return (
                                  <span
                                    key={i}
                                    className="text-lg text-yellow-500"
                                  >
                                    ★
                                  </span>
                                );
                              } else if (
                                starNumber === Math.ceil(ratingCount) &&
                                ratingCount % 1 !== 0
                              ) {
                                return (
                                  <span
                                    key={i}
                                    className="text-lg text-yellow-500"
                                  >
                                    ☆
                                  </span>
                                );
                              } else {
                                return (
                                  <span
                                    key={i}
                                    className="text-lg text-gray-400"
                                  >
                                    ★
                                  </span>
                                );
                              }
                            })}
                          </div>
                        </div>
                      </div>
                      <Paragraph
                        className="text-sm font-normal text-primary-gray"
                        Txt={item.date}
                      />
                    </div>
                    <Paragraph
                      className="text-sm font-normal text-primary-gray"
                      Txt={item.comment}
                    />
                    {idx !== activeTutor?.review?.length - 1 && (
                      <hr className="h-[1px] w-full border-t-[1px] border-solid border-alt-border  " />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TutorDetails;
