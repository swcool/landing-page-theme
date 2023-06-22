import React, { PureComponent } from "react";
import "./styles.css";

export default class ActionButton extends PureComponent {
  render() {
    return (
      <div className="action-button">
        <div className="action-button-container">
          <div className="action-button-font-container">{this.props.content}</div>
        </div>
        <div className="action-button-container-layer"></div>
      </div>
    );
  }
}
