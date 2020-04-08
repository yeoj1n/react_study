import React, { Component, useState, useEffect, useRef } from "react";
import "./App.css";
import axios from "axios";
//import useInput from "./useInput";

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
/*
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
*/

// useTab example
// const content = [
//   {
//     tab: "section1",
//     content: "content 1"
//   },
//   {
//     tab: "section2",
//     content: "content 2"
//   }
// ];

// const useTabs = (initialTab, allTabs) => {
//   if (!allTabs || Array.isArray(allTabs)) {
//     return;
//   }
//   const [currentIndex, setCurrentIndex] = useState(initialTab);
//   return {
//     currentItem: allTabs[currentIndex],
//     changeItem : setCurrentIndex
//   };
// };
// const App = () => {
//   //const tabs = useTabs(0, content);
//   const { currnetItem, changeItem } = useTabs(0, content);
//   return (
//     <div>
//       {content.map((section, idx) => (
//         <button>{() => changeItem(idx)}>{section.tab}</button>
//       ))}
//       {currnetItem.content}
//     </div>
//   );
// };

// const App = () => {
//   const sayHello = () => console.log("hello!");
//   const [number, setNumber] = useState(0);
//   const [aNumber, setAnumber] = useState(0);

//   // componentDidMount
//   // useEffect(() => {
//   //   sayHello();
//   // }, []);

//   // componentDidMount + componentDidUpdate
//   // useEffect(() => {
//   //   sayHello();
//   // });

//   // componentDidMount + number state가 바뀌는 경우의 componentDidUpdate
//   useEffect(() => {
//     sayHello();
//   }, [aNumber]);
//   return (
//     <>
//       <div>{number}</div><br/>
//       <div>{aNumber}</div>
//       <button onClick={() => setNumber(number + 1)}>+</button>
//       <button onClick={() => setAnumber(aNumber + 2)}>-</button>
//     </>
//   )

// }
// useTitle : Head의 title 변경 (componentDidMount + componentDidUpdate)
// const useTitle = (initialTitle) => {
//   const [title, setTitle] = useState(initialTitle);
//   const updateTitle = () => {
//     const htmlTitle = document.querySelector("title");
//     htmlTitle.innerText = title;
//   }
//   useEffect(updateTitle, [title]);
//   return setTitle;
// }

// const App = () => {
//   const titleUpater = useTitle("Loading");
//   setTimeout(() => {
//     titleUpater("HOME")
//   }, 2000);
//   return(
//     <div className="App">

//       <div>Hi!</div>
//     </div>
//   );
// }

// useClick
// const useClick = onClick => {
//   const element = useRef();
//   useEffect(() => {
//     if(element.current) {// element.current가 있을 때
//       element.current.addEventListener("click", onClick);
//     }

//     // return 시켜줄 때 componentWillUnmount 된다.
//     return() => {
//       element.current.removerEventListener("click", onClick);
//     }
//   }, []); // componentDidUpdate 하고 싶지않으면 빈 배열 반환

//   return element;
// }

// const App = () => {
//   const sayHello = () => console.log("say hello");
//   const title = useClick(sayHello);

//   return(
//     <div className="App">
//       <h1 ref={title}>Hi</h1>
//     </div>
//   )
// }

// useConfirm
// const useConfirm = (message = "", onConfirm, onCancle) => {
//   if (!onConfirm || typeof onConfirm !== "function") return;
//   if (onCancle && typeof onCancle !== "function") return;

//   const confirmAction = () => {
//     if (window.confirm(message)) {
//       onConfirm();
//     } else {
//       onCancle();
//     }
//   };
//   return confirmAction;
// };

// const App = () => {
//   const confirmDelete = useConfirm(
//     "Are you sure?",
//     () => {
//       console.log("delete word");
//     },
//     () => {
//       console.log("abort");
//     }
//   );

//   return (
//     <div className="App">
//       <button onClick={confirmDelete}>Delete the button</button>
//     </div>
//   );
// };

// usePreventLeave
// const usePreventLeave = () => {
//   const listener = event => {
//     event.preventDefault();
//     event.returnValue = "";
//   };
//   const enablePrevent = () => {
//     window.addEventListener("beforeunload", listener);
//   };
//   const disablePrevent = () => {
//     window.removeEventListener("beforeunload", listener);
//   };

//   return { enablePrevent, disablePrevent };
// };

// const App = () => {
//   const { enablePrevent, disablePrevent } = usePreventLeave();
//   return (
//     <div className="App">
//       <button onClick={enablePrevent}>Protect</button>
//       <button onClick={disablePrevent}>UnProtect</button>
//     </div>
//   );
// };

// useBeforeLeave
// const useBeforeLeave = onBefore => {
//   const handle = event => {
//     onBefore();
//   };
//   useEffect(() => {
//     document.addEventListener("mouseleave", handle);
//     return () => document.removeEventListener("mouseleave", handle);
//   });
// };

// const App = () => {
//   const begForLife = () => {
//     console.log("pls dont leave");
//   };
//   useBeforeLeave(begForLife);
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   );
// };

// useScroll
// const useScroll = () => {
//   const [Y, setY] = useState(0);
// const onScroll = () => {
//   setY(window.scrollY);
// }
// useEffect(() => {
//   window.addEventListener("scroll", onScroll);
//   return () =>
//     window.removeEventListener("scroll", onScroll);
// }, []);
// return Y;

//   useEffect(() => {
//     // window.~EventListener(event, function);
//     window.addEventListener("scroll", () => {setY(window.scrollY)});
//     return() => window.removeEventListener("scroll", () => {setY(window.scrollY)})
//   },[])
//   return Y;
// };

// const App = () => {
//   const Y = useScroll();
//   console.log(Y)
//   return (
//     <div style={{ height: "1000vh" }}>
//       <h1 style={{ position: "fixed", color: Y > 100 ? "red" : "blue" }}>
//         hello
//       </h1>
//     </div>
//   );
// };

// import useAxios from "./useAxios";
// const App = () => {
//   const { loading, data, error, refetch } = useAxios({
//     url: "https://yts.am/api/v2/list_movies.json"
//   });
//   console.log(`loading : ${loading} \n error : ${error} \n data: ${JSON.stringify(data)}`);
//   return <div>
//     <h2> {data && data.status}</h2>
//     <h2>{loading && `Loading`}</h2>
//     <button onClick={refetch}>Refetch</button>
//   </div>;
// };
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import InfiniteScroll from './InfiniteScroll';
// import InfiniteAndLazy from './InfiniteAndLazy';

// function App() {
//   return(
//     <Router>
//       <Route exact path="/infiniteScroll" component={InfiniteScroll}></Route>
//       <Route exact path="/infiniteAndLazy" component={InfiniteAndLazy}></Route>

//     </Router>
//   )
// }
// export default App;

import { useTitle } from "./components";
const useTitle = (initState) => {
  console.log("useTitle 호출");
  console.log(initState)
  const [title, setTitle] = useState(initState);

  
  const updateTitle = (initState) => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };

  useEffect(() => {
    console.log("useEffect");
    updateTitle();
  }, [title]);

  return setTitle; 
};

const App = () => {
  const titleUpdate = useTitle("Loading");
  setTimeout(() => titleUpdate("Home"), 3000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};
export default App;
