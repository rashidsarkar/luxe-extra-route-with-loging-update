import { Outlet } from "react-router-dom";

import Footer from "../Pages/Footer/Footer";
import NavBar from "../Components/Navbar/NavBar";
import GotoTop from "../Components/GotoTop/GotoTop";

function MainLayout() {
  return (
    <div data-theme="wireframe" className="mx-auto overflow-x-hidden">
      <NavBar />
      <div className="mx-auto max-w-7xl bg-white rounded-lg shadow p-6">
        <Outlet />
      </div>
      <Footer />
      <GotoTop />
    </div>
  );
}

export default MainLayout;
