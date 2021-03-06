import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import Athlete from "./pages/Athletes";
import Causes from "./pages/Causes";
import SingleCause from "./pages/SingleCause";
import Charities from "./pages/Charities";
import SingleCharity from "./pages/SingleCharity";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AddAthlete from "./pages/AddAthlete";
import AthleteSearch from "./pages/AthleteSearch";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
    <Nav />
      <div>
      <Route exact path={["/",]} component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/athletes" component={Athlete} />
          <Route exact path="/add-athlete/:id" component={AddAthlete} />
          <Route exact path="/causes" component={Causes} />
          <Route exact path="/causes/:id" component={SingleCause} />
          <Route exact path="/charities" component={Charities} />
          <Route exact path="/charities/:id" component={SingleCharity} />
          <Route exact path="/search-athlete" component={AthleteSearch} />
      </div>
    </Router>

  );
}

export default App;

