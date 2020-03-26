//some email thing here

import React from 'react';
import axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', msg: ''};
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMsg = this.onChangeMsg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(event, e) {
    this.setState({email: event.target.value});
  }

  onChangeMsg(event, e) {
    this.setState({msg: event.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    var formData = {
      email: this.state.email,
      msg: this.state.msg
    };

    axios.post('https://santiagoorellana.herokuapp.com/home', formData).then(res => {console.log(res.data)}).catch(err => console.log(err));
    /*window.location.href = "http://localhost:3000/compose";*/
  }

  componentDidMount() {
    
  }

  render() {
    return (
    <div className="contact">
      <a className="none" href="/home#contact" id="contact">text</a>
      <hr />
      <div className="cntct">
          <div className="cntitm">
            <h4>Contact Us</h4>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </div>
          <div className="cntitm">
            <h4>Quick Links</h4>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </div>
          <div className="cntitm">
            <h4>Follow Us</h4>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </div>
          <div className="cntctlogo">
            <img src={require("../images/placeholder.jpg")}/>
          </div>
        </div>
        <div className="footer">
          <footer> &copy; PLACEHOLDER. All Rights Reserved.</footer>
        </div>
      </div>
    );
  }
}
export default Contact;
