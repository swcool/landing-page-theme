import React, { PureComponent } from "react"
import "./styles.css"
import revenuecat_logo from "../../images/revenuecat_logo.png"

export default class Sponsors extends PureComponent {
  render() {
    return (
      <div className="sponsors-container">
        <div className="sponsors-content">
          <div className="sponsors-title-container">
            <div className="sponsors-title-container-font">Sponsors</div>
          </div>
          <div className="sponsors-content-container">
            <div className="sponsors-content-title-container">Diamond</div>
            <div className="sponsors-content-image-container">
              <a href="https://www.revenuecat.com/">
                <img className="sponsors-image-logo" src={revenuecat_logo} alt="revenuecat" />
              </a>
            </div>
            <div className="sponsors-subcontent-container">
              Send an email to <a href="mailto:sponsor@iplayground.io">sponsor@iplayground.io</a> to learn more sponsorship opportunities.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
