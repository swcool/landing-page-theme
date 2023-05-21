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
        />
      );
    });
    return list
  }

  render() {
    return (
      <div className="faq-container">
        <div className="faq-content">
          <div className="faq-title-container">
            <div className="faq-title-container-font">FAQ</div>
          </div>
          <div className="faq-list-container">
            {this.getList()}
          </div>
        </div>
      </div>
    );
  }
}
