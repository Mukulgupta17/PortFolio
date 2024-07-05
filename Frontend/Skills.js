import React from "react";
import { FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <div>
      <div>
        <h1>My Skills</h1>
        <p className="resumeparagraph">
          {" "}
          I am Skilled person with web development language and i am passionate
          about my work
        </p>
        <div className="skillsiconcontainer">
          {/* <div> */}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            {" "}
            <FaHtml5 className="skillicons" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/css">
            {" "}
            <IoLogoCss3 className="skillicons" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            {" "}
            <IoLogoJavascript className="skillicons" />
          </a>

          <a href="https://react.dev/">
            {" "}
            <FaReact className="skillicons" />
          </a>
          {/* <IoLogoJavascript className="skillicons" /> */}
          {/* <FaReact className="skillicons" /> */}
          <a href="https://github.com/">
            {" "}
            <FaGithub className="skillicons" />
          </a>
          <a href="https://nodejs.org/en">
            {" "}
            <FaNodeJs className="skillicons" />
          </a>
          <a href="https://expressjs.com/">
            {" "}
            <SiExpress className="skillicons" />
          </a>
          <a className="https://www.mongodb.com/">
            {" "}
            <SiMongodb className="skillicons" />
          </a>
          <a href="https://www.postman.com/">
            {" "}
            <SiPostman className="skillicons" />
          </a>
          <a href="https://code.visualstudio.com/">
            {" "}
            <VscVscode className="skillicons" />
          </a>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
