import React from "react";
import classes from "./input.css";

const Input = props => {
  let element;
  switch (props.type) {
    case "input":
      element = (
        <input
          className={classes.input}
          {...props.config}
          value={props.value}
          onChange={props.onChange}
        />
      );
      break;
    case "textarea":
      element = (
        <textarea
          className={classes.input}
          {...props.config}
          value={props.value}
          onChange={props.onChange}
        />
      );
      break;
    case "select":
      element = (
        <select
          className={classes.input}
          value={props.value}
          onChange={props.onChange}
        >
          {props.config.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
      break;
    default:
      element = (
        <input
          className={classes.input}
          {...props.config}
          value={props.value}
          onChange={props.onChange}
        />
      );
  }

  return (
    <div className={classes.inputContainer}>
      <label>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
