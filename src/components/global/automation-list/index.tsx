'use client'
import { usePath } from '@/hooks/user-nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import GradientButton from '../gradient-button'
import { Button } from '@/components/ui/button'

const AutomationList = () => {
  const { pathname } = usePath()
  return (
    <div className='flex flex-col gap-y-3'>
      <Link
        href={`${pathname}/1255222`}
        className='bg-[#1d1d1d] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automations flex border-[#545454]'
      >
        <div className='flex flex-col flex-1 items-start'>
          <h2 className='text-xl font-semibold'>
            Automation Name
          </h2>
          <p className='text-[#9b9ca0] text-sm font-light mb-2'>
            This is from the comment.
          </p>
          {/* todo - automation keywords */}
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
          <div className='rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1'>
            <p className='text-sm text-[#bfc0c3]'>
              No keywords
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="capatalize text-sm font-light text-[#9b9ca0]">
            {/* do to: attach and fetch */}
            April 5th 2025
          </p>
          {/* todo - render button based on listner */}
          <GradientButton type='BUTTON' className='w-full bg-gray-900 text-white hover:opacity-80  hover:bg-gray-900'>
          SmartAI
          </GradientButton>
          <Button className='bg-gray-800 hover:bg-gray-800 text-white'>
            Standard
          </Button>
        </div>
      </Link>
    </div>
  )
}

export default AutomationList
