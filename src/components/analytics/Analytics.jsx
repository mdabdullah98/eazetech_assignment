import "./analytics.css";

import {
  SearchBar,
  User,
  Buttons,
  Quotation,
  CardFrame,
  Pageviews,
} from "./index.js";

function Analytics() {
  return (
    <div className="analytics-section-main">
      <div className="analytics-section-inner">
        <div className="seatchBar-user">
          <SearchBar />
          <User />
        </div>
        <Buttons />
        <Quotation />
        <CardFrame />
        <Pageviews />
      </div>
    </div>
  );
}

export default Analytics;
