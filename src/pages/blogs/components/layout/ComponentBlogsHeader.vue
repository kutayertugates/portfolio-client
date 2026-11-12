<script setup></script>

<template>
  <section
    aria-labelledby="blogs_header_title"
    class="border-b border-zinc-200 dark:border-zinc-800"
  >
    <div
      class="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:items-end lg:gap-12 lg:px-8 lg:py-28"
    >
      <div class="lg:col-span-7">
        <p class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">Blog</p>

        <h1
          id="blogs_header_title"
          class="mt-6 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50"
        >
          Yazılar, notlar ve mühendislik kararları.
        </h1>

        <p
          class="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400"
        >
          Web ve gömülü sistemlerde karşılaştığım problemleri, verdiğim mimari kararları ve
          sonradan ne öğrendiğimi burada topluyorum.
        </p>
      </div>

      <aside aria-label="Blog hakkında" class="lg:col-span-5">
        <div
          class="rounded-md border border-zinc-200 bg-zinc-50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <p class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
            Yaklaşım
          </p>

          <p class="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Her yazı, bir problemin nasıl ele alındığını ve hangi kararların neden alındığını kayıt
            altına almak için yazılıyor.
          </p>

          <p
            class="mt-6 border-t border-zinc-200 pt-4 font-mono text-xs text-zinc-500 dark:border-zinc-800"
          >
            Web / Gömülü sistemler / Mimari
          </p>
        </div>
      </aside>
    </div>
  </section>
</template>
