import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import ActiveAutomationsIcon from '@/icons/active-automations'

const ActivateAutomationButton = () => {
  //todo: setup optimistic ui
  //fetch some automations data
  return <Button className='lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352cc] font-medium to-[#1c2d70] ml-4'>
    {/* todo: set loading */}
    <Loader state={false}>
      <ActiveAutomationsIcon />
      <p className='lg:inline hidden'>
        Activate
        {/* { data?.data?.active ? 'Disable' : 'Activate'} */}
      </p>
    </Loader>
  </Button>
}
export default ActivateAutomationButton
