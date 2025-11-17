
const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      data: [300, 520, 900, 1050, 420, 600, 520],
      borderColor: 'rgba(54, 162, 235, 1)',
      tension: 0,
      fill: false,
      pointRadius: 3,
      borderWidth: 3
    }]
  },
  options: {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '$' + value;
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return '$' + context.parsed.y;
          }
        }
      }
    }
  }
});