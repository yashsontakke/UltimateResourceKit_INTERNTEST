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
