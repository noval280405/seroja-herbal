<template>
  <div class="scroll-animate w-full transition-all duration-700 relative theme-transition">
    
    <div class="absolute -top-10 left-1/3 w-96 h-96 bg-teal-500/5 dark:bg-teal-400/5 rounded-full blur-[120px] pointer-events-none select-none"></div>

    <div class="text-center max-w-3xl mx-auto mb-20">
      <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs sm:text-sm font-black uppercase tracking-widest mb-6 backdrop-blur-md">
        <span class="w-2 h-2 rounded-full bg-teal-500 animate-ping"></span>
        {{ lang === 'id' ? 'Sistem Dukungan' : 'Support System' }}
      </div>
      <h2 class="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white tracking-tight leading-none">
        {{ t.eduTitle }}
      </h2>
      <p class="text-slate-500 dark:text-slate-400 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
        {{ t.eduSubtitle }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
      <div 
        v-for="(edu, idx) in t.eduClasses" 
        :key="idx" 
        class="bg-white/80 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between shadow-xl shadow-slate-100/50 dark:shadow-none backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-teal-500/40 dark:hover:border-teal-500/40 hover:shadow-2xl hover:shadow-teal-500/5 dark:hover:shadow-teal-950/50 group relative overflow-hidden cursor-default"
      >
        <div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div>
          <div class="flex items-center justify-between mb-8">
            <span class="flex items-center gap-2 text-xs font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider bg-slate-50 dark:bg-slate-950/50 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-900">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" h="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              {{ edu.day }}
            </span>
            <span class="text-[10px] sm:text-xs font-black uppercase tracking-wider bg-gradient-to-r from-teal-500/10 to-emerald-500/10 text-teal-600 dark:text-teal-400 px-3 py-1.5 rounded-xl border border-teal-500/20">
              {{ lang === 'id' ? 'Akses Gratis' : 'Free Access' }}
            </span>
          </div>

          <h3 class="font-black text-2xl text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 leading-tight">
            {{ edu.title }}
          </h3>
          <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium mb-4">
            {{ edu.desc }}
          </p>
        </div>

        <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white font-black text-xs flex items-center justify-center shadow-md shadow-teal-500/10">
              {{ edu.coach.replace('Coach ', '').substring(0, 2).toUpperCase() }}
            </div>
            <div class="flex flex-col">
              <span class="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Host Mentor</span>
              <span class="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{{ edu.coach }}</span>
            </div>
          </div>
          
          <div class="flex items-center gap-1.5 text-xs font-bold text-slate-400 dark:text-slate-500">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>ZOOM</span>
          </div>
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
    eduSubtitle: "Bergabunglah dalam ekosistem sesi edukasi interaktif gratis bersama member lain untuk mempercepat pemahaman program diet sehat Anda.",
    eduClasses: [
      { day: "Senin — 19.00 WIB", title: "Healthy Cooking Workshop", desc: "Sesi panduan mengolah kreasi makanan harian padat nutrisi, rendah kalori, dan cara mengombinasikannya dengan produk utama Herbalife agar tidak membosankan.", coach: "Coach Amanda, S.Gz" },
      { day: "Rabu — 16.00 WIB", title: "Nutritional Talk & Sharing", desc: "Mengupas tuntas peranan makronutrisi, pentingnya protein terhadap metabolisme tubuh, serta strategi psikologis mengontrol nafsu makan yang berlebih.", coach: "Coach Budi Santoso" },
      { day: "Sabtu — 07.00 WIB", title: "Home Workout Gathering", desc: "Sesi olahraga fungsional kardio ringan bersama dari rumah via virtual untuk mengoptimalkan pembakaran lemak jahat (fat oxidation) dan menjaga stamina.", coach: "Coach Siti Rahma" }
    ]
  },
  en: {
    eduTitle: "Community Classes & Education",
    eduSubtitle: "Join our complementary educational interactive blocks with fellow active members to scale and triple down your wellness progress goals.",
    eduClasses: [
      { day: "Monday — 07.00 PM", title: "Healthy Cooking Workshop", desc: "Master the art of preparing macro-calculated low-calorie delicious everyday dishes built side-by-side with your customized official Herbalife program.", coach: "Coach Amanda, S.Gz" },
      { day: "Wednesday — 04.00 PM", title: "Nutritional Talk & Sharing", desc: "Deep dive insights regarding protein absorption indexes, cellular metabolic rates, and behavioral hacks to seamlessly quiet strong hunger cues.", coach: "Coach Budi Santoso" },
      { day: "Saturday — 07.00 AM", title: "Home Workout Gathering", desc: "High-energy functional fat-burning cardiovascular movements executed online straight from home to accelerate dynamic fat oxidation safely.", coach: "Coach Siti Rahma" }
    ]
  }
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