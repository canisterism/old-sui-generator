import React from "react";
import ReactDOM from "react-dom";
import Preview from "./Preview.jsx";
import TextArea from "./TextArea.jsx";
import "./index.sass";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "ラッパーに善人はいない"
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
        <h2>水曜日の説ジェネレータ</h2>
        <Preview text={text} />
        <TextArea
          id="text"
          cols="50"
          rows="2"
          value={text}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<Wrapper />, document.getElementById("root"));
