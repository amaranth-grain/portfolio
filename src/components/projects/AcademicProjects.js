import React, { Component } from 'react';
import CardTile from "../ui/layout/CardTile";
import HandyParkImg from "../../img/handypark.jpg";
import PokedexImg from "../../img/pokemon.png";
import KbaseImg from "../../img/kbase.png";
import TwitterBotImg from "../../img/twitterbot.png";

class AcademicProjects extends Component {
	render() {
		return (
      <div className="container my-5">
        <h5 className="content-title my-4">—— Academic ——</h5>
        <div className="row">
          <CardTile
            img={HandyParkImg}
            title="Disability Parking App"
            hasDemo={false}
            hasCode={true}
            demoLink=""
            codeLink="/handypark"
            text="Integrated Google APIs with Android mobile app to display disability parking within x radius of destination location."
          />
					<CardTile
            img={TwitterBotImg}
            title="Celebrity Twitterbot"
            hasDemo={false}
            hasCode={true}
            demoLink=""
            codeLink="https://github.com/amaranth-grain/aws-rekognition-twitterbot"
            text="Used Lambda to automatically analyse S3 Bucket hosted photos and tweet celebrities based on AWS Rekognition API."
          />
					<CardTile
            img={PokedexImg}
            title="Pokedex Simulator"
            hasDemo={false}
            hasCode={true}
            demoLink=""
            codeLink="/pokedex"
            text="Designed and developed OOP system to simulate a Pokedex using chain of responsibility and SOLID principles."
          />
					<CardTile
            img={KbaseImg}
            title="LinkedIn-esque Web App"
            hasDemo={true}
            hasCode={true}
            demoLink="https://s-knowledge-base.herokuapp.com/login"
            codeLink="/kb"
            text="Completed controller logic and front-end templates. Used Node/Express, SQL, and Handlebars."
          />
        </div>
      </div>
    );
	}
}

export default AcademicProjects;
