<script setup>
import { ref } from 'vue'
import ComponentAuthField from '@/pages/auth/components/input/ComponentAuthField.vue'
import ComponentButton from '@/components/button/ComponentButton.vue'

const username = ref('')
const password = ref('')

// API error payload: { username: '...', password: '...' }
const input_errors = ref({})
</script>

<template>
  <form class="space-y-6" novalidate @submit.prevent>
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
      v-model="password"
      id="password"
      name="password"
      label="Şifre"
      type="password"
      autocomplete="current-password"
      required
      :error="input_errors.password"
    />

    <ComponentButton type="submit" class="w-full">Giriş yap</ComponentButton>
  </form>
</template>
