<script setup>
import config from '@/config';
import { ref, onMounted, computed } from 'vue';

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
  <article
    class="w-full rounded-md border border-zinc-200 bg-zinc-50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900"
  >
    <div class="grid gap-6 lg:grid-cols-12 lg:gap-10">
      <div class="lg:col-span-3">
        <p class="font-mono text-xs text-zinc-500">{{ published_at }}</p>
        <p class="mt-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
          Son yazı
        </p>

        <div class="mt-6 border-t border-zinc-200 pt-4 dark:border-zinc-800">
          <p class="font-mono text-xs uppercase tracking-widest text-zinc-500">Yazar</p>
          <p class="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-50">
            {{ fullname }}
          </p>
          <p class="font-mono text-xs text-zinc-500">@{{ author["username"] }}</p>
        </div>
      </div>

      <div class="lg:col-span-9">
        <h3 class="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50">
          {{ props.data.title }}
        </h3>

        <p class="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {{ props.data.description }}
        </p>

        <RouterLink
          :to="`/blogs/${props.data.slug}`"
          class="mt-6 inline-flex items-center rounded-md text-sm font-medium text-indigo-600 underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-indigo-400 dark:focus-visible:outline-indigo-400"
        >
          Yazıyı oku
        </RouterLink>
      </div>
    </div>
  </article>
</template>
