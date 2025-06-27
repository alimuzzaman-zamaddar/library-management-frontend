import TutorDetails from "../../../components/Pages/TutorDetials/TutorDetails";
import TutorTrial from "../../../components/Pages/TutorProfile/TutorTrial";

const TutorProfile = () => {
  return (
    <section className="h-auto w-auto    flex flex-row justify-between container   ">
      <TutorDetails />
      <TutorTrial />
    </section>
  );
};

export default TutorProfile;
