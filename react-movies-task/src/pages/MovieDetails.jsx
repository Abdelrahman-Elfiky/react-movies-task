import { useParams, Link } from "react-router-dom";
import movies from "../data/movies";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return (
    <div className="page">
      <h2>Movie not found</h2>
      <Link to="/movies" className="back-btn">⬅ Back to Movies</Link>
    </div>
  );

  return (
    <div className="page">
      <div className="details-card">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <Link to="/movies" className="back-btn">Back to Movies</Link>
      </div>
    </div>
  );
}

export default MovieDetails;
