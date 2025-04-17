"use server"

import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { findUser } from "./queries"
import { refressToken } from "@/lib/fetch"
import { updateIntegration } from "../integrations/queries"

export const onCurrentUser = async () => {
  const user = await currentUser()
  if(!user) return redirect('sign-in')
  
  return user
}

export const onBoardUser = async () => {
  const user = await onCurrentUser()
  try {
    const found = await findUser(user.id)
    if(found){
      if(found.integration.length>0){
        const today = new Date()
        const time_left = found.integration[0].expiresAt?.getTime()! - today.getTime()
        const days = Math.round(time_left / (1000 * 3600 * 24))
        if(days < 5){
          const refress = await refressToken(found.integration[0].token)

          const today = new Date()
          const expire_date = today.setDate(today.getDate() + 60)
          
          const update_token = await updateIntegration(
            refress.access_token,
            new Date(expire_date),
            found.integration[0].id
          )
          if(!update_token){
            console.log('update token failed')
          }
        }
      }
      return {
        status: 200,
        data: {
          firstname: found.firstname,
          lastname: found.lastname
        },
      }
    }
    // const created = await createUser
  } catch (error) {
    console.log('error on boarding user', error)
  }
}