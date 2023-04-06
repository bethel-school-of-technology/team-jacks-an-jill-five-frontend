import React from "react";
import BlankProfile from "../BlankProfile.png";
import HowardHenson from "../HowardHenson.png";
import CFoster from "../CFoster.jpg";
import githubmark from "../githubmark.png";
import LinkedIn from "../LinkedIn.png";

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
              <i class="bi-alarm" />
              <p>
                Born and raised In Indianapolis, Indiana I’ve always had a knack
                for creativity and problem-solving. My inquisitive nature has
                always wanted to know the “why” things work the way they do. I
                enjoy graphic design, reading, playing video games, and spending
                time with family.
              </p>
              <a
                href="https://www.linkedin.com/in/howardhenson/"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="socialImage" src={LinkedIn} style={{ width: 30 }} />
              </a>
              <a
                href="https://github.com/hahenson"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="socialImage" src={githubmark} style={{ width: 30 }} />
              </a>
            </div>
          </div>
        </div>

        <div class="pricing-column col-lg-4 col-md-6">
          <div class="card">
            <div class="card-header">
              <img alt="profileImage" className="CardImage" src={CFoster} />
              <h2>Christina Foster</h2>
              <em>
                <p>Co Founder</p>
              </em>
            </div>
            <div class="card-body">
              <h3>Hi 👋</h3>
              <p>
                I was born and raised in Eastern NC, lived in Hawaii and Florida
                for a while, but eventually returned to my NC roots. I've always
                been a bit of a computer nerd and dabbled in programming and Web
                design. I love problem solving and creating efficient solutions
                and designs. When I'm not coding, I enjoy time with my family,
                woodworking, restoring old furniture, and visiting fairs and
                festivals!
              </p>
              <a
                href="https://www.linkedin.com/in/fosterhopec/"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="socialImage" src={LinkedIn} style={{ width: 30 }} />
              </a>
              <a
                href="https://github.com/chopefoster"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="socialImage" src={githubmark} style={{ width: 30 }} />
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
              <a
                href="https://www.linkedin.com"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="socialImage" src={LinkedIn} style={{ width: 30 }} />
              </a>
              <a href="https://github.com/" rel="noreferrer" target="_blank">
                <img alt="socialImage" src={githubmark} style={{ width: 30 }} />
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
              <a
                href="https://www.linkedin.com"
                rel="noreferrer"
                target="_blank"
              >
                <img src={LinkedIn} style={{ width: 30 }} />
              </a>
              <a href="https://github.com/" rel="noreferrer" target="_blank">
                <img src={githubmark} style={{ width: 30 }} />
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
                src={
                  "https://media.licdn.com/dms/image/C5603AQEniWJeYf6PzA/profile-displayphoto-shrink_200_200/0/1654608690102?e=1686182400&v=beta&t=9chKLkJqDvg9TkrvedRC8QPKZK-9Hq1QUVwgtaWTPg8"
                }
              />
              <h2>Kyle</h2>{" "}
              <em>
                <p>Co Founder</p>
              </em>
            </div>
            <div class="card-body">
              <h3>Hi 👋</h3>
              <p>
                I am an Ohio State Buckeye, raised in Columbus, Ohio. I have
                also lived in New York, Virginia, and Florida. I started coding
                as a kid on an Atari computer in the early 80's, creating a
                baseball statistics compiler, animated graphics, games and music
                with the old BASIC program. Then I took a break from coding for
                40 years, seeking ventures in writing, filmmaking, and teaching.
                Yet I always felt the calling to get back to using my creativity
                and problem solving in the tech industry, so here I am. Enjoy
                our WHAT's FAIR app, and I'll see you on the Ferris Wheel.
              </p>
              <a
                href="https://www.linkedin.com/in/kylehammersmith/"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="socialImage" src={LinkedIn} style={{ width: 30 }} />
              </a>
              <a
                href="https://github.com/wkhammersmith"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="socialImage" src={githubmark} style={{ width: 30 }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
