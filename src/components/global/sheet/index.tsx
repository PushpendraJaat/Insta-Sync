import { Sheet as ShadecnSheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import React from 'react'

type Props = {
    trigger: React.ReactNode
    children: React.ReactNode
    className?: string
    side: 'left' | 'right'
}

const Sheet = ({ children, trigger, className, side }: Props) => {
    return (
        <ShadecnSheet>
            <SheetTrigger className={className}>
                {trigger}
            </SheetTrigger>
            <SheetContent side={side} className='p-0'>{children}</SheetContent>
        </ShadecnSheet>)
}

export default Sheet
