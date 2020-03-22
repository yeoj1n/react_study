import React, { Component, useState } from "react";
import "./App.css";

/*
class 타입
class App extendsComponent {
  state = {
    count: 0
  };

  modify = n => {
    this.setState({
      count: n
    });
  };

  render() {
    //const {count} = this.state;
    return(
    <div>
      {this.state.count}<br/>
      <button onClick={()=>this.modify(this.state.count + 1)}>+</button>  
    </div>)
  }
}
*/

const App = () => {
  // [value, how to modify value], useState : array returns
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const updateEmail = e => {
    //const {target: {value}} = e;
    const {value} = e.target;
    setEmail(value);
  };

  return (
    <>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <input type ="text" onChange={updateEmail} placeholder="Email" value={email}/>
    </>
  );
};
export default App;
