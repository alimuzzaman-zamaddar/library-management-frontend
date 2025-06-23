import TestimonialCard from "../../Cards/TestimonialCard";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import oldwoman from "../../../assets/images/testimonial/old-woman.png";
import hijablady from "../../../assets/images/testimonial/hijab-lady.png";
import russian from "../../../assets/images/testimonial/russian.png";
import silkgirl from "../../../assets/images/testimonial/silk-girl.png";
import sunglass from "../../../assets/images/testimonial/sun-glass.png";
import yellowglass from "../../../assets/images/testimonial/yello-dress.png";

const testimonialArr = [
  {
    bgImgUrl: oldwoman,
    ratingCount: 5,
    location: "Mandarin with Sarah",
    authorName: "Jenny Wilson",
    descreption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    bgImgUrl: sunglass,
    ratingCount: 4,
    location: "Mandarin with Sarah",
    authorName: "Darrell Steward",
    descreption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    bgImgUrl: hijablady,
    ratingCount: 2,
    location: "Mandarin with Sarah",
    authorName: "Annette Black",
    descreption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    bgImgUrl: yellowglass,
    ratingCount: 3.5,
    location: "Mandarin with Sarah",
    authorName: "Leslie Alexander",
    descreption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    bgImgUrl: silkgirl,
    ratingCount: 5,
    location: "Mandarin with Sarah",
    authorName: "Theresa Webb",
    descreption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    bgImgUrl: russian,
    ratingCount: 4.5,
    location: "Mandarin with Sarah",
    authorName: "Busola Dakolo",
    descreption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="h-auto flex flex-col gap-y-12  w-auto pb-[120px] container ">
      <div className=" flex flex-col gap-y-4 items-center">
        <Heading
          Variant="h4"
          Txt={`What students, love, about us`}
          className="common-heading"
        />
        <Paragraph
          className="common-sub-heading"
          Txt={
            "Safe, effective, affordable learning. For language learners just like you."
          }
        />
      </div>
      <div className="grid grid-cols-3 gap-[30px]  ">
        {testimonialArr.map((item, idx) => {
          return (
            <TestimonialCard
              key={idx}
              bgImgUrl={item.bgImgUrl}
              ratingCount={item.ratingCount}
              authorName={item.authorName}
              descreption={item.descreption}
              location={item.location}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialSection;
