import { Link } from "react-router-dom";
import "./Navbar.css"; // optional — only if you later move navbar-specific styles here

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">📰 News Aggregator</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

