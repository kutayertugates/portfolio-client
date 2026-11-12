<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import config from "@/config";

import ComponentBlogItem from "@/pages/home/components/blog/ComponentHomeBlogItem.vue"

const blogs = ref([]);

async function getLastBlogPost() {
  let response = await fetch(config.API_BASE_URL + "/blogs?limit=3");
  let result = await response.json();

  blogs.value = result.data;
}

onMounted(async () => {
  await getLastBlogPost();
});

</script>

<template>
  <section
    aria-labelledby="home_writing_title"
    class="border-b border-zinc-200 dark:border-zinc-800"
  >
    <div class="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div class="max-w-2xl">
          <p class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
            03 — Yazılar
          </p>

          <h2
            id="home_writing_title"
            class="mt-6 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            Notlar, çözümler ve kararlar.
          </h2>

          <p class="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Web ve gömülü sistemlerde karşılaştığım problemleri, verdiğim mimari kararları ve
            sonradan ne öğrendiğimi yazıyorum.
          </p>
        </div>

        <RouterLink
          to="/blogs"
          class="inline-flex shrink-0 items-center rounded-md text-sm font-medium text-indigo-600 underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-indigo-400 dark:focus-visible:outline-indigo-400"
        >
          Tüm yazılar
        </RouterLink>
      </div>

      <div v-if="blogs.length !== 0" class="mt-12 flex flex-col gap-6">
        <ComponentBlogItem v-for="blog in blogs" :key="blog.id" :data="blog" />
      </div>

      <div
        v-else
        class="mt-12 rounded-md border border-dashed border-zinc-200 bg-zinc-50 px-6 py-16 text-center dark:border-zinc-800 dark:bg-zinc-900"
      >
        <p class="font-mono text-xs uppercase tracking-widest text-zinc-500">Henüz yayınlanmış yazı yok</p>

        <p class="mt-4 text-base text-zinc-900 dark:text-zinc-50">
          Henüz bir blog yazısı bulunamadı.
        </p>

        <p class="mx-auto mt-2 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Yeni yazılar yayınlandıkça burada listelenecek. Bu arada diğer yazılara göz atabilirsiniz.
        </p>

        <RouterLink
          to="/blogs"
          class="mt-6 inline-flex items-center rounded-md text-sm font-medium text-indigo-600 underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-indigo-400 dark:focus-visible:outline-indigo-400"
        >
          Bloğa git
        </RouterLink>
      </div>

    </div>
  </section>
</template>
