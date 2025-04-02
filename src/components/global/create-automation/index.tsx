import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import AutomationDualToneIcon from '@/icons/automations-icon'

const CreateAutomation = () => {
  return <Button className='lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352cc] font-medium to-[#1c2070]'>
    <Loader state={false}>
      <AutomationDualToneIcon />
      <p className='lg:inline hidden'>Create an Automation</p>
    </Loader>
  </Button>
}

export default CreateAutomation
