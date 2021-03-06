import React, { Component, Fragment } from "react";
import { HashRouter as Router, Link, Route } from "react-router-dom";

import "./_global/style.css";
import Layout from "./_global/components/Layout";

// Pages
import DragAndDropPage from "./drag-and-drop/Page";
import FormValidationPage from "./form-validation/Page";
import CanvasPage from "./canvas/Page";
import ImageZonePage from "./image-zone/Page";
import Recharts from "./recharts/Page";

const HomePage = () => (
  <Layout
    nav={
      <Fragment>
        <Link to="/">Home</Link>
        <Link to="/form-validation">Form validation</Link>
        <Link to="/drag-and-drop">Drag and drop</Link>
        <Link to="/canvas">Canvas</Link>
        <Link to="/image-zone">Image zone</Link>
        <Link to="/recharts">Recharts</Link>
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
        <Route path="/canvas" component={CanvasPage} />
        <Route path="/image-zone" component={ImageZonePage} />
        <Route path="/recharts" component={Recharts} />
      </Router>
    );
  }
}

export default App;
