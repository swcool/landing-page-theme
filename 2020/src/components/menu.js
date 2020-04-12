import React, { Component } from "react";
import "./menu.css";
import { Link } from 'gatsby';

class Menu extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount(){
  }

  componentDidMount() {

  }

  render() {

    return (
      <div id="menu">
        <nav>
          <ul className="menu">
            <li><a href="#"><p>Speakers</p><p>講者</p></a></li>
            <li><a href="#"><p>Schedule</p><p>議程</p></a></li>
            <li><a href="#"><p>Venue</p><p>場地</p></a></li>
            <li><a href="#"><p>About</p><p>關於我們</p></a></li>
            <li><a href="#"><p>Sponsors</p><p>關於我們</p></a></li>
            <li><a href="#"><p style={{whiteSpace:'nowrap'}}>Co-organizers</p><p>合作夥伴</p></a></li>
            <li><a href="#"><p>Staffs</p><p>工作人員</p></a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
