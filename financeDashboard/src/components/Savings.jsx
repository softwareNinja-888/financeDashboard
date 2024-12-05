import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3'

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


import { PieChart, Pie, Cell } from 'recharts';

ChartJS.register(ArcElement, Tooltip, Legend);

function Savings(props){

    // useEffect(() => {
    //     const svg = d3.select('#progress-bar')
    //         .attr('width', 300)
    //         .attr('height', 10);

    //     svg.selectAll('*').remove(); // Clear previous renders

    //     // Background Bar
    //     svg.append('rect')
    //         .attr('width', 200)
    //         .attr('height', 20)
    //         .attr('fill', '#e0e0e0');

    //     // Progress Bar
    //     svg.append('rect')
    //         .attr('width', props.progress * 2) // Scale progress (e.g., 50% -> 100px)
    //         .attr('height', 20)
    //         .attr('fill', '#d8a17e');
    // }, [props.progress]);
    const svg = useRef(null)

    useEffect(() => {
        if (!svg.current) return;

        const svgElement = d3.select(svg.current)
            // .attr('width', 300)
            // .attr('height', 10);

        svgElement.selectAll('*').remove(); // Clear previous renders

        // Background Bar
        svgElement.append('rect')
            .attr('width', 200)
            .attr('height', 10)
            .attr('fill', '#e0e0e0');

        // Progress Bar
        if (props.progress){
            svgElement.append('rect')
                .attr('width', props.progress * 2) // Scale progress (e.g., 50% -> 100px)
                .attr('height', 10)
                .attr('fill', '#d8a17e');
            }
    }, [props.progress]);
    return (
        <div className="flex flex-col gap-2 transition ease-in-out delay-150 bg-black hover:bg-white hover:scale-105  max-w-60 p-4 rounded-3xl group shadow-md shadow-black cursor-pointer max-h-20">
            <div className="flex items-center gap-4">
                <img src={props.img} alt="goal icon" className="max-w-7" />
                <span className="text-white transition-all delay-0  group-hover:text-black">{props.text} </span>
            </div>
            <svg ref={svg} id="progress-bar" className='rounded-full '></svg>
        </div>
    );
    
}

function ChartSave(){
    const data = {
        datasets: [
            {
                data: [70, 30], // 70% progress
                backgroundColor: ['#4caf50', '#e0e0e0'], // Progress and background colors
                borderWidth: 0,
            },
        ],
    };

    const options = {
        cutout: '90%', // Controls the thickness of the circle
        plugins: { legend: { display: true } },
    };

    return <Doughnut data={data} options={options} />;
}

function Recharts(props){
    const data = [
        { value: props.progress }, // Progress
        { value: 100 - props.progress }, // Remaining
    ];

    const COLORS = ['#4caf50', '#e0e0e0'];

    return (
        <PieChart width={100} height={100}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                startAngle={90}
                endAngle={-270}
                innerRadius={35}
                outerRadius={50}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
            </Pie>
        </PieChart>
    );
}

export {Savings,ChartSave,Recharts}