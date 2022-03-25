import React from "react";

import "../Identification/Identification.css";
import "../Identification/Script";

/* img */
import wallpaper from '../../public/site/wallpaper/identification.jpg';

class Identification extends React.Component {
  render() {
    document.body.style.backgroundImage = "url(" + wallpaper + ")";

    return (
      <Body/>
    );
  }
}

function Body() {
  return (
    <>
      <nav className="container mt-4">
        <div className="post">
          <div className="container">
            <input id="signin" type="radio" name="tab" checked="checked" />
            <input id="register" type="radio" name="tab" />
            <div className="pages">
              <div className="page">
                <div className="input">
                  <div className="title">USERNAME</div>
                  <input
                    className="text"
                    type="text"
                    name="user_name"
                    id="user_name"
                    value="test1"
                  />
                </div>
                <div className="input">
                  <div className="title">PASSWORD</div>
                  <input
                    className="text"
                    type="password"
                    name="password"
                    id="password"
                    value="test1"
                  />
                </div>
                <div className="input">
                  <input type="submit" value="SING IN" id="sign_in" />
                </div>
              </div>

              <div className="page signup">
                <div className="input">
                  <div className="title">USERNAME</div>
                  <input
                    className="text"
                    type="text"
                    placeholder=""
                    name="user-name-1"
                    id="user_name_1"
                    value="test2"
                  />
                </div>
                <div className="input">
                  <div className="title">PASSWORD</div>
                  <input
                    className="text"
                    type="password"
                    placeholder=""
                    name="passsword-1"
                    id="password_1"
                    value="test2"
                  />
                </div>
                <div className="input">
                  <input type="submit" value="SIGN ME UP!" id="login" />
                </div>
              </div>
            </div>
            <div className="tabs">
              <label className="tab text" for="signin">
                Sign In
              </label>
              <label className="tab text" for="register">
                Register
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Identification;