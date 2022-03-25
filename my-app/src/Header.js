import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          
          <div className="left_menu">
            <ul className="navbar-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/library">Library</a>
              </li>
              <li>
                <a href="/top">Top players</a>
              </li>
            </ul>
          </div>

          <div className="navbar-wrap">
            <ul className="navbar-menu">
              <li>
                <a href="/identification">Sign in</a>
              </li>
              <li>
                <a href="/identification">Register</a>
              </li>
              <li>
                <a>{this.props.username}</a>
              </li>
              <li>
                <a href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function Left_components() {
  return (
    <div className="left_menu">
      <ul className="navbar-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/library">Library</a>
        </li>
        <li>
          <a href="/top">Top players</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;