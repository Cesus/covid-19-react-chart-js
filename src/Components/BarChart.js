import React, { useState, useEffect } from "react";
import { Bar, defaults } from "react-chartjs-2";
// import { csv } from "d3";

// defaults.plugins.tooltip = false;
defaults.plugins.legend.position = "bottom";

const BarChart = () => {
  return (
    <div>
      <h1>COVID-19 Data in Ontario</h1>
      <h2>Date Selected: 2021-07-23</h2>
      <div>
        <Bar
          data={{
            labels: [
              "12-17",
              "18-29",
              "30-39",
              "40-49",
              "50-59",
              "60-69",
              "70-79",
              "80+",
            ],
            datasets: [
              {
                label: "# of completed vaccinations",
                data: [
                  356667, 1212665, 1151591, 1178506, 1418751, 1430493, 1006543,
                  616950,
                ],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
              {
                label: "Population",
                data: [
                  951519, 2455535, 2056059, 1876583, 2060934, 1795046, 1159902,
                  679266,
                ],
                backgroundColor: ["#bdbdbd"],
                borderColor: ["#757575"],
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                labels: {
                  font: {
                    size: 23,
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
