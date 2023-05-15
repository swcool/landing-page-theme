import React, { PureComponent } from "react";
import "./styles.css";
import ActionButton from "../ActionButton";
import LogoContent from "../Logo";

export default class Interduction extends PureComponent {
  render() {
    return (
      <div className="introduction-content">
        <div className="introduction-left-contnet">
          <div className="introduction-logo-content">
            <LogoContent />
          </div>
          <div className="introduction-actionbutton-contnet">
            <ActionButton content="Join This Conf →" />
          </div>
        </div>
        <div className="introduction-right-contnet">
          <img
            className="introduction-right-image-contnet"
            src={require("../../images/earth.png")}
            alt="logo"
          />
        </div>
      </div>
    );
  }
}
