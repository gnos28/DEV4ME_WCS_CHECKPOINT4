import React, { useState } from "react";
import "../styles/MediaModal.scss";

export default function MediaModal({ media, setModalMedia }) {
  console.log("MediaModal", media);

  return (
    <div
      className="MediaModal-background"
      onClick={(e) => {
        setModalMedia(false);
      }}
    >
      <div
        className="MediaModal-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${media.path}`}
          alt="slider img 1"
          draggable={false}
          onClick={() => openMediaModal(media)}
        />
      </div>
    </div>
  );
}
