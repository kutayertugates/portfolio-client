<script setup></script>

<template>
  <section
    aria-labelledby="home_focus_title"
    class="border-b border-zinc-200 dark:border-zinc-800"
  >
    <div class="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-2xl">
          <p class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
            02 — Çalışma alanları
          </p>

          <h2
            id="home_focus_title"
            class="mt-6 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            Aynı problemi iki farklı ölçekte çözüyorum.
          </h2>
        </div>

        <p class="max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Mimariyi projeye göre kurarım. Kullanılmayan soyutlama, ileride faiziyle ödenen bir
          borçtur.
        </p>
      </div>

      <div
        class="mt-14 grid gap-10 border-t border-zinc-200 pt-10 sm:grid-cols-3 sm:gap-8 dark:border-zinc-800"
      >
        <div>
          <p class="font-mono text-xs text-zinc-500">01</p>
          <h3 class="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Web uygulamaları
          </h3>
          <p class="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Vue 3 ve Node.js ile hızlı açılan, bakımı kolay uygulamalar. Durum yönetimi, API
            tasarımı ve dağıtım sürecini birlikte ele alır; arayüz ile servis arasında kopukluk
            bırakmam.
          </p>

          <p class="mt-6 font-mono text-xs leading-6 text-zinc-500">
            Vue 3 · TypeScript · Node.js · Tailwind CSS
          </p>
        </div>

        <div>
          <p class="font-mono text-xs text-zinc-500">02</p>
          <h3 class="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Gömülü sistemler
          </h3>
          <p class="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Sınırlı kaynakta çalışan firmware: sensör okuma, haberleşme protokolleri ve düşük güç
            tüketimi. Donanımın verdiği kısıtları yazılım tarafında gizlemek yerine tasarıma dahil
            ederim.
          </p>

          <p class="mt-6 font-mono text-xs leading-6 text-zinc-500">
            C/C++ · ARM Cortex-M · RTOS · I2C · SPI · UART
          </p>
        </div>

        <div>
          <p class="font-mono text-xs text-zinc-500">03</p>
          <h3 class="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Servis ve altyapı
          </h3>
          <p class="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Linux, Docker ve CI/CD ile geliştirmeden üretime kadar tekrarlanabilir bir akış.
            Ortam farklarından kaynaklanan sürprizleri minimuma indirir, kurulumu belgelerim.
          </p>

          <p class="mt-6 font-mono text-xs leading-6 text-zinc-500">
            Linux · Docker · Git · CI/CD
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
