import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { apiAuth } from "./utils/LoginApi";
import { useAuth } from "./utils/context";
import { LoginNavbar, PrivateRoute } from "./components";
import Nav from "./components/Nav"
import Athlete from "./pages/Athletes";
import Causes from "./pages/Causes";
import SingleCause from "./pages/SingleCause";
import Charities from "./pages/Charities";
import SingleCharity from "./pages/SingleCharity";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatchLog from "./pages/NoMatchLog";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AddAthlete from "./pages/AddAthlete";
import AthleteSearch from "./pages/AthleteSearch";

function App() {

  const [state, setState] = useState({
    isReady: false,
  });
  const { auth, setAuth } = useAuth();
console.log(auth)
  useEffect(() => {
    const res = apiAuth.getAuth();
    if (res) {
      setAuth({ ...auth, ...res });
    }
    setState({ ...state, isReady: true });
  }, []);

  if (!state.isReady) {
    return null;
  }

  return (
    <Router>
    <Nav />
      <Switch>
      <Route exact path={["/",]} component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/athletes" component={Athlete} />
          <Route exact path="/add-athlete/:id" component={AddAthlete} />
          <Route exact path="/causes" component={Causes} />
          <Route exact path="/causes/:id" component={SingleCause} />
          <Route exact path="/charities" component={Charities} />
          <Route exact path="/charities/:id" component={SingleCharity} />
          <Route exact path="/search-athlete" component={AthleteSearch} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route component={NoMatchLog} />
      </Switch>
    </Router>

  );
}

export default App;

