import React from "react";
import "./pageview.css";

import { periods } from "./index.js";
import Chart from "./Chart.jsx";

function Pageviews() {
  return (
    <div className="pageview-main">
      <div className="pageview-dropdown-period">
        <div className="pageview-dropdown">
          <h3>Pageview</h3>
          <figure className="ms-1">
            <img src="./pageviews/Arrow.png" alt="" />
          </figure>
        </div>
        <div className="flex justify-center items-center">
          <div className="pageview-period">
            {periods.map(({ id, text, width }) => (
              <React.Fragment key={id}>
                <div className="pageview-period-text">
                  <p style={{ width: width }}>{text}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="select-period flex items-center">
            <p>Select</p>
            <figure className="ms-1">
              <img src="./pageviews/Arrow.png" alt="" />
            </figure>
          </div>
        </div>
      </div>

      <Chart />
    </div>
  );
}

export default Pageviews;
