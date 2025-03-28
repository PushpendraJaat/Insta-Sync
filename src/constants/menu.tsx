import AutomationDualToneIcon from "@/icons/automations-icon"
import HomeDualToneIcon from "@/icons/home-icon"
import IntegrationDualToneIcon from "@/icons/integration-icon"
import SettingsDualToneIcon from "@/icons/settings-icon"
import {v4 as uuid} from "uuid"

type FieldProps = {
    label: string
    id: string
}

type SidebarProps = {
    icon: React.ReactNode
} & FieldProps

export const SIDEBAR_MENU: SidebarProps[] = [
    {
        id: uuid(),
        label: "home",
        icon: <HomeDualToneIcon />
    },
    {
        id: uuid(),
        label: "automations",
        icon: <AutomationDualToneIcon />
    },
    {
        id: uuid(),
        label: "integrations",
        icon: <IntegrationDualToneIcon />
    },
    {
        id: uuid(),
        label: "settings",
        icon: <SettingsDualToneIcon />
    },
]