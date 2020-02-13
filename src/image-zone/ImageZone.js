import React, { Component, Fragment } from "react";
import styled from "styled-components";

const SHAPE_TYPE = { CIRCLE: "circle", RECTANGLE: "rectangle" };
const SHAPE_TYPES = Object.keys(SHAPE_TYPE).map(key => SHAPE_TYPE[key]);

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
`;

const setTranslate = (xPos, yPos, el) => {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
};

class ImageZone extends Component {
  state = {
    image: null,
    zones: []
  };

  constructor() {
    super();
    this.currentX = undefined;
    this.currentY = undefined;
    this.initialX = undefined;
    this.initialY = undefined;
    this.xOffset = 0;
    this.yOffset = 0;
    this.active = false;
  }

  componentDidMount() {
    const { imageSource, zones } = this.props;
    if (!this.container) return;
    // console.dir(this.container);
    this.setImage(imageSource, image => {
      this.setState({ image, zones }, () => {
        this.addZones(zones);
      });
    });
  }

  setImage = (imageSource, callback) => {
    const self = this;
    const img = new Image();
    img.onload = function() {
      const imageRatio = this.width / this.height;
      this.width = self.container.offsetWidth;
      this.height = this.width / imageRatio;
      self.container.appendChild(this);
      callback(this);
    };
    img.src = imageSource;
  };

  addZones = zones => {
    if (!zones.length) {
      return;
    }
    zones.forEach(zone => {
      if (!SHAPE_TYPES.includes(zone.shapeType)) {
        return;
      }
      if (zone.shapeType === SHAPE_TYPE.CIRCLE) {
        // this.drawCircle(zone);
      } else if (zone.shapeType === SHAPE_TYPE.RECTANGLE) {
        this.drawRectangle(zone);
      }
    });
  };

  onDragStart = event => {
    console.log("start");
    this.active = true;
    this.initialX = event.clientX - this.xOffset;
    this.initialY = event.clientY - this.yOffset;
  };

  onDrag = event => {
    console.log("onDrag");
    if (!this.active) return;
    this.currentX = event.clientX - this.initialX;
    this.currentY = event.clientY - this.initialY;
    this.xOffset = this.currentX;
    this.yOffset = this.currentY;
    setTranslate(this.currentX, this.currentY, event.target);
    // console.log("drag", event.clientX);

    // const initialX = event.clientX - xOffset;
    // const initialY = event.clientY - yOffset;
    // const newPosX = event.offsetX;
    // const newPosY = event.offsetY;
    // const el = event.target;
    // const offsetY = el.offsetTop;
    // const offsetX = el.offsetLeft;
    // el.style.top = `${newPosY}px`;
    // el.style.left = `${newPosX}px`;
  };

  onDrop = event => {
    console.log("stop");
    // console.log("drop", event);
    this.initialX = this.currentX;
    this.initialY = this.currentY;
    this.active = false;
  };

  drawRectangle = zone => {
    console.log("zone to draw", zone);
    const rectangle = document.createElement("div");
    rectangle.setAttribute("id", `zone-shape-${zone.idx}`);
    rectangle.setAttribute("draggable", true);
    rectangle.style.width = `${zone.w}px`;
    rectangle.style.height = `${zone.h}px`;
    rectangle.style.position = "absolute";
    rectangle.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    rectangle.style.top = `${zone.x}px`;
    rectangle.style.left = `${zone.y}px`;
    rectangle.addEventListener("mousedown", this.onDragStart);
    rectangle.addEventListener("mousemove", this.onDrag);
    rectangle.addEventListener("mouseup", this.onDrop);
    this.container.appendChild(rectangle);
  };

  render() {
    return (
      <Fragment>
        <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          See state
        </button>
        <Container
          ref={el => {
            this.container = el;
          }}
        />
      </Fragment>
    );
  }
}

export default ImageZone;

ImageZone.displayName = "ImageZone";
