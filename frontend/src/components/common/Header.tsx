import { NavLink } from "react-router-dom";

interface HaederProps {
  isNav: boolean;
}

const Nav = () => {
  return (
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
  );
};

const Header = ({ isNav }: HaederProps) => {
  return <header>{isNav ? <Nav></Nav> : <></>}</header>;
};

export default Header;
