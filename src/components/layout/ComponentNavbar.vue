<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
  >
    <div
      class="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 lg:px-8"
    >
      <input
        id="main_menu_toggle"
        type="checkbox"
        aria-controls="main_navigation"
        class="peer sr-only md:hidden"
      />

      <RouterLink
        to="/"
        class="flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400"
      >
        <span
          aria-hidden="true"
          class="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 font-mono text-xs font-semibold text-zinc-900 dark:border-zinc-800 dark:text-zinc-50"
        >
          KE
        </span>
        <span
          class="font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          kutayertug<span class="text-zinc-500">.com</span>
        </span>
      </RouterLink>

      <nav
        id="main_navigation"
        aria-label="Ana menü"
        class="absolute inset-x-0 top-full z-10 hidden flex-col gap-1 border-b border-zinc-200 bg-white p-4 peer-checked:flex md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:p-0 dark:border-zinc-800 dark:bg-zinc-950"
      >
        <RouterLink
          to="/"
          class="rounded-md px-3 py-3 text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 aria-[current=page]:font-semibold aria-[current=page]:text-indigo-600 md:px-0 md:py-0 dark:text-zinc-400 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400 dark:aria-[current=page]:text-indigo-400"
        >
          Anasayfa
        </RouterLink>

        <RouterLink
          to="/about"
          class="rounded-md px-3 py-3 text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 aria-[current=page]:font-semibold aria-[current=page]:text-indigo-600 md:px-0 md:py-0 dark:text-zinc-400 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400 dark:aria-[current=page]:text-indigo-400"
        >
          Hakkımda
        </RouterLink>

        <RouterLink
          to="/blog"
          class="rounded-md px-3 py-3 text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 aria-[current=page]:font-semibold aria-[current=page]:text-indigo-600 md:px-0 md:py-0 dark:text-zinc-400 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400 dark:aria-[current=page]:text-indigo-400"
        >
          Blog
        </RouterLink>

        <RouterLink
          to="/projects"
          class="rounded-md px-3 py-3 text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 aria-[current=page]:font-semibold aria-[current=page]:text-indigo-600 md:px-0 md:py-0 dark:text-zinc-400 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400 dark:aria-[current=page]:text-indigo-400"
        >
          Projeler
        </RouterLink>
      </nav>

      <RouterLink
        to="/contact"
        class="hidden items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:inline-flex dark:focus-visible:outline-indigo-400"
      >
        İletişime geç
      </RouterLink>

      <label
        for="main_menu_toggle"
        class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-zinc-200 text-zinc-600 transition-colors hover:text-zinc-900 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-indigo-600 md:hidden dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-50 dark:peer-focus-visible:outline-indigo-400"
      >
        <i class="fa-solid fa-bars text-base" aria-hidden="true"></i>
        <span class="sr-only">Menüyü aç veya kapat</span>
      </label>
    </div>
  </header>
</template>
