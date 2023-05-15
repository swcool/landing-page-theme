import React, { PureComponent } from "react";
import "./styles.css";
import ActionTitle from "../ActionTitle";
import ActionContent from "../ActionContent";

export default class AboutContent extends PureComponent {
  render() {
    return (
      <div className="abount-container">
        <div className="abount-content">
          <div className="abount-title-container">
            <ActionTitle content="About us" />
            <div className="abount-content-container">
              <ActionContent content="iPlayground is a conference focused on iOS and macOS, organized by a group of passionate developers committed to creating an inclusive, rewarding, and enjoyable platform for Apple developers of all levels.
"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
