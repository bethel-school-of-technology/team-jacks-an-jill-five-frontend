import React from "react";
import "../App.css";
import Phone from "../Phone.png";
import { Container } from "react-bootstrap";
import WeatherAPI from "./WeatherAPI";
import Rotatingtext from "./RotatingText";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <Container fluid>
      <div class="row">
        <div class="col-lg-8">
          <h1>What's Fair</h1>
          <em>
            <p style={{ fontSize: 20 }}>
              An unique exciting tool that lets you leave honest fair candid{" "}
              reviews on your latest trip. So that others may know about it.
            </p>
          </em>
          <p>
            Festivals? State Parks? State Fairs? Are you a foodie? If you can go
            to it. You can leave a fair review. So what are you waiting
            for......
          </p>
          <p>
            Not comfrotable leaving a reveiw yet? No worries. See what others
            are saying about events happening near you and go enjoy a wonderful
            day.
          </p>
          <a href="http://localhost:3000/signup">
            <button className="WelcomeBtn" type="button">
              Sign Up
            </button>
          </a>
          <em>
            <Link to="/signin" className="nav-link">
              <p>🔗 Already a member? Click Here to Sign In</p>
            </Link>
          </em>
          <Rotatingtext />
        </div>
        <div class="col-lg-4">
          <img className="Phone" src={Phone} height={500} alt="iphone-mockup" />
        </div>
        <WeatherAPI />
        <div className="itemBox">
          <em>
            <h2 style={{ marginBottom: 40 }}>
              3 Simple Steps to Enjoy What's Fair
            </h2>
          </em>

          <div class="row">
            <div class="col-lg-4">
              <span className="emoji">📍</span>
              <h3>Attend Event</h3>
            </div>
            <div class="col-lg-4">
              <span className="emoji">😁</span>
              <h3>Try to Enjoy</h3>
            </div>
            <div class="col-lg-4">
              <span className="emoji">✍️</span>
              <h3>Leave A Fair Review</h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Welcome;
