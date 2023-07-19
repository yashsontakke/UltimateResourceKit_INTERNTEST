import Chart from "chart.js";
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["2023", "2024", "2025", "2026", "2027"],
    datasets: [
      {
        label: "Progress",
        data: [0, 10, 20, 30, 40],
        fill: false,
        lineTension: 0.1,
      },
    ],
  },
  options: {
    title: {
      text: "Retirement Progress",
      display: true,
    },
    tooltips: {
      enabled: true,
    },
  },
});
