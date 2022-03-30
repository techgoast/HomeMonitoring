import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const Chart2 = (props) => {

    const consumption = props.consumption;
    const labels = consumption.map(item => {
        return item.month;
    }).slice(`-${parseInt(props.count)}`);

    const data = {
    labels,
    datasets: [
        {
        label: 'Consumed',
        data: consumption.map(item => {
            return item.energy.regular;
        }).slice(`-${parseInt(props.count)}`),
        backgroundColor: '#000',
        tension: .4,
        },
        {
            label: 'Colledted From Rain',
            data: consumption.map(item => {
                return item.energy.generatedSolarPower;
            }).slice(`-${parseInt(props.count)}`),
            backgroundColor: '#ffc4c4',
            tension: .4,
        },
    ],
    };

    const options = {
        Scale: { 
            y: {
                beginAtZero: true,
            },
        },
        responsive: true,
        plugins: {
            legend: {
            position: 'bottom',
            },
        },
    };

    return <Bar options={options} data={data} />;
}

export default Chart2;