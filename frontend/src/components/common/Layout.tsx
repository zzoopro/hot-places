import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {}

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="max-w-2xl w-full mx-auto border">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
