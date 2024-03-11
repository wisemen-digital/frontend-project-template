<script setup lang="ts">
import type { CalendarDate, DateValue } from '@internationalized/date'
import { parseDate } from '@internationalized/date'
import {
  DatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerContent,
  DatePickerField,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridHead,
  DatePickerGridRow,
  DatePickerHeadCell,
  DatePickerHeader,
  DatePickerHeading,
  DatePickerInput,
  DatePickerNext,
  DatePickerPrev,
  DatePickerRoot,
  DatePickerTrigger,
} from 'radix-vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppIcon from '../icon/AppIcon.vue'
import AppText from '../text/AppText.vue'
import { formatDateToDto } from '@/utils/date.util'

const props = withDefaults(
  defineProps<{
    id?: string | null
    modelValue: Date | null
    minDate?: Date | null
    maxDate?: Date | null
    isInvalid?: boolean
  }>(),
  {
    id: null,
    minDate: null,
    maxDate: null,
    isInvalid: false,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: Date | null]
}>()

const { locale } = useI18n()

const formattedLocale = computed<string>(() => locale.value.split('-')[0])

const model = computed<DateValue | undefined>({
  get: () => {
    if (props.modelValue === null) {
      return undefined
    }

    return parseDate(formatDateToDto(props.modelValue))
  },
  set: (value) => {
    if (value === undefined) {
      emit('update:modelValue', null)
      return
    }

    const dateValue = new Date(value.toString())
    emit('update:modelValue', dateValue)
  },
})

const minDate = computed<CalendarDate | null>(() => {
  if (props.minDate === null) {
    return null
  }

  return parseDate(formatDateToDto(props.minDate))
})

const maxDate = computed<CalendarDate | null>(() => {
  if (props.maxDate === null) {
    return null
  }

  return parseDate(formatDateToDto(props.maxDate))
})
</script>

<template>
  <div>
    <DatePickerRoot
      :id="id ?? undefined"
      v-model="model"
      :hour-cycle="24"
      :locale="formattedLocale as any"
      :max-value="maxDate ?? undefined"
      :min-value="minDate ?? undefined"
      :week-starts-on="1"
      weekday-format="short"
    >
      <DatePickerField v-slot="{ segments }">
        <div
          :class="{
            'border-destructive focus-within:ring-destructive': isInvalid,
            'border-input-border focus-within:ring-ring': !isInvalid,
          }"
          class="flex h-10 items-center justify-between rounded-input border border-solid bg-input py-2 pl-2.5 pr-2 duration-200 focus-within:ring-2 focus-within:ring-offset-2"
        >
          <div class="flex items-center">
            <template
              v-for="item in segments"
              :key="item.part"
            >
              <DatePickerInput
                v-if="item.part === 'literal'"
                :part="item.part"
              >
                {{ item.value }}
              </DatePickerInput>

              <DatePickerInput
                v-else
                :part="item.part"
                class="rounded p-0.5 text-input-foreground outline-none duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {{ item.value }}
              </DatePickerInput>
            </template>
          </div>
          <DatePickerTrigger
            class="rounded p-1 outline-none duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <AppIcon
              class="text-input-foreground"
              icon="calendar"
            />
          </DatePickerTrigger>
        </div>
      </DatePickerField>

      <DatePickerContent class="rounded-popover bg-popover p-4 shadow-popover-shadow">
        <DatePickerCalendar v-slot="{ weekDays, grid }">
          <DatePickerHeader class="flex items-center justify-between">
            <DatePickerPrev>
              <AppIcon icon="chevronLeft" />
            </DatePickerPrev>

            <DatePickerHeading v-slot="{ headingValue }">
              <AppText
                class="font-medium"
                variant="body"
              >
                {{ headingValue }}
              </AppText>
            </DatePickerHeading>

            <DatePickerNext>
              <AppIcon icon="chevronRight" />
            </DatePickerNext>
          </DatePickerHeader>

          <div class="mt-6">
            <DatePickerGrid
              v-for="month in grid"
              :key="month.value.toString()"
            >
              <DatePickerGridHead>
                <DatePickerGridRow>
                  <DatePickerHeadCell
                    v-for="day in weekDays"
                    :key="day"
                  >
                    <AppText
                      class="font-medium"
                      variant="subtext"
                    >
                      {{ day }}
                    </AppText>
                  </DatePickerHeadCell>
                </DatePickerGridRow>
              </DatePickerGridHead>

              <DatePickerGridBody>
                <DatePickerGridRow
                  v-for="(weekDates, index) in month.rows"
                  :key="`weekDate-${index}`"
                >
                  <DatePickerCell
                    v-for="weekDate in weekDates"
                    :key="weekDate.toString()"
                    :date="weekDate"
                  >
                    <DatePickerCellTrigger
                      :day="weekDate"
                      :month="month.value"
                      class="relative flex size-10 items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-transparent text-sm text-input-foreground outline-none before:absolute before:bottom-1.5 before:hidden before:size-1 before:rounded-full before:bg-white focus:bg-muted-background data-[unavailable]:pointer-events-none data-[selected]:bg-primary data-[selected]:font-medium data-[disabled]:data-[selected]:text-primary-foreground data-[disabled]:text-input-foreground/25 data-[selected]:text-primary-foreground data-[unavailable]:text-input-disabled data-[unavailable]:line-through data-[today]:before:block data-[today]:before:bg-primary data-[today]:data-[selected]:before:bg-white"
                    />
                  </DatePickerCell>
                </DatePickerGridRow>
              </DatePickerGridBody>
            </DatePickerGrid>
          </div>
        </DatePickerCalendar>
      </DatePickerContent>
    </DatePickerRoot>
  </div>
</template>
