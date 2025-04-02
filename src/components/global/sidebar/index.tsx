"use client"

import { usePath } from '@/hooks/user-nav'
import LogoSmall from '@/svgs/logo-small'
import React from 'react'
import Items from './items'
import { Separator } from '@/components/ui/separator'
import ClerkAuthState from '../clerk-auth-state'
import HelpIcon from '@/icons/help-icon'
import SubscriptionPlan from '../subscription-plan'
import UpgradeCard from './upgrade'


type Props = {
    slug: string
    state: boolean
}

const Sidebar = ({ slug, state }: Props) => {
    const { page, pathname } = usePath()
    return (
        <>
            <div className='w-[250px] border-[1px] radial fixed left-0 lg:inline-block border-[#545454] 
        bg-gradient-to-b from-[#0e0e0e] via-[#110b09] to-[#0e0e0e] 
        hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden'>


                <div className='flex flex-col gap-y-5 w-full p-3 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding 
        backdrop-filter backdrop--blur__safari backdrop-blur-3xl'>
                    <div className='flex gap-x-2 items-center p-5 justify-center'>
                        <LogoSmall />
                    </div>
                    <div className='flex-col py-3'>
                        <Items page={page} slug={slug} />
                    </div>
                    <div className='px-16'>
                        <Separator
                            orientation='horizontal'
                            className='bg-[#5C5C5f]'
                        />
                    </div>
                    <div className='px-3 flex flex-col gap-y-5'>
                        <div className='flex gap-x-2'>
                            <ClerkAuthState />
                            <p className='text-[#9b9ca0]'>Profile</p>
                        </div>
                        <div className='flex gap-x-3'>
                            <HelpIcon />
                            <p className='text-[#9b9ca0]'>Help</p>
                        </div>
                    </div>
                    <SubscriptionPlan type='FREE'>
                        <div className='flex-1 flex flex-col justify-end'>
                            <UpgradeCard />
                        </div>
                    </SubscriptionPlan>
                </div>
            </div>


        </>
    )
}

export default Sidebar
