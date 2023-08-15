import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
// import { PieChart } from 'react-minimal-pie-chart'
// import moment from 'moment'

import { Loader, ErrorMessage, Table } from '../../components'

import {
  getGroupedFindings,
  getRawFindingsById,
  getRawFindingsCounts,
} from '../../util/queries'
import { severityPercentageChartData } from '../../util/chart'

import { IGroupedFinding, IRawFinding } from './types'

export const Dashboard: React.FC = () => {
  const [selectedRowId, setSelectedRowId] = useState<number>(0)
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
    enabled: selectedRowId > 0,
  })

  const {
    isLoading: rawFindingCountsIsLoading,
    error: rawFindingCountsError,
    data: rawFindingCounts,
  } = useQuery({
    queryKey: ['rawFindingCounts'],
    queryFn: getRawFindingsCounts,
  })

  const handleRowClick = (rowId: number) => {
    setExpandedRow(rowId === expandedRow ? null : rowId)
    setSelectedRowId(rowId)
  }

  if (groupedFindingsIsLoading) return <Loader />
  if (groupedFindingsError)
    return <ErrorMessage error={groupedFindingsError as Error} />
  if (rawFindingsError)
    return <ErrorMessage error={rawFindingsError as Error} />

  if (groupedFindings)
    return (
      <Table
        data={groupedFindings as IGroupedFinding[]}
        rawFindingsCounts={rawFindingCounts}
        handleRowClick={handleRowClick}
      />
    )
}
