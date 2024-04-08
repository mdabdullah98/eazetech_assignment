import SidebarTabs from "./SidebarTabs";
import "./sidebar.css";

function Sidebar() {
  return (
    <>
      <nav className="sidebar">
        <div className="sidebar-inner">
          <div className="w-full flex justify-end sidebar-left-cirle">
            <figure>
              <img src="./Iconex/Light/Left-circle.png" alt="" />
            </figure>
          </div>
          <div className="navbar-brand flex items-center">
            <figure className="brand-logo  ">
              <img src="./Iconex/Light/Box-3.png" alt="brand-logo" />
            </figure>
            <h1 className="brand-name">Catalix</h1>
          </div>

          <SidebarTabs />
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
