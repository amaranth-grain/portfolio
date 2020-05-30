import React, { Component } from "react";
import OrangeButton from "../buttons/OrangeButton";

class TextBlock extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="my-5">
        <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
          <h5 className="content-title text-left">{title}</h5>
          <div className="text-left content-info mt-4">
            <p>I'm a full stack developer & new grad.</p>
            <p>I love working with modern libraries and frameworks like React or Laravel.</p>
            <p>
              I'm passionate about helping women succeed in tech as well. 
							Highlights
              include organising talk panels and coordinating mock interview events as the
              co-executive to BCIT Women in Computing.
            </p>
            <p>I'm also a dog mom, hiker, and tabletop gamer.</p>
						<OrangeButton text="Download Resume" />
          </div>
        </div>
      </div>
    );
  }
}

export default TextBlock;
