import React, { PureComponent } from "react";
import "./styles.css";

export default class ActionContent extends PureComponent {
  getURL(url, content) {
    let contentString = String(content);
    if (contentString.indexOf("sponsor@iplayground.io") > 0) {
      let stringSplit = contentString.split('sponsor@iplayground.io')
      return <div className="action-content-content-font-layer">
        {stringSplit[0]}
        <a href="mailto:sponsor@iplayground.io">{'sponsor@iplayground.io'}</a>
        {stringSplit[1]}
      </div>;
        }
    if (contentString.indexOf("support@iplayground.io") > 0) {
      let stringSplit = contentString.split('support@iplayground.io')
      return <div className="action-content-content-font-layer">
        {stringSplit[0]}
        <a href="mailto:support@iplayground.io">{'support@iplayground.io'}</a>
        {stringSplit[1]}
      </div>;
    }
    if (!url || String(url).length === 0) {
      return <div className="action-content-content-font-layer">{content}</div>;
    }
    return (
      <div className="action-content-content-font-layer">
        {content}[<a href={url}>{url}</a>]
      </div>
    );
  }

  render() {
    return (
      <div className="action-content-layer">
        <div className="action-content-title-layer">
          <div className="action-content-title-font-layer">
            {/* When and where is the conference happening? */}
            {this.props.title}
          </div>
        </div>
        {this.getURL(this.props.url, this.props.content)}
      </div>
    );
  }
}
