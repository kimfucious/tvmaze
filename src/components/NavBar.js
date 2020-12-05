/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch } from "react-redux";

export const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a
          className="navbar-brand"
          href="#"
          onClick={() => {
            dispatch({ type: "RESET_SHOW_STATE" });
          }}
        >
          Show Finder
        </a>
      </div>
    </nav>
  );
};
