import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Layout from "../_global/components/Layout";
import ImageZone from "./ImageZone";

const IMG_URL =
  "https://cdn1.tedsby.com/tb/large/storage/1/4/3/143646/collectible-dog-husky-puppy-hector.jpg";

const zones = [
  {
    idx: 1,
    h: 200,
    r: 0,
    w: 200,
    x: 0,
    y: 0,
    shapeType: "rectangle"
  }
];

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
          <ImageZone imageSource={IMG_URL} zones={zones} />
        </Fragment>
      }
    />
  );
};

export default Page;
