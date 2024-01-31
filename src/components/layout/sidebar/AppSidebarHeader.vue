<script setup lang="ts">
const { isSidebarOpen } = defineProps<{
	isSidebarOpen: boolean
}>()
</script>

<template>
	<div
		class="h-28 pb-6 pt-12 duration-200"
		:class="[isSidebarOpen ? 'w-32 px-6' : 'w-16 px-2.5']"
	>
		<svg
			fill="none"
			height="100%"
			viewBox="0 0 72 35"
			width="100%"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_2134_114)">
				<path
					d="M46.0207 18.1762H40.5686V29.3024H46.0207V18.1762Z"
					fill="#53CE6B"
				/>
				<path
					d="M0 3.70952C0 1.5619 1.65079 0 3.98132 0C6.31184 0 7.96263 1.6119 7.96263 3.75714C7.96263 5.90238 6.26447 7.46667 3.98132 7.46667C1.69816 7.46667 0 5.90476 0 3.70952ZM0.729474 13.0786H7.18579V34.9905H0.729474V13.0786Z"
					fill="black"
				/>
				<path
					d="M12.7444 13.0786H19.1036L18.2652 16.6905C20.1102 13.7143 23.5231 12.1524 26.7252 12.1524C31.6775 12.1524 34.6381 15.2262 34.6381 20.8405V34.9929H28.1818V22.9881C28.1818 19.181 26.9194 17.7167 24.2004 17.7167C21.2399 17.7167 19.2007 20.3024 19.2007 24.2548V34.9905H12.7444V13.0786Z"
					fill="black"
				/>
				<path
					d="M61.9556 18.2047H51.1769L52.0177 13.0786H71.9077V13.5666L60.5961 29.769H71.7609L70.9225 34.9928H50.6914V34.5047L61.9556 18.2047Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_2134_114">
					<rect
						fill="white"
						height="34.9929"
						width="71.9076"
					/>
				</clipPath>
			</defs>
		</svg>
	</div>
</template>
