import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

interface LayoutProps {
  children:React.ReactElement
}

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
