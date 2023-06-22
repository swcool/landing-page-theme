import React, { PureComponent } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./styles.css";

const CustomForm = ({ status, message, onValidated }) => {
  let email, name, country;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      tags: 6539897,
    });

  return (
    <div className="mailchimp-Container">
      <div className="mailchimp-input-Container">
        <input
          className="mailchimp-inputLayer-Container"
          placeholder="Enter Your Email"
          ref={(node) => (email = node)}
          type="email"
        ></input>
      </div>
      <div className="mailchimp-send-Container" onClick={submit}>
        <img
          className="mailchimp-send-image-Container"
          src={require("../../images/mailSend.png")}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default class MailimpContainer extends PureComponent {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const url =
      "https://iplayground.us17.list-manage.com/subscribe/post?u=61bc80c5d8118e451c9a5ac80&id=9260d0f6fb&f_id=00ee61e0f0";

    return (
      <div className="mailchimp-Content">
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
        <div className="mailchimp-Container-shadow"></div>
      </div>
    );
  }
}
