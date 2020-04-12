import React, { Component } from "react";
import "./first.css";
import { Link } from 'gatsby';

class First extends Component {
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
      <div id="first">
        <img src="./img/main_theme.png" className="logo"/>
      </div>
    );
  }
}

export default First;
