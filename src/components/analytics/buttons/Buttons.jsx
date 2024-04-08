import "./button.css";

import buttonsArray from "./index.js";

function Buttons() {
  return (
    <div className="w-full flex justify-evenly items-end flex-wrap buttons-group">
      {buttonsArray.map(({ id, buttonText, icon }) => {
        return (
          <button key={id} className={`${icon ? "active" : ""}`}>
            {icon && (
              <span>
                <img src="./Iconex/Light/icon.png" alt="icon.png" />
              </span>
            )}
            <a href="#">{buttonText}</a>
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;
