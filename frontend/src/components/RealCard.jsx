import React from "react";
import "../styles/RealCard.scss";

export default function RealCard({ real }) {
  console.log("real", real);

  return (
    <div className="realCard" onClick={() => console.log("boloss")}>
      <span>{real.titre}</span>

      {real.medias.length > 0 && (
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
            real.medias[0]?.path
          }`}
          alt={real.medias[0]?.path}
          className="mediaImg"
          draggable={false}
        />
      )}
    </div>
  );
}
