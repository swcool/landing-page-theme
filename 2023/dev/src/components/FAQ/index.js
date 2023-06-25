import React, { PureComponent } from "react"
import ActionContent from "../ActionContent"
import Sponsors from "../Sponsor"
import { data } from "./FAQ_list"
import "./styles.css"
import "./styles.css"
import twitter from "../../images/twitter.png"
import mastodon from "../../images/mastodon.png"

export default class FAQContent extends PureComponent {
  getList() {
    const list = data.map(function (item) {
      return <ActionContent title={item.question} content={item.answer} url={item.url} />
    })
    return list
  }

  render() {
    return (
      <div className="faq-block-container">
        <div className="faq-container">
          <div className="faq-content">
            <div className="faq-title-container">
              <div className="faq-title-container-font">FAQ</div>
            </div>
            <div className="faq-list-container">{this.getList()}</div>
          </div>
        </div>
        <Sponsors />
        <div className="footer-content-thirdparty">
          <a href="https://twitter.com/theiPlayground">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://iosdev.space/@iplayground">
            <img src={mastodon} alt="mastodon" />
          </a>
        </div>
      </div>
    )
  }
}
