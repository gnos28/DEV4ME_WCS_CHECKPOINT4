import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RealCard.scss";

export default function RealCard({ real, index }) {
  const navigate = useNavigate();

  return (
    <div
      className="realCard"
      onClick={() => navigate(`/real/${real.id}`, { replace: true })}
      style={{ animation: `cardEnter 0.4s ease-out ${index / 7}s both` }}
    >
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
