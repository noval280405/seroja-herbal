<template>
  <div class="scroll-animate">
    <div class="text-center max-w-2xl mx-auto mb-14">
      <h2 class="text-3xl sm:text-4xl font-black mb-3 text-slate-900 dark:text-white tracking-tight">{{ t.servicesTitle }}</h2>
      <p class="text-slate-500 dark:text-slate-400 text-sm">{{ t.servicesSubtitle }}</p>
    </div>
    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="(svc, idx) in t.services" :key="idx" class="bg-white/95 dark:bg-slate-900/95 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-xl backdrop-blur-sm">
        <div class="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-inner" v-html="svc.iconSvg"></div>
        <h3 class="text-xl font-black mb-2 text-slate-900 dark:text-white transition-colors">{{ svc.name }}</h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{{ svc.desc }}</p>
        <span class="inline-block text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/50 px-2.5 py-1 rounded-xl">
          {{ svc.tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["lang"]);

const i18n = {
  id: {
    servicesTitle: "Layanan & Program Seroja",
    servicesSubtitle: "Bukan sekadar jual produk, kami membimbing Anda dengan program terukur demi hasil maksimal.",
    services: [
      { name: "Manajemen Berat Badan", desc: "Program kustomisasi turun berat badan aman dengan pengelolaan kalori harian dan panduan meal plan Herbalife.", tag: "Paling Populer", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>` },
      { name: "Menaikkan Massa Otot", desc: "Asupan nutrisi tinggi protein untuk Anda yang ingin membangun otot serta menambah berat badan secara sehat.", tag: "Kebugaran", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6.5 6.5h11M6.5 17.5h11M3 12h18M3 8v8M21 8v8"/></svg>` },
      { name: "Konsultasi Kebugaran 1-on-1", desc: "Analisis komposisi tubuh gratis (Lemak, Masa Otot, Air) langsung dibimbing oleh coach berpengalaman.", tag: "Gratis di Club", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/></svg>` }
    ]
  },
  en: {
    servicesTitle: "Seroja Services & Programs",
    servicesSubtitle: "More than just selling products, we coach you with structured programs for the best results.",
    services: [
      { name: "Weight Management", desc: "Safe, customized weight loss programs with daily calorie management and Herbalife meal plan guidelines.", tag: "Most Popular", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>` },
      { name: "Lean Muscle Gain", desc: "High-protein nutritional plans for building muscle and gaining healthy weight effectively.", tag: "Fitness & Muscle", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6.5 6.5h11M6.5 17.5h11M3 12h18M3 8v8M21 8v8"/></svg>` },
      { name: "1-on-1 Wellness Coaching", desc: "Complimentary body composition analysis (Fat, Muscle, Water) coached directly by professionals.", tag: "Free at Club", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/></svg>` }
    ]
  }
};
const t = computed(() => i18n[props.lang || "id"]);
</script>