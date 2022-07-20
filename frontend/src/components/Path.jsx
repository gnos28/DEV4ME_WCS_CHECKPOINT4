import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import pathContext from "../contexts/pathContext";
import "../styles/Path.scss";

export default function Path() {
  const { paths, setPaths } = useContext(pathContext);

  return (
    <div className="path">
      <h1>
        <NavLink to="/" onClick={() => setPaths([])}>
          dev4me
        </NavLink>
      </h1>

      {paths.length > 0 &&
        paths.map((path) => (
          <span key={path.route}>
            &gt;{" "}
            <NavLink to={path.route} onClick={() => setPaths([paths[0]])}>
              {path.display}
            </NavLink>
          </span>
        ))}
    </div>
  );
}
