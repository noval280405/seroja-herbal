<template>
  <div class="relative overflow-hidden bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 sm:p-14 border border-slate-200 dark:border-slate-800 shadow-2xl theme-transition">
    
    <!-- EFEK LATAR BELAKANG HALUS -->
    <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent dark:from-emerald-600/30 dark:to-teal-700/20 pointer-events-none"></div>
    <div class="absolute -top-32 -right-32 w-80 h-80 bg-emerald-500/20 dark:bg-emerald-500 rounded-full blur-[140px] opacity-40 pointer-events-none"></div>
    <div class="absolute -bottom-32 -left-32 w-80 h-80 bg-teal-500/10 dark:bg-teal-500 rounded-full blur-[140px] opacity-30 pointer-events-none"></div>

    <!-- GARIS AKSEN DI ATAS KARTU -->
    <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-60"></div>
    
    <div class="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 text-center lg:text-left">
      
      <!-- BAGIAN TEKS -->
      <div class="max-w-xl">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black text-xs uppercase tracking-widest mb-4 shadow-2xs">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          {{ lang === 'id' ? 'Konsultasi Gratis' : 'Free Consultation' }}
        </div>
        <h3 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
          {{ t.ctaTitle }}
        </h3>
        <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
          {{ t.ctaSubtitle }}
        </p>
      </div>

      <!-- BAGIAN TOMBOL WHATSAPP -->
      <a 
        href="https://wa.me/628123456789?text=Halo%20Coach%20Seroja,%20saya%20tertarik%20ingin%20tanya%20program%20dan%20konsultasi%20nutrisi." 
        target="_blank"
        class="group relative bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-5 rounded-2xl font-black text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-emerald-600/30 flex items-center gap-3.5 whitespace-nowrap overflow-hidden"
      >
        <!-- Efek Shimmer/Kilau Berjalan pada Tombol -->
        <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000"></div>

        <!-- Indikator Badge Pulse Live -->
        <span class="absolute -top-1 -right-1 flex h-4 w-4">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span class="relative inline-flex rounded-full h-4 w-4 bg-emerald-300"></span>
        </span>

        <!-- Ikon WhatsApp -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.372 5.378 0 12.013 0c3.216.012 6.237 1.27 8.508 3.542 2.27 2.274 3.523 5.301 3.523 8.514-.01 6.632-5.385 12.004-12.02 12.004-.006 0-.012 0-.018 0-1.996-.002-3.963-.5-5.717-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.417 9.867-9.849.004-2.63-1.019-5.101-2.881-6.965C16.538 1.936 14.07 .915 11.443.915 6.008.915 1.585 5.332 1.578 10.766c-.002 1.704.453 3.37 1.316 4.839l-.986 3.6 3.738-.981z"/>
        </svg>

        <span class="relative z-10">{{ t.ctaBtn }}</span>

        <!-- Panah Kecil Pengarah -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>

    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["lang"]);

const i18n = {
  id: {
    ctaTitle: "Siap Mulai Transformasi Tubuhmu Hari Ini?",
    ctaSubtitle: "Hubungi Coach kami sekarang untuk sesi konsultasi gratis, analisis komposisi tubuh, dan kalkulasi target kalori harianmu.",
    ctaBtn: "Hubungi WhatsApp"
  },
  en: {
    ctaTitle: "Ready to Start Your Body Transformation?",
    ctaSubtitle: "Reach out to our Coach today for a free consultation, body composition analysis, and your custom daily calorie target.",
    ctaBtn: "Chat on WhatsApp"
  }
};
const t = computed(() => i18n[props.lang || "id"]);
</script>

<style scoped>
.theme-transition {
  transition-property: color, background-color, border-color, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-duration: 600ms;
}
</style>