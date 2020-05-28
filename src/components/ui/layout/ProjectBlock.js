import React, { Component } from "react";

class ProjectBlock extends Component {
  render() {
		const { title } = this.props;
    return (
      <div className="my-5">
        <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
          <h5 className="content-title">{title}</h5>

          <hr />
        </div>
      </div>
    );
  }
}

export default ProjectBlock;
