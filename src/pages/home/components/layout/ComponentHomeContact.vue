<script setup>
import config from '@/config';
import { RouterLink } from 'vue-router'
</script>

<template>
  <section aria-labelledby="home_contact_title">
    <div class="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div
        class="rounded-md border border-zinc-200 bg-zinc-50 p-8 sm:p-12 lg:p-16 dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div class="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div class="lg:col-span-8">
            <p class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
              04 — İletişim
            </p>

            <h2
              id="home_contact_title"
              class="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
            >
              Bir sonraki adımı birlikte netleştirelim.
            </h2>

            <p class="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Kısa bir brief yeterli. Problemi, kısıtları ve zaman planını konuşur; işin kapsamını
              ilk görüşmede netleştiririz.
            </p>
          </div>

          <div class="lg:col-span-4 lg:text-right">
            <RouterLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400"
            >
              İletişime geç
            </RouterLink>

            <p class="mt-4 font-mono text-xs text-zinc-500">veya doğrudan yazın</p>

            <a
              :href="`mailto:${config.contacts.email}`"
              class="mt-2 inline-block rounded-md font-mono text-sm text-zinc-900 underline-offset-4 transition-colors hover:text-indigo-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-zinc-50 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400"
            >
              {{ config.contacts.email }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
