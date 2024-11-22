import { Component } from "react";
export default class Paragraph extends Component {
  componentDidUpdate = () => {
    console.log("Updated2");
  };
  // Il s"exécute après la disparation d'un composant
  componentWillUnmount = () => {
    console.log("UnmoUnted");
  };
  interval = () => {
    setInterval(() => {
      console.log("TESTTTTT");
    }, 1000);
  };
  render() {
    return (
      <>
        {this.interval}

        <h1>Hello</h1>
      </>
    );
  }
}
