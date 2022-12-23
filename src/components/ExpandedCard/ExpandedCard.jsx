import { UilTimes } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import Chart from "react-apexcharts";
import "./ExpandedCard.css"

const ExpandedCard = ({ setExpanded, color, title, series }) => {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#fff"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2022-12-19T00:00:00.000Z",
          "2022-12-19T01:00:00.000Z",
          "2022-12-19T02:00:00.000Z",
          "2022-12-19T03:00:00.000Z",
          "2022-12-19T04:00:00.000Z",
          "2022-12-19T05:00:00.000Z",
          "2022-12-19T06:00:00.000Z",
        ],
      },
    },
  };
  return (
    <motion.div
      className="card-expanded"
      style={{ background: color.backGround, boxShadow: color.boxShadow }}
      layoutId="chartCard"
    >
      <div className="chart-close">
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{title}</span>
      <div className="chart-container">
        <Chart series={series} options={data.options} type="area" />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
};

export default ExpandedCard;
