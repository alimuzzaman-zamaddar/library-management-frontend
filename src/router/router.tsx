import { createBrowserRouter } from "react-router-dom";
import Home from "./../Pages/PulicRoutes/Home";
import Layout from "../Layout/Layout";
import FindaTutor from "../Pages/PulicRoutes/FindaTutor";
import TutorSignUp  from "../Pages/Auth/TutorSignUp"
import Onboarding from "../Pages/Auth/Tutor/Onbording";
import DashboardPage from "../Dashboard/DashboardPage";
import StudentOnboarding from "../Pages/Auth/Student/StudentOnboarding";
import BecomeTutor from "../Pages/PulicRoutes/BecomeTutor";
import UserDashboardLayout from "../Layout/UserDashboardLayout";


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
  element: <UserDashboardLayout />,
  children: [
    { index: true, element: <DashboardPage /> },
    // Add more nested routes as needed
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
