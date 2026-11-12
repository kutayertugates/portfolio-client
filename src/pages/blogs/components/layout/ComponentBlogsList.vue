<script setup>
import { ref, onMounted } from 'vue';
import config from "@/config";

import ComponentBlogsItem from '@/pages/blogs/components/blog/ComponentBlogsItem.vue'
import ComponentBlogsPagination from '@/pages/blogs/components/pagination/ComponentBlogsPagination.vue'


const blogs = ref([]);
const metadata = ref([]);

async function changedPage(page) {
  await getLastBlogPost(page)
}

async function getLastBlogPost(page) {
  let response = await fetch(config.API_BASE_URL + "/blogs?limit=10&page=" + parseInt(page));
  let result = await response.json();

  blogs.value = result.data
  metadata.value = result.metadata
}

onMounted(async () => {
  await getLastBlogPost();
});
</script>

<template>
  <section
    aria-labelledby="blogs_list_title"
    class="border-b border-zinc-200 dark:border-zinc-800"
  >
    <div class="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div class="flex flex-wrap items-baseline justify-between gap-4">
        <h2
          id="blogs_list_title"
          class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500"
        >
          Tüm yazılar
        </h2>

        <p class="font-mono text-xs text-zinc-500">En yeniden eskiye</p>
      </div>

      <div class="mt-8">
        <ComponentBlogsItem :data="blog" v-for="blog in blogs" :key="blog.id" />
      </div>

      <ComponentBlogsPagination @sendPage="changedPage" :maxPage="metadata.total_page" />
    </div>
  </section>
</template>
