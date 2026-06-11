<template>
  <div class="scroll-animate w-full transition-all duration-700 relative theme-transition">
    
    <div class="absolute top-1/4 -right-20 w-[32rem] h-[32rem] bg-emerald-500/5 dark:bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none select-none"></div>

    <div class="text-center max-w-3xl mx-auto mb-24">
      <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-black uppercase tracking-widest mb-6 backdrop-blur-md">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        {{ lang === 'id' ? 'Program Terstruktur' : 'Structured Programs' }}
      </div>
      <h2 class="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white tracking-tight leading-none">
        {{ t.servicesTitle }}
      </h2>
      <p class="text-slate-500 dark:text-slate-400 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
        {{ t.servicesSubtitle }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
      <div 
        v-for="(svc, idx) in t.services" 
        :key="idx" 
        class="bg-white/80 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-[2.5rem] p-8 sm:p-12 flex flex-col justify-between shadow-xl shadow-slate-100/50 dark:shadow-none backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/5 dark:hover:shadow-emerald-950/50 group relative overflow-hidden cursor-default"
        :class="idx === 1 ? 'md:translate-y-4 border-emerald-500/20 dark:border-emerald-400/20 shadow-emerald-500/5' : ''"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        <div>
          <div class="flex justify-between items-start mb-10">
            <span 
              class="inline-block text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-xl border transition-all duration-300"
              :class="idx === 0 
                ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-500/10' 
                : idx === 1 
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-500/10'
                  : 'bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border-teal-500/10'"
            >
              {{ svc.tag }}
            </span>
            
            <span class="text-4xl font-black text-slate-100 dark:text-slate-800/40 font-mono tracking-tighter select-none group-hover:text-emerald-500/10 transition-colors duration-500">
              0{{ idx + 1 }}
            </span>
          </div>

          <div 
            class="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-500 shadow-inner" 
            v-html="svc.iconSvg"
          ></div>

          <h3 class="text-2xl font-black mb-4 text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 leading-snug">
            {{ svc.name }}
          </h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-8">
            {{ svc.desc }}
          </p>
        </div>

        <div class="flex items-center gap-2 text-sm font-black text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
          <span>{{ lang === 'id' ? 'Pelajari Program' : 'Explore Program' }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
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
    servicesTitle: "Layanan & Program Seroja",
    servicesSubtitle: "Bukan sekadar penyedia suplemen nutrisi biasa. Kami mendesain ekosistem bimbingan harian yang dipersonalisasi penuh demi mengunci target hasil Anda.",
    services: [
      { 
        name: "Manajemen Berat Badan", 
        desc: "Transformasi komposisi tubuh aman melalui formulasi defisit kalori harian yang presisi, disesuaikan penuh dengan profil aktivitas Anda beserta kombinasi meal plan Herbalife.", 
        tag: "Paling Populer", 
        // Ikon Grafik Naik/Transformasi Akurat
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/></svg>` 
      },
      { 
        name: "Menaikkan Massa Otot", 
        desc: "Kustomisasi program surplus kalori bersih bagi Anda yang ingin mengoptimalkan pembentukan serat otot baru, mempercepat pemulihan fisik, serta meningkatkan berat badan fungsional.", 
        tag: "Kebugaran & Otot", 
        // Ikon Dumbbell Solid Atletis
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-1V3h-2v2h-4V3H8v2H7c-1.1 0-2 .9-2 2v4H3.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H5v4c0 1.1.9 2 2 2h1v2h2v-2h4v2h2v-2h1c1.1 0 2-.9 2-2v-4h1.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/></svg>` 
      },
      { 
        name: "Konsultasi Kebugaran 1-on-1", 
        desc: "Bedah tuntas kondisi biologis organ tubuh Anda menggunakan teknologi bio-impedansi mutakhir di Club secara cuma-cuma untuk mendeteksi tumpukan lemak visceral berbahaya.", 
        tag: "Gratis di Club", 
        // Ikon Monitor / Smart Scanner Deteksi Kesehatan
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/></svg>` 
      }
    ]
  },
  en: {
    servicesTitle: "Seroja Services & Programs",
    servicesSubtitle: "Far beyond general supplement retailers. We craft high-end tailored routine ecosystems built to securely lock your personal structural results.",
    services: [
      { 
        name: "Weight Management", 
        desc: "Safe, elite tailored transformations combining precision caloric deficits maps built side-by-side with your physical metabolic metrics and signature Herbalife guidance.", 
        tag: "Most Popular", 
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/></svg>` 
      },
      { 
        name: "Lean Muscle Gain", 
        desc: "Custom high-protein clean caloric surplus strategies for active individuals looking to maximize muscular hypertrophy, enhance structural recovery, and build healthy retention.", 
        tag: "Fitness & Muscle", 
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-1V3h-2v2h-4V3H8v2H7c-1.1 0-2 .9-2 2v4H3.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H5v4c0 1.1.9 2 2 2h1v2h2v-2h4v2h2v-2h1c1.1 0 2-.9 2-2v-4h1.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/></svg>` 
      },
      { 
        name: "1-on-1 Wellness Coaching", 
        desc: "Deep dive bio-metric breakdown tracking inner fat index ratios, muscular distribution channels, and organic hydration levels completely complimentary directly inside the club space.", 
        tag: "Free at Club", 
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/></svg>` 
      }
    ]
  }
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