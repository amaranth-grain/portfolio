import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavButton extends Component {
  render() {
		const { fa, name, url } = this.props;
    return (
      <Link to={url || "/"} className="plain-link nav-link nav-menu-link" >
        <div className="">
            <i className={`${fa}`}></i>
            <span>{name}</span>
        </div>
      </Link>
    );
  }
}

export default NavButton;
