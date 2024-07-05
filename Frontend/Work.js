// import { default as React } from "react";
// import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import "./Style1.css";

// const Work = () => {
//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <Carousel
//         // style={{ width: "900px", height: "500px" }}
//         className="workcontainer"
//       >
//         {" "}
//         <CarouselItem>
//           <div className="">
//             <img
//               alt=""
//               // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4YsrSvHrFq4Bu-ptgkKboKA6n98UaNdGBA&s"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSThs5wPR2r51YkqnaSi3GL3Ro0oqiwbaRQxg&s"
//               style={{ width: "1000px", height: "700px" }}
//             />
//             <CarouselCaption>
//               {" "}
//               <div
//                 className="d-flex flex-column "
//                 style={{ color: "black", opacity: "1" }}
//               >
//                 <h1>E-Commerce Website</h1>
//                 <p>
//                   E-commerce Website is the page to sell and Buy online with
//                   online payment facility{" "}
//                 </p>
//                 <h3> languages use </h3>
//                 <h5> React, javaScriept,HTML,CSS</h5>
//               </div>
//             </CarouselCaption>
//           </div>{" "}
//         </CarouselItem>
//         <CarouselItem>
//           <div>
//             <img
//               alt=""
//               // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAz57xpknUvRi6k3Ww2izWmCzJHcsOmV9bwQ&s"
//               src="https://bordio.com/wp-content/themes/understrap/images/todo-13-1x.png"
//               style={{ width: "1000px", height: "700px" }}
//             />
//             <CarouselCaption>
//               {" "}
//               <div
//                 className="d-flex flex-column "
//                 style={{ color: "black", opacity: "1" }}
//               >
//                 <h1>TO-DO App </h1>
//                 <p>
//                   Todo app is daily basis routine work remainder which is easy
//                   to use and which is simple{" "}
//                 </p>
//                 <h3> languages use </h3>
//                 <h5> React, javaScriept,HTML,CSS,NodeJS, ExpressJs,MongoDB</h5>
//               </div>{" "}
//             </CarouselCaption>
//           </div>{" "}
//         </CarouselItem>
//         <CarouselItem>
//           <div>
//             <img
//               style={{ width: "1000px", height: "700px" }}
//               alt=""
//               // src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkF8dc5Huhb3LPZhiMnnoJYbnaO97FZIlb-A&s"
//               src="            https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOU3XfkZ1ry6ReY8S4xHgWFErfmnzOCQAtFQ&s
// "
//             />
//             <CarouselCaption>
//               <div
//                 className="d-flex flex-column "
//                 style={{ color: "black", opacity: "1" }}
//               >
//                 <h1>News Api</h1>
//                 <p>
//                   Welcome to the News API, your go-to source for the latest news
//                   from around the world. Our app is designed to keep you
//                   informed and updated with real-time news, in-depth articles,
//                   and personalized content tailored to your interests. Here’s
//                   what makes News API stand out:
//                 </p>
//                 <h3> languages use </h3>
//                 <h5> React, javaScriept,HTML,CSS,NodeJS, ExpressJs,MongoDB</h5>
//               </div>{" "}
//             </CarouselCaption>
//           </div>{" "}
//         </CarouselItem>
//       </Carousel>
//     </div>
//   );
// };

// export default Work;

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ecommerce from "../ecommerce.jpg";
import newsapi from "../newsapi.jpg";
import todolist from "../todolist.jpg";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "1200px ",
          height: "800px",
        }}
        className="workcontainer2"
      >
        <Carousel.Item>
          {/* <ecommerce text="First slide" /> */}
          <img
            src={ecommerce}
            alt=""
            style={{
              width: "1200px ",
              height: "800px",
              display: "flex",
              justifyContent: "center",
            }}
          />
          <Carousel.Caption>
            <div
              className="d-flex flex-column "
              style={{ color: "black", opacity: "1" }}
            >
              <h1>E-Commerce Website</h1>
              <p>
                E-commerce Website is the page to sell and Buy online with
                online payment facility{" "}
              </p>
              <h3> languages use </h3>
              <h5> React, javaScriept,HTML,CSS</h5>
            </div>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <newsapi text="Second slide" /> */}
          <img
            src={todolist}
            alt=""
            style={{ width: "1200px ", height: "800px" }}
            className="workimages"
          />
          <Carousel.Caption>
            <div
              className="d-flex flex-column "
              style={{ color: "black", opacity: "1" }}
            >
              <h1>TO-DO App </h1>
              <p>
                Todo app is daily basis routine work remainder which is easy to
                use and which is simple{" "}
              </p>
              <h3> languages use </h3>
              <h5> React, javaScriept,HTML,CSS,NodeJS, ExpressJs,MongoDB</h5>
            </div>{" "}
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <todolist text="Third slide" /> */}
          <img
            src={newsapi}
            alt=""
            style={{ width: "1200px ", height: "800px" }}
          />
          <Carousel.Caption>
            <div
              className="d-flex flex-column "
              style={{ color: "black", opacity: "1" }}
            >
              <h1>News Api</h1>
              <p>
                Welcome to the News API, your go-to source for the latest news
                from around the world. Our app is designed to keep you informed
                and updated with real-time news, in-depth articles, and
                personalized content tailored to your interests. Here’s what
                makes News API stand out:
              </p>
              <h3> languages use </h3>
              <h5> React, javaScriept,HTML,CSS,NodeJS, ExpressJs,MongoDB</h5>
            </div>{" "}
            {/* <h3>Third slide label</h3> */}
            {/* <p> */}
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
            {/* </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
