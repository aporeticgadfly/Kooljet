//background image of circuit board
//title with animation
//navbar, home, about, testimonials, contact, portfolio
import React from 'react';
import Nav from './Nav';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: {backgroundImage: null, backgroundSize: "cover"}, name: "", link: ""};
  }

  componentDidMount() {

    document.querySelector(".titleDiv").onmouseover = function() {document.querySelector(".hmbtn").style.color = "#8A8D8F";};
    document.querySelector(".titleDiv").onmouseout = function() {document.querySelector(".hmbtn").style.color = "white";};

    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";

      var element = document.querySelector('nav');
      var topPos = element.getBoundingClientRect().top;

      if(topPos <= 0) {
        document.querySelector(".flex-column").classList.add("fixed-header");
      }

      if(document.querySelector(".aboutsection").getBoundingClientRect().top >= 130){
        document.querySelector(".flex-column").classList.remove("fixed-header");
      }

    }

    var count = 0;
    document.querySelector(".dropdown").addEventListener("click", function () {
      if(count === 0) {
        document.querySelector(".dropdown-content").classList.add("reveala");
        count = 1;
      }
      else if (count === 1) {
        document.querySelector(".dropdown-content").classList.remove("reveala");
        count = 0;
      }
    });

  }
  render() {
    return (
      <div className = "homeDiv">
        <a className="none" href="/home#home" id="home">text</a>
        <div className = "titleDiv">
          <h1 className ="titletext" id="name">Lorem Ipsum</h1>
          <h3 className = "titletext">Lorem Ipsum Dolor</h3>
        </div>
        <div className= "smry">
          <h2>Placeholder</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className = "prdctDiv">
          <div className="prdct">
            <img alt="" className="gif" src={require("../images/placeholder.jpg")} data-aos="fade-right" data-aos-duration="3000"/>
            <p>PRODUCT SHOWCASE DESCRIPTION</p>
          </div>
          <div className="prdct">
            <img alt="" className="gif" src={require("../images/placeholder.jpg")} data-aos="fade-right" data-aos-duration="3000"/>
            <p>PRODUCT SHOWCASE DESCRIPTION</p>
          </div>
          <div className="prdct">
            <img alt="" className="gif" src={require("../images/placeholder.jpg")} data-aos="fade-right" data-aos-duration="3000"/>
            <p>PRODUCT SHOWCASE DESCRIPTION</p>
          </div>
        </div>
        <div className="cliSrvd">
        </div>
        <div className="misc">
          <div className="miscItm">
            <img src={require("../images/placeholder.jpg")}/>
            <h3>Header</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="miscItm">
            <img src={require("../images/placeholder.jpg")}/>
            <h3>Header</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="miscItm">
            <img src={require("../images/placeholder.jpg")}/>
            <h3>Header</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Title;
