import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 3px solid lightgrey;
  padding: 8px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

class Task extends Component {
  render() {
    return <Container>{this.props.task.content}</Container>;
  }
}

export default Task;

Task.displayName = "Task";
