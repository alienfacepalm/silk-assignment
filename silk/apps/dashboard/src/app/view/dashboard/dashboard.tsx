import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PieChart } from 'react-minimal-pie-chart'
import moment from 'moment'

import { Loader, ErrorMessage } from '../../components'

import { getGroupedFindings, getRawFindingsById } from '../../queries'
import { severityPercentageChartData } from '../../util'

import { IGroupedFinding, IRawFinding } from './types'

export const Dashboard: React.FC = () => {
  const [selectedRowId, setSelectedRowId] = useState<number>(-1)
  const [expandedRow, setExpandedRow] = useState<number | null>(null)
  const {
    isLoading: groupedFindingsIsLoading,
    error: groupedFindingsError,
    data: groupedFindings,
  } = useQuery({
    queryKey: ['groupedFindings'],
    queryFn: getGroupedFindings,
  })

  const {
    isLoading: rawFindingsIsLoading,
    error: rawFindingsError,
    data: rawFindings,
  } = useQuery({
    queryKey: ['rawFinding', selectedRowId],
    queryFn: () => getRawFindingsById(selectedRowId),
    enabled: !!selectedRowId,
  })

  console.log({ rawFindings })

  const handleRowClick = (rowId: number) => {
    setExpandedRow(rowId === expandedRow ? null : rowId)
    setSelectedRowId(rowId)
  }

  if (groupedFindingsIsLoading || rawFindingsIsLoading) return <Loader />
  if (groupedFindingsError)
    return <ErrorMessage error={groupedFindingsError as Error} />
  if (rawFindingsError)
    return <ErrorMessage error={rawFindingsError as Error} />

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
            labelStyle={{
              fontSize: '5px',
              color: '#ffffff',
              fontWeight: '800',
            }}
            animate
          />
        </div>

        {/* Table */}
        <>
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="border p-2">ID</th>
                <th className="border p-2">Severity</th>
                <th className="border p-2">Time</th>
                <th className="border p-2">SLA</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Security Analyst</th>
                <th className="border p-2">Owner</th>
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
                    <td className="border p-2">{finding.description}</td>
                  </tr>
                  {expandedRow === finding.id && (
                    <tr key={`expanded-${finding.id}`}>
                      <td colSpan={3} className="border p-2">
                        {rawFindings?.map((finding: IRawFinding) => {
                          return (
                            <>
                              <h1>Raw Findings</h1>
                              <table>
                                <thead>
                                  <tr>
                                    <th>Severity</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{finding.severity}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </>
                          )
                        })}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      </div>
    )
}
