<template>
<article
  class="w-full rounded-md border border-zinc-200 bg-zinc-50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900"
>
  <div class="grid gap-6 lg:grid-cols-12 lg:gap-10">
    <div class="lg:col-span-3">
      <div
        class="flex aspect-[16/10] w-full items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800"
      >
        <i class="fa-solid fa-inbox text-2xl text-zinc-500" aria-hidden="true"></i>
      </div>
    </div>

    <div class="flex flex-col justify-center lg:col-span-9">
      <p class="font-mono text-xs uppercase tracking-widest text-zinc-500">
        Henüz yayınlanmış yazı yok
      </p>

      <h3
        class="mt-3 max-w-xl text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50"
      >
        Henüz bir blog yazısı bulunamadı.
      </h3>

      <p class="mt-2 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        Yeni yazılar yayınlandıkça burada listelenecek. Bu arada diğer yazılara göz
        atabilirsiniz.
      </p>

      <RouterLink
        to="/blogs"
        class="mt-6 inline-flex w-fit items-center rounded-md text-sm font-medium text-indigo-600 underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-indigo-400 dark:focus-visible:outline-indigo-400"
      >
        Bloğa git
      </RouterLink>
    </div>
  </div>
</article>
</template>
