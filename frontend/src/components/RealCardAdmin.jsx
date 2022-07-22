import React from "react";
import bin from "../assets/bin.png";
import edit from "../assets/edit.png";

export default function RealCardAdmin({ real, setModalReal }) {
  return (
    <div className="admin-realItem">
      <div>
        <span>{real.id}</span>
        <span>{real.titre}</span>
      </div>

      <div>
        <img
          src={edit}
          alt="edit"
          draggable={false}
          onClick={() => setModalReal(real)}
        />
        <img
          src={bin}
          alt="delete"
          draggable={false}
          onClick={() => setModalReal(`delete_${real.id}`)}
        />
      </div>
    </div>
  );
}
