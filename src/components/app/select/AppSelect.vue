<script setup lang="ts" generic="T extends string">
import {
  SelectContent,
  SelectIcon,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'radix-vue'
import { computed, ref } from 'vue'

import AppIcon from '@/components/app/icon/AppIcon.vue'
import type { DataItem } from '@/types/dataItem.type'

import AppSelectItem from './AppSelectItem.vue'
import AppSelectScrollDownButton from './AppSelectScrollDownButton.vue'
import AppSelectScrollUpButton from './AppSelectScrollUpButton.vue'

const props = withDefaults(
  defineProps<{
    id?: null | string
    isInvalid?: boolean
    modelValue: T | null
    options: DataItem<T>[]
  }>(),
  {
    id: null,
    isInvalid: false,
  },
)

const emit = defineEmits<{
  'blur': []
  'update:modelValue': [value: T | null]
}>()

const isOpen = ref<boolean>(false)

const model = computed<T | undefined>({
  get: () => props.modelValue ?? undefined,
  set: (value) => {
    emit('update:modelValue', value ?? null)
  },
})

const selectedValueLabel = computed<null | string>(() => {
  const selectedOption = props.options.find(option => option.value === model.value) ?? null
  return selectedOption?.label ?? null
})

function onBlur(): void {
  emit('blur')
}

function onTriggerBlur(): void {
  if (!isOpen.value) {
    onBlur()
  }
}
</script>

<template>
  <div>
    <SelectRoot
      v-model="model"
      v-model:open="isOpen"
    >
      <SelectTrigger
        :id="id"
        :class="{
          'border-input-border focus-visible:ring-ring': !props.isInvalid,
          'border-destructive focus-visible:ring-destructive': props.isInvalid,
        }"
        class="flex h-10 w-full items-center justify-between rounded-input border border-solid bg-input px-3 ring-offset-background duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        @blur="onTriggerBlur"
      >
        <SelectValue
          :class="{
            'text-input-placeholder': model === undefined,
          }"
          class="truncate text-sm"
          placeholder="Select an option"
        >
          {{ selectedValueLabel }}
        </SelectValue>

        <SelectIcon :as-child="true">
          <AppIcon
            class="text-muted-foreground"
            icon="chevronDown"
            size="default"
          />
        </SelectIcon>
      </SelectTrigger>

      <SelectPortal>
        <Transition
          enter-active-class="duration-150"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="duration-150"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-if="isOpen">
            <SelectContent
              :force-mount="true"
              align="center"
              class="relative overflow-hidden rounded-popover bg-background shadow-popover-shadow"
              position="popper"
            >
              <AppSelectScrollUpButton />

              <SelectViewport class="max-h-[25rem] p-1.5">
                <AppSelectItem
                  v-for="option of props.options"
                  :key="option.label"
                  :value="option.value"
                >
                  {{ option.label }}
                </AppSelectItem>
              </SelectViewport>

              <AppSelectScrollDownButton />
            </SelectContent>
          </div>
        </Transition>
      </SelectPortal>
    </SelectRoot>
  </div>
</template>

<style>
.select-content {
  width: var(--radix-select-trigger-width);
  max-height: var(--radix-select-content-available-height);
}
</style>
