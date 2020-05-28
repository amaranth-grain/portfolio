import React, { Component } from "react";

class InfoBlock extends Component {
  render() {
    const { title, tagline1, tagline2, img, displayTyping } = this.props;
    return (
      <div className="d-inline-block infoblock">
        {img && <img className="avatar" src={img} alt="picture of Christy" />}
        <div id="sidebar-name">
          <h5 className="sidebar-title">{title}</h5>
        </div>
        {displayTyping && (
          <div className="d-block my-2">
            <h5 className="sidebar-title d-inline" id="typed-name"></h5>
          </div>
        )}
        <h5 className="sidebar-tagline">{tagline1}</h5>
        <h5 className="sidebar-tagline">{tagline2}</h5>
      </div>
    );
  }
}

export default InfoBlock;
