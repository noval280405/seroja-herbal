<template>
  <div
    class="scroll-animate w-full transition-all duration-700 relative theme-transition"
  >
    <div class="text-center max-w-3xl mx-auto mb-20">
      <div
        class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-black uppercase tracking-widest mb-6 animate-pulse"
      >
        <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
        {{ lang === "id" ? "Premium Standard" : "Premium Standards" }}
      </div>
      <h2
        class="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white tracking-tight leading-none"
      >
        {{ t.whyTitle }}
      </h2>
      <p
        class="text-slate-500 dark:text-slate-400 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium"
      >
        {{ t.whySubtitle }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        class="md:col-span-2 p-10 sm:p-14 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-950 border border-slate-200/80 dark:border-slate-800/80 rounded-[3rem] shadow-xl shadow-slate-200/40 dark:shadow-none flex flex-col justify-between group hover:-translate-y-2 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/5 dark:hover:shadow-emerald-950/40 transition-all duration-500 overflow-hidden relative cursor-default"
      >
        <div
          class="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl group-hover:scale-120 transition-transform duration-700"
        ></div>
        <div>
          <div
            class="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-8 border border-emerald-500/10 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-md"
            v-html="t.whyCards[0].iconSvg"
          ></div>
          <h3
            class="font-black text-2xl sm:text-3xl text-slate-900 dark:text-white mb-4 tracking-tight"
          >
            {{ t.whyCards[0].title }}
          </h3>
          <p
            class="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-medium"
          >
            {{ t.whyCards[0].desc }}
          </p>
        </div>
      </div>

      <div
        class="p-10 sm:p-12 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-950 border border-slate-200/80 dark:border-slate-800/80 rounded-[3rem] shadow-xl shadow-slate-200/40 dark:shadow-none flex flex-col justify-between group hover:-translate-y-2 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/5 dark:hover:shadow-emerald-950/40 transition-all duration-500 relative cursor-default"
      >
        <div>
          <div
            class="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-8 border border-emerald-500/10 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-md"
            v-html="t.whyCards[1].iconSvg"
          ></div>
          <h3
            class="font-black text-2xl text-slate-900 dark:text-white mb-4 tracking-tight"
          >
            {{ t.whyCards[1].title }}
          </h3>
          <p
            class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium"
          >
            {{ t.whyCards[1].desc }}
          </p>
        </div>
      </div>

      <div
        class="p-10 sm:p-12 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-950 border border-slate-200/80 dark:border-slate-800/80 rounded-[3rem] shadow-xl shadow-slate-200/40 dark:shadow-none flex flex-col justify-between group hover:-translate-y-2 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/5 dark:hover:shadow-emerald-950/40 transition-all duration-500 relative cursor-default"
      >
        <div>
          <div
            class="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-8 border border-emerald-500/10 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-md"
            v-html="t.whyCards[2].iconSvg"
          ></div>
          <h3
            class="font-black text-2xl text-slate-900 dark:text-white mb-4 tracking-tight"
          >
            {{ t.whyCards[2].title }}
          </h3>
          <p
            class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium"
          >
            {{ t.whyCards[2].desc }}
          </p>
        </div>
      </div>

      <div
        class="md:col-span-2 p-10 sm:p-14 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-950 border border-slate-200/80 dark:border-slate-800/80 rounded-[3rem] shadow-xl shadow-slate-200/40 dark:shadow-none flex flex-col justify-between group hover:-translate-y-2 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/5 dark:hover:shadow-emerald-950/40 transition-all duration-500 overflow-hidden relative cursor-default"
      >
        <div
          class="absolute -left-10 -bottom-10 w-60 h-60 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl group-hover:scale-120 transition-transform duration-700"
        ></div>
        <div>
          <div
            class="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-8 border border-emerald-500/10 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-md"
            v-html="t.whyCards[3].iconSvg"
          ></div>
          <h3
            class="font-black text-2xl sm:text-3xl text-slate-900 dark:text-white mb-4 tracking-tight"
          >
            {{ t.whyCards[3].title }}
          </h3>
          <p
            class="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-medium"
          >
            {{ t.whyCards[3].desc }}
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
    whyTitle: "Mengapa Memilih Seroja Nutrition?",
    whySubtitle:
      "Kami menerapkan standar bimbingan kesehatan terbaik demi mewujudkan perubahan komposisi tubuh impian Anda secara konsisten.",
    whyCards: [
      {
        title: "100% Produk Original Terjamin",
        desc: "Garansi keaslian penuh karena seluruh barisan suplemen nutrisi dipasok langsung melalui gudang pusat resmi Herbalife Indonesia dengan nomor registrasi pelanggan yang sah.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-1.25-6l-3.5-3.5 1.41-1.42 2.09 2.08 4.59-4.59 1.42 1.41-6.01 6.02z"/></svg>`,
      },
      {
        title: "Bimbingan Coach Personal 1-on-1",
        desc: "Kami tidak membiarkan Anda berjuang sendirian. Evaluasi asupan kalori defisit dan pola hidrasi harian dipantau ketat secara personal oleh coach berpengalaman.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 2 4 2zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
      },
      {
        title: "Analisis & Evaluasi Tubuh Berkala",
        desc: "Proses perkembangan tubuh Anda diukur detail menggunakan smart scale digital untuk melacak kadar lemak tubuh, visceral fat, massa otot, hingga usia metabolisme sel tubuh.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`,
      },
      {
        title: "Pola Makan Fleksibel & Shake Lezat",
        desc: "Katakan tinggal kelas pada program diet ekstrem menyiksa yang kelaparan. Nikmati variasi rasa formula shake lezat kaya nutrisi mikro yang mengenyangkan sekaligus berenergi.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 13.79L12 14l-3.29 1.79.83-3.72-2.83-2.45 3.8-.36L12 5.75l1.32 3.51 3.8.36-2.83 2.45.83 3.72z"/></svg>`,
      },
    ],
  },
  en: {
    whyTitle: "Why Choose Seroja Nutrition?",
    whySubtitle:
      "We implement premium high-quality wellness standards to securely transform your body targets into life-long reality.",
    whyCards: [
      {
        title: "100% Certified Authentic Products",
        desc: "Full authenticity guaranteed. Every supplement rows directly dispatched from official Herbalife Indonesia principal warehouse containing tracked barcoded seals.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-1.25-6l-3.5-3.5 1.41-1.42 2.09 2.08 4.59-4.59 1.42 1.41-6.01 6.02z"/></svg>`,
      },
      {
        title: "Expert Personal 1-on-1 Coaching",
        desc: "You are never left alone. Your clean calorie structures, meal breakdowns, and routine metrics are comprehensively mapped out by certified professionals.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 2 4 2zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
      },
      {
        title: "Periodic Smart Bio-Assessments",
        desc: "Progress isn't just a guess. Track precise biometric evolutions including body fat indexes, muscle retention volume, visceral fats, and metabolic ages.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`,
      },
      {
        title: "Flexible Lifestyle & Gourmet Shakes",
        desc: "Wave goodbye to boring restrictive starve-diets. Embrace clean caloric satisfaction with premium dense meal-replacements packing elite taste profiles.",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 13.79L12 14l-3.29 1.79.83-3.72-2.83-2.45 3.8-.36L12 5.75l1.32 3.51 3.8.36-2.83 2.45.83 3.72z"/></svg>`,
      },
    ],
  },
};
const t = computed(() => i18n[props.lang || "id"]);
</script>

<style scoped>
.theme-transition {
  transition-property: color, background-color, border-color, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 600ms;
}
</style>
