import React from "react";
import { Link } from "react-router-dom";
import DragAndDrop from "./DragAndDrop";

const Page = props => {
  console.log(props);
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <h1>Drag and drop example</h1>
        <DragAndDrop />
      </main>
    </div>
  );
};

export default Page;
