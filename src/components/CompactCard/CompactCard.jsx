import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import "./CompactCard.css";
const CompactCard = ({ icon, value, barValue, color, title, setExpanded }) => {
  const Icon = icon;
  return (
    <motion.div
      className="compact-card"
      style={{
        background: color.backGround,
        boxShadow: color.boxShadow,
      }}
      layoutId="chartCard"
      onClick={setExpanded}
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
    </motion.div>
  );
};

export default CompactCard;
