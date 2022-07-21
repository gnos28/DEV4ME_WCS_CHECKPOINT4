import React, { useState, useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import userAPI from "../services/userAPI";
import RealCard from "../components/RealCard";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "../styles/Realisations.scss";

export default function Realisations() {
  const [reals, setReals] = useState([]);
  const [alltags, setAlltags] = useState([]);
  const [tagList, setTagList] = useState([]);

  const getReal = async () => {
    setReals((await userAPI.get("/superReal")).data);
    setAlltags((await userAPI.get("/tag")).data);
  };

  useEffect(() => {
    getReal();
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
          reals.map((real) => <RealCard key={real.id} real={real} />)}
      </div>
    </div>
  );
}
