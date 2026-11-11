<script setup>
import { ref } from 'vue'
import ComponentAuthField from '@/pages/auth/components/input/ComponentAuthField.vue'
import ComponentButton from '@/components/button/ComponentButton.vue'

const first_name = ref('')
const last_name = ref('')
const username = ref('')
const email = ref('')
const password = ref('')

// API error payload: { first_name: '...', username: '...' }
const input_errors = ref({})
</script>

<template>
  <form class="space-y-6" novalidate @submit.prevent>
    <div class="grid gap-6 sm:grid-cols-2">
      <ComponentAuthField
        v-model="first_name"
        id="first_name"
        name="first_name"
        label="Ad"
        autocomplete="given-name"
        :error="input_errors.first_name"
      />

      <ComponentAuthField
        v-model="last_name"
        id="last_name"
        name="last_name"
        label="Soyad"
        autocomplete="family-name"
        :error="input_errors.last_name"
      />
    </div>

    <ComponentAuthField
      v-model="username"
      id="username"
      name="username"
      label="Kullanıcı adı"
      autocomplete="username"
      required
      :error="input_errors.username"
    />

    <ComponentAuthField
      v-model="email"
      id="email"
      name="email"
      label="E-posta"
      type="email"
      autocomplete="email"
      required
      :error="input_errors.email"
    />

    <ComponentAuthField
      v-model="password"
      id="password"
      name="password"
      label="Şifre"
      type="password"
      autocomplete="new-password"
      required
      :error="input_errors.password"
    />

    <ComponentButton type="submit" class="w-full">Kayıt ol</ComponentButton>
  </form>
</template>
