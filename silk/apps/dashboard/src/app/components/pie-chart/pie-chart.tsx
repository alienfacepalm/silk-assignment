import React from 'react'
import { PieChart as Chart } from 'react-minimal-pie-chart'
import { Data } from 'react-minimal-pie-chart/types/commonTypes'

let i = 0
function round(value: number): number {
  let output: number
  if (i % 2 === 0) {
    output = Math.floor(value)
  } else {
    output = Math.ceil(value)
  }
  console.log({ output })
  return output
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
