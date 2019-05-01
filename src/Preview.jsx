import React from "react";
import PropTypes from "prop-types";
import template from "./sui_image.svg";
import "./Preview.sass";

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  createMultilineTexts(text, index) {
    return (
      <text
        key={index}
        x="50%"
        y="50%"
        dy={(index + -0.7) * 3.5 + "rem"}
        textAnchor="middle"
      >
        {text}
      </text>
    );
  }

  render() {
    const texts = this.props.text.split("\n");
    const lines = texts.map(this.createMultilineTexts);

    return (
      <div className="preview-container">
        <svg width="700px" height="470px" viewBox="0 0 700 470">
          <image href={template} />
          {lines}
        </svg>
      </div>
    );
  }
}
Preview.propTypes = {
  text: PropTypes.string
};
export default Preview;
