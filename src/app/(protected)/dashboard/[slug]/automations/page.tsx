import AutomationList from '@/components/global/automation-list'
import CreateAutomation from '@/components/global/create-automation'
import { Check } from 'lucide-react'
import React from 'react'

const Page = () => {
  
  return (
    <div className='grid grid-cols-1 lg:grid-cols-6 gap-5 lg:ml-4'>
      <div className='lg:col-span-4'>
          <AutomationList />
      </div>
      <div className='lg:col-span-2'>
        <div className='flex flex-col rounded-xl bg-gray-900 gap-y-6 p-5 border-[1px] overflow-hidden border-in-active'>
          <div>
            <h2 className='text-xl'>Automations</h2>
            <p className='text-slate-400'>
              Your live automations will show here.
            </p>
          </div>
          <div className='flex flex-col gap-y-3'>
          {[1,2,3].map((item) => (
            <div 
            key={item}
            className='flex items-start justify-between'>
              <div className='flex flex-col'>
                <h3 className='font-medium'>
                  Direct traffic towards website
                </h3>
                <p className='text-slate-400 text-sm'>October 5th 2025</p>
              </div>
              <Check />
            </div>
          ))}
          </div>
          <CreateAutomation />
        </div>
       
      </div>
    </div>
  )
}

export default Page
