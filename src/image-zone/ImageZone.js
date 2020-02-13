import React, { Component } from "react";
import styled from "styled-components";

const CanvasContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.1);
`;

class ImageZone extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <div>test</div>
      </div>
    );
  }
}

export default ImageZone;

ImageZone.displayName = "ImageZone";
