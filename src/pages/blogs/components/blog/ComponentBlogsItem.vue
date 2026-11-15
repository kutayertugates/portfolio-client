<script setup>
import { ref, onMounted, computed } from 'vue';
import { RouterLink } from 'vue-router'
import config from '@/config';

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
})

const author = ref({});

const fullname = computed(() => {
  if (author.value.first_name == null ||author.value.last_name == null) {
    return author.value.username;
  }

  return author.value.first_name + " " + author.value.last_name;
})

const published_at = computed(() => {
  const date = new Date(props.data.published_at.replace(' ', 'T') + 'Z');

  return date.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
  });
})

async function getAuthor(id) {
  let response = await fetch(config.API_BASE_URL + "/user/" + parseInt(id));
  let result = await response.json();

  return result["data"];
}

onMounted(async () => {
  author.value = await getAuthor(props.data.author_id);
})

</script>

<template>
  <article class="border-t border-zinc-200 pt-10 dark:border-zinc-800">
    <div class="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div class="lg:col-span-5">
        <img
          :src="props.data.cover_image === null ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGoUts6afg9yOO3bNr0Fgw3fehjddg0tLNj7JOr6xlpyUxYEkwjN42LkS&s=10' : props.data.cover_image"
          alt="Devre kartı üzerindeki elektronik bileşenler"
          loading="lazy"
          decoding="async"
          class="aspect-[16/10] w-full rounded-md border border-zinc-200 object-cover dark:border-zinc-800"
        />

        <dl class="mt-6 space-y-3 font-mono text-xs">
          <div class="flex items-baseline justify-between gap-4">
            <dt class="text-zinc-500">Yayın</dt>
            <dd class="text-zinc-900 dark:text-zinc-50">
              <time datetime="2026-11-12">{{ published_at }}</time>
            </dd>
          </div>

          <div
            class="flex items-baseline justify-between gap-4 border-t border-zinc-200 pt-3 dark:border-zinc-800"
          >
            <dt class="text-zinc-500">Yazar</dt>
            <dd class="text-zinc-900 dark:text-zinc-50">{{ fullname }}</dd>
          </div>

          <div
            class="flex items-baseline justify-between gap-4 border-t border-zinc-200 pt-3 dark:border-zinc-800"
          >
            <dt class="text-zinc-500">Kullanıcı</dt>
            <dd class="text-zinc-500">@{{ author.username }}</dd>
          </div>
        </dl>
      </div>

      <div class="flex flex-col lg:col-span-7">
        <h3
          class="max-w-2xl text-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
        >
          <RouterLink
            :to="`/blogs/${props.data.slug}`"
            class="rounded-md underline-offset-4 transition-colors hover:text-indigo-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400"
          >
            {{ props.data.title }}
          </RouterLink>
        </h3>

        <p class="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {{ props.data.description }}
        </p>

        <RouterLink
          :to="`/blogs/${props.data.slug}`"
          class="mt-8 inline-flex w-fit items-center gap-2 rounded-md text-sm font-medium text-indigo-600 underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-indigo-400 dark:focus-visible:outline-indigo-400"
        >
          Yazıyı oku
          <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
        </RouterLink>
      </div>
    </div>
  </article>
</template>
