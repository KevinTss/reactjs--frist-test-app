import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Layout from "../_global/components/Layout";
import ImageZone from "./ImageZone";

const Page = () => {
  return (
    <Layout
      nav={<Link to="/">Home</Link>}
      main={
        <Fragment>
          <h1>Image zone</h1>
          <p>
            Try to demonstrate if we can add zone on image and manipulate them.
          </p>
          <ImageZone />
        </Fragment>
      }
    />
  );
};

export default Page;
