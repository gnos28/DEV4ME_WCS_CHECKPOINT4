import React, { useEffect, useState, useContext } from "react";
import MediaModal from "../components/MediaModal";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pathContext from "../contexts/pathContext";
import userAPI from "../services/userAPI";
import "../styles/Real.scss";
import link from "../assets/link.svg";

export default function Real() {
  const [real, setReal] = useState({});
  const { id } = useParams();
  const { paths, setPaths } = useContext(pathContext);
  const [modalMedia, setModalMedia] = useState(false);

  const initReal = async () => {
    const [realReq] = (await userAPI.get(`/superReal/${id}`)).data;
    setReal(realReq);

    if (
      !paths.length ||
      paths[0].display !== "realisations" ||
      paths.length < 2
    )
      setPaths([
        { display: "realisations", route: "/real" },
        { display: realReq.titre, route: `/real/${id}` },
      ]);
  };

  useEffect(() => {
    initReal();
  }, []);

  return (
    <div className="real">
      <h2>{real.titre}</h2>
      <div className="real-container">
        <div className="text-container">
          {real.tags && (
            <div className="tags-container">
              {real.tags.map((tag) => (
                <img
                  key={tag.nom}
                  src={`${import.meta.env.VITE_FRONTEND_URL}/src/assets/tags/${
                    tag.picture_path
                  }`}
                  draggable={false}
                />
              ))}
            </div>
          )}
          <div>
            {real.description &&
              real.description
                .split("\n")
                .map((line) => <p key={line}>{line}</p>)}
          </div>
          {real.link && (
            <a href={real.link} target="_blank">
              {real.link}
              <img
                src={link}
                alt="lien"
                draggable={false}
                className="mediaBin"
              />
            </a>
          )}
        </div>
        <div className="carousel-container">
          <div>
            <Carousel autoPlay stopOnHover infiniteLoop interval={3500}>
              {real.medias &&
                real.medias.map((media) => (
                  <div
                    key={media.id}
                    className="slide"
                    onClick={() => {
                      console.log("boloss");
                      setModalMedia(media);
                    }}
                  >
                    <img
                      src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
                        media.path
                      }`}
                      alt={media.path}
                      draggable={false}
                    />
                  </div>
                ))}
            </Carousel>
          </div>
        </div>
      </div>
      {modalMedia && (
        <MediaModal media={modalMedia} setModalMedia={setModalMedia} />
      )}
    </div>
  );
}
