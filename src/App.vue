<script setup>
import { RouterView } from 'vue-router'
import ComponentNavbar from '@/components/layout/ComponentNavbar.vue'
import ComponentFooter from '@/components/layout/ComponentFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
    <ComponentNavbar />

    <main class="flex-1">
      <RouterView />
    </main>

    <ComponentFooter />
  </div>
</template>
