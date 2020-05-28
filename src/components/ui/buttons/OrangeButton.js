import React, { Component } from "react";
import Resume from "../../../christy_yau_resume.pdf";

class OrangeButton extends Component {
  render() {
    const { text } = this.props;
    return (
      <a href={Resume}>
        <div className="btn btn-info btn-orange my-3 py-2">{text}</div>
      </a>
    );
  }
}

export default OrangeButton;
