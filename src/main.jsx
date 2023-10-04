import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";

const router = createBrowserRouter([
  // Define the accessible routes, and which components respond to which URL
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: "/Portfolio", element: <PortfolioPage /> },
      { path: "/Contact", element: <ContactPage /> },
      { path: "/Resume", element: <ResumePage /> },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
