'use client'

import { useQueryAutomation } from '@/hooks/user-queries'
import React from 'react'
import ActiveTrigger from './active'

type Props = {
  id: string
}

const Trigger = ({ id }: Props) => {

  const { data } = useQueryAutomation(id)

  // if( data?.data && data?.data?.trigger.length > 0){

  //todo -  {data?.data?.trigger[0].type} 
  return <div className='flex flex-col gap-y-6 items-center'>
    <ActiveTrigger 
    type={'COMMENT'}
    keywords={[{
      id: 'dfasdf',
      word: 'getStarted',
      automationId: id
    }]}
    />
    {/* {data?.data?.trigger?.length>1 && <></>} */}
    </div>
  // }
}

export default Trigger
