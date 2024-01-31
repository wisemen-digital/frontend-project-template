<script setup lang="ts">
import { computed, ref } from 'vue'

import type { MenuItem } from '@/models/components/sidebar.type'

import AppSidebarFooter from './AppSidebarFooter.vue'
import AppSidebarHeader from './AppSidebarHeader.vue'
import AppSidebarMenu from './AppSidebarMenu.vue'

const isSidebarOpen = ref<boolean>(false)

const menuItems = computed<MenuItem[]>(() => [
	{
		icon: 'search',
		label: 'About',
		to: {
			name: 'example-index',
		},
	},
	{
		icon: 'checkmark',
		label: 'Example',
		to: {
			name: 'login',
		},
	},
])

function handleMouseEnter(): void {
	isSidebarOpen.value = true
}

function handleMouseLeave(): void {
	isSidebarOpen.value = false
}
</script>

<template>
	<div
		class="sticky top-0 flex h-screen flex-col justify-between border-r border-solid border-border bg-muted-background duration-200"
		:class="[isSidebarOpen ? 'w-64' : 'w-16']"
		@mouseenter="handleMouseEnter"
		@mouseleave="handleMouseLeave"
	>
		<div>
			<AppSidebarHeader :is-sidebar-open="isSidebarOpen" />

			<AppSidebarMenu
				:is-sidebar-open="isSidebarOpen"
				:menu-items="menuItems"
			/>
		</div>

		<AppSidebarFooter :is-sidebar-open="isSidebarOpen" />
	</div>
</template>
