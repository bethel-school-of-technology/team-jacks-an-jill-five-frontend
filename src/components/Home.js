import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { Link, Outlet } from "react-router-dom";
import BlackLogo from "../BlackLogo.png";

function Home() {
  return (
    <div>
      <nav className="navbar bg-sucess navbar-expand-lg bg-warning">
        <Container fluid>
          <img className="navbarBrand" src={BlackLogo} height={65} alt="logo" />{" "}
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" id=""></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/addfair" className="nav-link">
                  Add Fair
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/fairlist" className="nav-link">
                  Fair List
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
      <Stack gap={3} className="col-md-10 mx-auto">
        <Outlet />
      </Stack>
    </div>
  );
}

export default Home;
