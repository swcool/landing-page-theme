import React, { PureComponent } from "react";
import "./styles.css";

export default class ActionTitle extends PureComponent {
  render() {
    return (
      <div className="action-title">
        <div className="action-title-container">
          <div className="action-title-font-container">{this.props.content}</div>
        </div>
        <div className="action-title-container-layer"></div>
      </div>
    );
  }
}
