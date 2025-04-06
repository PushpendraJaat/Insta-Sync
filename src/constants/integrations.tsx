type Props = {
    title: string
    icon: React.ReactNode
    description: string
    strategy: 'INSTAGRAM' | 'CRM'
}

export const INTEGRATION_CARDS: Props[] =[
    {
        title: 'Connect Instagram',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, ad.',
        icon: <InstagramIcon />,
        strategy: 'INSTAGRAM'
    },
    {
        title: 'Connect Salesforce',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, ad.',
        icon: <SalesForceIcon />,
        strategy: 'CRM'
    }
]