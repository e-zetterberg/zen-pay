'use client';

import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
  ['Month', 'Expenses'],
  ['January', 1000],
  ['Febuary', 1170],
  ['March', 660],
  ['April', 1030],
];
export const options = {
  chart: {
    title: 'Monthly Expenses',
  },
};
const Expensechart = () => (
  <Chart
    chartType="Bar"
    width="100%"
    height="400px"
    data={data}
    options={options}
  />
);

export default Expensechart;
