import React, { useContext } from "react";
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
import { UserContext } from "../../App";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
          <Link to="/" className= "text-white mx-2">
            News
          </Link>
          <Link to="/" className="text-white mx-2">
            Destination
          </Link>
          <Link to="/" className="text-white mx-2">
            Blog
          </Link>
          <Link to="/" className="text-white mx-2">
            Contact
          </Link>
     {loggedInUser.name ?loggedInUser.name : <Link to="/login">    <Button style={{ background: "orange", border: "none" }}>
            Login
          </Button> </Link>}
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
