import CommonHeroBanner from "../../components/CommonComponents/CommonHeroBanner";
import bgVideo from "../../assets/videos/train.mp4";
import BecomeATecher from "../../components/CommonComponents/BecomeATecher";
import cuteGirl from "../../assets/images/tutors/cute-girl.png";
import HowItWorksTutor from "../../components/Pages/BecomeTutor/HowItWorksTutor";
import WhySyntaxMaster from "../../components/Pages/BecomeTutor/WhySyntaxMaster";
import FAQSection from "../../components/Pages/BecomeTutor/FAQSection";

const faqArr = [
  {
    question: "How do I become a tutor on Syntax?",
    answer:
      "To become a tutor, sign up on our platform, complete your profile with your expertise and experience, and pass our application review process.",
  },
  {
    question: "Do I need a teaching certificate or degree?",
    answer:
      "A teaching certificate or degree is not mandatory, but relevant experience and expertise in your subject area are required.",
  },
  {
    question: "How does payment work?",
    answer:
      "Payments are processed securely after each completed lesson, with funds transferred to your account weekly based on your hourly rate.",
  },
  {
    question: "Do I choose my own schedule?",
    answer:
      "Yes, you can set your own availability and manage your schedule through our calendar integration.",
  },
  {
    question: "Where do the lessons take place?",
    answer:
      "Lessons are conducted online through our HD video classroom platform.",
  },
  {
    question: "Can I teach more than one subject?",
    answer:
      "Yes, you can list multiple subjects in your profile and teach as many as you are qualified for.",
  },
  {
    question: "Can I pause or deactivate my profile?",
    answer:
      "Yes, you can pause or deactivate your profile at any time through your account settings.",
  },
];

const BecomeTutor = () => {
  const trendingSubjects = [
    { id: 1, label: "Web Development" },
    { id: 2, label: "Data Science" },
    { id: 3, label: "Machine Learning" },
    { id: 4, label: "Cybersecurity" },
  ];

  return (
    <section className="w-full h-auto  ">
      <CommonHeroBanner
        title="Teach Online,Earn More"
        trendingSubject={trendingSubjects}
        videoLink={bgVideo}
        variant={"become-tutor"}
        communityCont={`10-80`}
        higlightedTxt="Join 2,500+ Expert Tutors Worldwide"
        activeMember={50}
        authenticCount={100}
        descreption="Connect with professional tutors in languages, arts, photography, music and more. Start your learning journey today."
      />
      <HowItWorksTutor />
      <WhySyntaxMaster />
      <FAQSection data={faqArr} />
      <BecomeATecher
        isHome={false}
        bgImgUrl={cuteGirl}
        btnTxt="Apply as a Teacher"
        subTitle="Earn money by teaching online"
        descreption="You can teach thousands of learners from the comfort of your living room by connecting with thousands of learners around the world"
      />
    </section>
  );
};

export default BecomeTutor;
