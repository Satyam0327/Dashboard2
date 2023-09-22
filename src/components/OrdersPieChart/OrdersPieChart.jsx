
import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const OrdersPieChart = () => {
  const option = {
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
        radius: ['70%', '100%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 50,
          borderColor: 'black',
          borderWidth: 8,
        },
        label: {
          show: true, // Show data labels
          position: 'outside', // Place labels outside the pie slices
          formatter: '({c}%)', // Format for the label, {b} is name, {c} is value, {d} is percentage
          emphasis: {
            show: true,
            fontSize: 10,
            fontWeight: 'bold',
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

  return (
    <ReactECharts style={{ height: 200, marginTop: '1rem' }} option={option} />
  );
};

export default OrdersPieChart;
