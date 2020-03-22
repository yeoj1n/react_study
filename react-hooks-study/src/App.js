import React, { Component, useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import useInput from './useInput';

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
/*
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
import React, { Component, useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
*/
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
/*
// hooks 사용
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
*/

function useFetch(url) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async () => {
    try {
      const { data } = await axios.get(url);
      setPayload(data);
    } catch (error) {
      setError("Error!");
    } finally {
      setLoading(false);
    }
  };

  // useEffect : componentDidMount, componentDidUpdate와 같은 역할 수행

  // componentDidMount && componentDidUpdate
  // useEffect(() => {
  //   callUrl();
  // });

  //componentDidMount만 수행
  useEffect(() => {
    callUrl();
  }, []);

  return { payload, loading, error };
}
function App() {
  //const name = useInput("");
  const maxLen = value => value.length < 10;
  const name = useInput("Ms.", maxLen);
  const { payload, loading, error } = useFetch("https://aws.random.cat/meow");
  return (
    <div>
      <h1>Use Hooks</h1>
      <br />
      <input {...name} placeholder="what's your name" />
      <br />
      {loading && <span>loading your cat</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && <img src={payload.files} />}
    </div>
  );
}
export default App;
