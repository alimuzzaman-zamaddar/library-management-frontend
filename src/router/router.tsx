import { createBrowserRouter } from "react-router-dom";
import Home from "./../Pages/PulicRoutes/Home";
import Layout from "../Layout/Layout";
import FindaTutor from "../Pages/PulicRoutes/FindaTutor";
import TutorSignUp  from "../Pages/Tutor/Auth/TutorSignUp"
import Onboarding from "../Pages/Tutor/Onbording";


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
  
]);

export default router;
