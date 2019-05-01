import React from "react";
import PropTypes from "prop-types";
import "./TextArea.sass";

const TextArea = ({ id, cols, rows, value, handleChange }) => (
  <div className="text-wrapper">
    <textarea
      id={id}
      cols={cols}
      rows={rows}
      value={value}
      onChange={handleChange}
    />
  </div>
);

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextArea;
