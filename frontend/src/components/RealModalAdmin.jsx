import React, { useState, useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { toast } from "react-toastify";
import userAPI from "../services/userAPI";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "../styles/RealModalAdmin.scss";
import bin from "../assets/bin.png";

export default function RealModalAdmin({
  real,
  setModalReal,
  tagList,
  setReals,
}) {
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

  const updateReal = async () => {
    try {
      const answer = (
        await userAPI.put(`/superReal/${real.id}`, {
          titre,
          link,
          description,
          tags,
        })
      ).data;

      setReals((await userAPI.get("/superReal")).data);

      toast.success("Mise à jour OK");
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de la mise à jour");
    }
  };

  const createReal = async () => {
    try {
      const answer = (
        await userAPI.post(`/superReal`, {
          titre,
          link,
          description,
          tags,
        })
      ).data;

      const updatedReals = (await userAPI.get("/superReal")).data;

      setReals(updatedReals);
      setModalReal(updatedReals.filter((real) => real.id === answer.id)[0]);

      toast.success("Mise à jour OK");
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de la mise à jour");
    }
  };
  const deleteReal = async () => {
    await userAPI.delete(`/superReal/${real.split("_")[1]}`);
    setReals((await userAPI.get("/superReal")).data);
    setModalReal(false);
  };

  const deleteMedia = async (mediaId) => {
    try {
      await userAPI.delete(`/media/${mediaId}`);
      toast.success("Mise à jour OK");
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de la mise à jour");
    }
  };

  const postMedia = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", photo[0]);
      formData.append("real_id", real.id);

      const answer = (
        await userAPI.post(`/media`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
      ).data;

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
            {real !== "new" && (
              <>
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
