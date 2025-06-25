import StudentDashboardPage from "./StudentDashboard/StudentDashboardPage";
import TutorDashboardPage from "./TutorDashboard/TutorDashboardPage";



const role: "student" | "tutor" = "student"; 

const DashboardPage = () => {
  if (role === "student") return <StudentDashboardPage />;
  if (role === "tutor") return <TutorDashboardPage />;
  return <div className="p-6 text-red-500">Error: Unknown user role</div>;
};

export default DashboardPage;
