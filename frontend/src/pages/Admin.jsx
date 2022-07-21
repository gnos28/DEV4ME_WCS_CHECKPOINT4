import React, { useState, useEffect } from "react";
import userAPI from "../services/userAPI";
import "../styles/Admin.scss";
import bin from "../assets/bin.png";
import edit from "../assets/edit.png";
import add from "../assets/add.webp";

export default function Admin() {
  const [reals, setReals] = useState([]);

  const getReal = async () => {
    setReals((await userAPI.get("/real")).data);
  };

  const addReal = () => {
    console.log("add");
  };

  const editReal = (id) => {
    console.log(id);
  };

  const deleteReal = (id) => {
    console.log(id);
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
          <div key={real.id} className="admin-realItem">
            <div>
              <span>{real.id}</span>
              <span>{real.titre}</span>
            </div>

            <div>
              <img
                src={edit}
                alt="edit"
                draggable={false}
                onClick={() => editReal(real.id)}
              />
              <img
                src={bin}
                alt="delete"
                draggable={false}
                onClick={() => deleteReal(real.id)}
              />
            </div>
          </div>
        ))}
      <img
        className="admin-addIcon"
        src={add}
        alt="add"
        draggable={false}
        onClick={() => addReal()}
      />
    </div>
  );
}
