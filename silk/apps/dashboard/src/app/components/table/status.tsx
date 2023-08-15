import React from 'react'
import { upperCase, startCase } from 'lodash'

import './table.css'

export const statusColorMap: Record<string, string> = {
  pending: '#e6cc00',
  in_progress: '#378805',
  halted: '#ff6600',
  cancelled: '#ff0000',
  complete: '#378bf1',
}

export const Status: React.FC<{ value: string }> = ({ value }) => (
  <>
    <div className="status" style={{ backgroundColor: statusColorMap[value] }}>
      {upperCase(startCase(value))}
    </div>
    <div className="progress"></div>
  </>
)
