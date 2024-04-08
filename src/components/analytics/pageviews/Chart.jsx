import React from "react";

import "./chart.css";
import { pagereviewData, pageStatistic } from "./index.js";

function Chart() {
  return (
    <>
      <div className="box-outer">
        {pageStatistic.map(({ id, forum, forumCount, chart }) => {
          return (
            <div key={id} className="box-outer-content">
              <p>{forum}</p>
              {forumCount && <p>{forumCount}</p>}
              {chart && <img src={`${chart}`} alt={`${chart}`}></img>}
            </div>
          );
        })}
      </div>
      <div className="box-content">
        {pagereviewData.map(
          ({
            id,
            title,
            uniquePagreview,
            pageReview_data,
            average_ontime,
            extrance,
            exit,
            pageValue,
          }) => {
            return (
              <React.Fragment key={id}>
                <div className="box-content-inner">
                  <h5 className="title">{title}</h5>
                  <divc>{pageReview_data}</divc>
                  <div className="text-center">{uniquePagreview}</div>
                  <div>{average_ontime}</div>
                  <div>{extrance}</div>
                  <div>{exit}</div>
                  <div>{pageValue}</div>
                </div>
              </React.Fragment>
            );
          }
        )}
      </div>
    </>
  );
}

export default Chart;
