import React, { useState, useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { toast } from "react-toastify";
import userAPI from "../services/userAPI";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "../styles/RealModalAdmin.scss";
import bin from "../assets/bin.png";

export default function RealModalAdmin({ real, setModalReal, tagList }) {
  const [titre, setTitre] = useState(
    typeof real === "string" ? "" : real.titre
  );
  const [link, setLink] = useState(typeof real === "string" ? "" : real.link);
  const [description, setDescription] = useState(
    typeof real === "string" ? "" : real.description
  );
  const [tags, setTags] = useState(typeof real === "string" ? [] : real.tags);
  const [medias, setMedias] = useState(
    typeof real === "string" ? [] : real.medias
  );
  const [photo, setPhoto] = useState("");

  console.log(real);

  const updateReal = () => {};
  const createReal = () => {};
  const deleteReal = () => {};
  const deleteMedia = () => {};

  const postMedia = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", photo[0]);
    formData.append("real_id", real.id);

    try {
      const answer = (
        await userAPI.post(`/media`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
      ).data;

      console.log("answer", answer);

      setMedias([
        ...medias,
        {
          id: answer.id,
          path: answer.path,
          real_id: parseInt(answer.real_id, 10),
        },
      ]);
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de l'upload du média");
    }
  };

  useEffect(() => {
    console.log("photo", photo);
    console.log("real", real);
    console.log("medias", medias);
  });

  return (
    <div
      className="realModalAdmin-background"
      onClick={(e) => {
        setModalReal(false);
      }}
    >
      <div
        className={`realModalAdmin-modal ${
          typeof real === "string" && real.includes("delete") && "smallModal"
        }`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>
          {typeof real === "string"
            ? real === "new"
              ? "Creer"
              : "Effacer"
            : "Editer"}{" "}
          realisation
        </h2>

        {typeof real === "string" && real !== "new" ? (
          <div>
            Souhaitez vous rééllement effacer la réalisation n°
            {real.split("_")[1]} ?
          </div>
        ) : (
          <>
            <div>
              <label htmlFor="titre">Titre</label>
              <input
                type="text"
                id="titre"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="link">Lien</label>
              <input
                type="text"
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="link">Description</label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>

            <span>Tags</span>

            <Typeahead
              multiple
              id={`tags_${real.id}`}
              placeholder="Sélectionnez un tag"
              onChange={(text) => {
                console.log("onChange", text);

                setTags(
                  text.map((txt) => tagList.filter((tag) => tag.nom === txt)[0])
                );
              }}
              options={tagList.map((tag) => tag.nom)}
              selected={tags.map((tag) => tag.nom)}
            />

            <div className="tags-container">
              {tags &&
                tags.map((tag) => (
                  <img
                    key={tag.nom}
                    src={`${
                      import.meta.env.VITE_FRONTEND_URL
                    }/src/assets/tags/${tag.picture_path}`}
                  />
                ))}
            </div>

            <span>Médias</span>

            <form onSubmit={postMedia}>
              <input
                type="file"
                name="picture_name"
                onChange={(e) => setPhoto(e.target.files)}
              />
              {photo && (
                <button type="submit" className="uploadMedia">
                  Uploader
                </button>
              )}
            </form>

            <div className="mediaContainer">
              {medias &&
                medias.map((media) => (
                  <div key={media.id} className="mediaCard">
                    <img
                      src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
                        media.path
                      }`}
                      alt={media.path}
                      className="mediaImg"
                      draggable={false}
                    />
                    <img
                      src={bin}
                      alt="delete"
                      draggable={false}
                      onClick={() => deleteMedia(media.id)}
                      className="mediaBin"
                    />
                  </div>
                ))}
            </div>
          </>
        )}

        <div className="buttonContainer">
          <button onClick={() => setModalReal(false)}>Annuler</button>
          <button
            onClick={
              typeof real === "string"
                ? real === "new"
                  ? createReal
                  : deleteReal
                : updateReal
            }
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );
}
