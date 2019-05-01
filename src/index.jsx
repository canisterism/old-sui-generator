import React from "react";
import ReactDOM from "react-dom";
import Preview from "./Preview.jsx";
import TextArea from "./TextArea.jsx";
import "./index.sass";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "this is text in Wrapper"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { text } = this.state;
    return (
      <div className="wrapper">
        <Preview text={text} />
        <TextArea
          id="text"
          cols="30"
          rows="10"
          value={text}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<Wrapper />, document.getElementById("root"));
