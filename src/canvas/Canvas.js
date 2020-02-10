import React, { Component } from "react";
import { fabric } from "fabric";
import styled from "styled-components";

const Container = styled.div``;
const CanvasContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.1);
`;

class Canvas extends Component {
  state = {
    shapes: []
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
      fill: "red",
      width: 200,
      height: 100
    });
    const shapes = [...this.state.shapes, rectangle];
    this.setState({ shapes });

    this.canvas.add(rectangle);
  };

  render() {
    return (
      <Container>
        <div>
          <button onClick={this.addRectangle}>Rectangle</button>
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
