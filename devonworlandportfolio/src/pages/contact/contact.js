import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import "./contact.css";


class Contact extends Component {
  render() {
    return (
    	<div>
        <Nav />
          <div className="jumbo-img"></div>
          <div className="contact-head">
            <h1>Contact Me</h1>
          </div>
      		<div className="row">
            <form>
              <div className="col-sm-6 col-sm-offset-3 form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="col-sm-6 col-sm-offset-3 form-group">
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="col-sm-6 col-sm-offset-3 form-group">
                <label for="message">Message</label>
                <textarea type="text" className="form-control" id="message" />
              </div>
              <div className="col-sm-12 contact">
              <Link to="/contact">
  				    	<button type="submit" className="btn btn-default">Send</button>
  				    </Link>
              </div>
            </form>
            <div className="col-sm-12 contact-social">
              <img src={require("./linkedin-logo.png")} className="social-icon" alt="" />
              <img src={require("./github-logo.png")} className="social-icon" alt="" />
            </div>
          </div>
        <Footer />
    	</div>

    );
  }
}

export default Contact;