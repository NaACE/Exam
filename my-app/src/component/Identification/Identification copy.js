import React from "react";
import Database from './Database.js';

/* css */
import "../Identification/Identification.css";

/* img */
import wallpaper from '../Identification/wallpaper.png';

class Identification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: 'signin',
      gmail: '',
      pass: '',
      repass: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleRadio = this.handleRadio.bind(this);

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleRepass = this.handleRepass.bind(this);
  }

  /////////////////////////////////////////////////////
  handleRadio(event) {
    this.setState({radio: event.target.value});
  }

  handleEmail(event) {
    this.setState({gmail: event.target.value});
  }

  handlePass(event) {
    this.setState({pass: event.target.value});
  }

  handleRepass(event) {
    this.setState({repass: event.target.value});
  }

  handleSubmit(event) {
    if(this.state.radio === 'signin') {
      Database.signin(this.state.gmail, this.state.pass);
    } else if(this.state.radio === 'signup') {
      Database.signup(this.state.gmail, this.state.pass, this.state.repass);
    } else if(this.state.radio === 'reset') {
      Database.reset(this.state.gmail);
    }

    event.preventDefault();
  }

  render() {
    document.body.style.backgroundImage = "url(" + wallpaper + ")";

    return (
      <nav className="container mt-4">
        <div className="post">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <input id="signin" name="action" type="radio" value="signin" onChange={this.handleRadio} defaultChecked={true}/>
              <label htmlFor="signin">Sign in</label>
              <input id="signup" name="action" type="radio" value="signup" onChange={this.handleRadio} />
              <label htmlFor="signup">Sign up</label>
              <input id="reset" name="action" type="radio" value="reset" />
              <label htmlFor="reset">Reset</label>
              <div id="wrapper">
                <div id="arrow"></div>
                <input id="email" placeholder="Email" type="text" value={this.state.email} onChange={this.handleEmail} value='AntonGor@i.ua' /> 
                <input id="pass" placeholder="Password" type="password" value={this.state.pass} onChange={this.handlePass} value='AntonGor@i.ua' />
                <input id="repass" placeholder="Repeat password" type="password" value={this.state.repass} onChange={this.handleRepass} value='AntonGor@i.ua' />
              </div>
              <button type="submit">
                <span>
                  Reset password
                  <br />
                  Sign in
                  <br />
                  Sign up
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Identification;