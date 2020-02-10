import React, { Component } from "react";
import { fabric } from "fabric";
import styled from "styled-components";

const Container = styled.div``;

class Canvas extends Component {
  componentDidMount() {
    this.canvas = new fabric.Canvas("canva-id");
  }

  addRectangle = () => {
    const rectangle = new fabric.Rect({
      left: 20,
      top: 50,
      fill: "red",
      width: 200,
      height: 100
    });

    this.canvas.add(rectangle);
  };

  render() {
    return (
      <Container>
        <div>
          <button onClick={this.addRectangle}>Rectangle</button>
        </div>
        <canvas
          id="canva-id"
          width="700px"
          height="1000px"
          style={{ border: "1px solid black" }}
        />
      </Container>
    );
  }
}

export default Canvas;

Canvas.displayName = "Canvas";
