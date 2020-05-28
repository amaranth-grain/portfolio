import React, { Component } from "react";
import InfoBlock from "../ui/layout/InfoBlock";
import PersonalProjects from "../projects/PersonalProjects";
import ProjectImg from "../../img/code.png";
import InternshipProjects from "../projects/InternshipProjects";
import AcademicProjects from "../projects/AcademicProjects";

class Projects extends Component {
  render() {
    return (
      <div className="text-center">
        <InfoBlock img={ProjectImg} title="Projects" />
				<InternshipProjects />
        <PersonalProjects />
				<AcademicProjects />
        {/* <ProjectBlock title="Personal" />
				<ProjectBlock title="Internship" />
				<ProjectBlock title="Academic" /> */}
      </div>
    );
  }
}

export default Projects;
