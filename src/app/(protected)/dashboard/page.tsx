import { onBoardUser } from '@/actions/user'
import React from 'react'

const dashboard = async () => {
  const user = await onBoardUser()
    //Server Action onboard the user
  return <div></div>
   
}

export default dashboard
