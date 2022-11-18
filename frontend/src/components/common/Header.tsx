import { NavLink } from "react-router-dom";

interface HaederProps {
  isNav: boolean;
}

const Nav = () => {
  return (
    <nav className="text-white flex space-x-4">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "text-teal-400" : undefined)}
      >
        피드
      </NavLink>
      <NavLink
        to="/places/upload"
        className={({ isActive }) => (isActive ? "text-teal-400" : undefined)}
      >
        업로드
      </NavLink>
      <NavLink
        to="/mypage"
        className={({ isActive }) => (isActive ? "text-teal-400" : undefined)}
      >
        마이페이지
      </NavLink>
    </nav>
  );
};

const Header = ({ isNav }: HaederProps) => {
  return (
    <header className="flex items-center w-full h-14 bg-slate-700 px-4">
      {isNav ? <Nav /> : <></>}
    </header>
  );
};

export default Header;
