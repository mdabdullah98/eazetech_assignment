import "./user.css";
import userIcon from "./index.js";
import React from "react";

function User() {
  return (
    <div className="user-settings">
      {userIcon.map(({ id, iconImage, dot, alt }) => {
        return (
          <React.Fragment key={id}>
            <div className={`user-icon`}>
              <div className="flex justify-center items-center">
                {dot && (
                  <img
                    src="./UserIcon/Ellipse-50.png"
                    alt={alt}
                    className="ellipse-dot-icon"
                  />
                )}
                <img src={`${iconImage}`} alt={`${alt}`} />
              </div>
            </div>
          </React.Fragment>
        );
      })}

      <figure className="ellipse-icon">
        <img
          src="./UserIcon/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
          alt="ellipse-49.png"
        />
      </figure>
    </div>
  );
}

export default User;
