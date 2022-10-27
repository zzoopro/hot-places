import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {}

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="max-w-2xl w-full mx-auto border min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
