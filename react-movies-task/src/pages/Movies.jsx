import { Link } from "react-router-dom";
import movies from "../data/movies";
import "./Movies.css";

function Movies() {
  return (
    <div className="page">
      <h2>Movies List</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-card-link">
            <div className="movie-card">
              <h3>{movie.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Movies;
