import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./styles/tokens.css";
import "./styles/globals.css";
import { ROUTES } from "./constants";
import LandingPage from "./pages/LandingPage/LandingPage";
import ConfiguratorPage from "./pages/ConfiguratorPage/ConfiguratorPage";

const router = createBrowserRouter([
  { path: ROUTES.HOME, element: <LandingPage /> },
  { path: ROUTES.CONFIGURE, element: <ConfiguratorPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
