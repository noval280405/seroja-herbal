<template>
  <div class="scroll-animate bg-white/90 dark:bg-slate-900/90 border border-slate-100 dark:border-slate-800 p-8 sm:p-12 rounded-[2.5rem] shadow-sm backdrop-blur-md transition-all duration-500">
    <div class="text-center max-w-2xl mx-auto mb-14">
      <h2 class="text-3xl sm:text-4xl font-black mb-3 text-slate-900 dark:text-white tracking-tight">{{ t.whyTitle }}</h2>
      <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{{ t.whySubtitle }}</p>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="(why, idx) in t.whyCards" :key="idx" class="p-6 bg-slate-50/50 dark:bg-slate-950/60 border border-slate-100/60 dark:border-slate-800/50 rounded-2xl transition-all duration-300 hover:shadow-md hover:border-emerald-500/30 hover:bg-white dark:hover:bg-slate-900 group">
        <div class="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-inner" v-html="why.iconSvg">
        </div>
        <h4 class="font-black text-sm text-slate-900 dark:text-white mb-2">{{ why.title }}</h4>
        <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{{ why.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["lang"]);

const i18n = {
  id: {
    whyTitle: "Mengapa Memilih Seroja Nutrition?",
    whySubtitle: "Kami memberikan standardisasi bimbingan terbaik untuk memastikan target kebugaran Anda tercapai.",
    whyCards: [
      { title: "100% Produk Original", desc: "Semua produk disuplai langsung dari warehouse resmi Herbalife Indonesia.", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>` },
      { title: "Bimbingan Coach Ahli", desc: "Dipandu secara personal untuk memantau kalori harian dan pola makan teratur.", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
      { title: "Evaluasi Berkala", desc: "Pengecekan komposisi kadar lemak dan massa otot secara rutin setiap minggu.", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>` },
      { title: "Gaya Hidup Fleksibel", desc: "Diet tanpa kelaparan menyiksa dengan menu shake lezat bervariasi rasa.", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/></svg>` }
    ]
  },
  en: {
    whyTitle: "Why Choose Seroja Nutrition?",
    whySubtitle: "We offer standardized high-quality guidance to ensure your personal health targets are achieved.",
    whyCards: [
      { title: "100% Original Products", desc: "All supplement rows supplied directly from official Herbalife Indonesia warehouse.", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>` },
      { title: "Expert Coach Guidance", desc: "Personally assisted to control daily calorie intakes and consistent meal planning.", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
      { title: "Periodic Assessment", desc: "Routine monitoring checks for body fat ratios and clean lean muscle progress weekly.", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>` },
      { title: "Flexible Healthy Diet", desc: "Weight loss without starvation through delicious meal shakes with various flavor profiles.", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/></svg>` }
    ]
  }
};
const t = computed(() => i18n[props.lang || "id"]);
</script>