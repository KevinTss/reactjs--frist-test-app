import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "./_global/style.css";
import Layout from "./_global/components/Layout";

// Pages
import DragAndDropPage from "./drag-and-drop/Page";
import FormValidationPage from "./form-validation/Page";

const HomePage = () => (
  <Layout
    nav={
      <Fragment>
        <Link to="/">Home</Link>
        <Link to="/form-validation">Form validation</Link>
        <Link to="/drag-and-drop">Drag and drop</Link>
      </Fragment>
    }
  />
);

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/form-validation" component={FormValidationPage} />
        <Route path="/drag-and-drop" component={DragAndDropPage} />
      </Router>
    );
  }
}

export default App;
