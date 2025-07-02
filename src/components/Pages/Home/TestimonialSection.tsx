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
    location: "Syntax Master",
    authorName: "Sarah Thompson",
    descreption:
      "Syntax Master has been a game changer for me. The tutors are patient, extremely skilled, and always available when I get stuck. I've learned more in a few weeks than I have in months of trying to self-study.",
  },
  {
    bgImgUrl: sunglass,
    ratingCount: 4.5,
    location: "Syntax Master",
    authorName: "David Kim",
    descreption:
      "I was struggling with JavaScript concepts for a long time until I found Syntax Master. The lessons were well-structured, and the personalized approach helped me understand tough topics clearly.",
  },
  {
    bgImgUrl: hijablady,
    ratingCount: 4,
    location: "Syntax Master",
    authorName: "Amira Ali",
    descreption:
      "A great resource for learning coding! The support team was responsive, and my tutor was very patient. I've gained a lot of confidence in writing clean, readable code.",
  },
  {
    bgImgUrl: yellowglass,
    ratingCount: 5,
    location: "Syntax Master",
    authorName: "Michael Lee",
    descreption:
      "Syntax Master delivers what it promises. The tutors break down complicated programming concepts in a simple way, making it easy to learn. Highly recommended for anyone starting out or looking to level up.",
  },
  {
    bgImgUrl: silkgirl,
    ratingCount: 5,
    location: "Syntax Master",
    authorName: "Anna Garcia",
    descreption:
      "I went from being completely lost in coding to building my own projects thanks to Syntax Master. Their approach is hands-on and very practical. The best investment I've made in myself.",
  },
  {
    bgImgUrl: russian,
    ratingCount: 4.5,
    location: "Syntax Master",
    authorName: "John Miller",
    descreption:
      "The team at Syntax Master is truly passionate about teaching. They’ve made coding approachable for me and gave me the tools and feedback I needed to move forward in my career. I’m very grateful for their help.",
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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]  ">
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
