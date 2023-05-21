import React, { PureComponent } from "react";
import MailimpContainer from "../MailChimp";
import "./styles.css";

export default class EarlyBirdContent extends PureComponent {
  render() {
    return (
      <div className="earlybird-container">
        <div className="earlybird-content">
          <div className="earlybird-title-container">
            <div className="earlybird-title-container-font">
              Early Bird Sales Register
            </div>
          </div>
          <div className="earlybird-content-container">
            Be the first to know about our exciting updates, speaker
            announcements, and get exclusive access to early bird ticket sales.
          </div>
          <div className="earlybird-mailchimp-container">
            <MailimpContainer />
          </div>
        </div>
      </div>
    );
  }
}
