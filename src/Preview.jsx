import React from "react";
import PropTypes from "prop-types";
import template from "./sui_image.jpg";
import "./Preview.sass";

const Preview = ({ text }) => (
  <div className="container">
    <figure className="image">
      <img src={template} alt="preview" />
    </figure>
    <p>{text}</p>
  </div>
);

Preview.propTypes = {
  text: PropTypes.string
};

export default Preview;
