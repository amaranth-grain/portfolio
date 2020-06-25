import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import NavigationBar from "./components/ui/layout/NavigationBar";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Redirect from "./components/config/Redirect";
import Footer from "./components/ui/layout/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
					<Route
            path="/github"
            render={(props) => <Redirect {...props} url="https://github.com/amaranth-grain" />}
          />
					<Route
            path="/handypark"
            render={(props) => <Redirect {...props} url="https://github.com/amaranth-grain/HandyPark" />}
          />
					<Route
            path="/iwall"
            render={(props) => <Redirect {...props} url="https://github.com/amaranth-grain/iWall" />}
          />
					<Route
            path="/kb"
            render={(props) => <Redirect {...props} url="https://github.com/amaranth-grain/kbase" />}
          />
					<Route
            path="/linkedin"
            render={(props) => <Redirect {...props} url="https://www.linkedin.com/in/christy-yau/" />}
          />
					<Route
            path="/medikey"
            render={(props) => <Redirect {...props} url="https://github.com/amaranth-grain/MediKey" />}
          />
					<Route
            path="/garment"
            render={(props) => <Redirect {...props} url="https://github.com/amaranth-grain/Python-OOP-Projects/tree/master/Assignments/Assignment%204" />}
          />
					<Route
            path="/one-der"
            render={(props) => <Redirect {...props} url="https://github.com/amaranth-grain/Python-OOP-Projects/blob/master/Assignments/Assignment%202/" />}
          />
					<Route
            path="/pokedex"
            render={(props) => <Redirect {...props} url="https://github.com/amaranth-grain/Python-OOP-Projects/tree/master/Assignments/Assignment%205" />}
          />
					<Route
            path="/shop"
            render={(props) => <Redirect {...props} url="https://christy-react-store.netlify.com/" />}
          />
					<Route
            path="/splash"
            render={(props) => <Redirect {...props} url="https://github.com/amaranth-grain/Splash-Works" />}
          />	
					<Route
            path="/portfolio"
            render={(props) => <Redirect {...props} url="https://github.com/amaranth-grain/portfolio" />}
          />
					<Route
            path="/pokedex-app"
            render={(props) => <Redirect {...props} url="https://pokedex-amaranthgrain.herokuapp.com/home.html" />}
          />
					<Route
            path="/kb-demo"
            render={(props) => <Redirect {...props} url="https://s-knowledge-base.herokuapp.com/login" />}
          />
        </Switch>
				<Footer />
      </BrowserRouter>
    );
  }
}

export default App;
