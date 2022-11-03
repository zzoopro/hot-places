import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  isNav?: boolean;
}

const Layout = ({ children, isNav = true }: LayoutProps) => {
  return (
    <div className="max-w-2xl w-full mx-auto border min-h-screen">
      <Header isNav={isNav} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
