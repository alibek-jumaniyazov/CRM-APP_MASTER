import React, { useState, useEffect, useRef } from 'react';
import ApexCharts from 'react-apexcharts';
import './pay.css'; // Убедитесь, что ваш CSS файл подключен

const Paynet = () => {
  const [series] = useState([60, 40]);

  const [options] = useState({
    chart: {
      type: 'donut',
      height: 500,
      width: '100%',
      events: {
        mounted: (chartContext) => {
          // Customization can also be done here if needed
        }
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%'
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}%`,
      style: {
        fontSize: '8px',
        fontWeight: 'bold',
        colors: ['#fff', '#000']
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.5,
        color: '#E4F4FD'
      }
    },
    fill: {
      colors: ['#005EEB', '#C2DAFF']
    },
    labels: ['Paid', 'Not paid'],
    legend: {
      position: 'bottom'
    },
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
    }],
    title: {
      text: 'Payments',
      align: 'center',
      margin: 0,
      offsetY: 115,
      style: {
        fontSize: '12px',
        fontWeight: 'bold',
        fontFamily:'Regular',
        color:'#292D30',
        fontWeight:'400',
      }
    }
  });

  const chartRef = useRef(null);

  useEffect(() => {
    const chartElement = chartRef.current?.chart?.el;
    if (chartElement) {
      setTimeout(() => {
        // Select the SVG element by its ID and apply the shadow class
        const svgElement = chartElement.querySelector('#SvgjsG1477');
        if (svgElement) {
          svgElement.classList.add('svg-shadow');
        }

        // Select all path elements within the legend markers
        const legendPaths = chartElement.querySelectorAll('.apexcharts-legend-series .apexcharts-legend-marker path');
        legendPaths.forEach((path, index) => {
          if (index === 0) {
            path.setAttribute('fill', '#005EEB'); // Color for Position 1
          } else if (index === 1) {
            path.setAttribute('fill', '#C2DAFF'); // Color for Position 2
          }
        });
      }, 100);
    }
  }, [chartRef]);

  return (
    <div className="chart-container">
      <ApexCharts
        ref={chartRef}
        options={options}
        series={series}
        type="donut"
        id="chart"
        style={{ position: 'relative', width: '100%', height: '300px' }}
      />
    </div>
  );
};

export default Paynet;
