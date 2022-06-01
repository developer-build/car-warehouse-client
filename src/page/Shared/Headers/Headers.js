import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../image/logo/logo.png";
import CustomLink from "../../CustomLink/CustomLink";
import "./Header.css";

const Headers = () => {
  const [user] = useAuthState(auth);

  return (
    <Fragment>
      <Navbar
        expand="lg"
        className=" align-items-center bg-header-color justify-content-center d-flex "
      >
        <Container>
          <Navbar.Brand as={CustomLink} to="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-center">
              <Nav.Link as={CustomLink} to="/">
                Home
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link as={CustomLink} to="/manageItems">
                    Manage Items
                  </Nav.Link>
                  <Nav.Link as={CustomLink} to="/addItem">
                    Add Items
                  </Nav.Link>
                  <Nav.Link as={CustomLink} to="/myItems">
                    My Items
                  </Nav.Link>
                </>
              ) : (
                ""
              )}
              <Nav.Link as={CustomLink} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/aboutUs">
                 About Us
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <div className="login-signup-btn">
              {user ? (
                <button onClick={() => signOut(auth)} className="btn_style">
                  Sign Out
                  <FontAwesomeIcon className="ms-2" icon={faRightFromBracket} />
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn_style">Login</button>
                </Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Headers;
