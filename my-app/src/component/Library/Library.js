import React from "react";
import "../Library/Library.css";

/* icons */
import icon from "./Icons/virus v2.png";
import wallpaper from "../Library/wallpaper.png";

class Games extends React.Component {
  render() {
    document.body.style.backgroundImage = "url(" + wallpaper + ")";

    return <Body />;
  }
}

function Body() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <div className="product">
              <a href="/virus">
                <img src={icon} />
                <p className="name">Virus v3</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Games;
