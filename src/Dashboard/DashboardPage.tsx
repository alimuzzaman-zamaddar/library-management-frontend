import StudentDashboardPage from "./StudentDashboard/StudentDashboardPage";
import TutorDashboardPage from "./TutorDashboard/TutorDashboardPage";



// 🔧 Replace this with dynamic logic later (e.g., from login or context)
const role: "student" | "tutor" = "student"; // Example role, can be "student" or "tutor"

const DashboardPage = () => {
  if (role === "student") return <StudentDashboardPage />;
  if (role === "tutor") return <TutorDashboardPage />;
  return <div className="p-6 text-red-500">Error: Unknown user role</div>;
};

export default DashboardPage;
