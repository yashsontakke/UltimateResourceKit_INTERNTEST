// Get the elements for employee contribution and retirement age sliders
const employeeContributionSlider = document.getElementById("employeeContribution");
const retirementAgeSlider = document.getElementById("retirementAge");

// Get the elements to display the current values
const employeeContributionValue = document.getElementById("employeeContributionValue");
const retirementAgeValue = document.getElementById("retirementAgeValue");

// Add event listeners to update the displayed values when sliders change
employeeContributionSlider.addEventListener("input", function() {
  employeeContributionValue.innerText = employeeContributionSlider.value;
});

retirementAgeSlider.addEventListener("input", function() {
  retirementAgeValue.innerText = retirementAgeSlider.value;
});
var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["2023", "2024", "2025", "2026", "2027"],
                datasets: [
                    {
                        label: "Employer",
                        data: [10, 15, 20, 25, 30],
                        backgroundColor: "rgba(255, 99, 132, 0.6)",
                        borderColor: "rgba(255, 99, 132, 1)",
                        borderWidth: 1,
                        stacked: true,
                    },
                    {
                        label: "Employee",
                        data: [5, 10, 15, 20, 25],
                        backgroundColor: "rgba(54, 162, 235, 0.6)",
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1,
                        stacked: true,
                    },
                    {
                        label: "Total Interest",
                        data: [5, 10, 15, 20, 25],
                        backgroundColor: "rgba(75, 192, 192, 0.6)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
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
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                    },
                },
                tooltips: {
                    enabled: true,
                    mode: "index",
                    intersect: false,
                },
            },
        });
