import React from 'react'
import { PieChart as Chart } from 'react-minimal-pie-chart'
import { Data } from 'react-minimal-pie-chart/types/commonTypes'

const shiftSize: number = 6
export const PieChart: React.FC<{ data: Data }> = ({ data }) => {
  return (
    <Chart
      data={data}
      animate={true}
      label={({ dataEntry: { value } }) => Math.ceil(value) + '%'}
      labelStyle={{
        fontSize: '0.65em',
      }}
    />
  )
}
