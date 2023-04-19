import React, { PureComponent } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import './styles.css';

const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
        email &&
        name &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
            LNAME: name.value,
            "tags":464610
        });

    return (
        <div
            style={{
                background: "#efefef",
                borderRadius: 2,
                padding: 10,
                display: "inline-block"
            }}
        >
            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
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
            )}
            <input
                style={{ fontSize: "2em", padding: 5 }}
                ref={node => (name = node)}
                type="text"
                placeholder="Your name"
            />
            <br />
            <input
                style={{ fontSize: "2em", padding: 5 }}
                ref={node => (email = node)}
                type="email"
                placeholder="Your email"
            />
            <br />
            <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
                Submit
            </button>
        </div>
    );
};

export default class MailimpContainer extends PureComponent {
    handleClick(){
        fetch( 'https://us21.api.mailchimp.com/3.0/lists/47be3591bc',{ 
            method:"GET",
            mode:"no-cors",
            headers: {
              "Authorization": `275835c5df3991897397b29694786087-us21`
            }})
        .then(res => res.json())
        .then(data => {
              console.log(data)
        })
        .catch(e => {
            /*發生錯誤時要做的事情*/
            console.log(e);
        })
      }



    constructor() {
        super()

        this.state = {
        }
    }

    render() {
        const url = "https://gmail.us21.list-manage.com/subscribe/post?u=b2caefb49116e92ac024ec1d0&id=47be3591bc&f_id=0026ace1f0";
        this.handleClick()
        return (
            <div className='mailchimp-Container'>
                {/* <h1>react-mailchimp-subscribe Demo</h1>
                <GithubCorner href="https://github.com/revolunet/react-mailchimp-subscribe" /> */}
                <h2>Default Form</h2>
                <MailchimpSubscribe url={url} />
                <h2>Custom Form</h2>
                <MailchimpSubscribe
                    url={url}
                    render={({ subscribe, status, message }) => (
                        <CustomForm
                            status={status}
                            message={message}
                            tags={["aaa"]}
                            onValidated={formData => subscribe(formData)}
                        />
                    )}
                />
            </div>
        )
    }
}