import React from "react";
import movies from "../../data/movies";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./Movies.module.css";

export default function Movies() {
  return (
    <div className={styles.moviesContainer}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
