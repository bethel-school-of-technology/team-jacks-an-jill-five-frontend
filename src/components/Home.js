import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import BlackLogo from "../BlackLogo.png";
import { Stack, Container, Navbar, Nav } from "react-bootstrap";

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="warning">
        <Container>
          <Navbar.Brand href="/">
            <img
              className="navbarBrand"
              src={BlackLogo}
              height={65}
              alt="logo"
            />
            {/* link to "home" / */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {/* <Link to="/" className="nav-link">Home</Link> */}
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
              <Link to="/signin" className="nav-link">
                Sign In
              </Link>
              <Link to="/addfair" className="nav-link">
                Add Fair
              </Link>
              <Link to="/fairlist" className="nav-link">
                Fair List
              </Link>
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto mt-3">
        <Outlet />
      </Stack>
    </>
  );
}

export default Home;
