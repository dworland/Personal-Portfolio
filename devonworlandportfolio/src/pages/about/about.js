import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import "./about.css";

class About extends Component {
  render() {
    return (
    	<div>
    		<Nav />
    		<div className="row">
    			<div className="col-sm-5 about-page-img"></div>
    			<div className="col-sm-7">
    				<div className="row">
    					<div className="col-sm-10 col-sm-offset-1 about-page-intro">
    						<p><strong>I'm Devon - a junior full-stack web developer specializing in front end development. 
                  She strive to build immersive and visually pleasing web applications using carefully crafted code and user-centric design. 
                  Innovative design is my passion.</strong></p>
    					</div>
    					<div className="col-sm-10 col-sm-offset-1 about-page-paragraph">
    						<p>I'm a junior full-stack web developer based in Austin, TX. The approach I take to the applications I create is simplistic. 
                I'm obsessed with the creative process; it is addictive and has never ending possibilities.</p>
                <p>I grew up in the Bay Area of California, and attended college at California State University Chico, where I earned a Bachelor
                of Science in Business and Finance. I relocated to Austin in late 2016, and in July of 2017 was enrolled in The Coding Bootcamp 
                at the University of Texas. The bootcamp consisted of 24 weeks of intensive and rigourous coursework encompassing full-stack web development.</p>
                <p>Outside of work, I thoroughly enjoy spending time with friends, traveling, the gym, skincare, and live music.
                A few of my creative hobbies include making pottery, photography, and interior design. I also love to spend as much time as possible 
                outdoors when the weather is warm!</p>
                <p>Want to work together? I'd love to hear from you!</p>
                <Link to="/contact">
              		<button type="submit" className="btn btn-default about-contact-btn">Contact</button>
            		</Link>
    					</div>
    					<div className="col-sm-11 col-sm-offset-1 about-social">
                  <img src={require("./linkedin-logo.png")} className="social-icon" alt="" />
                  <img src={require("./github-logo.png")} className="social-icon" alt="" />
              </div>
    				</div>
    			</div>
    		</div>
    		<Footer />
    	</div>
    );
  }
}

export default About;