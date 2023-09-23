import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const OrdersPieChart = () => {
  const pieOption = {
    color: [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: '#1158E2',
        },
        {
          offset: 1,
          color: '#42B5F2',
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: '#BC1FD7',
        },
        {
          offset: 1,
          color: '#7F1DD1',
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: '#E8A618',
        },
        {
          offset: 1,
          color: '#EB6B36',
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: '#D131BE',
        },
        {
          offset: 1,
          color: '#BF1575',
        },
      ]),
    ],
    series: [
      {
        name: 'Item',
        type: 'pie',
        radius: ['60%', '90%'],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 50,
          borderColor: 'black',
          borderWidth: 4,
        },
        label: {
          show: true,
          position: 'outside',
          formatter: '({c}%)',
          emphasis: {
            show: true,
            fontSize: 15,
            fontWeight: '',
          },
        },
        data: [
          { value: 210, name: '40%' },
          { value: 735, name: '10%' },
          { value: 580, name: '30%' },
          { value: 484, name: '20%' },
          { value: 490, name: '20%' },
        ],
      },
    ],
  };

  const barOption = {
  color: [
    new echarts.graphic.LinearGradient(1, 0, 0, 1, [
      {
        offset: 0,
        color: '#007FFF', 
      },
      {
        offset: 1,
        color: '#30CFD0',
      },
    ]),
  ],
  xAxis: {
    type: 'category',
    data: ['Salty water', 'Dry', 'Drinkable', 'Dirty', 'Muddy'],
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false,
    },
  },
  series: [
    {
      name: 'Bar Chart',
      type: 'bar',
      data: [120, 200, 150, 80, 90],
      emphasis: {
        scale: false,
        label: {
          show: true,
          position: 'top',
        },
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: '',
    },
  },
  dataZoom: [
    {
      type: 'inside',
    },
  ],
};


  return (
    <div>
      <ReactECharts style={{ height: 200, marginTop: '1rem' }} option={pieOption} />
      <ReactECharts style={{ height: 400, marginTop: '1rem' }} option={barOption} />
    </div>
  );
};

export default OrdersPieChart;
