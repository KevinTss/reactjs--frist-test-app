import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

class Index extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <main>
          <h1>Contact form validation</h1>
          <ContactForm />
        </main>
      </div>
    );
  }
}

export default Index;
