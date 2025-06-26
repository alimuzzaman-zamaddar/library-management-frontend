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
      "Sarah is an amazing teacher! Her lessons are well-structured, and she makes learning Mandarin enjoyable. I've seen a huge improvement in my speaking and listening skills in just a few weeks.",
  },
  {
    bgImgUrl: sunglass,
    ratingCount: 4,
    location: "Mandarin with Sarah",
    authorName: "Darrell Steward",
    descreption:
      "Sarah is very patient and passionate about teaching. Sometimes I struggle with pronunciation, but she always finds ways to help me understand. Highly recommend!",
  },
  {
    bgImgUrl: hijablady,
    ratingCount: 3,
    location: "Mandarin with Sarah",
    authorName: "Annette Black",
    descreption:
      "The lessons were helpful overall, but I felt we could have spent more time practicing conversation. Sarah is very friendly and supportive, though!",
  },
  {
    bgImgUrl: yellowglass,
    ratingCount: 4,
    location: "Mandarin with Sarah",
    authorName: "Leslie Alexander",
    descreption:
      "Sarah is very enthusiastic and makes learning fun. The lessons have a good balance between grammar, conversation, and listening practice. Will continue studying with her!",
  },
  {
    bgImgUrl: silkgirl,
    ratingCount: 5,
    location: "Mandarin with Sarah",
    authorName: "Theresa Webb",
    descreption:
      "Excellent teacher! I started as a complete beginner, and now I can hold basic conversations in Mandarin. Sarah is patient and knows how to break down complex topics.",
  },
  {
    bgImgUrl: russian,
    ratingCount: 4.5,
    location: "Mandarin with Sarah",
    authorName: "Busola Dakolo",
    descreption:
      "I really enjoy my classes with Sarah. She is very organized and gives constructive feedback. The lessons feel tailored to my needs, making it much more effective for learning Mandarin quickly.",
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
