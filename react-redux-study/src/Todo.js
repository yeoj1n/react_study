import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Link } from "react-router-dom";

function Todo({ text, deleteTodo, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={deleteTodo}>Delete</button>
      </Link>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    deleteTodo: id => dispatch(actionCreators.deleteTodo(ownProps.id))
  };
};
export default connect(null, mapDispatchToProps)(Todo);
