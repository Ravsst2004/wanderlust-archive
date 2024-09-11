import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Destinations from "./pages/Destinations";
import DetailDestination from "./components/ui/DetailDestination";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/destinations",
    element: <Destinations />,
  },
  {
    path: "/destinations/:id",
    element: <DetailDestination />,
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
