import React, { PureComponent } from "react";
import "./styles.css";
import Interduction from "../components/Introduction";
import AboutContainer from "../components/AboutUS";
import EarlyBirdContent from "../components/EarlyBird";
import FAQContent from "../components/FAQ";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }
  scrollTo() {
    const element = document.getElementById('earlyBird')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  render() {
    return (
      <div>
        <Interduction onClick={() => this.scrollTo()}/>
        <AboutContainer />
        <EarlyBirdContent />
        <FAQContent />
      </div>
    );
  }
}
