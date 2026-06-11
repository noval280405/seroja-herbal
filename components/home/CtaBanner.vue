<template>
  <div class="scroll-animate bg-gradient-to-r from-emerald-600 to-teal-700 rounded-[2rem] p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl shadow-emerald-900/20 relative overflow-hidden active:scale-[0.99] transition-transform">
    <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full filter blur-xl transform translate-x-10 -translate-y-10" />
    <div class="max-w-xl relative z-10">
      <h3 class="text-2xl sm:text-3xl font-black tracking-tight mb-2">{{ t.ctaTitle }}</h3>
      <p class="text-emerald-100 text-xs sm:text-sm leading-relaxed">{{ t.ctaSubtitle }}</p>
    </div>
    <a 
      href="https://wa.me/628123456789?text=Halo%20Coach%20Seroja,%20saya%20tertarik%20ingin%20tanya%20program%20dan%20konsultasi%20nutrisi." 
      target="_blank"
      class="bg-white hover:bg-slate-50 text-emerald-700 font-black px-6 py-4 rounded-xl text-xs transition-all whitespace-nowrap shadow-md hover:shadow-lg flex items-center gap-1.5 relative z-10"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.372 5.378 0 12.013 0c3.216.012 6.237 1.27 8.508 3.542 2.27 2.274 3.523 5.301 3.523 8.514-.01 6.632-5.385 12.004-12.02 12.004-.006 0-.012 0-.018 0-1.996-.002-3.963-.5-5.717-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.417 9.867-9.849.004-2.63-1.019-5.101-2.881-6.965C16.538 1.936 14.07 .915 11.443.915 6.008.915 1.585 5.332 1.578 10.766c-.002 1.704.453 3.37 1.316 4.839l-.986 3.6 3.738-.981zm13.12-10.302c-.27-.134-1.597-.788-1.846-.878-.25-.09-.431-.136-.613.135-.182.271-.703.878-.862 1.058-.159.18-.317.202-.587.067-.27-.135-1.14-.42-2.172-1.34-0.803-.715-1.345-1.6-1.503-1.871-.159-.272-.017-.418.118-.553.122-.122.272-.317.408-.475.136-.158.181-.271.272-.453.09-.181.045-.339-.022-.475-.068-.135-.613-1.478-.84-2.02-.22-.53-.442-.458-.613-.467-.159-.008-.34-.01-.522-.01-.181 0-.476.068-.725.339-.249.271-.952.931-.952 2.27 0 1.338.975 2.63 1.111 2.81 1.14 1.514 2.508 2.31 3.9 2.87 1.055.424 1.745.344 2.404.246.736-.11 1.598-.654 1.825-1.254.226-.6.226-1.11.158-1.218-.067-.109-.248-.154-.518-.289z"/></svg>
      <span>{{ t.ctaBtn }}</span>
    </a>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["lang"]);

const i18n = {
  id: {
    ctaTitle: "Siap Untuk Memulai Transformasi Tubuhmu?",
    ctaSubtitle: "Hubungi Coach kami sekarang untuk mendapatkan sesi konsultasi awal gratis dan kalkulasi kalori harian.",
    ctaBtn: "Hubungi WhatsApp"
  },
  en: {
    ctaTitle: "Ready to Initiate Your Body Transformation?",
    ctaSubtitle: "Contact our professional Coach today to lock your first complementary consultation and calorie counting session.",
    ctaBtn: "Chat on WhatsApp"
  }
};
const t = computed(() => i18n[props.lang || "id"]);
</script>