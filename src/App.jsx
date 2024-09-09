import { Outlet } from "react-router-dom";
import "./App.css";
// import About from "./Components/About";
// import Home from "./Components/Home";
// import Login from "./Components/Login";
// import MenCollection from "./Components/MenCollection";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <About />
      <MenCollection />
      <Login /> */}
      <Outlet />
    </>
  );
}

export default App;
