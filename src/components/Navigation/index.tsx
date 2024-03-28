import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-light w-100">
      <div className="container">
        <Link className="navbar-brand " to="/">
          Warhammer 9th Edition - Legacy
        </Link>
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
        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item hover-action ">
              <Link className="nav-link  active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item hover-action ">
              <Link className="nav-link " to="/Downloads">
                FAQ
              </Link>
            </li>
            <li className="nav-item hover-action ">
              <Link className="nav-link " to="/Retrospective">
                Retrospective
              </Link>
            </li>
            <li className="nav-item hover-action ">
              <Link className="nav-link " to="/downloads">
                Missions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
