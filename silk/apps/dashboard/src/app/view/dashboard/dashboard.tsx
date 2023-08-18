import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { Loader, ErrorMessage, Table } from '../../components'

import { getAllFindings } from '../../util/queries'
import { severityPercentageChartData } from '../../util/chart'
import { PieChart, Legend } from '../../components/pie-chart'
import { IFinding } from './types'

export const Dashboard: React.FC = () => {
  const [show, setShow] = React.useState<'table' | 'chart'>('table')

  const { isLoading, error, data } = useQuery({
    queryKey: ['findings'],
    queryFn: getAllFindings,
  })

  if (isLoading) return <Loader />
  if (error) return <ErrorMessage error={error as Error} />

  if (data)
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
            data={
              data.sort((a: IFinding, b: IFinding) => a.id < b.id) as IFinding
            }
          />
        )}

        {show === 'chart' && (
          <>
            <div className="flex justify-center p-20 row-auto">
              <div className="w-full md:w-50">
                <PieChart data={severityPercentageChartData(data)} />
              </div>
            </div>
            <div className="row-auto">
              <Legend />
            </div>
          </>
        )}
      </div>
    )
}
