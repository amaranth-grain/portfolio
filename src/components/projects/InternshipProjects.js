import React, { Component } from "react";
import CardTile from "../ui/layout/CardTile";
import MonkiriImg from "../../img/monkiri.png";
import StonemapsImg from "../../img/stonemaps.png";
import DshopImg from "../../img/dshop.png";
import MedikeyImg from "../../img/medikey.png";

class InternshipProjects extends Component {
  render() {
    return (
      <div className="container my-5">
        <h5 className="content-title my-4">—— Internship ——</h5>
        <p className="text-muted mb-4">
        </p>
        <div className="row">
          <CardTile
            img={MonkiriImg}
            title="Financial Literacy App"
            hasDemo={false}
            hasCode={true}
            nameR="Read More"
            demoLink=""
            codeLink="https://monkiri.co/education"
            text="Worked on tracking user analytics, template, & referral tracking features using React Native, Laravel, and SQL."
          />
          <CardTile
            img={MedikeyImg}
            title="Medical Blockchain App"
            hasDemo={false}
            hasCode={true}
            demoLink=""
            codeLink="/medikey"
            text="Prototyped an app that tracks patients' medical information with Solidity smart contracts in Ethereum blockchain."
          />
          <CardTile
            img={StonemapsImg}
            title="Social Geocaching App"
            hasDemo={false}
            hasCode={true}
            nameR="Read More"
            demoLink=""
            codeLink="http://stonemaps.ca/"
            text="Primarily worked with database design, Laravel, PHP, migration files, and controller logic. Also worked with ArcGIS map library."
          />
        </div>
      </div>
    );
  }
}

export default InternshipProjects;
