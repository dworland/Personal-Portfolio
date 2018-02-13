import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
          <div className="row jumbo-header">
            <div className="jumbo-img"></div>
              <div className="row">
                <div className="profile-img"></div>
                <div className="profile-header">Hey There!</div>
                <div className="col-sm-8 col-sm-offset-2">
                 <p className="intro">I'm Devon - a junior full-stack web developer specializing in front end development. 
                  I strive to build immersive and visually pleasing web applications using carefully crafted code and user-centric design. 
                  Innovative design is my passion.
                  </p>
                </div>
                <div className="col-sm-12 social">
                  <a href="https://www.linkedin.com/in/devon-worland" target="_blank">
                    <img src={require("./linkedin-logo.png")} className="social-icon" alt="" />
                  </a>
                  <a href="https://github.com/dworland" target="_blank">
                    <img src={require("./github-logo.png")} className="social-icon" alt="" />
                  </a>
                </div>
              </div>
          </div>

          <div className="parallax">
            <div className="row about">
              <div className="col-sm-11 col-sm-offset-1 about-header">
                <h1 className="section-header"><strong>About Me</strong></h1>
              </div>
              <div className="col-sm-8 col-sm-offset-2 about-paragraph">
                <p>I'm a junior full-stack web developer based in Austin, TX. The approach I take to the applications I create is simplistic. 
                I'm obsessed with the creative process; it is addictive and has never ending possibilities.</p>
                
                <p>I grew up in the Bay Area of California, and attended college at California State University Chico, where I earned a Bachelor
                of Science in Business and Finance. I relocated to Austin in late 2016, and in July of 2017 was enrolled in The Coding Bootcamp 
                at the University of Texas. The bootcamp consisted of 24 weeks of intensive and rigourous coursework encompassing full-stack web development.</p>

                <p>Outside of work, I thoroughly enjoy spending time with friends, traveling, the gym, skincare, and live music.
                A few of my creative hobbies include making pottery, photography, and interior decorating. I also love to spend as much time as possible 
                outdoors when the weather is warm!</p>

                <p>Want to work together? I'd love to hear from you!</p>
              </div>
            </div>
          </div>

          <div className="row projects">
            <div className="col-sm-11 col-sm-offset-1 projects-header">
              <h1 className="section-header"><strong>My Latest Work</strong></h1>
              <p className="recent-work">Take a look at some of my recent work.</p>
            </div>
            <div className="row project-first-row">
              <div className="col-sm-2 col-sm-offset-3 project">
                <a href="/projects/know-your-worth" target="_blank">
                  <img src={require("./KYW-home.png")} className="project-img" alt="" />
                  <div className="overlay">
                    <div className="hover-text">Know Your Worth</div>
                  </div>
                </a>
              </div>
              <div className="col-sm-2 project">
                <p>Project 1</p>
              </div>
              <div className="col-sm-2 project">
                <p>Project 1</p>
              </div>
            </div>
            <div className="row view-all">
              <Link to="/projects" target="_blank">
                <button type="submit" className="btn btn-default view-btn">View All</button>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-11 col-sm-offset-1 skills-header">
              <h1 className="section-header"><strong>My Skills</strong></h1>
            </div>
            <div className="row skills">
              <div className="col-sm-2 col-sm-offset-1 skill">
                <i className="devicon-html5-plain-wordmark"></i>
              </div>
              <div className="col-sm-2 skill">
                <i className="devicon-css3-plain-wordmark"></i>
              </div>
              <div className="col-sm-2 skill">
                <i className="devicon-javascript-plain"></i>
              </div>
              <div className="col-sm-2 skill">
                <i className="devicon-jquery-plain-wordmark"></i>
              </div>
              <div className="col-sm-2 skill">
                <i className="devicon-bootstrap-plain-wordmark"></i>
              </div>
            </div>
            <div className="row skills">
              <div className="col-sm-2 col-sm-offset-1 skill">
                <i className="devicon-nodejs-plain-wordmark"></i>
              </div>
              <div className="col-sm-2 skill">
                <i className="devicon-express-original-wordmark"></i>
              </div>
              <div className="col-sm-2 skill">
                <i className="devicon-mysql-plain-wordmark"></i>
              </div>
              <div className="col-sm-2 skill">
                <i className="devicon-mongodb-plain-wordmark"></i>
              </div>
              <div className="col-sm-2 skill">
                <i className="devicon-react-original-wordmark"></i>
              </div>
            </div>
          </div>

          <div className="row extra-space"></div>
          <div className="contact-me row">
            <div className="creative-img"></div>
            <p className="contact-info">Let's build together.</p>
            <Link to="/contact" target="_blank">
              <button type="submit" className="btn btn-default contact-btn">Contact</button>
            </Link>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Home;