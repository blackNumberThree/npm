import React, { Component } from "react";

export class ClassComponent extends Component {
  state = { somevalue: 32 };
  nameRef = React.createRef();
  handlerSubmit = (event) => {
    event.preventDefault();
    let input = this.nameRef.current;
    console.log(input);
  };
  render() {
    return (
      <>
        <h1>Hello, I am class component!</h1>
        <input
          type="text"
          placeholder="Input name"
          ref={this.nameRef}
          required
        />
        <input type="submit" value="Send data" onClick={this.handlerSubmit} />
      </>
    );
  }
}
