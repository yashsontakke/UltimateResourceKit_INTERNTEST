function updateEmployeeContribution() {
  var employeeSlider = document.getElementById("employee-contribution-slider");
  var employeeValue = document.getElementById("employee-contribution-value");
  employeeValue.textContent = employeeSlider.value + "%";
}

// Function to update the displayed value for Retirement Age
function updateRetirementAge() {
  var retirementSlider = document.getElementById("retirement-age-slider");
  var retirementValue = document.getElementById("retirement-age-value");
  retirementValue.textContent = retirementSlider.value + "%";
}

// Add event listeners to the sliders
var employeeSlider = document.getElementById("employee-contribution-slider");
employeeSlider.addEventListener("input", updateEmployeeContribution);

var retirementSlider = document.getElementById("retirement-age-slider");
retirementSlider.addEventListener("input", updateRetirementAge);
var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["20", "25", "30", "35", "40", "45", "50"], // Add more points on the x-axis
    datasets: [
      {
        label: "Employer",
        data: [10, 15, 20, 25, 30, 35, 40], // Add more data points for the Employer dataset
        backgroundColor: "#0900A3", // Change the color for the Employer dataset
        borderColor: "#0900A3", // Change the color for the Employer dataset
        borderWidth: 1,
        barPercentage: 0.4, // Reduce the width of the bars relative to the available space
        categoryPercentage: 0.5, // Reduce the width of the bars relative to the available space
        stacked: true,
      },
      {
        label: "Employee",
        data: [5, 10, 15, 20, 25, 30, 35], // Add more data points for the Employee dataset
        backgroundColor: "#4935FF", // Change the color for the Employee dataset
        borderColor: "#4935FF", // Change the color for the Employee dataset
        borderWidth: 1,
        barPercentage: 0.4, // Reduce the width of the bars relative to the available space
        categoryPercentage: 0.5, // Reduce the width of the bars relative to the available space
        stacked: true,
      },
      {
        label: "Total Interest",
        data: [5, 10, 15, 20, 25, 30, 35], // Add more data points for the Total Interest dataset
        backgroundColor: "#99DAD9", // Change the color for the Total Interest dataset
        borderColor: "#99DAD9", // Change the color for the Total Interest dataset
        borderWidth: 1,
        barPercentage: 0.4, // Reduce the width of the bars relative to the available space
        categoryPercentage: 0.5, // Reduce the width of the bars relative to the available space
        stacked: true,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Contributions Over Time",
      },
    },
    indexAxis: "x",
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false, // Remove vertical lines
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: {
          borderDash: [5, 5], // Make horizontal lines dashed
        },
        ticks: {
          // Use the callback function to format the labels as dollars
          callback: function (value, index, values) {
            if (value === 0) {
              return "$" + value;
            } else {
              return "$" + value * 100;
            }
          },
          stepSize: 5,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 1,
      },
      point: {
        radius: 0,
      },
    },
    tooltips: {
      enabled: true,
      mode: "index",
      intersect: false,
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});



