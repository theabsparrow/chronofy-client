import { Outlet } from "react-router-dom";
import Navbar from "../component/shared/Navbar";
import Footer from "../component/shared/Footer";

const Layout = () => {
  return (
    <section>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Layout;
