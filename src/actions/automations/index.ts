"use server"

import { currentUser } from "@clerk/nextjs/server"
import { onCurrentUser } from "../user"
import { addListener, createAutomation, findAutomation, getAutomations, updateAutomation } from "./queries"


export const createAutomations = async (id?: string) => {
  const user = await onCurrentUser()
  try {
    const create = await createAutomation(user.id, id)
    if (create) return { status: 200, data: 'Automation created'}

    return { status: 404, data: 'Oops! something went wrong while creating automations'}
  } catch (error) {
    return {status: 500, data: 'Internal server error'}
  }
}

export const getAllAutomations = async () => {
  const user = await onCurrentUser()
  try {
    const automations = await getAutomations(user.id)
    if (automations) return { status: 200, data: automations.automations }

    return { status: 404, data: []}
  } catch (error) {
    return {status: 500, data: []}
  }
}

export const getAutomationsInfo = async (id: string) => {
  await onCurrentUser()
  try {
    const automation = await findAutomation(id)
    if(automation) return {status: 200, data: automation}

    return { status: 404 }
  } catch (error) {
    return { status: 500 }
  }
}

export const updateAutomationName = async (
  automationId: string,
  data: {
    name?:string,
    active?: boolean,
    automation?: string
  }
) => {
  await currentUser
  try {
    const update = await updateAutomation(automationId, data)
    if (update) {
      return { status: 200, data:'Automation successfully updated'}
    }

    return { status: 404, data:'Oops! could not find automation'}
  } catch (error) {
    return { status: 500, data:'Server error'}
  }
}

export const saveListener = async (
  automationId: string,
  listener: 'SMARTAI' | 'MESSAGE',
  prompt: string,
  reply?: string
) => {
  await onCurrentUser()
  try {
    const create = await addListener(automationId, listener, prompt, reply)
    if (create) return { status: 200, data: 'Listener created.'}

    return { status: 404, data: 'Cant save Listener.'}
  } catch (error) {
    return { status: 500, data: 'Something went wrong'}
  }
}