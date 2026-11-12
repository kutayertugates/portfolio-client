<script setup></script>

<template>
  <section
    aria-labelledby="about_principles_title"
    class="border-b border-zinc-200 dark:border-zinc-800"
  >
    <div class="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-2xl">
          <p class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
            02 — Prensipler
          </p>

          <h2
            id="about_principles_title"
            class="mt-6 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            Kod yazmadan önce netleştiririm.
          </h2>
        </div>

        <p class="max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Aşağıdaki üç başlık, projelerde verdiğim kararların çoğunu tek başına açıklıyor.
        </p>
      </div>

      <div
        class="mt-14 grid gap-10 border-t border-zinc-200 pt-10 sm:grid-cols-3 sm:gap-8 dark:border-zinc-800"
      >
        <div>
          <p class="font-mono text-xs text-zinc-500">01</p>
          <h3 class="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">Sadelik</h3>
          <p class="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Bir çözümü açıklamak için mimari diyagram çizmek gerekiyorsa, çözüm büyük ihtimalle
            gereğinden karmaşıktır. Önce en küçük çalışan hâli kurar, karmaşıklığı yalnızca
            gerçekten ihtiyaç duyulduğunda eklerim.
          </p>
        </div>

        <div>
          <p class="font-mono text-xs text-zinc-500">02</p>
          <h3 class="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Ölçülebilirlik
          </h3>
          <p class="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Performans ve güvenilirlik hisse değil, ölçüme dayanır. Yüklenme süresi, bellek
            kullanımı ve hata oranı gibi değerleri baştan takip eder; iyileştirmeyi tahmine
            bırakmam.
          </p>
        </div>

        <div>
          <p class="font-mono text-xs text-zinc-500">03</p>
          <h3 class="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Sürdürülebilirlik
          </h3>
          <p class="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Projeyi devralan kişi ben olmayacağım varsayımıyla yazarım. Net isimlendirme, kısa
            dokümantasyon ve tekrarlanabilir bir kurulum, uzun vadede en çok zaman kazandıran
            yatırımdır.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
