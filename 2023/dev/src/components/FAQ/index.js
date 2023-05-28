import React, { PureComponent } from "react";
import ActionContent from "../ActionContent";
import { data } from "./FAQ_list";
import "./styles.css";

export default class FAQContent extends PureComponent {
  getList() {
    const list = data.map(function (item) {
      return (
        <ActionContent
          title={item.question}
          content={item.answer}
          url={item.url}
        />
      );
    });
    return list;
  }

  render() {
    return (
      <div className="faq-container">
        <div className="faq-content">
          <div className="faq-title-container">
            <div className="faq-title-container-font">FAQ</div>
          </div>
          <div className="faq-list-container">{this.getList()}</div>
        </div>
        <div className="footer-content-thirdparty">
          <a href="https://twitter.com/theiPlayground">
            <img src={require("../../images/twitter.png")} alt="twitter" />
          </a>
          <a href="https://iosdev.space/@iplayground">
            <img src={require("../../images/mastodon.png")} alt="mastodon" />
          </a>
        </div>
      </div>
    );
  }
}
