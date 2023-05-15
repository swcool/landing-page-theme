import React, { PureComponent } from "react";
import "./styles.css";

export default class ActionContent extends PureComponent {
  render() {
    return (
      <div className="action-title-content">
        <div className="action-title-content-container-layer">
          <div className="action-title-content-container">
            <div className="action-title-content-font-container">
              {this.props.content}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
