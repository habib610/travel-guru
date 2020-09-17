import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

import Logo from "../../Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Container>
      <Navbar bg="transparent" variant="dark">
        <Navbar.Brand href="#home">
          {" "}
          <img src={Logo} style={{ height: "60px" }} alt="" />
        </Navbar.Brand>
        <Form inline className="ml-auto">
          <input
            type="text"
            placeholder="Search Your Destination..."
            className="search-box px-4 mr-sm-2"
          />

          <FontAwesomeIcon className="search-icon" icon={faSearch} />
        </Form>

        <Nav className="ml-auto">
          <Nav.Link href="#home" className="mx-2">
            News
          </Nav.Link>
          <Nav.Link href="#features" className="mx-2">
            Destination
          </Nav.Link>
          <Nav.Link href="#pricing" className="mx-2">
            Blog
          </Nav.Link>
          <Nav.Link href="#pricing" className="mx-2">
            Contact
          </Nav.Link>
      <Link to="/login">    <Button style={{ background: "orange", border: "none" }}>
            Login
          </Button> </Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
