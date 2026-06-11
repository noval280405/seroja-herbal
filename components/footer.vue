<template>
  <footer class="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-8 mt-20 transition-colors">
    <div class="max-w-7xl mx-auto px-4 text-center text-sm text-slate-500 dark:text-slate-400">
      <p class="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Seroja Nutrition — Independent Herbalife Distributor</p>
      <p>&copy; 2026 Seroja. {{ lang === 'id' ? 'Hak Cipta Dilindungi.' : 'All Rights Reserved.' }}</p>
    </div>
  </footer>
</template>

<script setup>
defineProps(['lang'])
</script>