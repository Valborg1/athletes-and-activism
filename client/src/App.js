import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Athlete from "./pages/Athletes";
import Causes from "./pages/Causes";
import Charities from "./pages/Charities";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/athletes" component={Athlete} />
          <Route exact path="/causes" component={Causes} />
          <Route exact path="/charities" component={Charities} />
          <Route exact path="/Profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
