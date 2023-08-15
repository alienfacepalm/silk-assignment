import React from 'react'
import { upperCase, startCase } from 'lodash'
import {
  PieChart as Chart,
  pieChartDefaultProps,
} from 'react-minimal-pie-chart'
import { Data } from 'react-minimal-pie-chart/types/commonTypes'

const shiftSize: number = 6
export const PieChart: React.FC<{ data: Data }> = ({ data }) => {
  const [selected, setSelected] = React.useState<number>(0)
  const [hovered, setHovered] = React.useState<number | undefined>(undefined)

  return (
    <Chart
      data={data}
      animate={true}
      label={({ dataEntry: { value } }) => Math.ceil(value) + '%'}
      labelStyle={{
        fontSize: '0.65em',
      }}
      radius={pieChartDefaultProps.radius - shiftSize}
      segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
    />
  )
}
