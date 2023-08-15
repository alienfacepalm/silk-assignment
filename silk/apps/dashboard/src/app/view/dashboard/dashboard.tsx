import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PieChart } from 'react-minimal-pie-chart'
import moment from 'moment'

import { getGroupedFindings } from '../../queries'
import { severityPercentageChartData } from '../../util'

import {
  IGroupedFinding,
  //  IRawFinding
} from './types'
import { BaseDataEntry, Data } from 'react-minimal-pie-chart/types/commonTypes'

export const Dashboard: React.FC = () => {
  const {
    isLoading,
    error,
    data: groupedFindings,
  } = useQuery({
    queryKey: ['groupedFindings'],
    queryFn: getGroupedFindings,
  })
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

  const handleRowClick = (rowId: number) =>
    setExpandedRow(rowId === expandedRow ? null : rowId)

  if (isLoading) return '...'
  if (error) return error.toString()

  console.log({ groupedFindings })

  if (groupedFindings)
    return (
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div
          className="flex justify-center items-center h-full"
          style={{ maxHeight: 300 }}
        >
          <PieChart
            data={severityPercentageChartData(groupedFindings)}
            radius={40}
            animate
          />
        </div>

        {/* Table */}
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Value</th>
            </tr>
          </thead>
          <tbody className="h-96 overflow-y-auto">
            {groupedFindings.map((finding: IGroupedFinding) => (
              <React.Fragment key={finding.id}>
                <tr
                  className={`cursor-pointer ${
                    expandedRow === finding.id ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => handleRowClick(finding.id)}
                >
                  <td className="border p-2">{finding.severity}</td>
                  <td className="border p-2">
                    {moment(finding.grouped_finding_created.toString()).format(
                      'LLL',
                    )}
                  </td>
                  <td className="border p-2">
                    {moment(finding.sla.toString()).format('LLL')}
                  </td>
                </tr>
                {expandedRow === finding.id && (
                  <tr key={`expanded-${finding.id}`}>
                    <td colSpan={3} className="border p-2">
                      Raw finding details table by {finding.id}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    )
}
