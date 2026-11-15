<template>
<article
  role="status"
  aria-live="polite"
  aria-busy="true"
  class="w-full rounded-md border border-zinc-200 bg-zinc-50 p-6 motion-safe:animate-pulse sm:p-8 dark:border-zinc-800 dark:bg-zinc-900"
>
  <span class="sr-only">Yazılar yükleniyor</span>

  <div class="grid gap-6 lg:grid-cols-12 lg:gap-10">
    <div class="lg:col-span-3">
      <div class="h-3 w-24 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
      <div class="mt-2 h-3 w-16 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>

      <div class="mt-6 border-t border-zinc-200 pt-4 dark:border-zinc-800">
        <div class="h-3 w-12 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
        <div class="mt-2 h-4 w-32 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
        <div class="mt-1 h-3 w-20 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
      </div>
    </div>

    <div class="lg:col-span-9">
      <div class="h-6 w-3/5 rounded-md bg-zinc-200 sm:h-7 dark:bg-zinc-800"></div>

      <div class="mt-3 max-w-2xl space-y-3">
        <div class="h-3 w-full rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
        <div class="h-3 w-full rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
        <div class="h-3 w-2/3 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
      </div>

      <div class="mt-6 h-4 w-24 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
    </div>
  </div>
</article>
</template>
