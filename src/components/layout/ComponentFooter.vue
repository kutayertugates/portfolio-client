<script setup>
import config from '@/config';
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
    <div class="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div class="flex flex-col gap-12 sm:flex-row sm:items-start sm:gap-16">
        <div class="max-w-sm sm:mr-auto">
          <RouterLink
            to="/"
            class="inline-flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400"
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

          <p class="mt-6 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {{ config.slogan }}
          </p>

          <a
            :href="`mailto:${config.contacts.email}`"
            class="mt-6 inline-block rounded-md font-mono text-sm text-zinc-900 underline-offset-4 transition-colors hover:text-indigo-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-zinc-50 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400"
          >
            {{ config.contacts.email }}
          </a>
        </div>

        <nav aria-label="Alt menü">
          <h2 class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
            Navigasyon
          </h2>

          <ul class="mt-4 space-y-3">
            <li>
              <RouterLink
                to="/"
                class="inline-block rounded-md py-1 text-sm text-zinc-600 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 aria-[current=page]:font-semibold aria-[current=page]:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400 dark:aria-[current=page]:text-indigo-400"
              >
                Anasayfa
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/about"
                class="inline-block rounded-md py-1 text-sm text-zinc-600 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 aria-[current=page]:font-semibold aria-[current=page]:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400 dark:aria-[current=page]:text-indigo-400"
              >
                Hakkımda
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/blog"
                class="inline-block rounded-md py-1 text-sm text-zinc-600 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 aria-[current=page]:font-semibold aria-[current=page]:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400 dark:aria-[current=page]:text-indigo-400"
              >
                Blog
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/projects"
                class="inline-block rounded-md py-1 text-sm text-zinc-600 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 aria-[current=page]:font-semibold aria-[current=page]:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400 dark:aria-[current=page]:text-indigo-400"
              >
                Projeler
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/contact"
                class="inline-block rounded-md py-1 text-sm text-zinc-600 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 aria-[current=page]:font-semibold aria-[current=page]:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400 dark:aria-[current=page]:text-indigo-400"
              >
                İletişim
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800"
      >
        <p class="font-mono text-xs text-zinc-500">© 2026 kutayertug.com. Tüm hakları saklıdır.</p>

        <a
          href="#"
          class="rounded-md font-mono text-xs text-zinc-500 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400"
        >
          Başa dön
        </a>
      </div>
    </div>
  </footer>
</template>
