import { Outlet } from "react-router-dom";

import Footer from "../Pages/Footer/Footer";
import NavBar from "../Components/Navbar/NavBar";
import GotoTop from "../Components/GotoTop/GotoTop";

function MainLayout() {
  return (
    <div data-theme="wireframe" className="mx-auto overflow-x-hidden max-w-7xl">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      <GotoTop />
    </div>
  );
}

export default MainLayout;
