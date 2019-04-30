import React from "react";
import ReactDOM from "react-dom";
import Preview from "./Preview.jsx";
import "./index.sass";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "this is text in Wrapper"
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Preview text="this is prop text!!" />
      </div>
    );
  }
}

ReactDOM.render(<Wrapper />, document.getElementById("root"));
