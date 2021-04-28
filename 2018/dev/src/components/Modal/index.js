import React, { PureComponent } from 'react';

import './styles.css';

export default class Modal extends PureComponent {
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = e => {
    const { onCloseRequest } = this.props;

    if (e.key === 'Escape' || e.keyCode === 27) onCloseRequest();
  };

  onClickOverlay = e => {
    if (e.target.id !== 'modal-overlay') return;

    const { onCloseRequest } = this.props;

    onCloseRequest();
  }

  render() {
    const { visible, children } = this.props;

    // disable body vertical scrolling when modal show up
    document.body.style.overflowY = visible ? 'hidden' : 'auto';

    return visible ? (
      <div id="modal-overlay" className="modal__overlay" onClick={this.onClickOverlay}>
        <div className="modal__dialog">
          {children}
        </div>
      </div>
    ) : null;
  }
}
