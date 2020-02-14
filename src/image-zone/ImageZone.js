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

class ImageZone extends Component {
  state = {
    image: null,
    zones: []
  };

  constructor() {
    super();
    this.target = null;
    this.state = {
      currentX: undefined,
      currentY: undefined,
      initialX: undefined,
      initialY: undefined,
      xOffset: 0,
      yOffset: 0,
      active: false
    };
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
    img.setAttribute("draggable", false);
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
    console.log("onDragStart");
    this.target = event.target;
    this.setState({
      active: true,
      initialX: event.clientX - this.state.xOffset,
      initialY: event.clientY - this.state.yOffset
    });
  };

  onDrag = event => {
    console.log("onDrag");
    if (!this.state.active) return;
    this.setState({
      currentX: event.clientX - this.state.initialX,
      currentY: event.clientY - this.state.initialY
    });
  };

  onDrop = event => {
    console.log("onDrop");
    this.target = null;
    this.setState({
      initialX: this.state.currentX,
      initialY: this.state.currentY,
      active: false
    });
  };

  drawRectangle = zone => {
    console.log("zone to draw", zone);
    const rectangle = document.createElement("div");
    rectangle.setAttribute("id", `zone-shape-${zone.idx}`);
    this.container.appendChild(rectangle);
  };

  render() {
    const { zones } = this.props;
    const [zone] = zones;

    const { currentX, currentY } = this.state;

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
          onMouseMove={this.onDrag}
          onMouseUp={this.onDrop}
          ref={el => {
            this.container = el;
          }}
        >
          <div
            onMouseDown={this.onDragStart}
            style={{
              width: `${zone.w}px`,
              height: `${zone.h}px`,
              position: "absolute",
              backgroundColor: "rgba(255, 255, 0, 0.5)",
              top: `${zone.x}px`,
              left: `${zone.y}px`,
              transform:
                "translate3d(" + currentX + "px, " + currentY + "px, 0)"
            }}
          />
        </Container>
      </Fragment>
    );
  }
}

export default ImageZone;

ImageZone.displayName = "ImageZone";
