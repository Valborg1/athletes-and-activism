import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

export default function index() {
    return (
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                <Link to="/home"
                        className={
                            window.location.pathname === "/home"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        HOME
                    </Link>
                    <Link
                        to="/athletes"
                        className={
                            window.location.pathname === "/athletes"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        ATHLETES
                    </Link>
                    <Link
                        to="/charities"
                        className={
                            window.location.pathname === "/charities"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        CHARITIES
                    </Link>
                    <Link to="/causes"
                        className={
                            window.location.pathname === "/causes"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        CAUSES
                    </Link>
                    <Link to="/profile"
                        className={
                            window.location.pathname === "/profile"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        PROFILE
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

