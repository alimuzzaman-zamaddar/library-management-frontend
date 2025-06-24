import { createBrowserRouter } from "react-router-dom";
import Home from "./../Pages/PulicRoutes/Home";
import Layout from "../Layout/Layout";
import FindaTutor from "../Pages/PulicRoutes/FindaTutor";
import TutorSignUp  from "../Pages/Auth/TutorSignUp"
import Onboarding from "../Pages/Auth/Tutor/Onbording";
import DashboardPage from "../TurorDashboard/DashboardPage";
import TutorDashboardLayout from "../Layout/TutorDashboardLayout";
import StudentOnboarding from "../Pages/Auth/Student/StudentOnboarding";
import TutorSignUp from "../Pages/Tutor/Auth/TutorSignUp";
import Onboarding from "../Pages/Tutor/Onbording";
import BecomeTutor from "../Pages/PulicRoutes/BecomeTutor";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/find-a-tutor",
    element: (
      <Layout>
        <FindaTutor />
      </Layout>
    ),
  },

 { path: "/sign-up", element: <TutorSignUp /> },
 { path: "/onbording", element: <Onboarding /> },
 { path: "/student-on-boarding", element: <StudentOnboarding/> },

   {
    path: "/dashboard",
    element: <TutorDashboardLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      // { path: "students", element: <MyClasses /> },
      // { path: "messages", element: <Messages /> },
      // { path: "earnings", element: <Earnings /> },
      // { path: "availability", element: <Availability /> },
      // { path: "settings", element: <Settings /> },
    ],
  },
  {
    path: "/become-tutor",
    element: (
      <Layout>
        <BecomeTutor />
      </Layout>
    ),
  },
  { path: "/sign-up", element: <TutorSignUp /> },
  { path: "/onbording", element: <Onboarding /> },
]);

export default router;
