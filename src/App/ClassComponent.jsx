import { Component } from "react";

export class ClassComponent extends Component {
  state = { somevalue: 32 };
  render() {
    return <h1>Hello, I am class component!</h1>;
  }
}
