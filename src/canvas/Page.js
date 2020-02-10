import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Layout from "../_global/components/Layout";
import Canvas from "./Canvas";

const Page = () => {
  return (
    <Layout
      nav={<Link to="/">Home</Link>}
      main={
        <Fragment>
          <h1>Canvas</h1>
          <Canvas />
        </Fragment>
      }
    />
  );
};

export default Page;
