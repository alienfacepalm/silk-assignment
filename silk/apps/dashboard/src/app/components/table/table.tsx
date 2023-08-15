import React from 'react'
import moment from 'moment'
import {
  useReactTable,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
} from '@tanstack/react-table'

import { Severity } from './severity'
import { IGroupedFinding } from '../../view/dashboard/types'
import { getRawFindingsCountsById } from '../../util'

import './table.css'

export const Table: React.FC<{
  data: IGroupedFinding[]
  handleRowClick: (rowId: number) => void
}> = ({ data, handleRowClick }) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const columns = React.useMemo<ColumnDef<IGroupedFinding>[]>(
    () => [
      {
        header: 'Grouped Findings',
        columns: [
          {
            accessorKey: 'id',
            cell: (info) => info.getValue(),
            header: () => <span>ID</span>,
          },
          {
            accessorFn: (row) => row.severity,
            id: 'severity',
            cell: (info) => <Severity level={info.getValue()} />,
            header: () => <span>SEVERITY</span>,
          },
          {
            accessorFn: (row) => row.grouped_finding_created,
            id: 'time',
            cell: (info) => moment(info.getValue()).format('LLL'),
            header: () => <span>TIME</span>,
          },
          {
            accessorFn: (row) => row.sla,
            id: 'sla',
            cell: (info) => moment(info.getValue()).format('LLL'),
            header: () => <span>SLA</span>,
          },
          {
            accessorFn: (row) => row.description,
            id: 'description',
            cell: (info) => info.getValue(),
            header: () => <span>DESCRIPTION</span>,
          },
          {
            accessorFn: (row) => row.security_analyst,
            id: 'security_analyst',
            cell: (info) => info.getValue(),
            header: () => <span>SECURITY ANALYST</span>,
          },
          {
            accessorFn: (row) => row.owner,
            id: 'owner',
            cell: (info) => info.getValue(),
            header: () => <span>OWNER</span>,
          },
          {
            accessorFn: (row) => row.workflow,
            id: 'workflow',
            cell: (info) => info.getValue(),
            header: () => <span>WORKFLOW</span>,
          },
          {
            accessorFn: (row) => row.status,
            id: 'status',
            cell: (info) => info.getValue(),
            header: () => <span>STATUS</span>,
          },
          {
            accessorFn: () => (row) => getRawFindingsCountsById(row.id), // calculate from raw findings query
            id: 'number_of_findings',
            cell: (info) => info.getValue(),
            header: () => <span>NUMBER OF FINDINGS</span>,
          },
        ],
      },
    ],
    [],
  )

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  })

  return (
    <div className="p-2">
      <div className="h-2" />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, 10)
            .map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
        </tbody>
      </table>
      <div>{table.getRowModel().rows.length} Rows</div>
      <pre>{JSON.stringify(sorting, null, 2)}</pre>
    </div>
  )
}
