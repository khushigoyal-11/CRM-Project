import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';
ChartJS.register(ArcElement);

export default function DonutChart({ percent }) {
  const data = {
    datasets: [{ data: [percent, 100 - percent], backgroundColor: ['#00B894', '#EBEEF1'] }]
  };
  return <Doughnut data={data} options={{ cutout: '80%' }} />;
}