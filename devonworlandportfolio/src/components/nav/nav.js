import React from "react";
import "./nav.css";

class MyNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      show: false
    };
  }

  toggleDropdown() {
    console.log("clicked");
    this.setState({
      show: !this.state.show
    });
    console.log(this.state);
  }


  render() {
    return (
      <div className={`dropdown ${this.state.show ? 'show' : ''}`} ref={(dropdown) => this.dropdown = dropdown}>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            
            <div className="navbar-header">
              <a className="navbar-brand" href="/">DW</a>
            </div>


            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded={this.state.show} onClick={this.toggleDropdown}>
                    <span className="glyphicon glyphicon-list"></span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#nogo">Home</a>
                    <a className="dropdown-item" href="#nogo">About</a>
                    <a className="dropdown-item" href="#nogo">Projects</a>
                    <a className="dropdown-item" href="#nogo">Contact</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNav;