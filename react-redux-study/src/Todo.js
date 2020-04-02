import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";

function Todo({ text, deleteTodo }) {
  return (
    <li>
      {text}
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteTodo: id => dispatch(actionCreators.deleteTodo(ownProps.id))
  };
};
export default connect(null, mapDispatchToProps)(Todo);
