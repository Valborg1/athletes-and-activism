import React from "react";
import { NavLink, Link } from "react-router-dom";
import { apiAuth } from "../../utils/LoginApi";
import { useAuth } from "../../utils/context";
import { Container } from "../Container";

export default function Nav() {
  const { auth, setAuth } = useAuth();

  function _logout() {
    apiAuth.logout();
    setAuth(null);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Container>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <NavLink className="nav-link" exact to="/">
                HOME | 
            </NavLink>
            <NavLink className="nav-link" exact to="/search-athlete">
                SEARCH | 
            </NavLink>
            <NavLink className="nav-link" exact to="/athletes">
                ATHLETES | 
            </NavLink>
            <NavLink className="nav-link" exact to="/charities">
                CHARITIES | 
            </NavLink>
            <NavLink className="nav-link" exact to="/causes">
                CAUSES | 
            </NavLink>
            {auth ? (
              <>
              <NavLink className="nav-link" exact to="/profile">
                PROFILE
              </NavLink>
              <NavLink className="nav-link" exact to="/profile" onClick={_logout}>
                LOGOUT
              </NavLink>
              </>
            ) : (
              <>
                {" "}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    LOGIN
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
