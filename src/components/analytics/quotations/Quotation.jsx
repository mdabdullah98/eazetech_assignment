import "./quotation.css";

import quotationData from "./index.js";

function Quotation() {
  return (
    <div className="quotation-details">
      <div className="quotation-card-main">
        {quotationData.map(
          ({
            title,
            quotationText,
            profit_loss,
            profit_loss_Details,
            cost,
            color,
            backgroundColor,
            backgroundImage,
            arrow,
            currColor,
          }) => {
            return (
              <div
                key={title}
                className={`quotation-cards text-${color}`}
                style={{
                  backgroundColor,
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom",
                }}
              >
                <h3 className={`quotaion-title `}>{title}</h3>
                <p className="quotation-body" style={{ color: `${currColor}` }}>
                  {quotationText}
                </p>
                <div className="flex ">
                  <p className="quotation-up-down">{profit_loss} </p>
                  <span className="mx-2 mt-3">
                    <img src={`${arrow}`} alt={`${arrow}`}></img>
                  </span>
                </div>
                <p className="quotation-loss-details">{profit_loss_Details}</p>
                <p className="quotation-cost" style={{ color: `${currColor}` }}>
                  {cost}
                </p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Quotation;
