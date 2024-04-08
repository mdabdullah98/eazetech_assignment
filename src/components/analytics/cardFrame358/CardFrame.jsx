import "./cardFrame.css";

import cardFrameData from "./index.js";

function CardFrame() {
  return (
    <div className="cardFrame-main ">
      {cardFrameData.map((item) => {
        return (
          <div key={item.id} className="card ">
            <figure className="card-ecllipse">
              <img
                src={`${item.cardEllipseImage}`}
                alt={`${item.cardEllipseImage}`}
              />
            </figure>

            <h3 className="card-heading">{item.heading}</h3>

            <div className="cardText-cardDataNumbers flex  justify-between items-center">
              <div className="card-text">
                <p>{item?.cardbody_1_text}</p>
                <p>{item?.cardbody_2_text}</p>
                <p>{item?.cardbody_3_text}</p>
              </div>
              <div className="card-data-numbers">
                <p>{item.card_data_1}</p>
                <p>{item.card_data_2}</p>
                <p>{item.card_data_3}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardFrame;
