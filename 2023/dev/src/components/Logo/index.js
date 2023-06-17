import React, { PureComponent } from "react";
import "./styles.css";

export default class LogoContent extends PureComponent {
  render() {
    return (
      <div className="logo-contnet">
        <div
          className="header-container-logo"
        />
        <div className="header-container-thirdparty">
          <a href="https://twitter.com/theiPlayground">
            <img src={require("../../images/twitter.png")} alt="twitter" />
          </a>
          <a href="https://iosdev.space/@iplayground">
            <img src={require("../../images/mastodon.png")} alt="mastodon" />
          </a>
        </div>
        {/* <div className="header-container">
            <img
              className="header-container-logo"
              src={require("../../images/logo.png")}
              alt="logo"
            />
            <img
              className="header-container-year"
              src={require("../../images/year_title.png")}
              alt="year"
            />
          </div>
          <img
            className="second-content-container"
            src={require("../../images/iPlayground.png")}
            alt="year"
          />
          <div className="time-content-container">
            <div className="time-content-container"></div>
            <div className="time-content-font">Nov. 4th ~ 5th @ Taipei</div>
          </div> */}
      </div>
    );
  }
}
