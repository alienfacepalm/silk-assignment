import React from 'react'
import { PieChart as Chart } from 'react-minimal-pie-chart'
import { Data } from 'react-minimal-pie-chart/types/commonTypes'

export const PieChart: React.FC<{ data: Data }> = ({ data }) => (
  <Chart data={data} />
)
