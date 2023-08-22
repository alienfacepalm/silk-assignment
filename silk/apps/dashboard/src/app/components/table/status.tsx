import React from 'react'
import { upperCase, startCase } from 'lodash'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import clsx from 'clsx'

import { updateFindingStatus } from '../../util'

import './table.css'

export const statuses: string[] = [
  'open',
  'in_progress',
  'halted',
  'cancelled',
  'complete',
  'fixed',
]

const statusColorMap: Record<string, string> = {
  open: '#e6cc00',
  in_progress: '#149414',
  halted: '#ff6600',
  cancelled: '#ff0000',
  complete: '#378bf1',
  fixed: '#800080',
}

const statusProgressMap: Record<string, number> = {
  open: 0,
  in_progress: 50,
  halted: 50,
  cancelled: 100,
  complete: 100,
  fixed: 100,
}

export const Status: React.FC<{
  id: string
  type: 'grouped' | 'raw'
  value: string
}> = ({ id, type, value }) => {
  const color = statusColorMap[value]
  const [showPopover, setShowPopover] = React.useState<boolean>(false)
  const queryClient = useQueryClient()
  const { mutate } = useMutation(updateFindingStatus, {
    onSettled: () => queryClient.invalidateQueries(['findings']),
  })

  const handleUpdateStatus: (status: string) => Promise<void> = async (
    status: string,
  ) => {
    await mutate({ id, type, status })
    setShowPopover(false)
  }

  return (
    <>
      <div className="relative" onMouseLeave={() => setShowPopover(false)}>
        <div
          className={clsx(
            ['te-popover top-0 right-0 z-10'],
            !showPopover && 'hidden',
          )}
          id="popover"
          role="tooltip"
        >
          <div className="te-arrow"></div>
          <div
            data-popover="popover"
            className="absolute w-max whitespace-normal break-words border bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 focus:outline-none"
          >
            {statuses.map((status: string) => (
              <div
                className="bg-white p-2 text-base cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200"
                onClick={() => handleUpdateStatus(status)}
              >
                {startCase(status)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="status cursor-pointer"
        style={{ backgroundColor: statusColorMap[value] }}
        onClick={() => setShowPopover((state) => !state)}
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
