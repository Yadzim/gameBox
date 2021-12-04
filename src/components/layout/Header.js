import { NavLink } from "react-router-dom";
import { IoGridOutline } from "react-icons/io5";
// styles
import styles from "./Header.module.css";

const Header = () => {
  const activeStyle = {
    color: "orange",
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
          <IoGridOutline className={styles.logo} style={{ color: "orange" }} />
          <span style={{ marginLeft: 10, color: "orange", fontSize: 24 }}>
            GameBox
          </span>
        </NavLink>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="popular"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="favorites"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
