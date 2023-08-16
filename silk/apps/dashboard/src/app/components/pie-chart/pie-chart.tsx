import React from 'react'
import { PieChart as Chart } from 'react-minimal-pie-chart'
import { Data } from 'react-minimal-pie-chart/types/commonTypes'

function round(value: number): number {
  const decimalPart = value - Math.floor(value)

  return decimalPart > 0.8 ? Math.ceil(value) : Math.floor(value)
}

export const PieChart: React.FC<{ data: Data }> = ({ data }) => (
  <Chart
    data={data}
    animate={true}
    label={({ dataEntry: { value } }) => round(value) + '%'}
    labelStyle={{
      fontSize: '0.3em',
      fontWeight: 'bold',
    }}
  />
)
