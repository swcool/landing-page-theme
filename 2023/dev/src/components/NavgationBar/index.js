import React, { PureComponent } from 'react';

import './styles.css';

export default class NavgationBar extends PureComponent {
  constructor() {
    super()
  }
  render() {
    return (
      <nav id="navbar">
        <div className='nav-container'>
          <div className='sub-container'>
            <img src={require("../../images/logo_iplayground_small.png")} alt="iPlayground" />
          </div>
          <div className="sub-container">
            <div className='sub-content-container'>
              Get ready for a must-go conference for Apple developers!
            </div>
          </div>
          <div className="sub-container">
            <img className="logo-twitter" src={require("../../images/logo_twitter.png")} alt="iPlayground" />
            <div className='sub-signup-container'>
              <div className='sub-signup-text-container'>SIGN UP</div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}