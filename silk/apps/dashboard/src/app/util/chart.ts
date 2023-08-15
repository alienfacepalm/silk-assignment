import { Data } from 'react-minimal-pie-chart/types/commonTypes'
import { IGroupedFinding } from '../view/dashboard/types'

export const severityColorMap: Record<string, string> = {
  low: '#378bf1',
  medium: '#e6cc00',
  high: '#ff6600',
  critical: '#ff0000',
}

export function calculateSeverityPercentages(findings: IGroupedFinding[]): {
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
  const percentages: Record<string, number> =
    calculateSeverityPercentages(findings)

  return Object.entries(percentages).map(([title, value]) => ({
    title,
    value,
    color: severityColorMap[title] || 'gray',
  }))
}
