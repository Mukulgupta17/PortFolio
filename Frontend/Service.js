import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import "./Style1.css";

const Service = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.darkmodebackground,
        color: props.darkmodecolor,
        // overflowWrap: "inherit",
        // height: "100%",
      }}
    >
      <div className="subservice">
        <div className="Servicecards">
          <div classname=" d-flex  flex-direction-column">
            <div
              className="d-flex justify-content-between"
              //   style={{ padding: "10px" }}
            >
              <h1 className="servicehead">01</h1>
              <h1 className="servicearrow">
                <FaArrowCircleDown />{" "}
              </h1>
            </div>
            <h2 className="">webdevelopment</h2>
            <p className="servicepara">
              I am skilled in web developer and and have done some projects for
              learning purpose{" "}
            </p>
            {/* <hr style={{ border: "2px solid white" }} /> */}
          </div>
        </div>
        {/* 2 */}
        <div className="Servicecards">
          <div classname=" d-flex  flex-direction-column">
            <div
              className="d-flex justify-content-between"
              //   style={{ padding: "10px" }}
            >
              <h1 className="servicehead">02</h1>
              <h1 className="servicearrow">
                <FaArrowCircleDown />
              </h1>
            </div>
            <h2>UI/UX Design</h2>
            <p className="servicepara">
              I am skilled in web developer & UI/UX Design and and have done
              some projects for learning purpose{" "}
            </p>
            {/* <hr style={{ border: "2px solid white" }} /> */}
          </div>
        </div>
        {/* 3 */}
        <div className="Servicecards">
          <div classname=" d-flex  flex-direction-column">
            <div
              className="d-flex justify-content-between"
              //   style={{ padding: "10px" }}
            >
              <h1 className="servicehead">03</h1>
              <h1 className="servicearrow">
                <FaArrowCircleDown />
              </h1>
            </div>
            <h2>Logo Design</h2>
            <p className="servicepara">
              I am skilled in web developer and and have done some projects for
              learning & i have created more logo as the customer need{" "}
            </p>
            {/* <hr style={{ border: "2px solid white" }} /> */}
          </div>
        </div>
        {/* 4 */}
        <div className="Servicecards">
          <div classname=" d-flex  flex-direction-column">
            <div
              className="d-flex justify-content-between"
              //   style={{ padding: "10px" }}
            >
              <h1 className="servicehead">04</h1>
              <h1 className="servicearrow">
                <FaArrowCircleDown />
              </h1>
            </div>
            <h2>SEO</h2>
            <p className="servicepara" >
              I am skilled in SEO and and have done some projects for learning
              purpose{" "}
            </p>
            {/* <hr style={{ border: "2px solid white" }} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
