import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart(props) {
  const { data, columns } = props;

  const chartData = {
    labels: data.map((item) => item[columns[0]]),
    datasets: [
      {
        data: data.map((item) => item[columns[1]]),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#00CC00",
          "#FF9900",
          "#CC3300",
        ],
      },
    ],
  };

  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
}

export default PieChart;
