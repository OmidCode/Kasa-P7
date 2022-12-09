import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Header.scss";

import Logo from "../Logo/Logo";

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <Logo fill="#FF6060" className="logo" />
      </Link>

      <nav>
        <ul className="nav-links">
          <NavLink
            to="/"
            end
            className={(link) => (link.isActive ? "nav-links--active" : null)}
          >
            <li>Accueil</li>
          </NavLink>

          <NavLink
            to="/about"
            className={(link) => (link.isActive ? "nav-links--active" : null)}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
