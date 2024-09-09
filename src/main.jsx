import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Login from "./Components/Login.jsx";
import MenCollection from "./Components/MenCollection.jsx";
const router = createBrowserRouter([
  {
    path: "/All-In-One-store/",
    element: <App />,
    children: [
      {
        path: "/All-In-One-store/",
        element: (
          <>
            <Home />
          </>
        ),
      },
      {
        path: "/All-In-One-store/about",
        element: (
          <>
            <About />
          </>
        ),
      },
      {
        path: "/All-In-One-store/collection",
        element: (
          <>
            <MenCollection />
          </>
        ),
      },

      {
        path: "/All-In-One-store/login",
        element: (
          <>
            <Login />
          </>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
