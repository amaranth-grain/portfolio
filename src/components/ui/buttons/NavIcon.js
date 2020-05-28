import React, { Component } from "react";

class NavIcon extends Component {
  render() {
    const { url, idClass, fa } = this.props;
    return (
      <a href={url} className="plain-dark-link underline-blue">
        <div className="" id={idClass}>
          <i className={`${fa}`}></i>
        </div>
      </a>
    );
  }
}

export default NavIcon;
