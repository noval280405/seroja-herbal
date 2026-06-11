<template>
  <section class="py-24 px-6 bg-slate-50 dark:bg-slate-950">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4"
        >
          {{ t.testiTitlePart1 }}
          <span class="text-emerald-500">{{ t.testiTitlePart2 }}</span>
        </h2>
        <p class="text-slate-500 max-w-lg mx-auto">{{ t.testiSubtitle }}</p>
      </div>

      <!-- Testimonial Grid -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div
          v-for="(testi, idx) in t.testimonials"
          :key="idx"
          class="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] relative"
        >
          <div class="flex flex-col items-center text-center">
            <img
              :src="testi.avatar"
              :alt="testi.name"
              class="w-24 h-24 rounded-full object-cover border-4 border-slate-50 dark:border-slate-800 mb-6 -mt-16 shadow-lg"
            />
            <p
              class="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed"
            >
              "{{ testi.quote }}"
            </p>
            <h4 class="font-bold text-slate-900 dark:text-white">
              {{ testi.name }}
            </h4>
            <span
              class="text-emerald-600 dark:text-emerald-400 font-bold text-sm mt-1"
              >{{ testi.result }}</span
            >
          </div>
        </div>
      </div>

      <!-- Stats Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="(stat, idx) in t.stats"
          :key="idx"
          class="bg-slate-900 dark:bg-white p-8 rounded-[2rem] text-center group hover:bg-emerald-600 transition-colors duration-300"
        >
          <div
            class="text-emerald-400 group-hover:text-white dark:text-emerald-600 mb-3 w-8 h-8 mx-auto"
            v-html="stat.iconSvg"
          ></div>
          <div class="text-4xl font-black text-white dark:text-slate-900 mb-1">
            {{ stat.num }}
          </div>
          <div
            class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest group-hover:text-emerald-100"
          >
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["lang"]);

const i18n = {
  id: {
    testiTitle: "Kisah Sukses Menginspirasi",
    testiTitlePart1: "Kisah Sukses",
    testiTitlePart2: "Menginspirasi",
    testiSubtitle:
      "Hasil nyata transformasi tubuh dari mereka yang berkomitmen penuh bersama Seroja Nutrition.",
    testimonials: [
      {
        name: "Budi Santoso",
        result: "Turun 12 Kg dalam 3 Bulan",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
        quote:
          "Stamina saya jauh lebih baik dan lingkar perut berkurang drastis berkat Shake Formula 1 setiap pagi.",
      },
      {
        name: "Siti Rahma",
        result: "Naik 5 Kg (Massa Otot)",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",

        quote:
          "Dulu kurus dan lemas, setelah ikut program gain weight Seroja tubuh jadi padat dan tidak gampang sakit.",
      },
    ],
    stats: [
      {
        num: "500+",
        label: "Konsumen Aktif Berhasil",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      },
      {
        num: "4.9/5",
        label: "Rating Kepuasan",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      },
      {
        num: "100%",
        label: "Produk Original Asli",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
      },
    ],
  },
  en: {
    testiTitle: "Inspiring Success Stories",
    testiTitlePart1: "Inspiring",
    testiTitlePart2: "Success Stories",
    testiSubtitle:
      "Real body transformations from those who stayed committed with Seroja Nutrition.",
    testimonials: [
      {
        name: "Budi Santoso",
        result: "Lost 12 Kg in 3 Months",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
        quote:
          "My stamina is much better and my waistline shrunk drastically thanks to the Formula 1 Shake every morning.",
      },
      {
        name: "Siti Rahma",
        result: "Gained 5 Kg (Muscle Mass)",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",

        quote:
          "I used to feel weak and skinny. After joining the Seroja weight gain plan, my body feels firmer and healthier.",
      },
    ],
    stats: [
      {
        num: "500+",
        label: "Successful Active Members",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      },
      {
        num: "4.9/5",
        label: "Satisfaction Rating",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      },
      {
        num: "100%",
        label: "Authentic Original Products",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
      },
    ],
  },
};
const t = computed(() => i18n[props.lang || "id"]);
</script>
