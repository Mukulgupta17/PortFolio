import { Button, NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Style1.css";
// import photomukul from "./"
import mukulphoto from "./Mukul.JPG";

function Navbarp(props) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbarmain"
      style={{ backgroundColor: "rgb(41,41,40)", color: "rgb(0, 255, 157" }}
    >
      <Container>
        <NavbarBrand>
          <img
            style={{
              border: "2px solid black",
              borderRadius: "50px",
              height: "50px",
              width: "50px",
            }}
            className="logoimage"
            src={mukulphoto}
            alt="MG"
          />
        </NavbarBrand>
        <Navbar.Brand
          href="#home"
          style={{
            color: "white",
            fontStyle: "oblique",
            fontWeight: "bold",
            color: "rgb(0,255,157)",
          }}
        >
          MUKUL GUPTA
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ backgroundColor: "white" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <div className="">
              <Link
                to="home"
                className="navbarelement"
                style={{ fontStyle: "none" }}
              >
                Home
              </Link>
              <Link
                className="navbarelement"
                to="contacts"
                style={{ fontStyle: "none" }}
              >
                Contact
              </Link>
              <Link
                className="navbarelement"
                to="resume"
                style={{ fontStyle: "none" }}
              >
                Resume
              </Link>{" "}
              <Link
                className="navbarelement"
                to="service"
                style={{ fontStyle: "none" }}
              >
                Services
              </Link>{" "}
              <Link
                className="navbarelement"
                to="work"
                style={{ fontStyle: "none" }}
              >
                Work
              </Link>{" "}
              {/* <Link className="navbarelement" style={{ fontStyle: "none" }}>
              Contact
            </Link> */}
              <Button
                onClick={props.handleDarkNightMode}
                style={{
                  backgroundColor: "rgb(0,255,157)",
                  color: "black",
                  borderRadius: "50px",
                }}
              >
                {props.btntext}
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarp;
