<script setup>
import { ref, computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import { useRouter, useRoute } from 'vue-router';
import config from '@/config';

const route = useRoute()
const router = useRouter()

const loading = ref(true)

const author = ref(null)
const fullname = computed(() => {
  if (author.value === null) return "Hata";

  if (author.value.first_name == null ||author.value.last_name == null) {
    return author.value.username;
  }

  return author.value.first_name + " " + author.value.last_name;
})

const blog = ref(null)
const cover_image = computed(() => {
  if (blog.value === null || blog.value.cover_image === null) {
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGoUts6afg9yOO3bNr0Fgw3fehjddg0tLNj7JOr6xlpyUxYEkwjN42LkS&s=10"
  }
  return blog.value.cover_image
})
const published_at = computed(() => {
  if (blog.value === null) return "Hata";

  const date = new Date(blog.value.published_at.replace(' ', 'T') + 'Z');

  return date.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
  });
})

async function getBlogDetailWithSlug(slug) {
  let response = await fetch(config.API_BASE_URL + "/blogs/slug/" + slug)
  let result = await response.json()

  if (Object.keys(result.data).length === 0) {
    return null
  }

  return result.data
}

async function getBlogAuthor(author_id) {
  let response = await fetch(config.API_BASE_URL + "/user/" + author_id)
  let result = await response.json()

  if (Object.keys(result.data).length === 0) {
    return null
  }

  return result.data
}

onMounted(async () => {
  let slug = route.params.slug
  blog.value = await getBlogDetailWithSlug(slug)
  author.value = await getBlogAuthor(blog.value.author_id)

  if (blog.value === null || author.value === null) {
    loading.value = false
    router.push("/")
    return;
  }

  loading.value = false

  blog
})

</script>

<template>
  <section
    aria-labelledby="blog_detail_title"
    class="border-b border-zinc-200 dark:border-zinc-800"
    v-if="!loading"
  >
    <div class="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <RouterLink
        to="/blogs"
        class="inline-flex items-center gap-2 rounded-md font-mono text-xs text-zinc-500 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400"
      >
        <i class="fa-solid fa-arrow-left text-xs" aria-hidden="true"></i>
        Tüm yazılara dön
      </RouterLink>

      <div class="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
        <div class="lg:col-span-8">
          <p class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
            Yayın · {{ published_at }}
          </p>

          <h1
            id="blog_detail_title"
            class="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50"
          >
            {{ blog.title }}
          </h1>

          <p
            class="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400"
          >
            {{ blog.description }}
          </p>
        </div>

        <div class="lg:col-span-4 lg:text-right">
          <p class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
            Yazar
          </p>

          <p class="mt-3 text-sm font-medium text-zinc-900 dark:text-zinc-50">{{ fullname }}</p>

          <p class="mt-1 font-mono text-xs text-zinc-500">@{{ author.username }}</p>
        </div>
      </div>

      <img
        :src="cover_image"
        alt="Devre kartı üzerindeki elektronik bileşenler"
        decoding="async"
        class="mt-12 aspect-[21/9] w-full rounded-md border border-zinc-200 object-cover dark:border-zinc-800"
      />
    </div>
  </section>

  <section aria-label="Yazı içeriği" v-if="!loading">
    <div class="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
      <article
        class="mx-auto max-w-3xl text-base leading-7 text-zinc-600 [&>*:first-child]:mt-0 [&_a]:font-medium [&_a]:text-indigo-600 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a]:hover:underline [&_blockquote]:mt-6 [&_blockquote]:border-l-2 [&_blockquote]:border-indigo-600 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-zinc-900 [&_blockquote_p]:mt-0 [&_code]:rounded-md [&_code]:border [&_code]:border-zinc-200 [&_code]:bg-zinc-50 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:text-zinc-900 [&_figcaption]:mt-3 [&_figcaption]:font-mono [&_figcaption]:text-xs [&_figcaption]:text-zinc-500 [&_figure]:mt-8 [&_h1]:mt-12 [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-zinc-900 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-zinc-900 [&_h3]:mt-10 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-zinc-900 [&_h4]:mt-8 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-zinc-900 [&_hr]:mt-10 [&_hr]:border-zinc-200 [&_img]:mt-8 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-md [&_img]:border [&_img]:border-zinc-200 [&_li]:pl-1 [&_li>p]:mt-0 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_p]:mt-5 [&_p]:leading-8 [&_pre]:mt-6 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:border [&_pre]:border-zinc-200 [&_pre]:bg-zinc-50 [&_pre]:p-5 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-6 [&_pre]:text-zinc-900 [&_pre_code]:border-0 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-[1em] [&_pre_code]:text-inherit [&_strong]:font-semibold [&_strong]:text-zinc-900 [&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse [&_table]:text-left [&_table]:text-sm [&_td]:border-b [&_td]:border-zinc-200 [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_th]:border-b [&_th]:border-zinc-200 [&_th]:px-3 [&_th]:py-2 [&_th]:font-semibold [&_th]:text-zinc-900 [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 dark:text-zinc-400 dark:[&_a]:text-indigo-400 dark:[&_blockquote]:border-indigo-400 dark:[&_blockquote]:text-zinc-50 dark:[&_code]:border-zinc-800 dark:[&_code]:bg-zinc-900 dark:[&_code]:text-zinc-50 dark:[&_h1]:text-zinc-50 dark:[&_h2]:text-zinc-50 dark:[&_h3]:text-zinc-50 dark:[&_h4]:text-zinc-50 dark:[&_hr]:border-zinc-800 dark:[&_img]:border-zinc-800 dark:[&_pre]:border-zinc-800 dark:[&_pre]:bg-zinc-900 dark:[&_pre]:text-zinc-50 dark:[&_strong]:text-zinc-50 dark:[&_td]:border-zinc-800 dark:[&_th]:border-zinc-800 dark:[&_th]:text-zinc-50"
        v-html="blog.content"
      ></article>
    </div>
  </section>

  <section v-else aria-label="Yazı yükleniyor" class="border-b border-zinc-200 dark:border-zinc-800">
    <div class="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <p class="font-mono text-xs uppercase tracking-widest text-zinc-500">Yazı yükleniyor</p>
    </div>
  </section>
</template>
