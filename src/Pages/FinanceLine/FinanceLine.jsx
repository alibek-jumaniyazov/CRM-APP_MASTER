import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{ 
        data: [25000000, 39000000, 55000000, 35000000, 45000000, 60000000,35000000, 52000000]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 300  
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '24px',  
            endingShape: 'rounded',  
            borderRadius: 8  
          },
        },
        colors: ['#005EEB'],  
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']  
        },
        xaxis: {
          categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AVG',],
          labels: {
            rotate: -45, 
            style: {
              fontFamily: 'Regular',  
              fontSize: '13px',
              fontWeight: 400,
              color: '#90A0B7',  
            }
          }
        },
        yaxis: {
          min: 0,  
          max: 60000000,  
          labels: {
            formatter: function (value) {
               
              const labels = ['10 000 000 som', '20 000 000 som', '30 000 000 som', '40 000 000 som', '50 000 000 som', '60 000 000 som', '70 000 000 som', '80 000 000 som', '90 000 000 som', '100 000 000 som'];
              const index = Math.round(value / 10000000) - 1;
              return labels[index] || '';
            },
            style: {
              fontFamily: 'Regular',  
              fontSize: '13px',
              fontWeight: 400,
              color: '#90A0B7',  
            }
          },
          tickAmount: 6,  
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "  " + (val / 1000000).toFixed(0) + " million";
            }
          }
        },
        grid: {
          show: true,
          borderColor: '#e0e0e0',
          strokeDashArray: 0,
          position: 'back',
          xaxis: {
            lines: {
              show: false,  
            },
          },
          yaxis: {
            lines: {
              show: true,  
              strokeDashArray: 5,  
              offsetX: 0,
              offsetY: 30,  
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={220}  
        />
      </div>
    );
  }
}

export default ApexChart;
