import { cardsData } from "../../Data/Data";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      {cardsData.map((card, id) => (
        <div key={id} className="card-container">
          <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            icon={card.icon}
            series={card.series}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
