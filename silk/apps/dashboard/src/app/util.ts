import { Data } from 'react-minimal-pie-chart/types/commonTypes'
import { IGroupedFinding } from './view/dashboard/types'

function calculateSeverityPercentages(findings: IGroupedFinding[]): {
  low: number
  medium: number
  high: number
} {
  const initialCounts = { low: 0, medium: 0, high: 0 }

  const severityCounts = findings.reduce((accumulator, finding) => {
    switch (finding.severity) {
      case 'low':
        accumulator.low++
        break
      case 'medium':
        accumulator.medium++
        break
      case 'high':
        accumulator.high++
        break
    }
    return accumulator
  }, initialCounts)

  const total = findings.length
  const low = (severityCounts.low / total) * 100
  const medium = (severityCounts.medium / total) * 100
  const high = (severityCounts.high / total) * 100

  return { low, medium, high }
}

export function severityPercentageChartData(findings: IGroupedFinding[]): Data {
  const percentages = calculateSeverityPercentages(findings)
  console.log({ percentages })
  return [
    {
      title: 'low',
      value: 50,
      color: `#${((Math.random() * 0xffffff) << 0).toString(16)}`,
    },
    {
      title: 'high',
      value: 50,
      color: `#${((Math.random() * 0xffffff) << 0).toString(16)}`,
    },
  ]
}

// return {
//     title: percentage,
//     value: finding.severity, // Provide a default value or transform as needed
//     color: `#${((Math.random() * 0xffffff) << 0).toString(16)}`,
//   }
