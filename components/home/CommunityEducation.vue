<template>
  <div class="scroll-animate">
    <div class="text-center max-w-2xl mx-auto mb-14">
      <span class="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-md mb-2 inline-block backdrop-blur-sm">Support System</span>
      <h2 class="text-3xl sm:text-4xl font-black mb-3 text-slate-900 dark:text-white tracking-tight">{{ t.eduTitle }}</h2>
      <p class="text-slate-500 dark:text-slate-400 text-sm">{{ t.eduSubtitle }}</p>
    </div>
    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="(edu, idx) in t.eduClasses" :key="idx" class="bg-white/95 dark:bg-slate-900/95 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 group backdrop-blur-sm">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="flex items-center gap-1 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" h="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              {{ edu.day }}
            </span>
            <span class="text-[10px] font-black uppercase bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 px-2 py-0.5 rounded">Free Access</span>
          </div>
          <h3 class="font-black text-lg text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{{ edu.title }}</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{{ edu.desc }}</p>
        </div>
        <div class="mt-6 pt-4 border-t border-slate-50 dark:border-slate-800/60 flex items-center gap-2">
          <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400">Host:</span>
          <span class="text-xs font-medium text-slate-600 dark:text-slate-300">{{ edu.coach }}</span>
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
    eduTitle: "Kelas & Edukasi Komunitas",
    eduSubtitle: "Bergabunglah dalam sesi edukasi gratis bersama member lain untuk menambah wawasan diet sehat.",
    eduClasses: [
      { day: "Senin (19.00 WIB)", title: "Healthy Cooking Workshop", desc: "Edukasi mengolah makanan harian rendah kalori pendamping produk Herbalife.", coach: "Coach Amanda, S.Gz" },
      { day: "Rabu (16.00 WIB)", title: "Nutritional Talk & Sharing", desc: "Bedah tuntas fungsi protein dan tips konsisten mengontrol nafsu makan berlebih.", coach: "Coach Budi Santoso" },
      { day: "Sabtu (07.00 WIB)", title: "Home Workout Gathering", desc: "Sesi olahraga kardio ringan bersama dari rumah via Zoom untuk mengoptimalkan pembakaran lemak.", coach: "Coach Siti Rahma" }
    ]
  },
  en: {
    eduTitle: "Community Classes & Education",
    eduSubtitle: "Join our complementary educational blocks with fellow members to scale your wellness journey.",
    eduClasses: [
      { day: "Monday (07.00 PM)", title: "Healthy Cooking Workshop", desc: "Learn to build tasty low-calorie dishes alongside your official Herbalife products.", coach: "Coach Amanda, S.Gz" },
      { day: "Wednesday (04.00 PM)", title: "Nutritional Talk & Sharing", desc: "Deep dive into proteins utility and behavioral tips to beat strong hunger cues.", coach: "Coach Budi Santoso" },
      { day: "Saturday (07.00 AM)", title: "Home Workout Gathering", desc: "Lightweight functional cardio via Zoom from home to double down fat oxidation.", coach: "Coach Siti Rahma" }
    ]
  }
};
const t = computed(() => i18n[props.lang || "id"]);
</script>