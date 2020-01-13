import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import FormValidationPage from "./form-validation/Page";

const HomePage = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/form-validation">Form calidation</Link>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/form-validation" component={FormValidationPage} />
        </Router>
      </div>
    );
  }
}

export default App;
