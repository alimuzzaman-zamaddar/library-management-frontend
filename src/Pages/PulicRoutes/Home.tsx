import CommonHeroBanner from "../../components/CommonComponents/CommonHeroBanner";
import HowItWorkSection from "../../components/Pages/Home/HowItWorkSection";
import Skillsset from "../../components/Pages/Home/Skillsset";
import SyntaxMaster from "../../components/Pages/Home/SyntaxMaster";
import TestimonialSection from "../../components/Pages/Home/TestimonialSection";
import TrendingTutors from "../../components/Pages/Home/TrendingTutors";
import TutorsOrigin from "../../components/Pages/Home/TutorsOrigin";
import prettyGirl from "../../assets/images/testimonial/pretty-girl.png";
import BecomeATecher from "../../components/CommonComponents/BecomeATecher";
import bgVideo from "../../assets/videos/train.mp4";

const Home = () => {
  const features = [
    "Set your own hourly rates and cash out your earnings anytime.",
    "Teach from home or any other convenient location of your choice.",
    "Teach international students from every corner of the world.",
  ];

  const trendingSubjects = [
    { id: 1, label: "Web Development" },
    { id: 2, label: "Data Science" },
    { id: 3, label: "Machine Learning" },
    { id: 4, label: "Cybersecurity" },

  ];
  
  
  
  return (
    <section className="w-full h-auto  ">
      <CommonHeroBanner
        title="Learn Any Skill With"
        trendingSubject={trendingSubjects}
        videoLink={bgVideo}
        variant={"home"}
        descreption="Connect with professional tutors in languages, arts, photography, music and more. Start your learning journey today."
      />
      <TutorsOrigin />
      <Skillsset />
      <TrendingTutors />
      <HowItWorkSection />
      <SyntaxMaster />
      <TestimonialSection />
      <BecomeATecher
        isHome={true}
        title="For teachers"
        bgImgUrl={prettyGirl}
        btnTxt="Become a Teacher"
        subTitle="Become a teacher today."
        descreption="Experience a safe, effective, and affordable learning journey. We're here for language learners like you."
        features={features}
      />
    </section>
  );
};

export default Home;
