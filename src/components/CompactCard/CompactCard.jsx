import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./CompactCard.css";
const CompactCard = ({ icon, value, barValue, color, title }) => {
  const Icon = icon;
  return (
    <div
      className="compact-card"
      style={{
        background: color.backGround,
        boxShadow: color.boxShadow,
      }}
    >
      <div className="radial-bar">
        <CircularProgressbar value={barValue} text={`${barValue}%`} />
        <span>{title}</span>
      </div>
      <div className="card-detail">
        <Icon />
        <span>${value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
};

export default CompactCard;
