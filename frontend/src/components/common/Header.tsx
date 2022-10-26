import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "text-red-500" : undefined)}
        >
          Places
        </NavLink>
        <NavLink
          to="/place/add"
          className={({ isActive }) => (isActive ? "text-red-500" : undefined)}
        >
          Add Place
        </NavLink>
        <NavLink
          to="/mypage"
          className={({ isActive }) => (isActive ? "text-red-500" : undefined)}
        >
          My
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
