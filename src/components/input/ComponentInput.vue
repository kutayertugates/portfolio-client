<script setup>
import { computed } from 'vue'

const props = defineProps({
  style_type: { type: String, default: 'primary' },
})

const model_value = defineModel({ type: String, default: '' })

const base_classes =
  'rounded-md px-3 py-2.5 font-mono text-sm transition-colors placeholder:text-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2'

const style_classes = {
  primary:
    'border border-zinc-200 bg-white text-zinc-900 focus-visible:border-indigo-600 focus-visible:outline-indigo-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus-visible:border-indigo-400 dark:focus-visible:outline-indigo-400',
  'outline-primary':
    'border border-indigo-600 bg-transparent text-zinc-900 focus-visible:outline-indigo-600 dark:border-indigo-400 dark:text-zinc-50 dark:focus-visible:outline-indigo-400',
}

const resolved_style = computed(() => style_classes[props.style_type] ?? style_classes.primary)
</script>

<template>
  <input v-model="model_value" :class="[base_classes, resolved_style]" />
</template>
