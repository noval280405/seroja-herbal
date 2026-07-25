<template>
  <section class="relative py-28 px-6 bg-slate-50 dark:bg-slate-950 overflow-hidden theme-transition">
    
    <!-- AMBIENT GLOW BACKGROUND -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[50rem] h-[25rem] bg-gradient-to-tr from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-[140px] pointer-events-none"></div>

    <div class="max-w-6xl mx-auto relative z-10">
      
      <!-- HEADER SECTION -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black text-xs uppercase tracking-widest mb-6 shadow-inner">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          {{ lang === 'id' ? 'Bukti Nyata Transformasi' : 'Real Stories, Real Results' }}
        </div>
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-6 leading-none">
          {{ t.testiTitlePart1 }}
          <span class="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
            {{ t.testiTitlePart2 }}
          </span>
        </h2>
        <p class="text-slate-600 dark:text-slate-400 text-base sm:text-xl font-medium leading-relaxed">
          {{ t.testiSubtitle }}
        </p>
      </div>

      <!-- TESTIMONIAL GRID: KARTU FIX PUTIH DI LIGHT MODE & GELAP DI DARK MODE -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16 items-stretch">
        <div
          v-for="(testi, idx) in t.testimonials"
          :key="idx"
          class="group relative bg-white dark:bg-slate-900/90 p-8 sm:p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/60 dark:shadow-none hover:-translate-y-3 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-default"
        >
          <!-- Neon Glow Tipis di Pojok Atas Saat Hover -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <!-- Tanda Kutip Raksasa Dekoratif -->
          <div class="absolute bottom-4 right-8 text-8xl font-serif text-slate-100 dark:text-slate-800/40 select-none pointer-events-none group-hover:text-emerald-500/10 transition-colors duration-500 leading-none">
            “
          </div>

          <div class="relative z-10">
            <!-- Profil Baris Atas -->
            <div class="flex items-center gap-5 mb-8">
              <div class="relative">
                <img
                  :src="testi.avatar"
                  :alt="testi.name"
                  class="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover ring-2 ring-emerald-500/40 shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1.5 shadow-md">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {{ testi.name }}
                </h4>
                <span class="inline-flex items-center gap-1.5 mt-1 px-3.5 py-1 rounded-xl text-xs font-black uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-2xs">
                  {{ testi.result }}
                </span>
              </div>
            </div>

            <!-- Teks Kutipan Ulasan -->
            <p class="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-medium italic">
              "{{ testi.quote }}"
            </p>
          </div>

          <!-- Indikator Bintang Estetik di Bawah -->
          <div class="relative z-10 flex items-center gap-1 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
            <template v-for="s in 5" :key="s">
              <svg class="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </template>
            <span class="text-xs font-bold text-slate-400 dark:text-slate-500 ml-2">Verified Transformation</span>
          </div>

        </div>
      </div>

      <!-- STATS BENTO GRID -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(stat, idx) in t.stats"
          :key="idx"
          class="relative overflow-hidden bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/60 dark:shadow-none text-center group hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 flex flex-col items-center justify-center cursor-default"
        >
          <!-- Hover Gradien Latar Belakang -->
          <div class="absolute inset-0 bg-gradient-to-tr from-emerald-600/10 via-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div class="relative z-10 flex flex-col items-center">
            <!-- Wadah Ikon -->
            <div class="w-16 h-16 mb-6 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 group-hover:bg-gradient-to-tr group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-emerald-500/30">
              <component :is="statIcons[idx]" class="w-7 h-7" />
            </div>

            <!-- Angka Utama -->
            <div class="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-2 group-hover:scale-105 transition-transform duration-300">
              {{ stat.num }}
            </div>
            
            <!-- Label Statistik -->
            <div class="text-xs font-black text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 uppercase tracking-widest transition-colors">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed, h } from "vue";

const props = defineProps(["lang"]);

// Inline Icon Components untuk Stats
const UsersIcon = () =>
  h("svg", { fill: "none", stroke: "currentColor", "stroke-width": "2.5", viewBox: "0 0 24 24" }, [
    h("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
    h("circle", { cx: "9", cy: "7", r: "4" }),
    h("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
    h("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }),
  ]);

const StarIcon = () =>
  h("svg", { fill: "none", stroke: "currentColor", "stroke-width": "2.5", viewBox: "0 0 24 24" }, [
    h("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }),
  ]);

const ShieldCheckIcon = () =>
  h("svg", { fill: "none", stroke: "currentColor", "stroke-width": "2.5", viewBox: "0 0 24 24" }, [
    h("path", { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" }),
  ]);

const statIcons = [UsersIcon, StarIcon, ShieldCheckIcon];

const i18n = {
  id: {
    testiTitlePart1: "Kisah Sukses",
    testiTitlePart2: "Menginspirasi",
    testiSubtitle:
      "Hasil nyata transformasi tubuh dari mereka yang berkomitmen penuh bersama program eksklusif Seroja Nutrition.",
    testimonials: [
      {
        name: "Budi Santoso",
        result: "Turun 12 Kg dalam 3 Bulan",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
        quote:
          "Stamina saya jauh lebih baik dan lingkar perut berkurang drastis berkat Shake Formula 1 serta arahan coach yang sangat telaten setiap hari.",
      },
      {
        name: "Siti Rahma",
        result: "Naik 5 Kg (Massa Otot)",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
        quote:
          "Dulu kurus dan gampang lemas, setelah ikut program gain weight Seroja tubuh jadi jauh lebih padat, berotot, dan bugar berenergi.",
      },
    ],
    stats: [
      { num: "500+", label: "Konsumen Aktif Berhasil" },
      { num: "4.9/5", label: "Rating Kepuasan Member" },
      { num: "100%", label: "Produk Original Terverifikasi" },
    ],
  },
  en: {
    testiTitlePart1: "Inspiring",
    testiTitlePart2: "Success Stories",
    testiSubtitle:
      "Real physical body transformations from members who stayed dedicated inside Seroja Nutrition's structured ecosystem.",
    testimonials: [
      {
        name: "Budi Santoso",
        result: "Lost 12 Kg in 3 Months",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
        quote:
          "My stamina skyrocketed and my waistline shrunk drastically thanks to the Formula 1 Shake routine combined with daily hands-on coaching.",
      },
      {
        name: "Siti Rahma",
        result: "Gained 5 Kg (Muscle Mass)",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
        quote:
          "I used to feel skinny and weak. After following Seroja's weight gain framework, my body feels firmer, athletic, and robustly healthy.",
      },
    ],
    stats: [
      { num: "500+", label: "Successful Active Members" },
      { num: "4.9/5", label: "Member Satisfaction Rating" },
      { num: "100%", label: "Verified Authentic Products" },
    ],
  },
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