import type { Icon } from '@/icons/icon.type'
import type { RouteLocationTyped } from '@/plugins/router/router.plugin'

export interface MenuItem {
	icon: Icon
	label: string
	to: RouteLocationTyped
}
