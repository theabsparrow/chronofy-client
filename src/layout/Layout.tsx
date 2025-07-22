import { Outlet } from "react-router-dom";
import Navbar from "../component/shared/Navbar";
// import Footer from "../component/shared/Footer";

const Layout = () => {
  return (
    <section>
      <Navbar />
      <main className="min-h-screen px-4 md:px-24">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </section>
  );
};

export default Layout;
