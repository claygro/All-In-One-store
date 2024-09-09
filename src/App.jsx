import "./App.css";
import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Login from "./Components/Login";
import MenCollection from "./Components/MenCollection";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/collection",
      element: (
        <>
          <Navbar />
          <MenCollection />
        </>
      ),
    },

    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
