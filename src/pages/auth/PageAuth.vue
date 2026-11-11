<script setup>
import { ref } from 'vue'
import ComponentLoginForm from '@/pages/auth/components/layout/ComponentLoginForm.vue'
import ComponentRegisterForm from '@/pages/auth/components/layout/ComponentRegisterForm.vue'

const active_form = ref('login')

function SetActiveForm(_form_name) {
  active_form.value = _form_name
}
</script>

<template>
  <section aria-labelledby="auth_page_title">
    <div class="mx-auto w-full max-w-md px-6 py-16 sm:py-20 lg:py-24">
      <p class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">Hesap</p>

      <h1
        id="auth_page_title"
        class="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
      >
        Hoş geldin
      </h1>

      <p class="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        Kullanıcı adınla giriş yap veya yeni bir hesap oluştur.
      </p>

      <p class="mt-2 font-mono text-xs text-zinc-500">* Zorunlu alan</p>

      <div
        role="group"
        aria-label="Hesap formu seçimi"
        class="mt-8 grid grid-cols-2 gap-1 rounded-md border border-zinc-200 p-1 dark:border-zinc-800"
      >
        <button
          type="button"
          :aria-pressed="active_form === 'login'"
          class="rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400"
          :class="
            active_form === 'login'
              ? 'bg-zinc-50 text-indigo-600 dark:bg-zinc-900 dark:text-indigo-400'
              : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
          "
          @click="SetActiveForm('login')"
        >
          Giriş yap
        </button>

        <button
          type="button"
          :aria-pressed="active_form === 'register'"
          class="rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400"
          :class="
            active_form === 'register'
              ? 'bg-zinc-50 text-indigo-600 dark:bg-zinc-900 dark:text-indigo-400'
              : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
          "
          @click="SetActiveForm('register')"
        >
          Kayıt ol
        </button>
      </div>

      <div class="mt-10">
        <ComponentLoginForm v-if="active_form === 'login'" />
        <ComponentRegisterForm v-else />
      </div>
    </div>
  </section>
</template>
