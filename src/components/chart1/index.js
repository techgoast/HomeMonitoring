import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const Chart1 = (props) => {

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
            return item.water.consumed;
        }).slice(`-${parseInt(props.count)}`),
        borderColor: '#000',
        backgroundColor: '#fff',
        tension: .4,
    },
    {
        label: 'Colledted From Rain',
        data: consumption.map(item => {
            return item.water.cllectedFromRain;
        }).slice(`-${parseInt(props.count)}`),
        borderColor: '#ffc4c4',
        backgroundColor: '#fff',
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

    return <Line options={options} data={data} />;
}

export default Chart1;