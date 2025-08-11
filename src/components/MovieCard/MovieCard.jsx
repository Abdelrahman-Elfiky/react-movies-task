import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`} className={styles.movieCardLink}>
      <div className={styles.movieCard}>
        <h3>{movie.title}</h3>
      </div>
    </Link>
  );
}
