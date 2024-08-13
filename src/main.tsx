import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout.tsx";
import "@/assets/css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.tsx";
import About from "./About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
