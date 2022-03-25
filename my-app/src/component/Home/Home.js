import React from "react";

import Message from "./Message.json";

/* img */
import wallpaper from "../Home/wallpaper.png";
import fire from "../Home/fire.gif";
import avatar from "../Home/avatar.png";

class Home extends React.Component {
  render() {
    document.body.style.backgroundImage = "url(" + wallpaper + ")";
    return (
      <div>
        <Body />

        <Fire />
      </div>
    );
  }
}

function Body() {
  return (
    <nav className="container mt-4">
      {Message.map((postMessage, index) => {
        return (
          <div className="post">
            <div className="info">
              <div>
                <img src={avatar} />
                <span>{postMessage.name}</span>
              </div>
            </div>
            <hr />
            <div className="message">
              <span>{postMessage.message}</span>
            </div>
          </div>
        );
      })}
    </nav>
  );
}

function Fire() {
  return (
    <div className="style_ignore">
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
    </div>
  );
}

export default Home;
