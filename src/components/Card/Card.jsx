import { useState } from "react";
import "./Card.css";
import { AnimateSharedLayout } from "framer-motion";
import ExpandedCard from "../ExpandedCard/ExpandedCard";
import CompactCard from "../CompactCard/CompactCard";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard />
      ) : (
        <CompactCard
          title={props.title}
          icon={props.icon}
          value={props.value}
          barValue={props.barValue}
          color={props.color}
        />
      )}
    </AnimateSharedLayout>
  );
};

export default Card;
