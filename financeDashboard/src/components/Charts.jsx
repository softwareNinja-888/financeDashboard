import React, { useEffect, useRef,useCallback, useState } from 'react';


import * as d3 from 'd3'

import {  PieChart, Pie, Cell, Text ,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Sector } from 'recharts';
import { financeData } from '../data/data';

// ChartJS.register(ArcElement, Tooltip, Legend);

function LineGraphs(props){
    // console.log(props.data);

  return (
    <div className="p-2">
         <LineChart
            width={500}
            height={300}
            data={props.data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
      <CartesianGrid stroke="#d8a17e" strokeDasharray="5 5" />
      <XAxis dataKey="month" stroke="#d8a17e" />
      <YAxis stroke="#d8a17e" />
      <Tooltip contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #ccc' }} />
      <Legend />
      {/* First line */}
      <Line type="monotone" dataKey="income" stroke="#ff7300" strokeWidth={2} />
      {/* Second line */}
      <Line type="monotone" dataKey="expense" stroke="#8884d8" strokeWidth={2} />
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
                {financeData.formatMoney(props.chartInfo.current,'ZAR')}
            </div>
        </div>
    );
}

function SegmentCircle({dataNew}){
    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const {
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          startAngle,
          endAngle,
          fill,
          payload,
          percent,
          value
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? "start" : "end";
        console.log(props);
        return (
          <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
              {payload.name}
            </text>
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={fill}
            />
            <Sector
              cx={cx}
              cy={cy}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={outerRadius + 6}
              outerRadius={outerRadius + 10}
              fill={fill}
            />
            <path
              d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
              stroke={fill}
              fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              textAnchor={textAnchor}
              fill="#333"
            >{`R ${value}`}</text>
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              dy={18}
              textAnchor={textAnchor}
              fill="#999"
            >
              {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
          </g>
        );
      };
      
   
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
      (_, index) => {
        setActiveIndex(index);
      },
      [setActiveIndex]
    );
    
    function execute(){
        return (
            <>
              <PieChart width={400} height={400}>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={dataNew}
                    cx={200}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                  />
                </PieChart>
            </>
          ); 


    }
    return (
        execute()
    )

}


export {ProOne,Circle,LineGraphs,SegmentCircle}