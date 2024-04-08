import "./sidebarTab.css";

import sidebarTabArray from "./index.js";

function SidebarTabs() {
  return (
    <>
      <div className="sidebar-tab-container">
        <ul>
          {sidebarTabArray.map(
            ({ id, sidebarTabText, sidebarTabImage, imageAlt, active }) => {
              return (
                <li key={id} className={`list-items ${active}`}>
                  <figure className="sidebar-tab-icons">
                    <img src={`${sidebarTabImage}`} alt={`${imageAlt}`} />
                  </figure>
                  <h2 className="sidebar-tab-text">{sidebarTabText}</h2>
                </li>
              );
            }
          )}
        </ul>
      </div>
      <div className="sidebar-bottom-tab">
        <ul>
          <li className={`list-items`}>
            <figure className="sidebar-tab-icons">
              <img
                src="./Iconex/Light/Settings.png"
                alt="sidebat_bottom_tab_setting.png"
              />
            </figure>
            <h2 className="sidebar-tab-text">Settings</h2>
          </li>
          <li className={`list-items`}>
            <figure className="sidebar-tab-icons">
              <img
                src="./Iconex/Light/Logout.png"
                alt="sidebat_bottom_tab_logout.png"
              />
            </figure>
            <h2 className="sidebar-tab-text">Logout</h2>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SidebarTabs;
