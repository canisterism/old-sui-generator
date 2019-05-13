import React from "react";
import PropTypes from "prop-types";
import template from "./sui_image.svg";
import setsu from "./setsu.svg";
import "./Preview.sass";

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      template: template
    };
  }
  createMultilineTexts(text, index, arr) {
    const yShift = (index + -0.7) * 3.5 * 16;
    if (arr.length - 1 === index || arr.length === 1) {
      const textWidth = (text.length * 48) / 2;
      const setsuYShift = yShift - 39;
      const transform = "translate(" + "0 " + setsuYShift + ")";
      const fontSize = {
        fontSize: 3 + "rem"
      }
      return (
        <g key={index}>
          <text x="50%" y="50%" dy={yShift} textAnchor="middle" style={fontSize} fontFamily="Kurobara Gothiic Black">
            {text}
          </text>
          <image
            href={setsu}
            x={textWidth + 350}
            y="50%"
            transform={transform}
          />
        </g>
      );
    } else {
      return (
        <text key={index} x="50%" y="50%" dy={yShift} textAnchor="middle">
          {text}
        </text>
      );
    }
  }
  render() {
    const texts = this.props.text.split("\n");
    const lines = texts.map(this.createMultilineTexts);
    return (
      <svg id="svg-preview" width="700px" height="470px" viewBox="0 0 700 470">
        <defs>
          <style type="text/css">
            {`@font-face {
                fontFamily: "Kurobara Gothiic Black"
                src: url("fonts/kurobara-gothic-black.ttf")
              }
            `}
          </style>
        </defs>

        <image href={this.state.template} />
        {lines}
      </svg>
    );
  }
}
Preview.propTypes = {
  text: PropTypes.string
};
export default Preview;
