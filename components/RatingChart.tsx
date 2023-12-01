'use client';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, Title, Legend, CategoryScale, BarElement } from 'chart.js';

Chart.register(LinearScale, Title, Legend, CategoryScale, BarElement);

const RatingChart = ({ providerData }) => {
  const data = {
    labels: providerData.map((provider) => provider.name),
    datasets: [
      {
        label: 'Рейтинг провайдеров',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: providerData.map((provider) => provider.rating),
      },
    ],
  };

  const options = {
    indexAxis: 'y', 
    scales: {
      x: {
        beginAtZero: true,
        max: 10,
      },
      y: {
        beginAtZero: true,
        height: 200,
      },
    },
  };

  return <Bar data={data} options={options} className="mt-4" />; {/* Добавьте классы Tailwind CSS для отступов */}
};

export default RatingChart;
