<template>
  <div class="relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 sm:p-12 border border-slate-800 shadow-2xl">
    <!-- Efek Dekoratif Background -->
    <div class="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-700/20"></div>
    <div class="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500 rounded-full blur-[120px] opacity-30"></div>
    
    <div class="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-8">
      <div class="text-center sm:text-left">
        <h3 class="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
          {{ t.ctaTitle }}
        </h3>
        <p class="text-emerald-100/80 text-sm sm:text-base max-w-md">
          {{ t.ctaSubtitle }}
        </p>
      </div>

      <a 
        href="https://wa.me/628123456789?text=Halo%20Coach%20Seroja,%20saya%20tertarik%20ingin%20tanya%20program%20dan%20konsultasi%20nutrisi." 
        target="_blank"
        class="group relative bg-white hover:bg-emerald-50 text-emerald-700 px-8 py-5 rounded-2xl font-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex items-center gap-3 whitespace-nowrap"
      >
        <!-- Efek Pulse -->
        <span class="absolute -top-1 -right-1 flex h-4 w-4">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
        </span>

        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.372 5.378 0 12.013 0c3.216.012 6.237 1.27 8.508 3.542 2.27 2.274 3.523 5.301 3.523 8.514-.01 6.632-5.385 12.004-12.02 12.004-.006 0-.012 0-.018 0-1.996-.002-3.963-.5-5.717-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.417 9.867-9.849.004-2.63-1.019-5.101-2.881-6.965C16.538 1.936 14.07 .915 11.443.915 6.008.915 1.585 5.332 1.578 10.766c-.002 1.704.453 3.37 1.316 4.839l-.986 3.6 3.738-.981z"/></svg>
        <span>{{ t.ctaBtn }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["lang"]);

const i18n = {
  id: {
    ctaTitle: "Siap Mulai Transformasi?",
    ctaSubtitle: "Hubungi Coach kami sekarang untuk sesi konsultasi gratis dan kalkulasi kalori harian Anda.",
    ctaBtn: "Hubungi WhatsApp"
  },
  en: {
    ctaTitle: "Ready to Transform?",
    ctaSubtitle: "Reach out to our Coach today for a free consultation and your custom daily calorie plan.",
    ctaBtn: "Chat on WhatsApp"
  }
};
const t = computed(() => i18n[props.lang || "id"]);
</script>