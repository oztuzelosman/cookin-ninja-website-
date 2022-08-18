import { Link } from "react-router-dom";

// styles
import "./NavBar.css";
import Searchbar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
