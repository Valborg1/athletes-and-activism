import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { apiAuth } from "./utils/LoginApi";
import { useAuth } from "./utils/context";
import { LoginNavbar, PrivateRoute } from "./components";
import Athlete from "./pages/Athletes";
import Causes from "./pages/Causes";
import Charities from "./pages/Charities";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NoMatchLog from "./pages/NoMatchLog";
import Register from "./pages/Register";


// import Nav from "./components/Nav";
console.log(useAuth)
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
    <LoginNavbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/athletes" component={Athlete} />
          <Route exact path="/causes" component={Causes} />
          <Route exact path="/charities" component={Charities} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route component={NoMatchLog} />
      </Switch>
    </Router>

  );
}

export default App;
