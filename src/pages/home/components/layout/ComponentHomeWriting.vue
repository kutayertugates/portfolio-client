<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router'

import { BlogService } from '@/services/blog.service';

import ComponentHomeBlogEmpty from '../blog/ComponentHomeBlogEmpty.vue';
import ComponentBlogItem from "@/pages/home/components/blog/ComponentHomeBlogItem.vue"
import ComponentHomeBlogTempItem from '../blog/ComponentHomeBlogTempItem.vue';

const blogs = ref([]);

const loading = ref(true)

async function getLastBlogPost() {
  let result = await BlogService.getAll(1, 3)

  blogs.value = result.data;
  loading.value = false
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

      <!-- Loading -->
      <div class="mt-12 flex flex-col gap-6" v-if="loading" >
        <ComponentHomeBlogTempItem />
      </div>

      <!-- Empty -->
      <div class="mt-12 flex flex-col gap-6" v-else-if="blogs.length === 0">
        <ComponentHomeBlogEmpty />
      </div>

      <!-- Blogs -->
      <div class="mt-12 flex flex-col gap-6" v-else>
        <ComponentBlogItem v-for="blog in blogs" :key="blog.id" :data="blog" />
      </div>

    </div>
  </section>
</template>
