import React, { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'

interface DataItem {
  id: number
  name: string
  value: number
}

const data: DataItem[] = [
  { id: 1, name: 'Item 1', value: 30 },
  { id: 2, name: 'Item 2', value: 50 },
  { id: 3, name: 'Item 3', value: 20 },
]

export const Dashboard: React.FC = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

  const handleRowClick = (rowId: number) =>
    setExpandedRow(rowId === expandedRow ? null : rowId)

  return (
    <div className="grid grid-cols-3 gap-4 p-8">
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
          <tbody>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <tr
                  className={`cursor-pointer ${
                    expandedRow === item.id ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => handleRowClick(item.id)}
                >
                  <td className="border p-2">{item.id}</td>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.value}</td>
                </tr>
                {expandedRow === item.id && (
                  <tr key={`expanded-${item.id}`}>
                    <td colSpan={3} className="border p-2">
                      {/* Additional data to display when row is expanded */}
                      {/* Replace this with your actual content */}
                      More details for Item {item.id}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pie Chart */}
      <div className="col-span-1">
        <div className="flex justify-center items-center h-full">
          <PieChart
            data={data.map((item) => ({
              title: item.name,
              value: item.value,
              color: `#${((Math.random() * 0xffffff) << 0).toString(16)}`,
            }))}
            radius={40}
            animate
          />
        </div>
      </div>
    </div>
  )
}
