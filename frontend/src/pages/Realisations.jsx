import React, { useState, useEffect, useContext } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import pathContext from "../contexts/pathContext";
import userAPI from "../services/userAPI";
import RealCard from "../components/RealCard";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "../styles/Realisations.scss";

export default function Realisations() {
  const [reals, setReals] = useState([]);
  const [alltags, setAlltags] = useState([]);
  const [tagList, setTagList] = useState([]);
  const { paths, setPaths } = useContext(pathContext);

  const getReal = async () => {
    setReals((await userAPI.get("/superReal")).data);
    setAlltags((await userAPI.get("/tag")).data);
  };

  useEffect(() => {
    getReal();

    if (!paths.length || paths[0].display !== "realisations")
      setPaths([{ display: "realisations", route: "/real" }]);
  }, []);

  return (
    <div className="realisations">
      <Typeahead
        multiple
        id="tags"
        placeholder="Sélectionnez un tag"
        onChange={(text) => {
          setTagList(
            text.map((txt) => alltags.filter((tag) => tag.nom === txt)[0])
          );
        }}
        options={alltags.map((tag) => tag.nom)}
        selected={tagList.map((tag) => tag.nom)}
      />
      <div className="realCard-container">
        {reals.length &&
          reals
            .filter((real) => {
              let keepIt = false;

              if (!tagList.length) keepIt = true;
              real.tags
                .map((tag) => tag.nom)
                .forEach((tag) => {
                  if (tagList.map((t) => t.nom).includes(tag)) keepIt = true;
                });

              return keepIt;
            })
            .map((real, realIndex) => (
              <RealCard key={real.id} index={realIndex} real={real} />
            ))}
      </div>
    </div>
  );
}
