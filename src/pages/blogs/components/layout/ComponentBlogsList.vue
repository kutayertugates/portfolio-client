<script setup>
import { ref, onMounted } from 'vue';

import ComponentBlogsItem from '@/pages/blogs/components/blog/ComponentBlogsItem.vue'
import ComponentBlogsPagination from '@/pages/blogs/components/pagination/ComponentBlogsPagination.vue'

import { BlogService } from '@/services/blog.service';

const blogs = ref([]);
const metadata = ref([]);

const loading = ref(true)

async function changedPage(page) {
  await getLastBlogPost(page)
}

async function getLastBlogPost(page) {
  let result = await BlogService.getAll(page)

  blogs.value = result.data
  metadata.value = result.metadata
  loading.value = false
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
        <!-- Loading -->
        <article
          v-if="loading"
          role="status"
          aria-live="polite"
          aria-busy="true"
          class="border-t border-zinc-200 pt-10 motion-safe:animate-pulse dark:border-zinc-800"
        >
          <span class="sr-only">Yazılar yükleniyor</span>

          <div class="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div class="lg:col-span-5">
              <div
                class="aspect-[16/10] w-full rounded-md border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900"
              ></div>

              <div class="mt-6 space-y-3">
                <div class="flex items-baseline justify-between gap-4">
                  <div class="h-3 w-12 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
                  <div class="h-3 w-24 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
                </div>

                <div
                  class="flex items-baseline justify-between gap-4 border-t border-zinc-200 pt-3 dark:border-zinc-800"
                >
                  <div class="h-3 w-14 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
                  <div class="h-3 w-20 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
                </div>

                <div
                  class="flex items-baseline justify-between gap-4 border-t border-zinc-200 pt-3 dark:border-zinc-800"
                >
                  <div class="h-3 w-16 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
                  <div class="h-3 w-20 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
                </div>
              </div>
            </div>

            <div class="flex flex-col lg:col-span-7">
              <div class="space-y-3">
                <div class="h-7 w-4/5 rounded-md bg-zinc-200 sm:h-8 dark:bg-zinc-800"></div>
                <div class="h-7 w-1/2 rounded-md bg-zinc-200 sm:h-8 dark:bg-zinc-800"></div>
              </div>

              <div class="mt-4 max-w-2xl space-y-3">
                <div class="h-4 w-full rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
                <div class="h-4 w-full rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
                <div class="h-4 w-2/3 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
              </div>

              <div class="mt-8 h-4 w-28 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
            </div>
          </div>
        </article>

        <!-- No blogs -->
        <article v-else-if="blogs.length === 0" class="border-t border-zinc-200 pt-10 dark:border-zinc-800">
          <div class="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div class="lg:col-span-5">
              <div
                class="flex aspect-[16/10] w-full items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <i class="fa-solid fa-inbox text-2xl text-zinc-500" aria-hidden="true"></i>
              </div>
            </div>

            <div class="flex flex-col justify-center lg:col-span-7">
              <p
                class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500"
              >
                Kayıt bulunamadı
              </p>

              <h3
                class="mt-4 max-w-2xl text-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
              >
                Henüz yayınlanmış bir yazı yok
              </h3>

              <p class="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Yeni yazılar yayınlandığında bu bölümde listelenecek.
              </p>
            </div>
          </div>
        </article>

        <!-- Blogs -->
        <ComponentBlogsItem v-else :data="blog" v-for="blog in blogs" :key="blog.id" />
      </div>

      <ComponentBlogsPagination v-if="!loading && blogs.length !== 0" @sendPage="changedPage" :maxPage="metadata.total_page" />
    </div>
  </section>
</template>
