<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section
    aria-labelledby="about_header_title"
    class="border-b border-zinc-200 dark:border-zinc-800"
  >
    <div
      class="mx-auto grid max-w-6xl gap-16 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:items-start lg:gap-12 lg:px-8 lg:py-28"
    >
      <div class="lg:col-span-7">
        <p class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
          Hakkımda
        </p>

        <h1
          id="about_header_title"
          class="mt-6 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50"
        >
          Kodun iki yakasında çalışan bir geliştirici.
        </h1>

        <p
          class="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400"
        >
          Web uygulamaları ve gömülü sistemler arasında köprü kuruyorum. Bir ürünün hem
          tarayıcıdaki yüzünü hem de donanımdaki temelini anlayarak tasarlıyor; iki tarafın
          birbirinden bağımsız varsayımlar üzerine kurulmasını engelliyorum.
        </p>

        <div class="mt-10 flex flex-wrap items-center gap-4">
          <RouterLink
            to="/projects"
            class="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400"
          >
            Projeleri incele
          </RouterLink>

          <RouterLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-md border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-900 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-zinc-800 dark:text-zinc-50 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400"
          >
            İletişime geç
          </RouterLink>
        </div>
      </div>

      <aside aria-label="Kısa özet" class="lg:col-span-5">
        <dl
          class="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800"
        >
          <div class="grid grid-cols-3 gap-4 py-5">
            <dt class="font-mono text-xs uppercase tracking-widest text-zinc-500">Rol</dt>
            <dd class="col-span-2 text-sm leading-6 text-zinc-900 dark:text-zinc-50">
              Web ve gömülü sistemler geliştiricisi
            </dd>
          </div>

          <div class="grid grid-cols-3 gap-4 py-5">
            <dt class="font-mono text-xs uppercase tracking-widest text-zinc-500">Odak</dt>
            <dd class="col-span-2 text-sm leading-6 text-zinc-900 dark:text-zinc-50">
              Arayüz, servis ve firmware arasında uçtan uca çözümler
            </dd>
          </div>

          <div class="grid grid-cols-3 gap-4 py-5">
            <dt class="font-mono text-xs uppercase tracking-widest text-zinc-500">Çalışma</dt>
            <dd class="col-span-2 text-sm leading-6 text-zinc-900 dark:text-zinc-50">
              Uzaktan, proje bazlı
            </dd>
          </div>

          <div class="grid grid-cols-3 gap-4 py-5">
            <dt class="font-mono text-xs uppercase tracking-widest text-zinc-500">Durum</dt>
            <dd class="col-span-2 text-sm leading-6 text-zinc-900 dark:text-zinc-50">
              Yeni işlere açık
            </dd>
          </div>
        </dl>
      </aside>
    </div>
  </section>
</template>
