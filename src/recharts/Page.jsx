import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Layout from "../_global/components/Layout";
import PiechartExample from "./piechart-example";

const data = [
  {
    name: "South America",
    value: 1,
    index: 0,
    isCorrect: true,
    color: "#fd2562"
  },
  { name: "Asia", value: 1, index: 1, isCorrect: true, color: "#ff8f00" },
  { name: "Africa", value: 1, index: 2, isCorrect: true, color: "#4e2dec" },
  {
    name: "North America",
    value: 1,
    index: 3,
    isCorrect: true,
    color: "#d568df"
  },
  { name: "Australia", value: 0, index: 4, isCorrect: true, color: "#5fc0b7" },
  { name: "Europe", value: 1, index: 5, isCorrect: true, color: "#ff3600" },
  { name: "Other", value: 0, index: 7, color: "#838890" }
];

const Page = () => {
  return (
    <Layout
      nav={<Link to="/">Home</Link>}
      main={
        <Fragment>
          <h1>Piechart example</h1>
          <PiechartExample data={data} />
        </Fragment>
      }
    />
  );
};

export default Page;
