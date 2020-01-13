import React from "react";
import classes from "./input.css";

const Input = props => {
  let element;
  switch (props.element) {
    case "input":
      element = <input className={classes.input} {...props}></input>;
      break;
    case "textarea":
      element = <textarea className={classes.input} {...props}></textarea>;
      break;
    default:
      element = <input className={classes.input} {...props}></input>;
  }

  console.log("yeah");

  return (
    <div className={classes.inputContainer}>
      <label>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
