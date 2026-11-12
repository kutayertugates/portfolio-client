<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section
    aria-labelledby="home_about_title"
    class="border-b border-zinc-200 dark:border-zinc-800"
  >
    <div
      class="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28"
    >
      <div class="lg:col-span-7">
        <p class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
          01 — Hakkımda
        </p>

        <h2
          id="home_about_title"
          class="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
        >
          Kodun iki yakasında çalışıyorum: tarayıcıda ve kart üzerinde.
        </h2>

        <div class="mt-8 max-w-xl space-y-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          <p>
            Bir arayüzü yazarken yalnızca ekranda görüneni değil, o ekranı besleyen servisi ve
            servisin konuştuğu donanımı da düşünürüm. Bu yüzden mimari kararların çoğunu, henüz
            kod yazılmadan veririm.
          </p>
          <p>
            Web tarafında Vue ve Node.js ile sürdürülebilir uygulamalar kuruyorum; gömülü tarafta
            C/C++ ile sınırlı kaynakta çalışan firmware geliştiriyorum. Sensörden gelen verinin bir
            panelde anlam kazandığı noktalarda işin tamamını tek elden görebilmek, en büyük
            avantajım.
          </p>
        </div>

        <RouterLink
          to="/about"
          class="mt-10 inline-flex items-center rounded-md text-sm font-medium text-indigo-600 underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-indigo-400 dark:focus-visible:outline-indigo-400"
        >
          Hakkımda daha fazlası
        </RouterLink>
      </div>

      <aside class="lg:col-span-5 lg:pt-16">
        <dl
          class="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800"
        >
          <div class="grid grid-cols-3 gap-4 py-5">
            <dt class="font-mono text-xs uppercase tracking-widest text-zinc-500">Odak</dt>
            <dd class="col-span-2 text-sm leading-6 text-zinc-900 dark:text-zinc-50">
              Web uygulamaları, gömülü firmware ve ikisini bağlayan servisler
            </dd>
          </div>

          <div class="grid grid-cols-3 gap-4 py-5">
            <dt class="font-mono text-xs uppercase tracking-widest text-zinc-500">Yaklaşım</dt>
            <dd class="col-span-2 text-sm leading-6 text-zinc-900 dark:text-zinc-50">
              Önce problemi ve kısıtları anlamak, sonra ihtiyaç kadar mimari kurmak
            </dd>
          </div>

          <div class="grid grid-cols-3 gap-4 py-5">
            <dt class="font-mono text-xs uppercase tracking-widest text-zinc-500">Çalışma</dt>
            <dd class="col-span-2 text-sm leading-6 text-zinc-900 dark:text-zinc-50">
              Uzaktan, proje bazlı
            </dd>
          </div>

          <div class="grid grid-cols-3 gap-4 py-5">
            <dt class="font-mono text-xs uppercase tracking-widest text-zinc-500">İletişim</dt>
            <dd class="col-span-2 text-sm leading-6">
              <a
                href="mailto:iletisim@kutayertug.com"
                class="rounded-md font-mono text-zinc-900 underline-offset-4 transition-colors hover:text-indigo-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-zinc-50 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400"
              >
                iletisim@kutayertug.com
              </a>
            </dd>
          </div>
        </dl>
      </aside>
    </div>
  </section>
</template>
