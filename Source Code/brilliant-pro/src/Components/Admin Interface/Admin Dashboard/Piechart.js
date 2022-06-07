import React from 'react';
import ReactApexChart from "react-apexcharts";

// Get Data From Mongo here
function populateChart() {
  return [ 44, 22, 13, 43 ];
}

function Piechart() {

  const Learners = populateChart();
  const options = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Learners Enrolled in Course', 'Learners Started the Course', 'Learners in Middle of Course', 'Learners Passed the Course'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <div className="Piechart">
      <div id="chart">
        <ReactApexChart options={options} series={Learners} type="pie" width={600} />
      </div>
    </div>
  );
}

export default Piechart;
