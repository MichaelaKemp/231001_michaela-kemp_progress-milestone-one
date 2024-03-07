import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graphs = ({ salesData, trafficSourcesData, stockPricesData }) => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  const radarChartRef = useRef(null);

  useEffect(() => {
    // Destroy existing chart instances
    const destroyChart = (chartRef) => {
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };

    destroyChart(barChartRef);
    destroyChart(pieChartRef);
    destroyChart(lineChartRef);
    destroyChart(doughnutChartRef);
    destroyChart(radarChartRef);

    if (!salesData || !trafficSourcesData || !stockPricesData) {
      return;
    }

    const createChart = (chartRef, chartType, chartData, chartOptions) => {
      const ctx = chartRef.current.getContext('2d');
      chartRef.current.chartInstance = new Chart(ctx, {
        type: chartType,
        data: chartData,
        options: chartOptions,
      });
    };

    // Bar Chart
    createChart(
      barChartRef,
      'bar',
      {
        labels: Object.keys(salesData),
        datasets: [{
          label: 'Monster Energy Sales (Students)',
          data: Object.values(salesData),
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      {
        scales: {
          x: {
            ticks: {
              autoSkip: false // Disable auto skipping of labels
            }
          },
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: true // Hide legend to save space
          }
        }
      }
    );

    // Pie Chart
    createChart(
      pieChartRef,
      'pie',
      {
        labels: Object.keys(trafficSourcesData),
        datasets: [{
          label: 'Traffic Sources',
          data: Object.values(trafficSourcesData),
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1
        }]
      },
      {
        plugins: {
          legend: {
            display: true,
            position: 'right'
          }
        }
      }
    );

    // Line Chart
    createChart(
      lineChartRef,
      'line',
      {
        labels: Object.keys(stockPricesData),
        datasets: [{
          label: 'Stock Prices',
          data: Object.values(stockPricesData),
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1
        }]
      },
      {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    );

    // Doughnut Chart
    createChart(
      doughnutChartRef,
      'doughnut',
      {
        labels: Object.keys(trafficSourcesData),
        datasets: [{
          label: 'Traffic Sources',
          data: Object.values(trafficSourcesData),
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1
        }]
      },
      {
        plugins: {
          legend: {
            display: true,
            position: 'right'
          }
        }
      }
    );

    // Radar Chart
    createChart(
      radarChartRef,
      'radar',
      {
        labels: Object.keys(trafficSourcesData),
        datasets: [{
          label: 'Traffic Sources',
          data: Object.values(trafficSourcesData),
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      {
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    );

  }, [salesData, trafficSourcesData, stockPricesData]);

  return (
    <div>
      <div style={{ width: '300px', height: '300px' }}>
        <canvas ref={barChartRef} width={300} height={300}></canvas>
      </div>
      <div style={{ width: '300px', height: '300px' }}>
        <canvas ref={pieChartRef} width={300} height={300}></canvas>
      </div>
      <div style={{ width: '300px', height: '300px' }}>
        <canvas ref={lineChartRef} width={300} height={300}></canvas>
      </div>
      <div style={{ width: '300px', height: '300px' }}>
        <canvas ref={doughnutChartRef} width={300} height={300}></canvas>
      </div>
      <div style={{ width: '300px', height: '300px' }}>
        <canvas ref={radarChartRef} width={300} height={300}></canvas>
      </div>
    </div>
  );
};

export default Graphs;

