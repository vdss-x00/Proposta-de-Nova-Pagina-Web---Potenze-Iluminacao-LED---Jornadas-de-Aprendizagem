import { Outlet } from "react-router-dom";
import Header from "../componentes/Header.jsx";
import Footer from "../componentes/Footer.jsx";

function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-zinc-100 pt-24 dark:bg-[#303030]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Layout;
