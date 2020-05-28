import React, { Component } from "react";
import Avatar from "../../../img/avatar.png";
import NavIcon from "../buttons/NavIcon";

class PlainSidebar extends Component {
  render() {
    return (
      <div class="v-center text-center align-right-lg h-center-md-low">
        <img src={Avatar} className="avatar" alt="picture of Christy" />
        <h6 className="sidebar-title mt-2">Christy Yau</h6>
        <h6 className="sidebar-tagline mt-3">Software Developer</h6>
        <h6 className="sidebar-tagline">Vancouver, BC</h6>
				<div className="row">
					<div className="col col-3 offset-1">
					<NavIcon url="www.github.com" fa="fab fa-github fa-2x" />
					</div>
					<div className="col col-3">
					<NavIcon url="www.github.com" fa="fab fa-linkedin fa-2x" />
					</div>
					<div className="col col-3">
					<NavIcon url="www.github.com" fa="fas fa-envelope fa-2x" />
					</div>
				</div>
      </div>
    );
  }
}

export default PlainSidebar;
