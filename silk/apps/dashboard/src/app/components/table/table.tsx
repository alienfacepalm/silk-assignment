import React from 'react'
import moment from 'moment'
import {
  useReactTable,
  ExpandedState,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  getExpandedRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table'

import { Severity } from './severity'
import { Status } from './status'
import { IFinding } from '../../view/dashboard/types'

import './table.css'

export const Table: React.FC<{
  data: IFinding[]
}> = ({ data }) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [expanded, setExpanded] = React.useState<ExpandedState>({})

  const columns = React.useMemo<ColumnDef<IFinding>[]>(
    () => [
      {
        header: 'Grouped Findings',
        columns: [
          {
            accessorKey: 'id',
            cell: ({ row }) => (
              <div>
                {row.getCanExpand() ? (
                  <button
                    {...{
                      onClick: row.getToggleExpandedHandler(),
                      style: { cursor: 'pointer' },
                    }}
                  >
                    {row.getIsExpanded() ? '▼' : '▶'}
                  </button>
                ) : (
                  '○'
                )}
              </div>
            ),
            header: () => <span></span>,
          },
          {
            accessorFn: (row: IFinding) => row.severity,
            id: 'severity',
            cell: (info) => <Severity level={info.getValue()} />,
            header: () => <span>SEVERITY</span>,
          },
          {
            accessorFn: (row: IFinding) => row.grouped_finding_created,
            id: 'time',
            cell: (info) => moment(info.getValue()).format('L hh:mm'),
            header: () => <span>TIME</span>,
          },
          {
            accessorFn: (row: IFinding) => row.sla,
            id: 'sla',
            cell: (info) => moment(info.getValue()).format('L hh:mm'),
            header: () => <span>SLA</span>,
          },
          {
            accessorFn: (row: IFinding) => row.description,
            id: 'description',
            cell: (info) => info.getValue(),
            header: () => <span>DESCRIPTION</span>,
          },
          {
            accessorFn: (row: IFinding) => row.security_analyst,
            id: 'security_analyst',
            cell: (info) => info.getValue(),
            header: () => <span>SECURITY ANALYST</span>,
          },
          {
            accessorFn: (row: IFinding) => row.owner,
            id: 'owner',
            cell: (info) => info.getValue(),
            header: () => <span>OWNER</span>,
          },
          {
            accessorFn: (row: IFinding) => row.workflow,
            id: 'workflow',
            cell: (info) => info.getValue(),
            header: () => <span>WORKFLOW</span>,
          },
          {
            accessorFn: (row: IFinding) => row.status,
            id: 'status',
            cell: (info) => (
              <Status
                id={info.row.original._id}
                value={info.getValue()}
                type={info.row.getCanExpand() ? 'grouped' : 'raw'}
              />
            ),
            header: () => <span>STATUS</span>,
          },
          {
            accessorFn: (row: IFinding) => row.rawFindings?.length,
            id: 'number_of_findings',
            cell: (info) => (
              <div className={info.getValue() ? 'finding-count' : ''}>
                {info.getValue()}
              </div>
            ),
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
    state: { expanded, sorting },
    getSubRows: (row: IFinding) => row.rawFindings as any,
    onExpandedChange: setExpanded,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    autoResetPageIndex: false,
    debugTable: false,
  })

  return (
    <div className="p-2">
      <div className="h-2" />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
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
                        asc: ' ▴',
                        desc: ' ▾',
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              style={{
                backgroundColor: row.getCanExpand() ? 'transparent' : '#fefefa',
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          ◀◀
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          ◀
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          ▶
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          ▶▶
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
