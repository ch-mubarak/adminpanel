import Chart from "react-apexcharts";

const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 20, 50, 30, 90, 120, 60],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
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
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
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
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };
  return (
    <div>
      <h3>Customer Review</h3>
      <Chart series={data.series} options={data.options} type="area" />
    </div>
  );
};

export default CustomerReview;
