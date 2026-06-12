<template>
  <div class="grid md:grid-cols-2 gap-12 items-center pt-4">
    <div class="animate-fade-in-left">
      <span class="inline-flex items-center gap-1.5 bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-black px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider animate-pulse backdrop-blur-sm">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        {{ t.badge }}
      </span>
      <h1 class="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white">
        {{ t.title }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Herbalife Nutrition</span>
      </h1>
      <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
        {{ t.subtitle }}
      </p>
      <div class="flex flex-wrap gap-4">
        <NuxtLink to="/products" class="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold px-7 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/30 active:scale-95">
          {{ t.btnProducts }}
        </NuxtLink>
        <NuxtLink to="/location" class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold px-7 py-4 rounded-2xl transition-all duration-300 active:scale-95 shadow-xs">
          {{ t.btnClub }}
        </NuxtLink>
      </div>
    </div>
    
    <div class="relative aspect-video md:aspect-square flex items-center justify-center p-4 animate-fade-in-right">
      <div class="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-teal-500/5 dark:from-emerald-500/5 dark:to-transparent rounded-full filter blur-3xl opacity-70" />
      <div class="relative w-full max-w-md bg-gradient-to-tr from-emerald-500 to-teal-600 rounded-[2.5rem] p-8 text-white shadow-2xl overflow-hidden group animate-float border border-white/10">
        <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full filter blur-xl group-hover:scale-125 transition-transform duration-500" />
        <div class="text-center relative z-10 py-8">
          <div class="w-20 h-20 mx-auto bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>
          </div>
          <h3 class="text-3xl font-black tracking-tight">Seroja Nutrition</h3>
          <p class="text-emerald-100 text-sm mt-2 font-medium tracking-wide bg-white/10 inline-block px-4 py-1 rounded-full backdrop-blur-xs">
            Healthy Shake & Energy Tea
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["lang"]);

const i18n = {
  id: {
    badge: "Franchise Resmi & Terpercaya",
    title: "Awali Hidup Sehatmu Bersama Seroja &",
    subtitle: "Kami menyediakan solusi nutrisi terbaik dari Herbalife untuk membantu Anda mencapai berat badan ideal, menjaga stamina, dan menjalani gaya hidup sehat terstruktur.",
    btnProducts: "Lihat Produk",
    btnClub: "Kunjungi Rumah Nutrisi",
  },
  en: {
    badge: "Official & Trusted Franchise",
    title: "Start Your Healthy Life with Seroja &",
    subtitle: "We provide top-tier nutrition solutions from Herbalife to help you achieve your ideal weight, boost energy, and maintain a structured healthy lifestyle.",
    btnProducts: "Browse Products",
    btnClub: "Visit Nutrition Club",
  }
};
const t = computed(() => i18n[props.lang || "id"]);
</script>