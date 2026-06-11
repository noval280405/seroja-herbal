<template>
  <div :class="{ 'dark': isDark }" class="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-900 dark:text-white transition-colors duration-300">
    <Navbar :is-dark="isDark" :lang="lang" @toggle-dark="toggleDark" @toggle-lang="toggleLang" />
    <main class="pt-20 min-h-[calc(100vh-80px)]">
      <NuxtPage :lang="lang" />
    </main>
    <Footer :lang="lang" />
  </div>
</template>

<script setup>
import { ref, provide, watch } from 'vue'

const isDark = ref(false)
const lang = ref('id') // default Indonesia

// Sediakan state secara global ke semua page jika dibutuhkan
provide('lang', lang)

const toggleDark = () => {
  isDark.value = !isDark.value
}

const toggleLang = () => {
  lang.value = lang.value === 'id' ? 'en' : 'id'
}
</script>