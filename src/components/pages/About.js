import React, { Component } from "react";
import InfoBlock from "../ui/layout/InfoBlock";
import TextBlock from "../ui/layout/TextBlock";
import Avatar from "../../img/avatar.png";

class About extends Component {
  render() {
    return (
      <div className="text-center">
        <InfoBlock
          img={Avatar}
          displayTyping={true}
          title="Hi, I'm Christy."
          tagline1="Software Developer"
          tagline2="Vancouver, BC"
        />
        <TextBlock title="Hey." />
      </div>
    );
  }
}

export default About;

