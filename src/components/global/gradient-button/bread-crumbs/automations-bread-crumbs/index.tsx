'use client'

import ActivateAutomationButton from '@/components/global/activate-automation-button'
import { Input } from '@/components/ui/input'
import { useEditAutomation } from '@/hooks/use-automations'
import { useMutationDataState } from '@/hooks/use-mutation-data'
import { useQueryAutomation } from '@/hooks/user-queries'
import { PencilDualToneBlack } from '@/icons/pencil-icon'
import { ChevronRight } from 'lucide-react'
import React from 'react'

type Props = {
  id: string
}

const AutomationsBreadCrumb = ({ id }: Props) => {
  const { data } = useQueryAutomation(id)
  const { edit, enableEdit, disableEdit, inputRef, isPending } = useEditAutomation(id)
  const { latestVariable } = useMutationDataState(['update-automation'])

  return (
    <div className='rounded-full w-full p-5 bg-[#18181b1a] flex items-center'>
      <div className='flex items-center gap-x-3 min-w-0'>
        <p className='text-[#9b9ca0] truncate'>Automations</p>
        <ChevronRight className='flex-shrink-0' color='#9b9ca0' />
        <span className='flex gap-x-3 items-center min-w-0'>
          {edit ? (
            <Input ref={inputRef as React.RefObject<HTMLInputElement>}
              placeholder={isPending ? latestVariable.variables : 'Add a new name'}
              className='bg-transparent h-auto outline-none text-base border-none p-0'
            />
          ) : (
            <p className='text-[#9b9ca0] truncate'>{
              latestVariable?.variables ? latestVariable?.variables.name : data?.data?.name
            }</p>
          )}

          {edit ? <></> : (
            <span className='cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4'
            onClick={enableEdit}
            >
              <PencilDualToneBlack />
            </span>
          )}
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
