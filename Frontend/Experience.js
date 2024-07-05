import React from "react";

const Experience = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.dbakcolor,
        color: props.dcolor,
        // overflowWrap: "inherit",
        // height: "100%",
      }}
    >
      <div>
        <h1>My Experience</h1>
        <p className="resumeparagraph">
          I am skilled and i am passionate about my work and i am percuied mca
          and bsc in comuter science
        </p>
        <div className="resumemcardcontainer">
          {/* #01 */}
          <div className="resumecardeducation">
            <h4 style={{ color: "rgb(0,255,157)" }}>2022 - 2024</h4>
            <h6 style={{ fontStyle: "oblique" }}>
              Master of Computer Application
            </h6>
            <ul>
              <li>
                <p> React is most valuable language and most used language </p>
              </li>
            </ul>
          </div>
          {/* #2 */}
          <div className="resumecardeducation">
            <h4 style={{ color: "rgb(0,255,157)" }}>2019 - 20222</h4>
            <h6 style={{ fontStyle: "oblique" }}>Bachelor of Science</h6>
            <ul>
              <li>
                <p>C & C++ languuage are basics of all the language </p>
              </li>
            </ul>
          </div>
          {/* #03 */}
          <div className="resumecardeducation">
            <h4 style={{ color: "rgb(0,255,157)" }}>2017 - 2018</h4>
            <h6 style={{ fontStyle: "oblique" }}>12 th M.P.Board</h6>
            <ul>
              <li>
                <p>Basics of of language and web development </p>
              </li>
            </ul>
          </div>
          {/* #04 */}
          <div className="resumecardeducation">
            <h4 style={{ color: "rgb(0,255,157)" }}>2015 - 2016</h4>
            <h6 style={{ fontStyle: "oblique" }}>10 th C.B.S.E</h6>
            <ul>
              <li>
                <p>10 with Maths and Science</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
