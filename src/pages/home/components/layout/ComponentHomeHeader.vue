<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section
    aria-labelledby="home_header_title"
    class="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
  >
    <div
      class="mx-auto grid max-w-6xl gap-16 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8 lg:py-32"
    >
      <div class="lg:col-span-7">
        <p class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
          Web ve Gömülü Sistemler Geliştiricisi
        </p>

        <h1
          id="home_header_title"
          class="mt-6 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50"
        >
          Projeye göre mimari kurar, gereksiz mühendislikten kaçınırım.
        </h1>

        <p
          class="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400"
        >
          Web ve gömülü sistemlerde hızlı, sürdürülebilir ve ihtiyaca göre ölçeklenen çözümler
          geliştiriyorum. Her projeye aynı kalıbı uygulamak yerine, problemi ve kısıtları anlayıp
          gerçekten ihtiyaç duyulan mimariyi kuruyorum.
        </p>

        <div class="mt-10 flex flex-wrap items-center gap-4">
          <RouterLink
            to="/projects"
            class="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400"
          >
            Projeleri incele
          </RouterLink>

          <RouterLink
            to="/blogs"
            class="inline-flex items-center justify-center rounded-md border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-900 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-zinc-800 dark:text-zinc-50 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400"
          >
            Yazıları oku
          </RouterLink>
        </div>
      </div>

      <aside class="hidden lg:col-span-5 lg:block">
        <div
          class="rounded-md border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <p class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
            Şu anda
          </p>

          <p class="mt-6 text-xl font-medium leading-8 text-zinc-900 dark:text-zinc-50">
            Temiz mimari, ölçülebilir performans ve gereksiz karmaşıklıktan uzak, sade sistemler
            üzerine çalışıyorum.
          </p>

          <div
            class="mt-10 flex items-center justify-between border-t border-zinc-200 pt-6 dark:border-zinc-800"
          >
            <span class="font-mono text-xs text-zinc-500">Yeni işlere açık</span>
            <span class="font-mono text-xs text-zinc-500">Uzaktan · Dünya geneli</span>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>
