// import { ErrorMessage, Field, Form, Formik } from "formik";
// import React from "react";
// import { FaPhoneSquareAlt } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";

// import "./Style1.css";

// // import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from "yup";
// const validationSchema = Yup.object().shape({
//   firstName: Yup.string().required("First Name is required"),
//   lastName: Yup.string().required("Last Name is required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   phoneNumber: Yup.string().required("Phone Number is required"),
//   services: Yup.array().min(1, "At least one service is required"),
//   message: Yup.string().required("Message is required"),
// });

// const servicesOptions = ["Web Development", "Frontend", "Backend", "Database"];

// const Contacts = (props) => {
//   return (
//     <div
//       style={{
//         backgroundColor: props.darkmodebackground,
//         color: props.darkmodecolor,
//       }}
//     >
//       <div className="contctcontainer d-flex justify-content-around  justify-content-center align-content-center s ">
//         <div className="contactsleftside flex-column m-4 ">
//           <h1 style={{ color: "rgb(0,255,157)", fontStyle: "oblique" }}>
//             {" "}
//             Let's Work Together
//           </h1>
//           <h5 className="p-2 m-2 contactpara">
//             {" "}
//             If you Want to work together than this is contact information form
//             which is by flling i am be touch in with you
//           </h5>
//           <div>
//             <Formik
//               initialValues={{
//                 firstName: "",
//                 lastName: "",
//                 email: "",
//                 phoneNumber: "",
//                 services: [],
//                 message: "",
//               }}
//               validationSchema={validationSchema}
//               onSubmit={(values) => {
//                 console.log("Form data", values);
//                 console.log("kkkkkkkkkkkkkkkkkkkkkkddddddddddddddddddd");
//               }}
//             >
//               {({ values, handleChange, handleBlur }) => (
//                 <Form>
//                   <div className="d-flex">
//                     <div className="m-4">
//                       {/* <label htmlFor="firstName">First Name</label> */}
//                       <Field
//                         name="firstName"
//                         type="text"
//                         style={{ backgroundColor: "#2c2b2b", color: "white" }}
//                         placeholder=" First Name"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                       />
//                       <ErrorMessage
//                         name="firstName"
//                         component="div"
//                         style={{ color: "red" }}
//                       />
//                     </div>

//                     <div className="m-4">
//                       {/* <label htmlFor="lastName">Last Name</label> */}
//                       <Field
//                         name="lastName"
//                         type="text"
//                         placeholder=" Last Name"
//                         style={{ backgroundColor: "#2c2b2b", color: "white" }}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                       />
//                       <ErrorMessage
//                         name="lastName"
//                         component="div"
//                         style={{ color: "red" }}
//                       />
//                     </div>
//                   </div>
//                   <div className="d-flex">
//                     <div className="m-4">
//                       {/* <label htmlFor="email">Email</label> */}
//                       <Field
//                         name="email"
//                         type="email"
//                         placeholder="Email"
//                         style={{ backgroundColor: "#2c2b2b", color: "white" }}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                       />
//                       <ErrorMessage
//                         name="email"
//                         component="div"
//                         style={{ color: "red" }}
//                       />
//                     </div>

//                     <div className="m-4">
//                       {/* <label htmlFor="phoneNumber">Phone Number</label> */}
//                       <Field
//                         name="phoneNumber"
//                         type="text"
//                         placeholder="Phone Number"
//                         style={{ backgroundColor: "#2c2b2b", color: "white" }}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                       />
//                       <ErrorMessage
//                         name="phoneNumber"
//                         component="div"
//                         style={{ color: "red" }}
//                       />
//                     </div>
//                   </div>
//                   {/*
//                   <div>
//                     <label>Services</label>
//                     {servicesOptions.map((service) => (
//                       <div key={service}>
//                         <label>
//                           <Field
//                             type="checkbox"
//                             name="services"
//                             value={service}
//                             checked={values.services.includes(service)}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                           />
//                           {service}
//                         </label>
//                       </div>
//                     ))}
//                     <ErrorMessage name="services" component="div" />
//                   </div> */}
//                   <div className="m-4">
//                     <select
//                       name="Service"
//                       id="Service"
//                       style={{
//                         width: "430px",
//                         backgroundColor: "#2c2b2b",
//                         color: "white",
//                       }}
//                     >
//                       <option value="fulstack">Full-Stack</option>
//                       <option value="webdevelopment">Web-Development</option>
//                       <option value="mercuiuxdesigne">UI/UX Design</option>
//                       <option value="logodesign">Logo-Design</option>
//                     </select>
//                   </div>

//                   <div className="m-4">
//                     {/* <label htmlFor="message">Message</label> */}
//                     <Field
//                       as="textarea"
//                       name="message"
//                       placeholder="Message "
//                       style={{
//                         marginTop: "5px",
//                         backgroundColor: "#2c2b2b",
//                         color: "white",
//                         width: "430px",
//                       }}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     <ErrorMessage
//                       name="message"
//                       component="div"
//                       style={{ color: "red" }}
//                     />
//                   </div>
//                   <div className="d-flex justify-content-start m-4">
//                     <button
//                       style={{
//                         backgroundColor: "rgb(0,255,157)",
//                         borderRadius: "50px",
//                       }}
//                       type="submit"
//                     >
//                       Send Message
//                     </button>
//                   </div>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>
//         <div className="contactrightside  ">
//           <div>
//             <div className="contactdetail d-flex m-2">
//               <div className="contacticons d-flex align-content-center justify-content-center">
//                 <div>
//                   <FaPhoneSquareAlt
//                     fill="rgb(0,255,157)"
//                     style={{ width: "65px", height: "50px" }}
//                   />
//                 </div>
//               </div>
//               <div className="d-flex flex-column">
//                 <p className="m-0">Phone</p>
//                 <p>1234567890</p>
//               </div>
//             </div>
//             <div className="contactdetail d-flex m-2">
//               <div className="contacticons d-flex align-content-center justify-content-center">
//                 <div>
//                   <MdEmail
//                     fill="rgb(0,255,157)"
//                     style={{ width: "65px", height: "50px" }}
//                   />
//                 </div>
//               </div>
//               <div className="d-flex flex-column">
//                 <p className="m-0">Email</p>
//                 <p>Mukulgupta1712@gmailcom</p>
//               </div>
//             </div>
//             <div className="contactdetail d-flex m-2">
//               <div className="contacticons d-flex align-content-center justify-content-center">
//                 <div>
//                   <FaLocationDot
//                     fill="rgb(0,255,157)"
//                     style={{ width: "65px", height: "50px" }}
//                   />
//                 </div>
//               </div>
//               <div className="d-flex flex-column">
//                 <p className="m-0">Location</p>
//                 <p>Khargone M.P. (451441)</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contacts;

import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
// import motion from "framer - motion";
import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import * as Yup from "yup";
import "./Style1.css";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  service: Yup.string().required("Service is required"),
  message: Yup.string().required("Message is required"),
});

const servicesOptions = [
  { label: "Full-Stack", value: "fullstack" },
  { label: "Web Development", value: "webdevelopment" },
  { label: "UI/UX Design", value: "uiuxdesign" },
  { label: "Logo Design", value: "logodesign" },
];

const Contacts = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.darkmodebackground,
        color: props.darkmodecolor,
      }}
    >
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        // transition={{ duration: 1 }}
        // animate={{ x, y, rotate }}
        transition={{ type: "String" }}
      > */}
      <div className="contctcontainer d-flex justify-content-around justify-content-center align-content-center s">
        <div className="contactsleftside flex-column m-4">
          <h1 style={{ color: "rgb(0,255,157)", fontStyle: "oblique" }}>
            Let's Work Together
          </h1>
          <h5 className="p-2 m-2 contactpara">
            If you want to work together, fill out this contact information form
            and I will be in touch with you.
          </h5>
          <div>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                service: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                console.log("Form data", values);
                // axios.post("")
                try {
                  const response = await axios.post(
                    "http://localhost:9001/userssignin",
                    values
                  );
                  console.log(
                    response,
                    "qqqqqqqqqqqqqqqqqqqqqqqqq",
                    response.data.success
                  );
                  if (response.data.success) {
                    toast.success("succesfull Send To MUKUL GUPTA");
                  }
                } catch (e) {
                  console.log(e);
                }
              }}
            >
              {({ values, handleChange, handleBlur }) => (
                <Form>
                  <div className="d-flex">
                    <div className="m-4">
                      <Field
                        name="firstName"
                        type="text"
                        style={{ backgroundColor: "#2c2b2b", color: "white" }}
                        placeholder="First Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div>
                    <div className="m-4">
                      <Field
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        style={{ backgroundColor: "#2c2b2b", color: "white" }}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="m-4">
                      <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        style={{ backgroundColor: "#2c2b2b", color: "white" }}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div>
                    <div className="m-4">
                      <Field
                        name="phoneNumber"
                        type="text"
                        placeholder="Phone Number"
                        style={{ backgroundColor: "#2c2b2b", color: "white" }}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div>
                  </div>
                  <div className="m-4">
                    <Field
                      as="select"
                      name="service"
                      style={{
                        width: "430px",
                        backgroundColor: "#2c2b2b",
                        color: "white",
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.service}
                    >
                      <option value="">Select a service</option>
                      {servicesOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="service"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </div>
                  <div className="m-4">
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Message"
                      style={{
                        marginTop: "5px",
                        backgroundColor: "#2c2b2b",
                        color: "white",
                        width: "430px",
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </div>
                  <div className="d-flex justify-content-start m-4">
                    <button
                      style={{
                        backgroundColor: "rgb(0,255,157)",
                        borderRadius: "50px",
                      }}
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="contactrightside">
          <div>
            <div className="contactdetail d-flex m-2">
              <div className="contacticons d-flex align-content-center justify-content-center">
                <FaPhoneSquareAlt
                  fill="rgb(0,255,157)"
                  style={{ width: "65px", height: "50px" }}
                />
              </div>
              <div className="d-flex flex-column">
                <p className="m-0">Phone</p>
                <p>6261931532</p>
              </div>
            </div>
            <div className="contactdetail d-flex m-2">
              <div className="contacticons d-flex align-content-center justify-content-center">
                <MdEmail
                  fill="rgb(0,255,157)"
                  style={{ width: "65px", height: "50px" }}
                />
              </div>
              <div className="d-flex flex-column">
                <p className="m-0">Email</p>
                <p>Mukulgupta1712@gmailcom</p>
              </div>
            </div>
            <div className="contactdetail d-flex m-2">
              <div className="contacticons d-flex align-content-center justify-content-center">
                <FaLocationDot
                  fill="rgb(0,255,157)"
                  style={{ width: "65px", height: "50px" }}
                />
              </div>
              <div className="d-flex flex-column">
                <p className="m-0">Location</p>
                <p>Khargone M.P. (451441)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </motion.div> */}
    </div>
  );
};

export default Contacts;
