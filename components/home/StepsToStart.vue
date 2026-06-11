<template>
  <div class="relative py-24 overflow-hidden bg-slate-50 dark:bg-slate-950">
    <!-- Dekorasi Latar Belakang -->
    <div
      class="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]"
    ></div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <!-- Header dengan animasi teks -->
      <div class="text-center mb-20 space-y-4">
        <div
          class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-black uppercase tracking-widest mb-6 backdrop-blur-md"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          {{ t.stepTitle }}
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
    {{ t.titlePrefix }} <span class="text-emerald-600">{{ t.titleHighlight }}</span>
  </h2>
        <p class="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          {{ t.stepSubtitle }}
        </p>
      </div>

      <!-- Grid Langkah -->
      <div class="grid md:grid-cols-3 gap-8 items-start">
        <div
          v-for="(step, idx) in t.steps"
          :key="idx"
          class="relative group animate-fade-in"
          :style="{ animationDelay: `${idx * 200}ms` }"
        >
          <!-- Efek Glow Hover -->
          <div
            class="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur transition duration-500"
          ></div>

          <div
            class="relative bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-800 transition-all duration-500 group-hover:scale-[1.02] h-full"
          >
            <!-- Ikon/Angka dengan efek gradient -->
            <div
              class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-emerald-600/20 mb-8 transform group-hover:rotate-6 transition-transform"
            >
              0{{ idx + 1 }}
            </div>

            <h3
              class="text-xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight"
            >
              {{ step.title }}
            </h3>
            <p
              class="text-slate-600 dark:text-slate-400 leading-relaxed text-sm"
            >
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
</style>

<script setup>
import { computed } from "vue";
const props = defineProps(["lang"]);

const i18n = {
  id: {
    titlePrefix: "3 Langkah Menuju",
    titleHighlight: "Sehat",
    stepTitle: "Proses Sederhana",
    stepSubtitle: "Sistem pendaftaran dan pendampingan yang mudah dilakukan oleh siapa saja.",
    steps: [
      { title: "Konsultasi Komposisi Tubuh", desc: "Ukur berat, kadar lemak, dan kebutuhan kalori harian Anda bersama Coach kami." },
      { title: "Dapatkan Paket Nutrisi", desc: "Pilih rasa Shake dan pelengkap hidrasi sesuai target kesehatan Anda." },
      { title: "Mulai Pendampingan Intensif", desc: "Masuk ke grup support, dapatkan panduan jadwal makan, dan nikmati transformasi tubuh Anda!" }
    ]
  },
  en: {
    titlePrefix: "3 Steps to a",
    titleHighlight: "Healthy You",
    stepTitle: "Simple Process",
    stepSubtitle: "An easy registration and mentoring system that anyone can follow.",
    steps: [
      { title: "Body Composition Check", desc: "Measure your weight, body fat, and daily calorie needs with our Coach." },
      { title: "Get Your Nutrition Pack", desc: "Choose your Shake flavor and hydration add-ons matching your health objectives." },
      { title: "Start Intensive Mentoring", desc: "Join our support group, get your meal plan guide, and watch your body transform!" }
    ]
  }
};

const t = computed(() => i18n[props.lang === 'en' ? 'en' : 'id']);
</script>