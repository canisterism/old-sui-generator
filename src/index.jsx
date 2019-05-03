import React from "react";
import ReactDOM from "react-dom";
import Preview from "./Preview.jsx";
import TextArea from "./TextArea.jsx";
import Downloader from "./downloader";
import template from "./sui_image.svg";
import "./index.sass";

class Wrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "ラッパーに善人はいない"
    };
    this.bgImage = new Image();
    this.bgImage.src = template;

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  _download() {
    const svg = document.getElementById("svg-preview");
    if (!window.confirm("ダウンロードしますか?")) return;

    Downloader.svg(svg, 700, 470, this.bgImage);
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
          template={template}
          handleChange={this.handleChange}
        />
        <button onClick={this._download.bind(this)}>ダウンロードする</button>
      </div>
    );
  }
}

ReactDOM.render(<Wrapper />, document.getElementById("root"));
