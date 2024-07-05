// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import About from "./About";
// import Education from "./Education";
// import Experience from "./Experience";
// import Resume1 from "./Resume1";
// import Skills from "./Skills";
// import "./Style1.css";

// const Resume = (props) => {
//   const dbakcolor = props.darkmodebackground;
//   const dcolor = props.darkmodecolor;
//   return (
//     <div
//       className=" "
//       style={{
//         backgroundColor: props.darkmodebackground,
//         color: props.darkmodecolor,
//       }}
//     >
//       <div className=" ">
//         <div
//           className="d-flex justify-content-center row resumemaincontainer "
//           style={{ marginLeft: "3.3rem" }}
//         >
//           <div className="rightside col-4 ">
//             <Resume1 dbakcolor={dbakcolor} dcolor={dcolor} />
//           </div>
//           <div className="leftside col-8 ">
//             {/* <div> */}
//             <Routes>
//               <Route
//                 path="/education"
//                 element={<Education dbakcolor={dbakcolor} dcolor={dcolor} />}
//               />
//               <Route
//                 path="/about"
//                 element={<About dbakcolor={dbakcolor} dcolor={dcolor} />}
//               />
//               <Route
//                 path="/skills"
//                 element={<Skills dbakcolor={dbakcolor} dcolor={dcolor} />}
//               />
//               <Route
//                 path="/experience"
//                 element={<Experience dbakcolor={dbakcolor} dcolor={dcolor} />}
//               />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resume;

import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Resume1 from "./Resume1";
import Skills from "./Skills";
import "./Style1.css";

const Resume = (props) => {
  const dbakcolor = props.darkmodebackground;
  const dcolor = props.darkmodecolor;
  return (
    <div
      className=" "
      style={{
        backgroundColor: props.darkmodebackground,
        color: props.darkmodecolor,
      }}
    >
      <div className=" ">
        <div
          className="d-flex justify-content-center row resumemaincontainer    "
          // style={{ marginLeft: "3.3rem" }}
        >
          <div className="rightside col-4 ">
            <Resume1 dbakcolor={dbakcolor} dcolor={dcolor} />
          </div>
          <div className="leftside col-8 ">
            {/* <div> */}
            <Routes>
              <Route
                path="/education"
                element={<Education dbakcolor={dbakcolor} dcolor={dcolor} />}
              />
              <Route
                path="/about"
                element={<About dbakcolor={dbakcolor} dcolor={dcolor} />}
              />
              <Route
                path="/skills"
                element={<Skills dbakcolor={dbakcolor} dcolor={dcolor} />}
              />
              <Route
                path="/experience"
                element={<Experience dbakcolor={dbakcolor} dcolor={dcolor} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
