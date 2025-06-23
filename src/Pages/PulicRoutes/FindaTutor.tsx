import CommonHeroBanner from "../../components/CommonComponents/CommonHeroBanner";
import SyntaxMaster from "../../components/Pages/Home/SyntaxMaster";
import TestimonialSection from "../../components/Pages/Home/TestimonialSection";
import bgVideo from "../../assets/videos/train.mp4";
import MasterWork from "../../components/Pages/FindTutors/MasterWork";

const FindaTutor = () => {

  const trendingSubjects = [
    { id: 1, label: "Web Development" },
    { id: 2, label: "Data Science" },
    { id: 3, label: "Machine Learning" },
    { id: 4, label: "Cybersecurity" },
  ];

  return (
    <section className="w-full h-auto  ">
      <CommonHeroBanner
        title="Find Your Perfect Tutor"
        trendingSubject={trendingSubjects}
        videoLink={bgVideo}
        variant={"find-tutor"}
        communityCont={2500}
        activeMember={4.9}
        authenticCount={100}
        descreption="Connect with professional tutors in languages, arts, photography, music and more. Start your learning journey today."
      />
      <SyntaxMaster />
      <TestimonialSection />
      <MasterWork/>
    </section>
  );
};

export default FindaTutor;
