<template>
  <div class="scroll-animate bg-white/90 dark:bg-slate-900/90 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] p-8 sm:p-12 shadow-xs relative overflow-hidden backdrop-blur-md transition-all duration-500">
    <div class="text-center max-w-2xl mx-auto mb-14 relative z-10">
      <h2 class="text-3xl sm:text-4xl font-black mb-3 text-slate-900 dark:text-white tracking-tight">{{ t.stepTitle }}</h2>
      <p class="text-slate-500 dark:text-slate-400 text-sm">{{ t.stepSubtitle }}</p>
    </div>
    <div class="grid md:grid-cols-3 gap-8 relative z-10">
      <div v-for="(step, idx) in t.steps" :key="idx" class="flex flex-col items-center text-center px-4 group">
        <div class="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white font-black flex items-center justify-center text-base shadow-md shadow-emerald-600/20 mb-4 group-hover:rotate-12 transition-transform duration-300">
          0{{ idx + 1 }}
        </div>
        <h3 class="font-black text-base text-slate-900 dark:text-white mb-2">{{ step.title }}</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">{{ step.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["lang"]);

const i18n = {
  id: {
    stepTitle: "3 Langkah Memulai Program",
    stepSubtitle: "Sistem pendaftaran and pendampingan yang mudah dilakukan oleh siapa saja, bahkan untuk pemula.",
    steps: [
      { title: "Konsultasi Komposisi Tubuh", desc: "Ukur berat, kadar lemak, dan kebutuhan kalori harian Anda bersama Coach kami secara online maupun langsung." },
      { title: "Dapatkan Paket Nutrisi", desc: "Pilih rasa Shake dan pelengkap hidrasi sesuai target kesehatan serta budget operasional harian Anda." },
      { title: "Mulai Pendampingan Intensif", desc: "Masuk ke grup support, dapatkan panduan jadwal makan, dan nikmati transformasi tubuh Anda!" }
    ]
  },
  en: {
    stepTitle: "3 Steps to Start Your Plan",
    stepSubtitle: "Easy onboarding and personal monitoring processes built intentionally for complete beginners.",
    steps: [
      { title: "Body Composition Check", desc: "Check your scale, body fat fat rates, and daily calorie needs with our Coach online or face-to-face." },
      { title: "Get Your Nutritional Set", desc: "Pick your core Shake flavor and hydration add-ons matching your health objectives and personal budget." },
      { title: "Begin Intensive Coaching", desc: "Join our active support groups, receive precise meal schedules, and watch your body transform!" }
    ]
  }
};
const t = computed(() => i18n[props.lang || "id"]);
</script>