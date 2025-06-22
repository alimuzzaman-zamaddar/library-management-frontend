import CommonHeroBanner from "../../components/CommonComponents/CommonHeroBanner";
import Skillsset from "../../components/Pages/Home/Skillsset";
import TrendingTutors from "../../components/Pages/Home/TrendingTutors";
import TutorsOrigin from "../../components/Pages/Home/TutorsOrigin";

const Home = () => {
  return (
    <section className="w-full h-auto  ">
      <CommonHeroBanner />
      <TutorsOrigin />
      <Skillsset />
      <TrendingTutors />
    </section>
  );
};

export default Home;
