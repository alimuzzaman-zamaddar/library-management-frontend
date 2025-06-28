import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import AosProvider from "./Provider/AosProvider/AosProvider";
import { Provider } from "react-redux";
import store from "./redux/store";


createRoot(document.getElementById("root")!).render(
  <AosProvider>
    <Provider store={store} >
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </AosProvider>
);
