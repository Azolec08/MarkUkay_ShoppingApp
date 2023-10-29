import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import ScrollableTabsButtonForce from "./Components/Tabs";

function RootLayout() {
  return (
    <>
      <Navbar />
      <SideBar />
      <Outlet />
      <div className="sticky bottom-0 bg-center">
        <ScrollableTabsButtonForce />
      </div>
    </>
  );
}

export default RootLayout;
