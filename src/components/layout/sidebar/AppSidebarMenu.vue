<script setup lang="ts">
import type { MenuItem } from '@/models/components/sidebar.type'

import AppSidebarMenuItem from './AppSidebarMenuItem.vue'

const { isSidebarOpen, menuItems } = defineProps<{
	isSidebarOpen: boolean
	menuItems: MenuItem[]
}>()
</script>

<template>
	<nav
		class="duration-200"
		:class="[isSidebarOpen ? 'p-6' : 'px-1 py-6']"
	>
		<ul>
			<li>
				<AppSidebarMenuItem
					v-for="item in menuItems"
					:key="item.label"
					:is-sidebar-open="isSidebarOpen"
					:menu-item="item"
				/>
			</li>
		</ul>
	</nav>
</template>
