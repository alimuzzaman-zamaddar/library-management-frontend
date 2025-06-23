import CommonHeroBanner from "../../components/CommonComponents/CommonHeroBanner";
import HowItWorkSection from "../../components/Pages/Home/HowItWorkSection";
import Skillsset from "../../components/Pages/Home/Skillsset";
import SyntaxMaster from "../../components/Pages/Home/SyntaxMaster";
import TestimonialSection from "../../components/Pages/Home/TestimonialSection";
import TrendingTutors from "../../components/Pages/Home/TrendingTutors";
import TutorsOrigin from "../../components/Pages/Home/TutorsOrigin";



const Home = () => {
  return (
    <section className="w-full h-auto  ">
      <CommonHeroBanner />
      <TutorsOrigin />
      <Skillsset />
      <TrendingTutors />
      <HowItWorkSection />
      <SyntaxMaster />
      <TestimonialSection />
    </section>
  );
};

export default Home;
