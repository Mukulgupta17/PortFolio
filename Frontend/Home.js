// import React from "react";
// import { animated, useSpring } from "react-spring";

// const Home = () => {
//   const props = useSpring({ opacity: 1, from: { opacity: 0 } });

//   return (
//     <animated.div
//       style={{
//         backgroundColor: props.darkmodebackground,
//         color: props.darkmodecolor,
//         overflowWrap: "inherit",
//       }}
//     >
//       <h1>Hello, I am an animated component!</h1>
//     </animated.div>
//   );
// };

// export default Home;

import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin, FaYoutube } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import Footer from "./Footer";
import photo from "./Mukul.JPG";
// import resume from "./Mukulguptaresumef";
import { ReactTyped } from "react-typed";
import "./Style1.css";

const Home = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.darkmodebackground,
        color: props.darkmodecolor,
        overflowWrap: "inherit",
      }}
      className="homesubcontainer"
    >
      <div className="homecontainer">
        <div className="d-flex row justify-content-center homesub2container">
          <div className="col-lg-6 d-flex justify-content-center flex-column homemq">
            <h6>Software Developer</h6>
            <h1>Hello I'm</h1>
            <h1 style={{ color: "rgb(0, 255, 157" }}>
              {/* MUKUL GUPTA */}
              <ReactTyped
                strings={["MUKUL GUPTA"]}
                typeSpeed={100}
                // loop
              />
            </h1>
            <p className="homeparacontent">
              Hello i am mukul gupta and i percuied MCA and my skills are on
              webdevelopment and i am a fresher but work on practise based
              project
            </p>
            <div className="d-flex justify-content-lg-around">
              <a href="/Mukulguptaresumef.pdf" download="My-Download.pdf">
                <div className="homedowload">
                  {/* <a download="file.pdf"> */}
                  <p>Downlod CV</p>
                  {/* <MdDownloadForOffline /> */}
                  <HiOutlineDownload />
                  {/* </a> */}
                </div>
              </a>

              <div style={{ display: "contents" }} className="Hommainsoc">
                <a href="https://github.com/Mukulgupta17">
                  {" "}
                  <FaGithubSquare
                    fill="rgb(0, 255, 157"
                    className="Homesocial"
                  />
                </a>
                <a href="https://youtube.com/@factcheck1712?si=VwHNqYIW27J163iO">
                  {" "}
                  <FaYoutube fill="rgb(0, 255, 157" className="Homesocial" />
                </a>
                <a href="https://www.linkedin.com/in/mukul-gupta-487b06190">
                  <FaLinkedin fill="rgb(0, 255, 157" className="Homesocial" />
                </a>
                <a>
                  <BsTwitter fill="rgb(0, 255, 157" className="Homesocial" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center HomeLeftsideImage">
            <img
              className="Homeleftimage"
              // src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-butterfly-wings-wallpaper-best-wallpapers-for-your-desktop-images-of-image_2906279.jpg"
              src={photo}
              alt="mukul"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
