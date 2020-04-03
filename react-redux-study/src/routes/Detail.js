import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Detail({ toDo }) {
  console.log("toDo: " + toDo)
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>created at : {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps)
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  console.log("id: " + id)
  return { toDos: state.find(toDo => toDo.id === parseInt(id)) };
}
export default connect(mapStateToProps)(Detail);
