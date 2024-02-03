import { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      counter: 0,
    };
  }
  componentDidMount() {
    console.log("Component did mount");
  }
  componentDidUpdate() {
    console.log("Component did update");
  }
  componentWillUnmount() {
    console.log("Component will unmount");
  }
  render() {
    const clickHandler = () => {
      this.setState({ counter: this.state.counter + 1 });
    };
    return (
      <div className="App">
        <h1>Рахунок {this.state.counter}</h1>
        <button onClick={clickHandler}> збільшити рахунок</button>
      </div>
    );
  }
}
