<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <h1 class="text-3xl font-black mb-4">{{ t.title }}</h1>
      <p class="text-slate-600 dark:text-slate-400 text-sm mb-6">{{ t.subtitle }}</p>
      
      <div class="relative max-w-md mx-auto">
        <input 
          v-model="searchQuery" 
          type="text" 
          :placeholder="t.searchPlaceholder" 
          class="w-full px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition shadow-sm"
        />
        <span class="absolute right-4 top-3.5 text-slate-400">🔍</span>
      </div>
    </div>

    <div v-if="filteredArticles.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <article v-for="post in filteredArticles" :key="post.id" class="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
        <div>
          <div class="w-full h-48 bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-5xl text-white">
            {{ post.icon }}
          </div>
          
          <div class="p-6">
            <div class="flex items-center gap-3 text-xs text-slate-400 mb-3">
              <span>📅 11 Juni 2026</span>
              <span>•</span>
              <span class="font-semibold text-emerald-600 dark:text-emerald-400 uppercase">{{ post.category }}</span>
            </div>
            
            <h3 class="text-lg font-bold mb-2 line-clamp-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer">
              {{ lang === 'id' ? post.titleId : post.titleEn }}
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
              {{ lang === 'id' ? post.excerptId : post.excerptEn }}
            </p>
          </div>
        </div>

        <div class="p-6 pt-0 mt-4">
          <button @click="openArticle(post)" class="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1">
            {{ lang === 'id' ? 'Baca Selengkapnya' : 'Read Full Article' }} →
          </button>
        </div>
      </article>
    </div>

    <div v-else class="text-center py-12 text-slate-400">
      <p>❌ {{ lang === 'id' ? 'Artikel tidak ditemukan.' : 'No articles found.' }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps(['lang'])

const searchQuery = ref('')

const i18n = {
  id: {
    title: 'Edukasi Kebugaran & Nutrisi',
    subtitle: 'Kumpulan tips praktis, resep minuman sehat, dan panduan gaya hidup sehat langsung dari konsultan nutrisi Seroja.',
    searchPlaceholder: 'Cari artikel sehat...'
  },
  en: {
    title: 'Fitness & Nutrition Education',
    subtitle: 'A collection of practical tips, healthy drink recipes, and wellness guides straight from Seroja nutrition consultants.',
    searchPlaceholder: 'Search healthy articles...'
  }
}

const t = computed(() => i18n[props.lang])

// Data Dummy Artikel Khas Herbalife/Hidup Sehat
const articles = [
  {
    id: 1,
    icon: '💧',
    category: 'Hidup Sehat',
    titleId: 'Berapa Banyak Air Putih yang Benar-Benar Tubuh Anda Butuhkan?',
    titleEn: 'How Much Water Does Your Body Actually Need Daily?',
    excerptId: 'Banyak orang mengira 8 gelas adalah aturan mutlak. Padahal, kebutuhan hidrasi harian sangat bergantung pada berat badan, aktivitas fisik, dan suhu lingkungan Anda.',
    excerptEn: 'Many believe 8 glasses is an absolute rule. In reality, daily hydration needs heavily depend on your body weight, physical activities, and environment.'
  },
  {
    id: 2,
    icon: '🍵',
    category: 'Minuman Nutrisi',
    titleId: 'Manfaat Teh Hijau bagi Metabolisme dan Pembakaran Lemak',
    titleEn: 'Benefits of Green Tea for Metabolism and Fat Burn',
    excerptId: 'Teh hijau kaya akan antioksidan bernama epigallocatechin gallate (EGCG). Kombinasikan dengan energi tea untuk mendongkrak stamina harian tanpa kalori berlebih.',
    excerptEn: 'Green tea is loaded with antioxidants called EGCG. Combine it with your energy tea mix to skyrocket your stamina without stacking up unnecessary calories.'
  },
  {
    id: 3,
    icon: '🥗',
    category: 'Tips Diet',
    titleId: 'Mengatasi Rasa Lapar Palsu Saat Program Turun Berat Badan',
    titleEn: 'How to Deal with Fake Hunger During Weight Loss Program',
    excerptId: 'Seringkali tubuh kita hanya mengalami dehidrasi ringan namun otak menerjemahkannya sebagai rasa lapar. Pelajari trik mengendalikannya dengan asupan protein yang cukup.',
    excerptEn: 'Often, our body is just mildly dehydrated, but the brain misinterprets it as hunger. Learn the trick to manage it using adequate protein intake.'
  }
]

// Fungsi Filter Berdasarkan Search Bar
const filteredArticles = computed(() => {
  if (!searchQuery.value) return articles
  return articles.filter(post => {
    const title = props.lang === 'id' ? post.titleId : post.titleEn
    return title.toLowerCase().includes(searchQuery.value.toLowerCase())
  })
})

// Fungsi klik baca artikel (bisa dicolok ke modal atau dynamic page nantinya)
const openArticle = (post) => {
  alert(`Menuju artikel: "${props.lang === 'id' ? post.titleId : post.titleEn}"`)
}
</script>