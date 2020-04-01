import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({ toDos, addTodo }) {
  console.log(toDos);
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setText("");
    addTodo(text);
  };

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>

      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}
// store로부터 state를 가져다주는 역할 (Home에 props로 전달해줌)
const mapStateToProps = state => {
  return { toDos: state };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(actionCreators.addTodo(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
