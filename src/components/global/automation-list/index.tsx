'use client'

import { usePath } from '@/hooks/user-nav'
import { cn, getMonth } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import GradientButton from '../gradient-button'
import { Button } from '@/components/ui/button'
import { useQueryAutomations } from '@/hooks/user-queries'
import CreateAutomation from '@/components/global/create-automation'

const AutomationList = () => {
  const { data } = useQueryAutomations()
  console.log(data)
  const { pathname } = usePath()

  if (data?.status !== 200 || data.data.length <= 0) {
    return <div className='h-[70vh] flex justify-center items-center flex-col gap-x-3'>
      <h3 className='text-lg  text-gray-400'>No Automations Created</h3>
      <CreateAutomation />
    </div>
  }

  return (
    <div className='flex flex-col gap-y-3'>
      {data.data!.map((automation) => (
        <Link
          key={automation.id}
          href={`${pathname}/${automation.id}`}
          className='bg-[#1d1d1d] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automations flex border-[#545454]'
        >
          <div className='flex flex-col flex-1 items-start'>
            <h2 className='text-xl font-semibold'>
              {automation.name}
            </h2>
            <p className='text-[#9b9ca0] text-sm font-light mb-2'>
              This is from the comment.
            </p>
            {automation.keywords.length > 0 ? (
              <div className='flex gap-x-2 flex-wrap mt-3'>
                <div className={cn('rounded-full px-4 py-1 capitalize',
                  (0 + 1) % 1 == 0 && 'bg-green-950/15 border-2 border-green-500',
                  (1 + 1) % 2 == 0 && 'bg-purple-950/15 border-2 border-purple-500',
                  (2 + 1) % 3 == 0 && 'bg-yellow-950/15 border-2 border-yellow-500',
                  (3 + 1) % 4 == 0 && 'bg-red-950/15 border-2 border-red-500'
                )}>
                  getstated

                </div>
              </div>
            ) : (
              <div className='rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1'>
                <p className='text-sm text-[#bfc0c3]'>
                  No Keywords
                </p>
              </div>
            )}

          </div>
          <div className="flex flex-col justify-between">
            <p className="capatalize text-sm font-light text-[#9b9ca0]">
              {getMonth(automation.createdAt.getUTCMonth() + 1)}{' '}{automation.createdAt.getUTCDate() === 1 ? `${automation.createdAt.getUTCDate()}st` : `${automation.createdAt.getUTCDate()}th`}{" "}{automation.createdAt.getFullYear()}
            </p>

            {automation.listener?.listener === 'SMARTAI' ? (
              <GradientButton type='BUTTON' className='w-full bg-gray-900 text-white hover:opacity-80  hover:bg-gray-900'>
                SmartAI
              </GradientButton>
            ) : (
              <Button className='bg-gray-800 hover:bg-gray-800 text-white'>
                Standard
              </Button>
            )}


          </div>
        </Link>
      ))}
    </div>
  )
}

export default AutomationList
