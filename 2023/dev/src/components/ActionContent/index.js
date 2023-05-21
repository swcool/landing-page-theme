import React, { PureComponent } from "react";
import "./styles.css";

export default class ActionContent extends PureComponent {
  render() {
    return (
      <div className="action-content-layer">
        <div className="action-content-title-layer">
          <div className="action-content-title-font-layer">
            {/* When and where is the conference happening? */}
            {this.props.title}
          </div>
        </div>
        <div className="action-content-content-font-layer">
            {this.props.content}
          {/* The date and venue for the 2023 conference are not fixed yet. However,
          we expect the date to be on a weekend in November, and the location to
          be in Taipei City. We plan to announce the date and venue in June
          2023. Be sure to follow us for the latest updates! */}
        </div>
      </div>
    );
  }
}
