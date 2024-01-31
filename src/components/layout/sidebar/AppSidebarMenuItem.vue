<script setup lang="ts">
import AppTypedRouterLink from '@/components/core/AppTypedRouterLink.vue'
import type { MenuItem } from '@/models/components/sidebar.type'
import AppIcon from '@/ui/components/icon/AppIcon.vue'

const { isSidebarOpen, menuItem } = defineProps<{
	isSidebarOpen: boolean
	menuItem: MenuItem
}>()
</script>

<template>
	<AppTypedRouterLink
		v-slot="{ isActive }"
		class="block"
		:to="menuItem.to"
	>
		<div
			class="flex h-11 items-center gap-x-3 overflow-hidden rounded-lg duration-200"
			:class="[isActive ? 'bg-primary' : 'bg-transparent', isSidebarOpen ? ' px-4' : 'px-5']"
		>
			<AppIcon
				class="h-4 w-4 flex-shrink-0"
				:class="[isActive ? 'text-primary-foreground' : 'text-muted-foreground']"
				:icon="menuItem.icon"
			/>

			<div class="relative flex h-full items-center">
				<Transition
					enter-active-class="transition duration-200 absolute"
					enter-from-class="opacity-0"
					enter-to-class="opacity-100"
					leave-active-class="transition duration-200 absolute"
					leave-from-class="opacity-100"
					leave-to-class="opacity-0"
				>
					<AppText
						v-if="isSidebarOpen"
						class="font-medium"
						:class="[isActive ? 'text-primary-foreground' : 'text-muted-foreground']"
						variant="subtext"
					>
						{{ menuItem.label }}
					</AppText>
				</Transition>
			</div>
		</div>
	</AppTypedRouterLink>
</template>
