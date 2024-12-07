import React, { useEffect, useRef } from 'react';

import * as d3 from 'd3'

import {  PieChart, Pie, Cell, Text ,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { financeData } from '../data/data';

// ChartJS.register(ArcElement, Tooltip, Legend);

function LineGraphs(){

    const data = [
        { name: 'Jan', Income: 30, value2: 50 },
        { name: 'Feb', Income: 45, value2: 55 },
        { name: 'Mar', Income: 60, value2: 65 },
        { name: 'Apr', Income: 50, value2: 70 },
        { name: 'May', Income: 70, value2: 80 },
        { name: 'Jun', Income: 90, value2: 100 },
      ];

  return (
    <div className="p-2">
         <LineChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid stroke="#d8a17e" strokeDasharray="5 5" />
      <XAxis dataKey="name" stroke="#d8a17e" />
      <YAxis stroke="#d8a17e" />
      <Tooltip contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #ccc' }} />
      <Legend />
      {/* First line */}
      <Line type="monotone" dataKey="Income" stroke="#ff7300" strokeWidth={2} />
      {/* Second line */}
      <Line type="monotone" dataKey="value2" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
    </div>
  );
}


function ProOne(props){
    const svg = useRef(null)

    useEffect(() => {
        if (!svg.current) return;

        const svgElement = d3.select(svg.current)

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

// function ProTwo(){
//     const data = {
//         datasets: [
//             {
//                 data: [70, 30], // 70% progress
//                 backgroundColor: ['#4caf50', '#e0e0e0'], // Progress and background colors
//                 borderWidth: 0,
//             },
//         ],
//     };

//     const options = {
//         cutout: '90%', // Controls the thickness of the circle
//         plugins: { legend: { display: true } },
//     };

//     return <Doughnut data={data} options={options} />;
// }

function Circle(props){
    const data = [
        { value: props.chartInfo.progress() }, // Progress
        { value: 100 - props.chartInfo.progress() }, // Remaining
    ];

    const COLORS = ['#d8a17e', '#e0e0e0'];

    return (
        <div style={{ position: 'relative', width: '150px', height: '150px' }}>
            <PieChart width={150} height={150}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    startAngle={90}
                    endAngle={-270}
                    innerRadius={38}
                    outerRadius={50}
                    dataKey="value"
                >       
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                 </Pie>
            </PieChart>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#d8a17e',
                }} 
            >
                {financeData.formatMoney(props.chartInfo.target,'ZAR')}
            </div>
        </div>
    );
}


export {ProOne,Circle,LineGraphs}