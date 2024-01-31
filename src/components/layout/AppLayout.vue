<script setup lang="ts">
import AppSidebar from '@/components/layout/sidebar/AppSidebar.vue'
</script>

<template>
	<div class="flex h-full flex-1">
		<AppSidebar />
		<RouterView />
	</div>
</template>
