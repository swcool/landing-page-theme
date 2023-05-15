import React, { PureComponent } from "react";
import "./styles.css";
import Interduction from "../components/Introduction";
import AboutContainer from "../components/AboutUS"

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Interduction />
        <AboutContainer />
      </div>
    );
  }
}