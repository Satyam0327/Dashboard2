import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const OrdersPieChart = () => {
  const chartHeadingStyle = {
  background: 'linear-gradient(to right, #30CFD0 0%, #8e49e2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};
  const pieOption = {
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderWidth: 0,
  },
  series: [
    {
      name: 'Value',
      type: 'pie',
      radius: ['45%', '80%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'top'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 15,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};
  const pieOption2 = {
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderWidth: 0,
  },
  series: [
    {
      name: 'Value',
      type: 'pie',
      radius: ['1%', '80%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'top'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 15,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 600, name: '20%' },
        { value: 735, name: 'dry ' },
        { value: 400, name: 'salty' },
        { value: 484, name: 'dirty' },
        { value: 3890, name: 'fluke' }
      ]
    }
  ]
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
    data: ['Block'],
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
       backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderWidth: 0,
  },
  dataZoom: [
    {
      type: 'inside',
    },
  ],
};


  return (
    <div>
      <h2 style={chartHeadingStyle}>Depth data:</h2>
      <ReactECharts style={{ height: 200, marginTop: '1rem' }} option={pieOption} />
    <h2 style={chartHeadingStyle}>Water availability:</h2>
      <ReactECharts style={{ height: 200, marginTop: '1rem' }} option={pieOption2} />
      <h2 style={chartHeadingStyle}>Depth height:</h2>
      <ReactECharts style={{ height: 400, marginTop: '1rem' }} option={barOption} />
    </div>
  );
};

export default OrdersPieChart;
