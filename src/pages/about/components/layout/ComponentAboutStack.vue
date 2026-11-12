<script setup></script>

<template>
  <section
    aria-labelledby="about_stack_title"
    class="border-b border-zinc-200 dark:border-zinc-800"
  >
    <div
      class="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28"
    >
      <div class="lg:col-span-5">
        <p class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
          03 — Araçlar
        </p>

        <h2
          id="about_stack_title"
          class="mt-6 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
        >
          Günlük iş akışımda kullandığım araçlar.
        </h2>

        <p class="mt-6 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Araç seçimini projenin kısıtlarına göre yaparım; alışkanlık yüzünden teknoloji
          dayatmam. Aşağıdaki liste en sık çalıştığım ortamları özetliyor.
        </p>
      </div>

      <div class="lg:col-span-7">
        <dl
          class="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800"
        >
          <div class="grid gap-3 py-6 sm:grid-cols-3 sm:gap-6">
            <dt class="font-mono text-xs uppercase tracking-widest text-zinc-500">Web</dt>
            <dd class="font-mono text-sm leading-6 text-zinc-900 sm:col-span-2 dark:text-zinc-50">
              Python · PHP · Vue 3 · Tailwind CSS
            </dd>
          </div>

          <div class="grid gap-3 py-6 sm:grid-cols-3 sm:gap-6">
            <dt class="font-mono text-xs uppercase tracking-widest text-zinc-500">Gömülü & Düşük Seviye</dt>
            <dd class="font-mono text-sm leading-6 text-zinc-900 sm:col-span-2 dark:text-zinc-50">
              Assembly · C · C++
            </dd>
          </div>

          <div class="grid gap-3 py-6 sm:grid-cols-3 sm:gap-6">
            <dt class="font-mono text-xs uppercase tracking-widest text-zinc-500">Altyapı</dt>
            <dd class="font-mono text-sm leading-6 text-zinc-900 sm:col-span-2 dark:text-zinc-50">
              Linux · Git · GCC
            </dd>
          </div>
        </dl>

        <p class="mt-6 font-mono text-xs leading-6 text-zinc-500">
          Liste projeye göre değişir; sabit bir teknoloji yığını yok.
        </p>
      </div>
    </div>
  </section>
</template>
