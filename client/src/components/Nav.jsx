import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render () {
    return (
    <nav className="flex-column">
      <img src={require("../images/placeholder.jpg")} />
      <a href="#home"><button className="navbtns hmbtn" >HOME</button></a>
      <a href="#about"><button className="navbtns abtbtn" >ABOUT</button></a>
      <a href="#contact"><button className="navbtns cntctbtn" >CONTACT</button></a>
      <a href="/projects"><button className="navbtns prtbtn" >MARKETS WE SERVE</button></a>
      <a href="/projects"><button className="navbtns prtbtn" >PRODUCTS</button></a>
      <a href="/projects"><button className="navbtns prtbtn" >NEWS AND EVENTS</button></a>
      <div className="dropdown">
        <button className="dropbtn"><i className="fas fa-bars"></i></button>
        <div className="dropdown-content">
          <hr />
          <a className="dropa" href="#home">HOME</a>
          <hr />
          <a className="dropa" href="#about">ABOUT</a>
          <hr />
          <a className="dropa" href="#contact">CONTACT</a>
          <hr />
          <a className="dropa" href="/projects">MARKETS WE SERVE</a>
          <hr />
          <a className="dropa" href="/projects">PRODUCTS</a>
          <hr />
          <a className="dropa" href="/projects">NEWS AND EVENTS</a>
        </div>
      </div>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
    </nav>
  );
  }
}

export default Nav;
