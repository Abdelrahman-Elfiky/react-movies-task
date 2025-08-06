import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/movies" className="nav-link">Movies</Link>
    </nav>
  );
}

export default Navbar;