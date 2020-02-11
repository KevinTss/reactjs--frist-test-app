import React, { Component } from "react";
import { fabric } from "fabric";
import styled from "styled-components";
import clonedeep from "lodash.clonedeep";

const CanvasContainer = styled.div`
  width: 100%;
  height: auto;
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
    imageLinkUrl: "",
    canvasImage: null
  };

  componentDidMount() {
    this.setCanvas();
  }

  setCanvas = () => {
    if (!this.canvasContainer) return;
    this.canvas = new fabric.Canvas("canvas-id");
    this.canvas.setHeight(this.canvasContainer.offsetHeight);
    this.canvas.setWidth(this.canvasContainer.offsetWidth);

    this.canvas.on("object:modified", this.preventObjectToGoOutsideCanvas);
  };

  _setScalingProperties = (left, top, scale) => {
    if (
      this.scalingProperties == null ||
      this.scalingProperties["scale"] > scale
    ) {
      this.scalingProperties = {
        left: left,
        top: top,
        scale: scale
      };
    }
  };

  preventObjectToGoOutsideCanvas = event => {
    // console.log("triggered", event);
    const object = event.target;
    const oldBorder = object.getBoundingRect();
    object.setCoords();
    const newBorder = object.getBoundingRect();
    console.log("old", oldBorder);
    console.log("new", newBorder);
    // if border left is going outside the canvas
    if (oldBorder.left <= 0 && newBorder.left < 0) {
      let scale = (oldBorder.width + oldBorder.left) / object.width;
      let height = oldBorder.height * scale;
      console.log("height", height);
      console.log("top n", newBorder.top);
      console.log("top o", oldBorder.top);
      console.log("height n", newBorder.height);
      console.log("height o", oldBorder.height);
      let top =
        ((newBorder.top - oldBorder.top) /
          (newBorder.height - oldBorder.height)) *
          (height - oldBorder.height) +
        oldBorder.top;

      top = newBorder.top;
      console.log("top", top);
      this._setScalingProperties(0, top, 1);
    }
    // top border
    // if(brOld.top >= 0 && brNew.top < 0) {
    //   let scale = (brOld.height + brOld.top) / obj.height;
    //   let width = obj.width * scale;
    //   let left = ((brNew.left - brOld.left) / (brNew.width - brOld.width) *
    //     (width - brOld.width)) + brOld.left;
    //   this._setScalingProperties(left, 0, scale);
    // }
    // // right border
    // if(brOld.left + brOld.width <= obj.canvas.width
    // && brNew.left + brNew.width > obj.canvas.width) {
    //   let scale = (obj.canvas.width - brOld.left) / obj.width;
    //   let height = obj.height * scale;
    //   let top = ((brNew.top - brOld.top) / (brNew.height - brOld.height) *
    //     (height - brOld.height)) + brOld.top;
    //   this._setScalingProperties(brNew.left, top, scale);
    // }
    // // bottom border
    // if(brOld.top + brOld.height <= obj.canvas.height
    // && brNew.top + brNew.height > obj.canvas.height) {
    //   let scale = (obj.canvas.height - brOld.top) / obj.height;
    //   let width = obj.width * scale;
    //   let left = ((brNew.left - brOld.left) / (brNew.width - brOld.width) *
    //     (width - brOld.width)) + brOld.left;
    //   this._setScalingProperties(left, brNew.top, scale);
    // }
    if (
      newBorder.left < 0 //||
      // newBorder.top < 0 ||
      // newBorder.left + newBorder.width > object.canvas.width ||
      // newBorder.top + newBorder.height > object.canvas.height
    ) {
      // console.log("obj", object);
      // console.log("scaling", this.scalingProperties);
      object.left = this.scalingProperties["left"];
      object.top = this.scalingProperties["top"];
      object.scaleX = this.scalingProperties["scale"];
      object.scaleY = this.scalingProperties["scale"];
      object.setCoords();
    } else {
      this.scalingProperties = null;
    }
  };

  resizeCanvas = (width = null, height = null) => {
    width && this.canvas.setWidth(width);
    height && this.canvas.setHeight(height);
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
      // We want the image to became this width
      const imageGoalWidth = this.canvasContainer.offsetWidth;
      // Find the scale base on the targetted width
      const scale = imageGoalWidth / image.width;
      image.set({
        scaleX: scale,
        scaleY: scale
      });
      // get ratio scaled height to apply it to the canvas
      // Goal is to fit the canvas with the image size
      const newGoalHeight = getRatioHeight(
        image.getScaledWidth(),
        getImageRatio(image.width, image.height)
      );
      this.resizeCanvas(null, newGoalHeight);
      this.canvas.setBackgroundImage(
        image,
        this.canvas.renderAll.bind(this.canvas),
        {}
      );
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
      <div>
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
      </div>
    );
  }
}

export default Canvas;

Canvas.displayName = "Canvas";
