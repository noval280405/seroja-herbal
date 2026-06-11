<template>
  <div>
    <div class="scroll-animate bg-gradient-to-b from-slate-100/90 to-slate-50 dark:from-slate-900/60 dark:to-slate-950 p-8 sm:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-900 backdrop-blur-sm transition-all duration-500">
      <div class="text-center max-w-2xl mx-auto mb-14">
        <span class="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-md mb-2 inline-block backdrop-blur-sm">Real Results</span>
        <h2 class="text-3xl sm:text-4xl font-black mb-3 text-slate-900 dark:text-white tracking-tight">{{ t.testiTitle }}</h2>
        <p class="text-slate-500 dark:text-slate-400 text-sm">{{ t.testiSubtitle }}</p>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <div v-for="(testi, idx) in t.testimonials" :key="idx" class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl shadow-xs flex flex-col sm:flex-row gap-5 items-start transition-all duration-300 hover:shadow-lg group hover:border-emerald-500/20">
          <div class="relative flex-shrink-0 mx-auto sm:mx-0">
            <img :src="testi.avatar" :alt="testi.name" class="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-500/20 shadow-inner group-hover:scale-105 transition-transform duration-300 bg-slate-100 dark:bg-slate-800" />
            <div class="absolute -bottom-2 -right-2 bg-emerald-600 text-white p-1 rounded-lg shadow flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
          </div>
          
          <div class="flex-1 text-center sm:text-left">
            <div class="flex items-center justify-center sm:justify-start gap-0.5 mb-2 text-amber-400">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </div>
            <p class="italic text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed transition-colors">
              "{{ testi.quote }}"
            </p>
            <h4 class="font-black text-sm text-slate-900 dark:text-white transition-colors">{{ testi.name }}</h4>
            <span class="inline-block text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/50 px-2 py-0.5 rounded mt-1">
              {{ testi.result }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-animate grid sm:grid-cols-3 gap-8 text-center border-t border-slate-200 dark:border-slate-800/80 pt-14 mt-32">
      <div v-for="(stat, idx) in t.stats" :key="idx" class="p-6 bg-white/90 dark:bg-slate-900/90 border border-slate-100 dark:border-slate-800 rounded-2xl transition-all duration-300 hover:shadow-md backdrop-blur-sm">
        <div class="w-10 h-10 mx-auto text-emerald-600 dark:text-emerald-400 mb-2 transition-colors" v-html="stat.iconSvg"></div>
        <div class="text-3xl font-black mb-1 text-slate-900 dark:text-white tracking-tight transition-colors">{{ stat.num }}</div>
        <div class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider transition-colors">{{ stat.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["lang"]);

const i18n = {
  id: {
    testiTitle: "Kisah Sukses Menginspirasi",
    testiSubtitle: "Hasil nyata transformasi tubuh dari mereka yang berkomitmen penuh bersama Seroja Nutrition.",
    testimonials: [
      { name: "Budi Santoso", result: "Turun 12 Kg dalam 3 Bulan", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80", quote: "Stamina saya jauh lebih baik dan lingkar perut berkurang drastis berkat Shake Formula 1 setiap pagi." },
      { name: "Siti Rahma", result: "Naik 5 Kg (Massa Otot)", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80", quote: "Dulu kurus dan lemas, setelah ikut program gain weight Seroja tubuh jadi padat dan tidak gampang sakit." }
    ],
    stats: [
      { num: "500+", label: "Konsumen Aktif Berhasil", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
      { num: "4.9/5", label: "Rating Kepuasan", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>` },
      { num: "100%", label: "Produk Original Asli", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>` }
    ]
  },
  en: {
    testiTitle: "Inspiring Success Stories",
    testiSubtitle: "Real body transformations from those who stayed committed with Seroja Nutrition.",
    testimonials: [
      { name: "Budi Santoso", result: "Lost 12 Kg in 3 Months", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80", quote: "My stamina is much better and my waistline shrunk drastically thanks to the Formula 1 Shake every morning." },
      { name: "Siti Rahma", result: "Gained 5 Kg (Muscle Mass)", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80", quote: "I used to feel weak and skinny. After joining the Seroja weight gain plan, my body feels firmer and healthier." }
    ],
    stats: [
      { num: "500+", label: "Successful Active Members", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
      { num: "4.9/5", label: "Satisfaction Rating", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>` },
      { num: "100%", label: "Authentic Original Products", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>` }
    ]
  }
};
const t = computed(() => i18n[props.lang || "id"]);
</script>