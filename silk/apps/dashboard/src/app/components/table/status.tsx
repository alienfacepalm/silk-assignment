import React from 'react'
import { upperCase, startCase } from 'lodash'

import './table.css'

const statusColorMap: Record<string, string> = {
  open: '#e6cc00',
  in_progress: '#149414',
  halted: '#ff6600',
  cancelled: '#ff0000',
  complete: '#378bf1',
}

const statusProgressMap: Record<string, number> = {
  open: 0,
  in_progress: 50,
  halted: 50,
  cancelled: 100,
  complete: 100,
}

export const Status: React.FC<{ value: string }> = ({ value }) => {
  const color = statusColorMap[value]
  return (
    <>
      <div
        className="status"
        style={{ backgroundColor: statusColorMap[value] }}
      >
        {upperCase(startCase(value))}
      </div>
      <div
        className="progress"
        style={{
          background: `linear-gradient(to right, ${color} ${statusProgressMap[value]}%, transparent 50%)`,
        }}
      ></div>
    </>
  )
}
