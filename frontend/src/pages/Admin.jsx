import React, { useState, useEffect } from "react";
import RealCardAdmin from "../components/RealCardAdmin";
import RealModalAdmin from "../components/RealModalAdmin";
import userAPI from "../services/userAPI";
import "../styles/Admin.scss";
import add from "../assets/add.webp";

export default function Admin() {
  const [reals, setReals] = useState([]);
  const [tags, setTags] = useState([]);
  const [modalReal, setModalReal] = useState(false);

  const getReal = async () => {
    setReals((await userAPI.get("/superReal")).data);
    setTags((await userAPI.get("/tag")).data);
  };

  useEffect(() => {
    getReal();
  }, []);

  return (
    <div className="adminPanel">
      <h2>Admin panel</h2>
      <h3>Liste des réalisations</h3>
      {reals.length &&
        reals.map((real) => (
          <RealCardAdmin
            key={real.id}
            real={real}
            setModalReal={setModalReal}
          />
        ))}
      <img
        className="admin-addIcon"
        src={add}
        alt="add"
        draggable={false}
        onClick={() => setModalReal("new")}
      />
      {modalReal && (
        <RealModalAdmin
          real={modalReal}
          setModalReal={setModalReal}
          tagList={tags}
          setReals={setReals}
        />
      )}{" "}
    </div>
  );
}
