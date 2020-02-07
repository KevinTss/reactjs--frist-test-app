import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Layout from "../_global/components/Layout";
import ContactForm from "./ContactForm";

class Page extends Component {
  render() {
    return (
      <Layout
        nav={<Link to="/">Home</Link>}
        main={
          <Fragment>
            <h1>Contact form validation</h1>
            <ContactForm />
          </Fragment>
        }
      />
    );
  }
}

export default Page;
