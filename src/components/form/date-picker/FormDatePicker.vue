<script setup lang="ts">
import { computed } from 'vue'

import FormGroup from '../group/FormGroup.vue'
import FormLabel from '../label/FormLabel.vue'
import AppDatePicker from '@/components/app/date-picker/AppDatePicker.vue'
import { useIsFormInvalid } from '@/composables/form/form.composable'
import type { FormErrors } from '@/types/form/formErrors.type'
import { generateUuid } from '@/utils/uuid/generateUuid.util'

const props = withDefaults(
  defineProps<{
    minDate?: Date | null
    maxDate?: Date | null
    isDisabled?: boolean
    isRequired?: boolean
    errors: FormErrors
    isTouched: boolean
    label: string
  }>(),
  {
    minDate: null,
    maxDate: null,
    isDisabled: false,
    isRequired: false,
  },
)

const model = defineModel<Date | null>({
  required: true,
})

const id = `form-date-picker-${generateUuid()}`

const errors = computed<FormErrors | undefined>(() => props.errors)
const isTouched = computed<boolean>(() => props.isTouched ?? false)

const isFormInvalid = useIsFormInvalid(errors, isTouched)
</script>

<template>
  <FormGroup>
    <FormLabel
      v-if="label"
      :id="id"
      :is-disabled="props.isDisabled"
      :is-invalid="isFormInvalid"
      :is-required="props.isRequired"
      :label="props.label"
    />

    <AppDatePicker
      :id="id"
      v-model="model"
      :is-invalid="isFormInvalid"
      :max-date="maxDate"
      :min-date="minDate"
    />
  </FormGroup>
</template>
