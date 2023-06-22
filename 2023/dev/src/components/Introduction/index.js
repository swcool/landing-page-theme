import React, { PureComponent } from "react";
import "./styles.css";
import ActionButton from "../ActionButton";
import LogoContent from "../Logo";

export default function Interduction({ onClick }) {
  return (
    <div className="introduction-content">
      <div className="introduction-mobile-content">
        <div className="introduction-mobile-image-contnet"/>
      </div>
      <div className="introduction-left-contnet">
        <div className="introduction-logo-content">
          <LogoContent />
        </div>
        <div className="introduction-actionbutton-contnet" onClick={onClick}>
          <ActionButton content="Join This Conf →" />
        </div>
      </div>
      <div className="introduction-right-contnet">
        <div className="introduction-right-image-contnet"/>
      </div>
    </div>
  )
}
