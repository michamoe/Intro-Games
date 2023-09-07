import { NavLink } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <nav>
      <ul className="links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/articles">Articles</NavLink>
        </li>
        <li>
          <NavLink to="/games">Games</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
