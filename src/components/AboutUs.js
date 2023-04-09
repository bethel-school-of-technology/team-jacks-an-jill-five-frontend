import React from "react";
import BlankProfile from "../BlankProfile.png";
import HowardHenson from "../HowardHenson.png";
import CFoster from "../CFoster.jpg";
import Samuel from "../Samuel.JPEG";
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
          <div id="borderColor" class="card">
            <div class="card-header">
              <img
                alt="profileImage"
                className="CardImage"
                src={HowardHenson}
              />
              <h2>Howard Henson</h2>
              <p>Co Founder</p>
            </div>
            <div class="card-body">
              <h3>Hi 👋</h3>
              <p>
                Born and raised In Indianapolis, Indiana I’ve always had a knack
                for creativity through graphic design and problem-solving. My
                inquisitive nature has always wanted to know the “why” things
                work the way they do. I enjoy learning, reading, playing video
                games, and spending time with family.
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
              <h2>Joshua Betrand</h2>{" "}
              <em>
                <p>Co Founder</p>
              </em>
            </div>
            <div class="card-body">
              <h3>Hi 👋</h3>
              <p>
                Hi there! I'm a full stack engineer with a passion for
                problem-solving and bringing innovative solutions to the table.
                Growing up, I knew I was destined to be an engineer and even
                built my first computer at a young age. My journey has taken me
                from electrical engineering to software engineering, where I've
                honed my skills in both front-end and back-end development. In
                my free time, I enjoy indulging my creative side as a musician,
                playing the drums since I was five. I also like to stay active
                and play basketball regularly. Additionally, I have a keen
                interest in day trading and coding on the side, always looking
                for new opportunities to learn and grow.
              </p>
              <a
                href="https://www.linkedin.com/in/joshua-betrand"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="socialImage" src={LinkedIn} style={{ width: 30 }} />
              </a>
              <a
                href="https://github.com/Jbetrand10"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="socialImage" src={githubmark} style={{ width: 30 }} />
              </a>
            </div>
          </div>
        </div>

        <div class="pricing-column col-md-6">
          <div class="card">
            <div class="card-header">
              <img alt="profileImage" className="CardImage" src={Samuel} />
              <h2>Samuel Akins</h2>{" "}
              <em>
                <p>Co Founder</p>
              </em>
            </div>
            <div class="card-body">
              <h3>Hi 👋</h3>
              <p>
                Hello! I live in southwest Ohio with my wife and three young kids.
                I found out about Bethel College through Anthony ONeal and Dave
                Ramsey, and I started dreaming about what a career in Tech
                would mean for my family! I am excited about my journey as a
                software engineer, and I'm grateful for everyone who has helped
                get to this point! In my spare time I love being with my wife
                and kids, teaching my kids how to make great coffee (they don't
                drink any!), and running.
                <br></br>Ps- I'm only at the Fair for the food!
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
