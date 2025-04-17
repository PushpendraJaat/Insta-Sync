import ActivateAutomationButton from '@/components/global/activate-automation-button'
import { PencilDualToneBlack } from '@/icons/pencil-icon'
import { ChevronRight } from 'lucide-react'
import React from 'react'

type Props = {
  id: string
}

const AutomationsBreadCrumb = ({ id }: Props) => {
  //TODO GET AUTOMATIONS DATA
  //todo: user mutation stuff to update the automations
  return (
    <div className='rounded-full w-full p-5 bg-[#18181b1a] flex items-center'>
      <div className='flex items-center gap-x-3 min-w-0'>
        <p className='text-[#9b9ca0] truncate'>Automations</p>
        <ChevronRight className='flex-shrink-0' color='#9b9ca0' />
        <span className='flex gap-x-3 items-center min-w-0'>
          {/* todo show editing data */}
          <p className='text-[#9b9ca0] truncate'>This is the automation title</p>
          <span className='cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4'>
            <PencilDualToneBlack />
          </span>
        </span>
      </div>
      <div className='flex items-center gap-x-5 ml-auto'>
        <p className='hidden md:block text-[#9b9ca0]/60 text-sm truncate min-w-0'>All updates are automatically saved</p>
        <div className='flex gap-x-5 flex-shrink-0'>
          <p className='text-[#9b9ca0] text-sm truncate min-w-0'>Changes Saved</p>
          {/* <p className='text-[#9b9ca0] text-sm truncate min-w-0'>Undo | Redo</p> */}
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  )
}

export default AutomationsBreadCrumb
