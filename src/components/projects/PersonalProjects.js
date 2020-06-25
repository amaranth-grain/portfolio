import React, { Component } from "react";
import CardTile from "../ui/layout/CardTile";
import ShopImg from "../../img/shop.png";
import SiteV01 from "../../img/site-v01.png";
import SiteV02 from "../../img/site-v02.png";
import PokedexAppImg from "../../img/pokedex-app01.png";

class PersonalProjects extends Component {
  render() {
    return (
      <div className="container my-5">
        <h5 className="content-title my-4">—— Personal ——</h5>
        <div className="row">
          <CardTile
            img={ShopImg}
            title="eCommerce Shop"
            hasDemo={true}
            hasCode={true}
            demoLink="/shop"
            codeLink="https://github.com/amaranth-grain/online-store"
            text="Made an online store for a loved one with React, Bootstrap, and JS ES6."
          />
					<CardTile
            img={PokedexAppImg}
            title="Pokedex Web App"
            hasDemo={true}
            hasCode={true}
            demoLink="https://pokedex-amaranthgrain.herokuapp.com/home.html"
            codeLink="https://github.com/amaranth-grain/pokedex-app"
            text="Web app created with TypeScript, Webpack, HTML, Materialize, PokeAPI."
          />
          <CardTile
            img={SiteV01}
            title="Personal Site V1.0"
            hasDemo={false}
            hasCode={true}
            demoLink=""
            codeLink="https://github.com/amaranth-grain/PersonalSite"
            text="Basic site created with HTML, Bootstrap, and a sprinkle of JavaScript."
          />
          <CardTile
            img={SiteV02}
            title="Personal Site V2.0"
            hasDemo={false}
            hasCode={true}
            demoLink=""
            codeLink="/portfolio"
            text="The site you're looking at right now!  Created with React, Bootstrap, and JS ES6."
          />
        </div>
      </div>
    );
  }
}

export default PersonalProjects;
