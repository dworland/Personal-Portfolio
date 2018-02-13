import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import "./kyw.css";

class KYW extends Component {
  render() {
    return (
    	<div>
    		<Nav />
    			<div className="kyw-title">
    				<h1>Know Your Worth</h1>
    			</div>
    			<div className="KYW-btn">
	    			<Link to="https://dworland.github.io/Project-1/" target="_blank">
	              <button type="button" className="btn btn-default">View the Site</button>
	          </Link>
          </div>
    			<div className="kyw-image">
    				<img src={require("./KYW.png")} className="kyw-home" alt="" />
    			</div>
    			<div className="row">
	    			<div className="col-sm-6 kyw-image">
	    				<img src={require("./KYW-Results.png")} className="kyw-results" alt="" />
	    			</div>
	    			<div className="col-sm-6 kyw-image">
	    				<img src={require("./KYW-Saved.png")} className="kyw-saved" alt="" />
	    			</div>
    			</div>
    			<div className="kyw-description">
    				<h2><strong>Mission:</strong> How can Bootcamp students quickly and efficiently learn about job markets before they begin new roles?</h2>
    			</div>
    			<div>
					  <p className="description">Know Your Worth is frontend application designed to help students of the Coding Bootcamp get immediate insight
					  into job opportunities in web development. Users have the ability to select from a pre-set list of job titles, and can view salary ranges 
					  as well as the number of positions available in the city of their choosing. Finding this information can be time consuming, this application allows
					  students to better visually understand where these jobs are more available to them.</p>
						<p className="kyw-question">What technologies were used to build the application?</p>
						<div className="KYW-list">
						  <p>HTML</p>
						  <p>CSS</p>
						  <p>Javascript</p>
						  <p>Firebase</p>
						  <p>AJAX</p>
						  <p>Google Maps API</p>
						  <p>Glassdoor API</p>
						</div>
    			</div>
    		<Footer />
    	</div>
    );
  }
}

export default KYW;