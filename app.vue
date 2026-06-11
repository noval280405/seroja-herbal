<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
    
    <Navbar 
      :is-dark="isDark" 
      :lang="lang" 
      @toggle-dark="toggleDark" 
      @toggle-lang="toggleLang" 
    />
    
    <main class="pt-16 min-h-[calc(100vh-64px)]">
      <NuxtPage :lang="lang" />
    </main>
    
    <Footer :lang="lang" />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const isDark = ref(false)
const lang = ref('id') // default Indonesia

// Fungsi Toggle Dark Mode
const toggleDark = () => {
  isDark.value = !isDark.value
}

// Fungsi Toggle Bahasa
const toggleLang = () => {
  lang.value = lang.value === 'id' ? 'en' : 'id'
}

// Sinkronisasi status state 'isDark' ke tag HTML paling atas
const updateDarkModeDOM = (value) => {
  if (process.client) {
    const htmlElement = document.documentElement
    if (value) {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
  }
}

// Pantau setiap kali isDark berubah, langsung tembak ke DOM <html>
watch(isDark, (newVal) => {
  updateDarkModeDOM(newVal)
})

// Saat aplikasi pertama kali dimuat di browser
onMounted(() => {
  updateDarkModeDOM(isDark.value)
})
</script>