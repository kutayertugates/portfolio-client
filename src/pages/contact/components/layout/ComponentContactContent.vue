<script setup>
import config from '@/config'
import ComponentContactForm from '@/pages/contact/components/form/ComponentContactForm.vue'
</script>

<template>
  <section aria-labelledby="contact_details_title">
    <div
      class="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28"
    >
      <div class="lg:col-span-5">
        <p class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
          Doğrudan iletişim
        </p>

        <h2
          id="contact_details_title"
          class="mt-6 max-w-md text-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
        >
          Formu doldurmadan da ulaşabilirsiniz.
        </h2>

        <p class="mt-5 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
          E-posta en hızlı kanal. Projenin kapsamını, kısıtlarını ve zaman planını ilk mesajda
          paylaşırsanız daha hızlı ilerleyebiliriz.
        </p>

        <dl
          class="mt-10 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800"
        >
          <div class="grid grid-cols-3 gap-4 py-5">
            <dt class="font-mono text-xs uppercase tracking-widest text-zinc-500">E-posta</dt>
            <dd class="col-span-2 text-sm leading-6">
              <a
                :href="`mailto:${config.contacts.email}`"
                class="rounded-md font-mono text-zinc-900 underline-offset-4 transition-colors hover:text-indigo-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-zinc-50 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400"
              >
                {{ config.contacts.email }}
              </a>
            </dd>
          </div>

          <div class="grid grid-cols-3 gap-4 py-5">
            <dt class="font-mono text-xs uppercase tracking-widest text-zinc-500">Çalışma</dt>
            <dd class="col-span-2 text-sm leading-6 text-zinc-900 dark:text-zinc-50">
              Ofisten, uzaktan, proje bazlı
            </dd>
          </div>

          <div class="grid grid-cols-3 gap-4 py-5">
            <dt class="font-mono text-xs uppercase tracking-widest text-zinc-500">Kapsam</dt>
            <dd class="col-span-2 text-sm leading-6 text-zinc-900 dark:text-zinc-50">
              Web uygulamaları, gömülü firmware, servis ve altyapı
            </dd>
          </div>
        </dl>

        <p class="mt-6 font-mono text-xs leading-6 text-zinc-500">
          Paylaştığınız bilgiler yalnızca size dönüş yapmak için kullanılır.
        </p>
      </div>

      <div class="lg:col-span-7">
        <ComponentContactForm />
      </div>
    </div>
  </section>
</template>
