<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid md:grid-cols-2 gap-12 items-center mb-24">
      <div>
        <span class="inline-block bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {{ t.badge }}
        </span>
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight mb-6 leading-tight">
          {{ t.title }} <span class="text-emerald-600 dark:text-emerald-400">Herbalife Nutrition</span>
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400 mb-8">
          {{ t.subtitle }}
        </p>
        <div class="flex flex-wrap gap-4">
          <NuxtLink to="/products" class="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-xl transition shadow-lg shadow-emerald-600/20">
            {{ t.btnProducts }}
          </NuxtLink>
          <NuxtLink to="/location" class="border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium px-6 py-3 rounded-xl transition">
            {{ t.btnClub }}
          </NuxtLink>
        </div>
      </div>
      <div class="relative bg-gradient-to-tr from-emerald-500 to-teal-600 rounded-3xl p-8 aspect-video flex items-center justify-center text-white shadow-2xl">
        <div class="text-center">
          <span class="text-6xl mb-4 block">🥤</span>
          <h3 class="text-2xl font-bold">Seroja Nutrition Club</h3>
          <p class="text-emerald-100 text-sm mt-1">Healthy Shake & Energy Tea</p>
        </div>
      </div>
    </div>

    <div class="mb-24">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-3xl font-black mb-3">{{ t.servicesTitle }}</h2>
        <p class="text-slate-600 dark:text-slate-400 text-sm">{{ t.servicesSubtitle }}</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(svc, idx) in t.services" :key="idx" class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300">
          <div class="text-4xl mb-4">{{ svc.icon }}</div>
          <h3 class="text-xl font-bold mb-2">{{ svc.name }}</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{{ svc.desc }}</p>
          <span class="inline-block text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-md">
            {{ svc.tag }}
          </span>
        </div>
      </div>
    </div>

    <div class="mb-24 bg-slate-100 dark:bg-slate-800/30 rounded-3xl p-8 sm:p-12">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-3xl font-black mb-3">{{ t.testiTitle }}</h2>
        <p class="text-slate-600 dark:text-slate-400 text-sm">{{ t.testiSubtitle }}</p>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <div v-for="(testi, idx) in t.testimonials" :key="idx" class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm flex gap-4 items-start">
          <div class="bg-emerald-100 dark:bg-emerald-900/50 text-xl p-3 rounded-full flex-shrink-0">🔥</div>
          <div>
            <p class="italic text-slate-600 dark:text-slate-300 text-sm mb-4">"{| testi.quote |}"</p>
            <h4 class="font-bold text-sm">{{ testi.name }}</h4>
            <p class="text-xs text-emerald-600 dark:text-emerald-400 font-medium">{{ testi.result }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid sm:grid-cols-3 gap-8 text-center border-t border-slate-200 dark:border-slate-800 pt-12">
      <div v-for="(stat, idx) in t.stats" :key="idx" class="p-6 bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800">
        <div class="text-3xl mb-2">{{ stat.icon }}</div>
        <div class="text-2xl font-bold mb-1">{{ stat.num }}</div>
        <div class="text-sm text-slate-500 dark:text-slate-400">{{ stat.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['lang'])

const i18n = {
  id: {
    badge: 'Franchise Resmi & Terpercaya',
    title: 'Awali Hidup Sehatmu Bersama Seroja &',
    subtitle: 'Kami menyediakan solusi nutrisi terbaik dari Herbalife untuk membantu Anda mencapai berat badan ideal, menjaga stamina, dan menjalani gaya hidup sehat terstruktur.',
    btnProducts: 'Lihat Produk',
    btnClub: 'Kunjungi Rumah Nutrisi',
    servicesTitle: 'Layanan & Program Seroja',
    servicesSubtitle: 'Bukan sekadar jual produk, kami membimbing Anda dengan program terukur demi hasil maksimal.',
    services: [
      { icon: '📉', name: 'Manajemen Berat Badan', desc: 'Program kustomisasi turun berat badan aman dengan pengelolaan kalori harian dan panduan meal plan Herbalife.', tag: 'Paling Populer' },
      { icon: '📈', name: 'Menaikkan Massa Otot', desc: 'Asupan nutrisi tinggi protein untuk Anda yang ingin membangun otot serta menambah berat badan secara sehat.', tag: 'Kebugaran' },
      { icon: '🎯', name: 'Konsultasi Kebugaran 1-on-1', desc: 'Analisis komposisi tubuh gratis (Lemak, Masa Otot, Air) langsung dibimbing oleh coach berpengalaman.', tag: 'Gratis di Club' }
    ],
    testiTitle: 'Kisah Sukses Konsumen kami',
    testiSubtitle: 'Hasil nyata transformasi tubuh dari mereka yang berkomitmen penuh bersama Seroja Nutrition.',
    testimonials: [
      { name: 'Budi Santoso', result: 'Turun 12 Kg dalam 3 Bulan', quote: 'Stamina saya jauh lebih baik dan lingkar perut berkurang drastis berkat Shake Formula 1 setiap pagi.' },
      { name: 'Siti Rahma', result: 'Naik 5 Kg (Massa Otot)', quote: 'Dulu kurus dan lemas, setelah ikut program gain weight Seroja tubuh jadi padat dan tidak gampang sakit.' }
    ],
    stats: [
      { icon: '👥', num: '500+', label: 'Konsumen Aktif Berhasil' },
      { icon: '⭐', num: '4.9/5', label: 'Rating Kepuasan' },
      { icon: '🍃', num: '100%', label: 'Produk Original Asli' },
    ]
  },
  en: {
    badge: 'Official & Trusted Franchise',
    title: 'Start Your Healthy Life with Seroja &',
    subtitle: 'We provide top-tier nutrition solutions from Herbalife to help you achieve your ideal weight, boost energy, and maintain a structured healthy lifestyle.',
    btnProducts: 'Browse Products',
    btnClub: 'Visit Nutrition Club',
    servicesTitle: 'Seroja Services & Programs',
    servicesSubtitle: 'More than just selling products, we coach you with structured programs for the best results.',
    services: [
      { icon: '📉', name: 'Weight Management', desc: 'Safe, customized weight loss programs with daily calorie management and Herbalife meal plan guidelines.', tag: 'Most Popular' },
      { icon: '📈', name: 'Lean Muscle Gain', desc: 'High-protein nutritional plans for building muscle and gaining healthy weight effectively.', tag: 'Fitness & Muscle' },
      { icon: '🎯', name: '1-on-1 Wellness Coaching', desc: 'Complimentary body composition analysis (Fat, Muscle, Water) coached directly by professionals.', tag: 'Free at Club' }
    ],
    testiTitle: 'Real Success Stories',
    testiSubtitle: 'Real body transformations from those who stayed committed with Seroja Nutrition.',
    testimonials: [
      { name: 'Budi Santoso', result: 'Lost 12 Kg in 3 Months', quote: 'My stamina is much better and my waistline shrunk drastically thanks to the Formula 1 Shake every morning.' },
      { name: 'Siti Rahma', result: 'Gained 5 Kg (Muscle Mass)', quote: 'I used to feel weak and skinny. After joining the Seroja weight gain plan, my body feels firmer and healthier.' }
    ],
    stats: [
      { icon: '👥', num: '500+', label: 'Successful Active Members' },
      { icon: '⭐', num: '4.9/5', label: 'Satisfaction Rating' },
      { icon: '🍃', num: '100%', label: 'Authentic Original Products' },
    ]
  }
}
const t = computed(() => i18n[props.lang])
</script>