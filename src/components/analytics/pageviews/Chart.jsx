import React from "react";

import "./chart.css";

function Chart() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" page">
        <p>Page</p>
      </div>

      <div className="box">
        <p>Pageviews</p>
        <p>356,928</p>
        <img src="./pageviews/Chart.png" alt="" />
      </div>

      <div className="box">
        <p>Unique pageviews </p>
        <p>275,588</p>
        <img src="./pageviews/Chart-2.png" alt="" />
      </div>

      <div className="box">
        <p>Avg. time on page </p>
        <p> 00:03:51</p>
        <img src="./pageviews/Chart-3.png" alt="" />
      </div>

      <div className="box">
        <p>Extrances </p>
        <p>315,643 </p>
        <img src="./pageviews/Chart-4.png" alt="" />
      </div>

      <div className="box">
        <p>% Exit </p>
        <p>39,84% </p>
        <img src="./pageviews/Chart-5.png" alt="" />
      </div>

      <div className="box">
        <p>Page value </p>
        <p>$19,983 </p>
        <img src="./pageviews/Chart-6.png" alt="" />
      </div>
    </div>
  );
}

export default Chart;
