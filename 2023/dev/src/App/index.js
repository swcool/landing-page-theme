import React, { PureComponent } from "react";
import "./styles.css";
import Interduction from "../components/Introduction";
import AboutContainer from "../components/AboutUS"
import EarlyBirdContent from "../components/EarlyBird"
import FAQContent from "../components/FAQ"

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Interduction />
        <AboutContainer />
        <EarlyBirdContent />
        <FAQContent />
      </div>
    );
  }
}