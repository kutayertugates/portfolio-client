<script setup>
import { ref } from 'vue';

const props = defineProps({
  maxPage: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['sendPage'])

const currentPage = ref(1);

function sendPage() {
  emit("sendPage", currentPage.value)
}

function nextPage() {
  currentPage.value += 1

  sendPage()
}

function previousPage() {
  if (currentPage.value <= 0) {
    currentPage.value = 1
  }
  currentPage.value -= 1

  sendPage()
}
</script>

<template>
  <nav
    aria-label="Blog sayfaları"
    class="mt-12 flex items-center justify-between gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800"
  >
    <button
      type="button"
      :disabled="currentPage == 1"
      @click="previousPage"
      class="inline-flex items-center gap-2 rounded-md border border-zinc-200 px-4 py-2 font-mono text-xs text-zinc-500 disabled:cursor-not-allowed disabled:opacity-60 dark:border-zinc-800 dark:text-zinc-500"
    >
      <i class="fa-solid fa-arrow-left text-xs" aria-hidden="true"></i>
      Önceki
    </button>

    <p class="font-mono text-xs text-zinc-500">
      Sayfa
      <span class="font-medium text-indigo-600 dark:text-indigo-400" aria-current="page">{{ String(currentPage).padStart(2, '0') }}</span>
    </p>

    <button
      type="button"
      :disabled="currentPage === props.maxPage"
      @click="nextPage"
      class="inline-flex items-center gap-2 rounded-md border border-zinc-200 px-4 py-2 font-mono text-xs text-zinc-900 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-60 dark:border-zinc-800 dark:text-zinc-50 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400"
    >
      Sonraki
      <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
    </button>
  </nav>
</template>
