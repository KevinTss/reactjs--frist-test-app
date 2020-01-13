import React, { Component } from "react";

export default class ContactForm extends Component {
  state = {
    formData: {
      firstname: "",
      lastname: "",
      email: "",
      message: ""
    }
  };
  render() {
    return (
      <form>
        <input type="text" name="firstname"></input>
      </form>
    );
  }
}
