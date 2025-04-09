import AutomationsBreadCrumb from '@/components/global/gradient-button/bread-crumbs/automations-bread-crumbs'
import React from 'react'

type Props = {
  params: {id: string}
}

//todo set meta data

const Page = ({params}: Props) => {
  //todo - prefetch automations data
  return (
    <div className='flex flex-col items-center gap-y-20'>
      <AutomationsBreadCrumb  id={params.id} />
    </div>
  )
}

export default Page
