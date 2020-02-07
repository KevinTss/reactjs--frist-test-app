import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Layout from "../_global/components/Layout";
import DragAndDrop from "./DragAndDrop";

const Page = props => {
  console.log(props);
  return (
    <Layout
      nav={<Link to="/">Home</Link>}
      main={
        <Fragment>
          <h1>Drag and drop example</h1>
          <DragAndDrop />
        </Fragment>
      }
    />
  );
};

export default Page;
