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
        <ExpandedCard
          color={props.color}
          title={props.title}
          series={props.series}
          setExpanded={() => setExpanded(false)}
        />
      ) : (
        <CompactCard
          title={props.title}
          icon={props.icon}
          value={props.value}
          barValue={props.barValue}
          color={props.color}
          setExpanded={() => setExpanded(true)}
        />
      )}
    </AnimateSharedLayout>
  );
};

export default Card;
