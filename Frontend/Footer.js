import React from "react";
// import CountUp from "react-countup/build/CountUp";
import CountUp from "react-countup";
import "./Style1.css";

const Footer = () => {
  //   const [Experience, setexperience] = useState("12");
  //   if (Experience >= 12) {
  //     setInterval(() => {
  //       setexperience(Experience + 2);
  //     }, 500);
  //   }

  return (
    <div className="">
      <div
        className="d-flex FooterSubcontainer"
        style={{ marginRight: "10px" }}
      >
        <div className="d-flex Footerdiv">
          <h1>
            {" "}
            <CountUp start={0} end={2} duration={2.5} delay={3} />
          </h1>
          <p className="Footerpara">Years of Experience </p>
        </div>
        <div className="d-flex Footerdiv">
          <h1>
            {" "}
            <CountUp start={0} end={5} duration={2.5} delay={2} />
          </h1>
          <p className="Footerpara">Projects Completed </p>
        </div>
        <div className="d-flex Footerdiv">
          <h1>
            {" "}
            <CountUp start={0} end={10} duration={2.5} delay={1} />
          </h1>
          <p className="Footerpara">Technology Mastered </p>
        </div>
        <div className="d-flex Footerdiv">
          <h1>
            <CountUp start={0} end={50} duration={2.5} delay={1} />
          </h1>

          <p className="Footerpara"> Code Commits </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
