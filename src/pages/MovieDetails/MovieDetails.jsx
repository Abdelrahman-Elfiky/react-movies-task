import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import movies from "../../data/movies";
import styles from "./MovieDetails.module.css";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <p className={styles.notFound}>Movie not found.</p>;
  }

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.detailsCard}>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>

        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
}
