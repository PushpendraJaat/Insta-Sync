import { PencilDualToneBlack } from '@/icons/pencil-icon'
import { ChevronRight } from 'lucide-react'
import React from 'react'

const AutomationsBreadCrumb = () => {
  //TODO GET AUTOMATIONS DATA
  return (
    <div className='rounded-full w-full p-5 bg-[#18181b1a] flex justify-center items-center'>
      <div className='flex items-center gap-x-3'>
        <p className='text-[#9b9ca0]'>Automations</p>
        <ChevronRight color='#9b9ca0' />
        <span className='flex gap-x-3 items-center'>
          {/* todo show editing data */}
            <p className='text-[#9b9ca0]'>This is the automation title</p>
            <span className='cursor-pointer hover:opacity-75 duration-100 transition'>
              <PencilDualToneBlack />
            </span>
        </span>
      </div>
    </div>
  )
}

export default AutomationsBreadCrumb
