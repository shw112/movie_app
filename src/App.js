import React from "react";

class App extends React.Component{
  state = {
    count: 0
  };

  add = () => {
    console.log("add");
    //this.setState({count: this.state.count + 1});
    //this.current.state
    this.setState(current => ({count: current.count+1}));
  };

  minus = () => {
    console.log("minus");
    this.setState(current => ({count: current.count-1}));
  };

/*  Component Life Cycle 
  //  Mounting - component being bone
  componentDidMount() {
    console.log("Component rendered");
  }
  
  //  Updating - just state update caused by you
  componentDidUpdate() {
    console.log("I just updated");
  }
  
  //  Unmounting - component가 죽는것
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }
*/

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;