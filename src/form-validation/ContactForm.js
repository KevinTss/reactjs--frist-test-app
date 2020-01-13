import React, { Component } from "react";
import Input from "./ui/form/Input";

export default class ContactForm extends Component {
  state = {
    form: {
      firstname: {
        element: "input",
        config: {
          placeholder: "eg: John",
          type: "text"
        },
        value: ""
      },
      lastname: {
        element: "input",
        config: {
          placeholder: "eg: Doe",
          type: "text"
        },
        value: ""
      },
      email: {
        element: "input",
        config: {
          placeholder: "eg: john.doe@email.com",
          type: "email"
        },
        value: ""
      },
      gender: {
        element: "select",
        config: {
          options: [
            { value: "men", label: "Men" },
            { value: "woman", label: "Woman" },
            { value: "other", label: "Other" }
          ]
        },
        value: ""
      },
      message: {
        element: "textarea",
        config: {
          placeholder: "Message"
        },
        value: ""
      }
    }
  };
  render() {
    const formElements = Object.keys(this.state.form).map(key => ({
      id: key,
      config: this.state.form[key]
    }));

    return (
      <form>
        {formElements.map(field => (
          <Input
            key={field.id}
            type={field.config.element}
            config={field.config.config}
            value={field.config.value}
          />
        ))}
      </form>
    );
  }
}
