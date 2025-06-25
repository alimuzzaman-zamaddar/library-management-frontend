import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";

type lessonsFeaturesSchema = {
  title: string;
  descretpion: string;
};

const lessonsFeatureArr: lessonsFeaturesSchema[] = [
  {
    title: "Choose a tutor:",
    descretpion: `You can use filters in the "Find tutors" section to narrow the search results based on your needs and budget. You can choose based on the specialty needed, specify your price range, preferred time, etc. You can even filter tutors by nationality or other languages they speak. If you have any questions for a tutor, you can message them directly.`,
  },
  {
    title: "Book your first lesson:",
    descretpion: `Once you've found a tutor, you can book your first lesson at a time and day that works best for you. During your first lesson, you'll discuss your needs and goals with your private English tutor.`,
  },
  {
    title: "Buy a lesson package:",
    descretpion: `Once you've found a tutor, you can book your first lesson at a time and day that works best for you. During your first lesson, you'll discuss your needs and goals with your private English tutor.`,
  },
  {
    title: "During and after your lessons:",
    descretpion: `Once you've found a tutor, you can book your first lesson at a time and day that works best for you. During your first lesson, you'll discuss your needs and goals with your private English tutor.`,
  },
  {
    title: "Confirming your lessons and leaving a review:",
    descretpion: `Once you've found a tutor, you can book your first lesson at a time and day that works best for you. During your first lesson, you'll discuss your needs and goals with your private English tutor.`,
  },
];

const MasterWork = () => {
  return (
    <section className="flex flex-col gap-y-10 h-auto w-auto py-[120px]  container ">
      <div className="flex flex-col gap-y-10 max-w-[1070px] ">
        <div className="flex flex-col gap-y-[14px] ">
          <Heading
            className="text-[32px] leading-[150%] font-bold text-primary-gray  "
            Txt={`How do online English lessons with Syntax Master work?`}
          />
          <Paragraph
            className="text-lg font-normal leading-[150%] text-primary-gray max-w-[520px] "
            Txt={`How do online English lessons with Syntax Master work?`}
          />
        </div>
        <hr
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-full border-t border-solid border-secondry-gray "
        />
      </div>
      <div className="relative w-full max-w-[1070px] flex flex-col gap-y-6  ">
        {lessonsFeatureArr.map((item, idx) => {
          return (
            <div className="flex flex-col gap-y-6 ">
              <div className="flex flex-col gap-y-4 ">
                <Heading
                  className="text-2xl text-primary-gray leading-[150%] font-bold "
                  Txt={item.title}
                />
                <Paragraph
                  Txt={item.descretpion}
                  className="text-base text-primary-gray leading-[150%] font-normal  "
                />
              </div>
              {idx < lessonsFeatureArr.length - 1 && (
                <hr
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="w-full border-t border-solid h-[1px] border-secondry-gray "
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MasterWork;
