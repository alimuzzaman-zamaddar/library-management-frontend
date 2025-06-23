import { createBrowserRouter } from "react-router-dom";
import Home from "./../Pages/PulicRoutes/Home";
import Layout from "../Layout/Layout";
import FindaTutor from "../Pages/PulicRoutes/FindaTutor";

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
]);

export default router;
