import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { Loader, ErrorMessage, Table } from '../../components'

import {
  getGroupedFindings,
  getRawFindings,
  getRawFindingsCounts,
} from '../../util/queries'
import { severityPercentageChartData } from '../../util/chart'
import { PieChart, Legend } from '../../components/pie-chart'
import { IGroupedFinding } from './types'

export const Dashboard: React.FC = () => {
  const [show, setShow] = React.useState<'table' | 'chart'>('table')

  const {
    isLoading: groupedFindingsIsLoading,
    error: groupedFindingsError,
    data: groupedFindings,
  } = useQuery({
    queryKey: ['groupedFindings'],
    queryFn: getGroupedFindings,
  })

  const { error: rawFindingsError, data: rawFindings } = useQuery({
    queryKey: ['rawFindings'],
    queryFn: getRawFindings,
  })

  const { error: rawFindingCountsError, data: rawFindingCounts } = useQuery({
    queryKey: ['rawFindingCounts'],
    queryFn: getRawFindingsCounts,
  })

  const tableData: IGroupedFinding[] | undefined = React.useMemo(() => {
    if (groupedFindings && rawFindings) {
      for (let i = 0; i < groupedFindings.length; i++) {
        const subRows = rawFindings?.filter(
          (raw) => raw.grouped_finding_id === groupedFindings[i].id,
        )
        groupedFindings[i].subRows = subRows
      }
      return groupedFindings
    }
  }, [groupedFindings, rawFindings])

  if (groupedFindingsIsLoading) return <Loader />
  if (groupedFindingsError)
    return <ErrorMessage error={groupedFindingsError as Error} />
  if (rawFindingsError)
    return <ErrorMessage error={rawFindingsError as Error} />
  if (rawFindingCountsError)
    return <ErrorMessage error={rawFindingCountsError as Error} />

  if (tableData)
    return (
      <div className="grid place-items-center">
        <div className="inline-flex" role="group">
          <button
            type="button"
            className="inline-block rounded-l border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
            data-te-ripple-color="light"
            style={{
              backgroundColor:
                show === 'table' ? 'rgba(0,0,0,0.3)' : 'transparent',
            }}
            onClick={() => setShow('table')}
          >
            Table
          </button>
          <button
            type="button"
            className="-ml-0.5 inline-block rounded-r border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
            data-te-ripple-color="light"
            style={{
              backgroundColor:
                show === 'chart' ? 'rgba(0,0,0,0.3)' : 'transparent',
            }}
            onClick={() => setShow('chart')}
          >
            Chart
          </button>
        </div>

        {show === 'table' && (
          <Table
            data={tableData as IGroupedFinding[]}
            rawFindingsCounts={rawFindingCounts}
          />
        )}

        {show === 'chart' && (
          <>
            <div className="flex justify-center p-20 row-auto">
              <div className="w-full md:w-50">
                <PieChart data={severityPercentageChartData(groupedFindings)} />
              </div>
            </div>
            <div className="row-auto">
              <Legend data={severityPercentageChartData(groupedFindings)} />
            </div>
          </>
        )}
      </div>
    )
}
