import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import AosProvider from "./Provider/AosProvider/AosProvider";

createRoot(document.getElementById("root")!).render(
  <AosProvider>
    <RouterProvider router={router}></RouterProvider>
  </AosProvider>
);
