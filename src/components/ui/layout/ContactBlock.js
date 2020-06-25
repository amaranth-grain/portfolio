import React, { Component } from "react";
import NavIcon from "../buttons/NavIcon";

class ContactBlock extends Component {
  render() {
    return (
      <div className="my-4">
        <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
				{/* <h5 className="content-title">Links</h5> */}
          <div className="row mx-auto text-center">
            <div className="col col-4">
              <NavIcon
                fa="fab fa-github fa-2x"
                url="https://github.com/amaranth-grain"
              />
            </div>
            <div className="col col-4">
              <NavIcon
                fa="fab fa-linkedin fa-2x"
                url="https://www.linkedin.com/in/christy-yau/"
              />
            </div>
            <div className="col col-4">
              <NavIcon
                fa="fas fa-envelope fa-2x"
                url="https://aemail.com/ZXg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactBlock;
