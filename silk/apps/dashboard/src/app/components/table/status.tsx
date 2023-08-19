import React from 'react'
import { upperCase, startCase } from 'lodash'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import clsx from 'clsx'

import './table.css'
import { updateStatus } from '../../util'

export const statuses: string[] = [
  'open',
  'in_progress',
  'halted',
  'cancelled',
  'complete',
]

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

export const Status: React.FC<{ id: string; value: string }> = ({
  id,
  value,
}) => {
  const color = statusColorMap[value]
  const [showPopover, setShowPopover] = React.useState<boolean>(false)
  const queryClient = useQueryClient()
  const { mutate } = useMutation(updateStatus, {
    onSettled: () => queryClient.invalidateQueries(['findings']),
  })

  const handleUpdateStatus = async (status: string) => {
    await mutate({ id, status })
    setShowPopover(false)
  }

  return (
    <>
      <div className="relative">
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
            className="absolute w-max whitespace-normal break-words  border  bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 focus:outline-none"
          >
            {statuses.map((status: string) => (
              <div
                className="bg-white hover:bg-gray hover:font-bold p-2 text-base cursor-pointer"
                onClick={() => handleUpdateStatus(status)}
              >
                {startCase(status)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="status cursor-pointer "
        style={{ backgroundColor: statusColorMap[value] }}
        onClick={() => {
          setShowPopover((state) => !state)
        }}
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
