import React from "react";
import "../Top/Top.css";

/* img */
import wallpaper from '../Top/wallpaper.png';
import thanos from "../Top/thanos.gif";
import avatar from "../Top/avatar.png";


class Top extends React.Component {
  render() {
    document.body.style.backgroundImage = "url(" + wallpaper + ")";
    return <Body />;
  }
}

function Body() {
  return (
    <>
      <nav className="container mt-4">
        <div className="post">
          <div className="thanos">
            <img src={thanos} />
          </div>

          <hr />

          <div className="top-users">
            <table>
              <tr>
                <th>#</th>
                <th>Avatar</th>
                <th>Nickname</th>
                <th>Scores</th>
              </tr>
              <tr>
                <td>{1}</td>
                <td>
                  <img src={avatar} />
                </td>
                <td>Na_ACE</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>{2}</td>
                <td>
                  <img src={avatar} />
                </td>
                <td>Na_ACE</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>{3}</td>
                <td>
                  <img src={avatar} />
                </td>
                <td>Na_ACE</td>
                <td>1000</td>
              </tr>
            </table>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Top;