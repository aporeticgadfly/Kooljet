//description of skills, process, technologies used, a little about self
//discovery, design, development, launch, aftercare
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ftVis: {display: "block"},
      procVis: {display: "none"},
      ftState: {
        backgroundColor: "black",
        color: "white",
        border: "solid thin white"
      },
      procState: {
        backgroundColor: "white",
        color: "black",
        border: "none"
      },
      filledArr: [null, null, null, null, null, null, null, null, null]
    };
    this.ftClicked = this.ftClicked.bind(this);
    this.procClicked = this.procClicked.bind(this);
    window.self = this;
  }

  ftClicked() {
    this.setState({ftVis: {display: "block"}, procVis: {display: "none"}, ftState: {backgroundColor: "black", color: "white", border: "solid thin white"}, procState: {backgroundColor: "white", color: "black", border: "none"}});
  }

  procClicked() {
    this.setState({ftVis: {display: "none"}, procVis: {display: "block"}, ftState: {backgroundColor: "white", color: "black", border: "none"}, procState: {backgroundColor: "black", color: "white", border: "solid thin white"}});
  }

  componentDidMount() {

}

  render() {
    return (
      <div>
        <div className="aboutDiv">
          <a className="none" href="/home#about" id="about">text</a>
          <h1 className="header aboutheader">About</h1>
          <hr className="abouthr"/>
          <div className="aboutsection">
            <div className="abtitm">
              <h3>Heading</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dui eget magna convallis hendrerit. Ut mauris lacus, sollicitudin quis tristique at, egestas in nunc. Suspendisse potenti. Praesent vel rhoncus elit. Curabitur quis risus condimentum, vestibulum eros non, luctus leo. Etiam vestibulum, nibh ut lacinia maximus, augue magna interdum sapien, quis pellentesque odio eros sit amet nulla. Phasellus porttitor egestas malesuada</p>
            </div>
            <div className="abtitm">
              <h3>Heading</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dui eget magna convallis hendrerit. Ut mauris lacus, sollicitudin quis tristique at, egestas in nunc. Suspendisse potenti. Praesent vel rhoncus elit. Curabitur quis risus condimentum, vestibulum eros non, luctus leo. Etiam vestibulum, nibh ut lacinia maximus, augue magna interdum sapien, quis pellentesque odio eros sit amet nulla. Phasellus porttitor egestas malesuada</p>
            </div>
            <div className="abtitm">
              <h3>Heading</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dui eget magna convallis hendrerit. Ut mauris lacus, sollicitudin quis tristique at, egestas in nunc. Suspendisse potenti. Praesent vel rhoncus elit. Curabitur quis risus condimentum, vestibulum eros non, luctus leo. Etiam vestibulum, nibh ut lacinia maximus, augue magna interdum sapien, quis pellentesque odio eros sit amet nulla. Phasellus porttitor egestas malesuada</p>
            </div>
            <div className="team abtitm">
              <div>
                <h3>Meet the Team</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dui eget magna convallis hendrerit. Ut mauris lacus, sollicitudin quis tristique at, egestas in nunc. Suspendisse potenti. Praesent vel rhoncus elit. Curabitur quis risus condimentum, vestibulum eros non, luctus leo. Etiam vestibulum, nibh ut lacinia maximus, augue magna interdum sapien, quis pellentesque odio eros sit amet nulla. Phasellus porttitor egestas malesuada</p>
              </div>
              <img alt="" className="gif" src={require("../images/placeholder.jpg")} data-aos="fade-right" data-aos-duration="3000"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
