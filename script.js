// Get the elements for employee contribution and retirement age sliders
const employeeContributionSlider = document.getElementById("employeeContribution");
const retirementAgeSlider = document.getElementById("retirementAge");

// Get the elements to display the current values
const employeeContributionValue = document.getElementById("employeeContributionValue");
const retirementAgeValue = document.getElementById("retirementAgeValue");

// Add event listeners to update the displayed values when sliders change


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
document.addEventListener('DOMContentLoaded', function() {

  const screenSize = 880;
  let footerLinksAdded = false;

  // Function to show the corresponding content div
  function showContent(contentId) {
    const allContentDivs = document.querySelectorAll('.content');
    allContentDivs.forEach(div => {
      div.style.display = div.id === contentId ? 'block' : 'none';
    });
  }

  // Function to add click event listeners to footer links
  function addFooterLinkListeners() {
    const homeLink = document.getElementById('homeLink');
    const balanceLink = document.getElementById('balanceLink');
    const accountLink = document.getElementById('accountLink');

    homeLink.addEventListener('click', function(event) {
      event.preventDefault();
      showContent('homeContent');
    });

    balanceLink.addEventListener('click', function(event) {
      event.preventDefault();
      showContent('balanceContent');
    });

    accountLink.addEventListener('click', function(event) {
      event.preventDefault();
      showContent('accountContent');
    });
  }

  // Function to remove click event listeners from footer links
  function removeFooterLinkListeners() {
    const homeLink = document.getElementById('homeLink');
    const balanceLink = document.getElementById('balanceLink');
    const accountLink = document.getElementById('accountLink');

    homeLink.removeEventListener('click', showContent);
    balanceLink.removeEventListener('click', showContent);
    accountLink.removeEventListener('click', showContent);
  }

  // Function to check screen size and add/remove footer link listeners
  function updateFooterLinks() {
    const currentScreenSize = window.innerWidth < screenSize;

    if (currentScreenSize) {
      // Show homeContent by default when the screen size is below 760px
      showContent('homeContent');
    } else {
      // Show all content divs when the screen size is 760px or larger
      const allContentDivs = document.querySelectorAll('.content');
      allContentDivs.forEach(div => {
        div.style.display = 'block';
      });
    }

    if (currentScreenSize && !footerLinksAdded) {
      addFooterLinkListeners();
      footerLinksAdded = true;
    } else if (!currentScreenSize && footerLinksAdded) {
      removeFooterLinkListeners();
      footerLinksAdded = false;
    }
  }

  // Check screen size and add/remove footer link listeners on page load
  updateFooterLinks();

  // Add event listener to check screen size and update footer links on window resize
  window.addEventListener('resize', updateFooterLinks);
});


