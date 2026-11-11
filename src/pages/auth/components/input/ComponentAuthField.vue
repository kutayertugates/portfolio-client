<script setup>
import { computed, useId } from 'vue'
import ComponentInput from '@/components/input/ComponentInput.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  id: { type: String, default: undefined },
  label: { type: String, required: true },
  required: { type: Boolean, default: false },
  error: { type: String, default: '' },
})

const model_value = defineModel({ type: String, default: '' })

const generated_id = useId()
const resolved_id = computed(() => props.id || generated_id)
const error_id = computed(() => resolved_id.value + '_error')
const described_by = computed(() => (props.error ? error_id.value : undefined))
</script>

<template>
  <div>
    <label
      :for="resolved_id"
      class="mb-2 block font-mono text-xs font-medium uppercase tracking-widest text-zinc-500"
    >
      {{ label }}
      <span v-if="required" aria-hidden="true" class="text-zinc-900 dark:text-zinc-50">*</span>
    </label>

    <ComponentInput
      v-bind="$attrs"
      class="block w-full"
      :id="resolved_id"
      v-model="model_value"
      :required="required"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="described_by"
    />

    <p
      v-if="error"
      :id="error_id"
      role="alert"
      class="mt-2 font-mono text-xs leading-5 text-rose-600 dark:text-rose-400"
    >
      {{ error }}
    </p>
  </div>
</template>
