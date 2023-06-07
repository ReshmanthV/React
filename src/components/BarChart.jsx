import React from 'react';
import ReactEcharts from 'echarts-for-react';
import Cardfornoofusers from './Cardfornoofusers';

const EChart = ({ data }) => {

  const cityData = data.reduce((acc, obj) => {
    const { city } = obj;
    acc[city] = acc[city] ? acc[city] + 1 : 1;
    return acc;
  }, {});

  const chartData = Object.keys(cityData).map((city) => ({
    name: city,
    value: cityData[city],
  }));

  return (
    <>
      <div>
        <h2>Number of Users per City</h2>
        <ReactEcharts
          option={{
            tooltip: {
              trigger: 'axis',
              axisPointer: { type: 'shadow' },
            },
            grid: { containLabel: true },
            xAxis: {
              type: 'category',
              data: Object.keys(cityData)
            },
            yAxis: {
              type: 'value',
            },
            series: [
              {
                type: 'bar',
                data: chartData,
              },
            ],
          }}
          style={{ height: '400px', width: '400px' }}
        />
      </div>
      <Cardfornoofusers list ={data}/>
    </>
  );
};

export default EChart;

