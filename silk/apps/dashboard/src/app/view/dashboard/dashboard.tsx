import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PieChart } from 'react-minimal-pie-chart'
import moment from 'moment'

import { getGroupedFindings } from '../../queries'

import {
  IGroupedFinding,
  //  IRawFinding
} from './types'

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
      <div className="grid grid-cols-3 gap-4 p-8">
        {/* Pie Chart */}
        <div className="col-span-1">
          <div className="flex justify-center items-center h-full">
            <PieChart
              data={groupedFindings?.map((finding: IGroupedFinding) => {
                const value = finding.severity
                if (typeof value !== 'number') {
                  console.warn(`Invalid value found: ${value}`)
                }
                return {
                  title: finding.id,
                  value: typeof value === 'number' ? value : 0, // Provide a default value or transform as needed
                  color: `#${((Math.random() * 0xffffff) << 0).toString(16)}`,
                }
              })}
              radius={40}
              animate
            />
          </div>
        </div>

        {/* Table */}
        <div className="col-span-2">
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
                      {moment(
                        finding.grouped_finding_created.toString(),
                      ).format('LLL')}
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
      </div>
    )
}
