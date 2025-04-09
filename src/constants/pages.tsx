import AutomationDualToneIcon from "@/icons/automations-icon"
import ContactsDualToneIcon from "@/icons/constacts-icon"
import HomeDualToneIcon from "@/icons/home-icon"
import IntegrationDualToneIcon from "@/icons/integration-icon"
import SettingsDualToneIcon from "@/icons/settings-icon"
import { features } from "process"

export const PAGE_BREAD_CRUMBS: string[] = [
    'contacts',
    'automations',
    'integrations',
    'settings',
]

type Props = {
    [page in string]: React.ReactNode
}

export const PAGE_ICON: Props = {
    AUTOMATIONS: <AutomationDualToneIcon />,
    CONTACTS: <ContactsDualToneIcon />,
    INTEGRATIONS: <IntegrationDualToneIcon/>,
    SETTINGS: <SettingsDualToneIcon/>,
    HOME: <HomeDualToneIcon />
}

export const PLANS = [
    {
        name: 'Free Plan',
        description: 'Perfect for getting started',
        price: '$0',
        features: [
            'Boost engagement with target responses',
            'Automate comment replies to enhance audience interaction',
            'Turn followers into customers with targeted messaging'
        ],
        cta: 'Get Started',
    },
    {
        name: 'Smart AI Plan',
        desription: 'Advanced features for power users',
        price: '$99',
        features: [
            'All feautes from Free Plan',
            'AI powered response generation',
            'Advanced analytics and insights',
            'Priority support and onboarding',
            'Custom brading options'
        ],
        cta: 'Upgrade Now',
    }
]