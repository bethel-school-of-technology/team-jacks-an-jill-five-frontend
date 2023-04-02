import React from "react";
import BlankProfile from "../BlankProfile.png";
import HowardHenson from "../HowardHenson.png";

function AboutUs(props) {
  return (
    <div>
      {/* <h1>About Us Yes</h1>
      <p>Lets Get to Know the Creators of What's Fair</p> */}
      <h1 className="aboutHeading">The Creators of What's Fair</h1>
      <div class="row">
        <div class="pricing-column col-lg-4">
          <div class="card">
            <div class="card-header">
              <img
                alt="profileImage"
                className="CardImage"
                src={HowardHenson}
              />
              <h2>Howard</h2>
              <p>Co Founder</p>
            </div>
            <div class="card-body">
              <h3>Hi 👋</h3>
              <p>
                Born and raised In Indianapolis, Indiana I’ve always had a knack
                for creativity and problem-solving. My inquisitive nature has
                always wanted to know the “why” things work the way they do. I
                enjoy graphic design, reading, plaing videogames, and spending
                time with family.
              </p>
              <a href="https://github.com/hahenson">
                <strong>GitHub</strong>
              </a>
            </div>
          </div>
        </div>

        <div class="pricing-column col-lg-4 col-md-6">
          <div class="card">
            <div class="card-header">
              <img
                alt="profileImage"
                className="CardImage"
                src={BlankProfile}
              />
              <h2>Name</h2>
              <em>
                <p>Co Founder</p>
              </em>
            </div>
            <div class="card-body">
              <h3>Hi 👋</h3>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap
              </p>
              <a href="https://github.com/">
                <strong>GitHub</strong>
              </a>
            </div>
          </div>
        </div>

        <div class="pricing-column col-lg-4 col-md-6">
          <div class="card">
            <div class="card-header">
              <img
                alt="profileImage"
                className="CardImage"
                src={BlankProfile}
              />
              <h2>Name</h2>{" "}
              <em>
                <p>Co Founder</p>
              </em>
            </div>
            <div class="card-body">
              <h3>Hi 👋</h3>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <a href="https://github.com/">
                <strong>GitHub</strong>
              </a>
            </div>
          </div>
        </div>

        <div class="pricing-column col-md-6">
          <div class="card">
            <div class="card-header">
              <img
                alt="profileImage"
                className="CardImage"
                src={BlankProfile}
              />
              <h2>Name</h2>{" "}
              <em>
                <p>Co Founder</p>
              </em>
            </div>
            <div class="card-body">
              <h3>Hi 👋</h3>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <a href="https://github.com/">
                <strong>GitHub</strong>
              </a>
            </div>
          </div>
        </div>
        <div class="pricing-column col-md-6">
          <div class="card">
            <div class="card-header">
              <img
                alt="profileImage"
                className="CardImage"
                src={BlankProfile}
              />
              <h2>Name</h2>{" "}
              <em>
                <p>Co Founder</p>
              </em>
            </div>
            <div class="card-body">
              <h3>Hi 👋</h3>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <a href="https://github.com/">
                <strong>GitHub</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
