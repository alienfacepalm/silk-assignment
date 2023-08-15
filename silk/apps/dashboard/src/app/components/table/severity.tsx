import React from 'react'

import { severityColorMap } from '../../util'

import './table.css'

export const Severity: React.FC<{ level: 'low' | 'medium' | 'high' }> = ({
  level,
}) => (
  <div
    className="severity"
    style={{
      backgroundColor: severityColorMap[level],
    }}
  >
    {level}
  </div>
)
