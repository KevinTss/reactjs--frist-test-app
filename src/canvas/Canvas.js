import React, { Component } from "react";
import { fabric } from "fabric";
import styled from "styled-components";

const Container = styled.div``;
const CanvasContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const getImageRatio = (width, height) => {
  return width / height;
};

const getRatioHeight = (width, ratio) => {
  return width / ratio;
};

class Canvas extends Component {
  state = {
    shapes: [],
    imageLinkUrl: ""
  };

  componentDidMount() {
    this.setCanvas();
  }

  setCanvas = () => {
    if (!this.canvasContainer) return;
    this.canvas = new fabric.Canvas("canvas-id");
    this.canvas.setHeight(this.canvasContainer.offsetHeight);
    this.canvas.setWidth(this.canvasContainer.offsetWidth);
  };

  setCanvasContainer = element => {
    this.canvasContainer = element;
  };

  addRectangle = () => {
    const rectangle = new fabric.Rect({
      left: 20,
      top: 50,
      fill: "transparent",
      width: 100,
      height: 100,
      stroke: "red",
      hasRotatingPoint: false,
      strokeWidth: 1
    });
    const shapes = [...this.state.shapes, rectangle];
    this.canvas.add(rectangle);
    this.setState({ shapes });
  };

  addCircle = () => {
    const circle = new fabric.Circle({
      radius: 20,
      left: 0,
      fill: "transparent",
      stroke: "blue",
      strokeWidth: 1,
      lockUniScaling: true,
      hasRotatingPoint: false
    });
    const shapes = [...this.state.shapes, circle];
    this.canvas.add(circle);
    this.setState({ shapes });
  };

  addImage = url => {
    if (!this.canvas) return;
    fabric.Image.fromURL(url, image => {
      const imageWidth = this.canvasContainer.offsetWidth;
      image.scaleToWidth(imageWidth);
      this.canvas.add(image);
    });
  };

  onImageLinkUrlChange = event => {
    const imageUrl = event.target.value;
    this.setState({ imageLinkUrl: imageUrl });
    this.addImage(imageUrl);
  };

  seeState = () => {
    console.log(this.state);
  };

  render() {
    return (
      <Container>
        <div>
          <button onClick={this.addRectangle}>Rectangle</button>
          <button onClick={this.addCircle}>Circle</button>
          <input
            value={this.state.imageLinkUrl}
            onChange={this.onImageLinkUrlChange}
          />
          <button onClick={this.seeState}>See state</button>
        </div>
        <CanvasContainer ref={this.setCanvasContainer}>
          <canvas id="canvas-id" style={{ border: "1px solid black" }} />
        </CanvasContainer>
      </Container>
    );
  }
}

export default Canvas;

Canvas.displayName = "Canvas";
