import React, { PureComponent } from "react"
import { useState } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import "./styles.css"
import { Modal } from "antd"
import mailSend from "../../images/mailSend.png"

const CustomForm = ({ status, message, onValidated }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  let email, name, country
  const submit = () => {
    if (email.value.length > 0 && email.value.indexOf("@") > -1) {
      setIsModalOpen(true)
      onValidated({
        EMAIL: email.value,
        tags: 6539897,
      })
      document.getElementById("email").value = ""
    }
  }

  return (
    <div className="mailchimp-Container">
      <div className="mailchimp-input-Container">
        <input id="email" className="mailchimp-inputLayer-Container" placeholder="Enter Your Email" ref={(node) => (email = node)} type="email"></input>
      </div>
      <div className="mailchimp-send-Container" onClick={submit}>
        <img className="mailchimp-send-image-Container" src={mailSend} alt="logo" />
      </div>
      <Modal title="Thank you for registering!" open={isModalOpen} onCancel={handleOk} footer={null}>
        <p>Stay tuned for updates and exclusive offers. We'll be in touch with exciting news and announcements soon.</p>
      </Modal>
    </div>
  )
}

export default class MailimpContainer extends PureComponent {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    const url = "https://iplayground.us17.list-manage.com/subscribe/post?u=61bc80c5d8118e451c9a5ac80&id=9260d0f6fb&f_id=00ee61e0f0"
    return (
      <div className="mailchimp-Content">
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => <CustomForm status={status} message={message} onValidated={(formData) => subscribe(formData)} />}
        />
        <div className="mailchimp-Container-shadow"></div>
      </div>
    )
  }
}
