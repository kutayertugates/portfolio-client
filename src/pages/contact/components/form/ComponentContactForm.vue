<script setup>
import config from '@/config'
import { ref } from 'vue'

const contact_name = ref('')
const contact_email = ref('')
const contact_subject = ref('')
const contact_message = ref('')

const contact_errors = ref({})
const contact_result = ref(null)
const contact_result_status = ref(true)

async function SendContactMessage() {
  contact_result.value = null
  contact_errors.value = {}

  let response = await fetch(config.API_BASE_URL + "/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fullname: contact_name.value,
      email: contact_email.value,
      subject: contact_subject.value,
      message: contact_message.value
    })
  });

  let result = await response.json();
  if (result.status === "error") {
    contact_errors.value = result.errors
    contact_result.value = result
    contact_result_status.value = false
    return;
  }

  contact_result.value = result
  contact_result_status.value = true
  return;
}
</script>

<template>
  <div
    class="rounded-md border border-zinc-200 bg-zinc-50 p-6 sm:p-8 lg:p-10 dark:border-zinc-800 dark:bg-zinc-900"
  >
    <h2
      id="contact_form_title"
      class="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50"
    >
      Mesaj bırakın
    </h2>

    <p class="mt-3 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
      Aşağıdaki alanları doldurun; projenizle ilgili ilk değerlendirmeyi yapıp size dönüş
      yapayım.
    </p>

    <div
      v-if="contact_result"
      role="status"
      class="mt-8 rounded-md px-4 py-3 text-sm"
      :class="
        contact_result_status
          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400'
          : 'bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400'
      "
    >
      {{ contact_result.message }}
    </div>

    <form
      aria-labelledby="contact_form_title"
      class="mt-8 space-y-6"
      @submit.prevent
    >
      <div class="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            for="contact_name"
            class="block font-mono text-xs uppercase tracking-widest text-zinc-500"
          >
            Ad Soyad
          </label>
          <input
            id="contact_name"
            name="name"
            type="text"
            autocomplete="name"
            required
            placeholder="Adınız ve soyadınız"
            v-model="contact_name"
            class="mt-2 w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 transition-colors placeholder:text-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus-visible:outline-indigo-400"
          />
          <p
            v-if="contact_errors.fullname"
            class="mt-2 font-mono text-xs text-rose-600 dark:text-rose-400"
          >
            {{ contact_errors.fullname }}
          </p>
        </div>

        <div>
          <label
            for="contact_email"
            class="block font-mono text-xs uppercase tracking-widest text-zinc-500"
          >
            E-posta
          </label>
          <input
            id="contact_email"
            name="email"
            type="email"
            autocomplete="email"
            required
            placeholder="ornek@eposta.com"
            v-model="contact_email"
            class="mt-2 w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 transition-colors placeholder:text-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus-visible:outline-indigo-400"
          />
          <p
            v-if="contact_errors.email"
            class="mt-2 font-mono text-xs text-rose-600 dark:text-rose-400"
          >
            {{ contact_errors.email }}
          </p>
        </div>
      </div>

      <div>
        <label
          for="contact_subject"
          class="block font-mono text-xs uppercase tracking-widest text-zinc-500"
        >
          Konu
        </label>
        <input
          id="contact_subject"
          name="subject"
          type="text"
          placeholder="Örn. yeni ürün için web paneli"
          v-model="contact_subject"
          class="mt-2 w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 transition-colors placeholder:text-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus-visible:outline-indigo-400"
        />
        <p
          v-if="contact_errors.subject"
          class="mt-2 font-mono text-xs text-rose-600 dark:text-rose-400"
        >
          {{ contact_errors.subject }}
        </p>
      </div>

      <div>
        <label
          for="contact_message"
          class="block font-mono text-xs uppercase tracking-widest text-zinc-500"
        >
          Mesaj
        </label>
        <textarea
          id="contact_message"
          name="message"
          rows="6"
          required
          placeholder="Projenizden, ihtiyacınızdan ve zaman planından kısaca bahsedin."
          v-model="contact_message"
          class="mt-2 w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm leading-6 text-zinc-900 transition-colors placeholder:text-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus-visible:outline-indigo-400"
        ></textarea>
        <p
          v-if="contact_errors.message"
          class="mt-2 font-mono text-xs text-rose-600 dark:text-rose-400"
        >
          {{ contact_errors.message }}
        </p>
      </div>

      <div class="flex justify-end border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <button
          type="submit"
          class="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400"
          @click="SendContactMessage"
        >
          Mesajı gönder
        </button>
      </div>
    </form>
  </div>
</template>
