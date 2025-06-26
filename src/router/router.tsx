import { createBrowserRouter } from "react-router-dom";
import Home from "./../Pages/PulicRoutes/Home";
import Layout from "../Layout/Layout";
import FindaTutor from "../Pages/PulicRoutes/FindaTutor";
import TutorSignUp from "../Pages/Auth/TutorSignUp";
import Onboarding from "../Pages/Auth/Tutor/Onbording";
import DashboardPage from "../Pages/Dashboard/DashboardPage";
import StudentOnboarding from "../Pages/Auth/Student/StudentOnboarding";
import BecomeTutor from "../Pages/PulicRoutes/BecomeTutor";
import CommonDashboardLayout from "../Layout/CommonDashboardLayout";
import FindTutor from "../Pages/Dashboard/StudentDashboard/FindTutor";
import TutorProfile from "../Pages/Dashboard/StudentDashboard/TutorProfile";

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
  { path: "/student-on-boarding", element: <StudentOnboarding /> },

  {
    path: "/dashboard/",
    element: <CommonDashboardLayout role="student" />,
    children: [
      { index: true, element: <DashboardPage /> },
      {
        path: "find-tutors",
        element: <FindTutor />,
      },
      {
        path: "tutors/:id",
        element: <TutorProfile />,
      },
      {
        path: `/dashboard/book/tutor/:id`,
        element: '',
      },
    ],
  },
]);

export default router;
