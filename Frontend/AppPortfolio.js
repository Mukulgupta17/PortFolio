import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contacts from "./Contacts";
import Home from "./Home";
import Navbarp from "./Navbarp";
import Resume from "./Resume";
import Service from "./Service";
import Work from "./Work";

const AppPortfolio = () => {
  const [darkmodebackground, setdarkmodebackground] = useState("black");
  const [darkmodecolor, setdarkmodecolor] = useState("rgb(227, 215, 228)");
  const [btntext, setbtntaxt] = useState("Dark mode");
  const handleDarkNightMode = () => {
    // console.log("this is mukul and appporotifoilio");
    if (darkmodebackground == "black") {
      setdarkmodebackground("rgb(227, 215, 228)");
      setdarkmodecolor("black");
      setbtntaxt("Light mode");
    } else {
      setdarkmodebackground("black");
      setdarkmodecolor("rgb(227, 215, 228)");
      setbtntaxt("Darkmode");
    }
  };
  return (
    <div className="MainContents">
      <Navbarp handleDarkNightMode={handleDarkNightMode} btntext={btntext} />
      <ToastContainer />
      <AnimatePresence>
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                darkmodebackground={darkmodebackground}
                darkmodecolor={darkmodecolor}
              />
            }
          />
          <Route
            path="/service"
            element={
              <Service
                darkmodebackground={darkmodebackground}
                darkmodecolor={darkmodecolor}
              />
            }
          />
          <Route
            path="/resume/*"
            element={
              <Resume
                darkmodebackground={darkmodebackground}
                darkmodecolor={darkmodecolor}
              />
            }
          />
          <Route
            path="/work"
            element={
              <Work
                darkmodebackground={darkmodebackground}
                darkmodecolor={darkmodecolor}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <Contacts
                darkmodebackground={darkmodebackground}
                darkmodecolor={darkmodecolor}
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AppPortfolio;
