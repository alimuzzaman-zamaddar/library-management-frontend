import { createBrowserRouter } from "react-router-dom";
import Home from "./../Pages/PulicRoutes/Home";
import Layout from "../Layout/Layout";
import TutorSignUp  from "../Pages/Tutor/Auth/TutorSignUp"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
 { path: "/sign-up", element: <TutorSignUp /> },
  
]);

export default router;
