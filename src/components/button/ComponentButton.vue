<script setup>
import { computed } from 'vue'

const props = defineProps({
  style_type: { type: String, default: 'primary' },
})

const base_classes =
  'rounded-md px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2'

const style_classes = {
  primary:
    'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400',
  'outline-primary':
    'border border-indigo-600 text-indigo-600 hover:bg-zinc-50 focus-visible:outline-indigo-600 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-zinc-900 dark:focus-visible:outline-indigo-400',
}

const resolved_style = computed(() => style_classes[props.style_type] ?? style_classes.primary)
</script>

<template>
  <button :class="[base_classes, resolved_style]">
    <slot />
  </button>
</template>
