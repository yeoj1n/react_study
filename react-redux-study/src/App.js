import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Detail } from "./routes";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Detail} />
    </Router>
  );
}

export default App;
