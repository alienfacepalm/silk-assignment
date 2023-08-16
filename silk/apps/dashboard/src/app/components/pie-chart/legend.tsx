import React from 'react'

import { severityColorMap } from '../../util'

export const Legend: React.FC = () => (
  <div className="flex justify-center mt-4">
    {Object.keys(severityColorMap).map((severity, index) => (
      <div key={index} className="flex items-center mr-4">
        <div
          className="w-4 h-4 mr-2"
          style={{ backgroundColor: severityColorMap[severity] }}
        />
        <span>{severity}</span>
      </div>
    ))}
  </div>
)
