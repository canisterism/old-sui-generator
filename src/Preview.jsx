import React from "react";
import PropTypes from "prop-types";
import template from "./sui_image.png";
import "./Preview.sass";

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const cls = this;
    const ctx = document.getElementById("canvas").getContext("2d");
    const img = new Image();
    img.src = template;
    img.addEventListener(
      "load",
      function() {
        ctx.drawImage(img, 0, 0, 700, (700 * img.height) / img.width);
        ctx.font = "20px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(cls.props.text, 350, 200);
      },
      false
    );
  }
  componentWillReceiveProps(nextProps) {
    const text = nextProps.text;
    this.updateText(text);
  }
  updateText(text) {
    const ctx = document.getElementById("canvas").getContext("2d");
    ctx.clearCanvas();
    ctx.fillText(text, 350, 200);
  }
  render() {
    return (
      <div className="preview-container">
        <canvas className="canvas" id="canvas" width="700" height="400" />
        <p>{this.props.text}</p>
      </div>
    );
  }
}
Preview.propTypes = {
  text: PropTypes.string
};
export default Preview;
