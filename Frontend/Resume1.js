import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Style1.css";

const Resume1 = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.dbakcolor,
        color: props.dcolor,
        // overflowWrap: "inherit",
        // height: "100%",
      }}
    >
      <div className="">
        <div className="row d-flex  align-items-center ResumeContainer">
          <div className="ResumeRight col-lg-4 d-flex flex-column  ">
            <h1 className="resumeheader">Why Hire me ?</h1>
            <p className="resume1para">
              i am skilled person with good quality and best sense of homour and
              and i am passionate about my work
            </p>
            <div className="d-flex flex-column Resumebuttoncontainer">
              <Link to="/resume/education">
                <Button className="m-2 Resumebutton">Education</Button>
              </Link>
              <Link to="/resume/skills">
                {" "}
                <Button className="m-2 Resumebutton">Skills </Button>
              </Link>
              <Link to="/resume/about">
                {" "}
                <Button className="m-2 Resumebutton">About Me </Button>
              </Link>
              <Link to="/resume/experience">
                {" "}
                <Button className="m-2 Resumebutton">Experience </Button>
              </Link>
            </div>
          </div>
          {/* <div className="ResumeLeft col-lg-8">
            <Routes>
              <Route path="/education" element={<Education />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Resume1;
