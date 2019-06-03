# react-mailchimp-subscribe

[![npm package][npm-badge]][npm]

React subscribe form for Mailchimp.

Working demo : https://revolunet.github.io/react-mailchimp-subscribe/

## Usage

Create a list on mailchimp, add a form and get its "action" attribute from the mailchimp UI

The `MailchimpSubscribe` gives you a render prop with a `subscribe` method that you can call with your data.

In your app :

```jsx
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

// use the render prop and your custom form
const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <MyForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
)
```

see examples in [./demo/src](./demo/src)


[npm-badge]: https://img.shields.io/npm/v/react-mailchimp-subscribe.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-mailchimp-subscribe

