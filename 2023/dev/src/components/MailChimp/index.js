import React, { PureComponent } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import ActionButton from "../ActionButton";
import "./styles.css";

const CustomForm = ({ status, message, onValidated }) => {
  let email, name, country;
  const submit = () =>
    email &&
    name &&
    country &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: name.value,
      MMERGE18: country.value,
      tags:6539897
    });

  return (
    <div className="mailchimp-submit-container">
      {/* {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && (
                <div
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    style={{ color: "green" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )} */}
      <div className="mailchimp-main-container-triangle"></div>
      <div className="mailchimp-submit-container-container">
        <div className="mailchimp-submit-cell-header">
          Early Bird Sales Register
        </div>
        <div className="mailchimp-submit-cell-title">
          Be the first to know about our exciting updates, speaker
          announcements, and get exclusive access to early bird ticket sales.
        </div>
        <input
          className="mailchimp-submit-cell-content"
          ref={(node) => (name = node)}
          type="text"
          placeholder="Enter Your Name"
        />
        <br />
        <input
          className="mailchimp-submit-cell-content"
          ref={(node) => (email = node)}
          type="email"
          placeholder="Enter Your Email"
        />
        <br />
        <input
          className="mailchimp-submit-cell-content"
          ref={(node) => (country = node)}
          type="text"
          placeholder="Enter You From"
        />
        <br />
        <div style={{ width: "300px" }} onClick={submit}>
          <ActionButton title={"SUBMIT"} />
        </div>
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
    const url ="https://iplayground.us17.list-manage.com/subscribe/post?u=61bc80c5d8118e451c9a5ac80&id=9260d0f6fb&f_id=00ee61e0f0";

    // const url = "https://gmail.us21.list-manage.com/subscribe/post?u=b2caefb49116e92ac024ec1d0&id=47be3591bc&f_id=0026ace1f0";
    return (
      <div className="mailchimp-Container">
        <div className="mailchimp-main-container">
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
        </div>
      </div>
    );
  }
}
