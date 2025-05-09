import { INTEGRATION_CARDS } from '@/constants/integrations'
import React from 'react'
import IntegrationCard from './_components/integration-card/page'

const Page = () => {
  return (
    <div className='flex justify-center'>
      <div className="flex flex-col w-full lg:8/12 gap-y-5">
        {INTEGRATION_CARDS.map((card, index) => 
        <IntegrationCard 
        key={index}
        {...card} />
        )}
      </div>
    </div>
  )
}

export default Page
