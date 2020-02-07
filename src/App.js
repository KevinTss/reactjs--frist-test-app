import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "./global/style.css";

// Pages
import DragAndDropPage from "./drag-and-drop/Page";
import FormValidationPage from "./form-validation/Page";

const HomePage = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/form-validation">Form validation</Link>
    <Link to="/drag-and-drop">Drag and drop</Link>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/form-validation" component={FormValidationPage} />
          <Route path="/drag-and-drop" component={DragAndDropPage} />
        </Router>
      </div>
    );
  }
}

export default App;
