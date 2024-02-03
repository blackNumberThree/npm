import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import { AboutCompany } from "./App/AboutCompany";
import { News } from "./App/News";
import { Main } from "./App/Main";
import { SpecialPage } from "./App/SpecialPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/Main" element={<Main />} />

      <Route path="/News" element={<News />} />
      <Route path="/AboutCompany" element={<AboutCompany />} />
      <Route
        path="/specialPage/:id"
        action={({ params }) => params}
        element={<SpecialPage />}
      />

      <Route path="*" exact element={<h2>Not Found</h2>} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
