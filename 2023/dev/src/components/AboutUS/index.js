import React, { PureComponent } from "react";
import "./styles.css";

export default class AboutContent extends PureComponent {
  render() {
    return (
      <div className="about-container">
        <div className="about-content">
          <div className="about-title-container">
            <div className="about-title-container-font">About Us</div>
          </div>
          <div className="about-content-container">
            iPlayground is a conference focused on iOS and macOS, organized by a
            group of passionate developers committed to creating an inclusive,
            rewarding, and enjoyable platform for Apple developers of all
            levels.
          </div>
        </div>
      </div>
    );
  }
}
