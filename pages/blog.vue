<template>
  <div
    class="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-6 py-20">
      <ArticleDetail
        v-if="selectedArticle"
        :article="selectedArticle"
        :lang="lang"
        @back="selectedArticle = null"
      />

      <div v-else>
        <div class="mb-16">
          <h1
            class="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6"
          >
            {{ t.title }}
          </h1>
          <p class="text-xl text-slate-500 max-w-xl">{{ t.subtitle }}</p>

          <div class="relative mt-10 max-w-md">
            <input
              v-model="searchQuery"
              :placeholder="t.searchPlaceholder"
              class="w-full pl-12 pr-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-emerald-500/20"
            />
            <Search class="absolute left-4 top-4 text-slate-400" size="20" />
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="post in filteredArticles"
            :key="post.id"
            class="group bg-white dark:bg-slate-900 rounded-[2rem] p-5 border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 cursor-pointer"
            @click="selectedArticle = post"
          >
            <div
              class="h-48 rounded-[1.5rem] bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/10 flex items-center justify-center mb-6 overflow-hidden"
            >
              <component
                :is="post.icon"
                size="64"
                class="text-emerald-500 group-hover:scale-110 transition-transform duration-500"
                stroke-width="1.5"
              />
            </div>

            <div class="px-2">
              <span
                class="text-[11px] font-extrabold text-emerald-600 tracking-[0.2em] uppercase mb-2 block"
              >
                {{ post.category }}
              </span>
              <h3
                class="text-xl font-bold mb-4 group-hover:text-emerald-600 transition-colors"
              >
                {{ lang === "id" ? post.titleId : post.titleEn }}
              </h3>
              <div
                class="flex items-center text-sm font-bold text-slate-400 group-hover:text-emerald-600 transition-colors"
              >
                {{ lang === "id" ? "Baca Artikel" : "Read Article" }}
                <ArrowRight
                  class="ml-2 group-hover:translate-x-2 transition-transform"
                  size="16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  Search,
  ArrowRight,
  ArrowLeft,
  Droplets,
  Coffee,
  Salad,
} from "lucide-vue-next";

const props = defineProps(["lang"]);
const searchQuery = ref("");
const selectedArticle = ref(null);

const t = computed(
  () =>
    ({
      id: {
        title: "Edukasi Kebugaran",
        subtitle: "Tips praktis dari konsultan Seroja.",
        searchPlaceholder: "Cari artikel...",
      },
      en: {
        title: "Fitness Education",
        subtitle: "Practical tips from Seroja consultants.",
        searchPlaceholder: "Search articles...",
      },
    })[props.lang],
);

const articles = [
  {
    id: 1,
    icon: Droplets,
    category: "Hidup Sehat",
    titleId: "Berapa Banyak Air Putih yang Benar-Benar Tubuh Anda Butuhkan?",
    titleEn: "How Much Water Does Your Body Actually Need Daily?",
    excerptId:
      "Hidrasi yang tepat adalah kunci metabolisme optimal. Artikel ini mengupas mitos 8 gelas air dan menghitung kebutuhan hidrasi berdasarkan berat badan, intensitas olahraga, serta iklim tropis Indonesia yang lembap.",
    excerptEn:
      "Proper hydration is the key to optimal metabolism. This article debunks the 8-glass myth and calculates daily hydration needs based on body weight, exercise intensity, and the humid Indonesian climate.",
    contentId:
      "Air adalah komponen utama penyusun tubuh manusia. Seringkali kita hanya minum saat merasa haus, padahal rasa haus adalah sinyal bahwa tubuh sudah mengalami dehidrasi ringan. Untuk Anda yang aktif secara fisik, hidrasi bukan sekadar air biasa, melainkan keseimbangan elektrolit yang membantu transmisi saraf dan kontraksi otot. Konsumsi air yang cukup juga terbukti secara klinis meningkatkan fungsi kognitif dan menjaga elastisitas kulit tetap terjaga sepanjang hari.",
    contentEn:
      "Water is the main component of the human body. Often we only drink when thirsty, but thirst is a signal that the body is already mildly dehydrated. For those who are physically active, hydration is not just about plain water, but about electrolyte balance that aids nerve transmission and muscle contraction. Adequate water intake is also clinically proven to improve cognitive function and maintain skin elasticity throughout the day.",
  },
  {
    id: 2,
    icon: Coffee,
    category: "Minuman Nutrisi",
    titleId: "Manfaat Teh Hijau bagi Metabolisme dan Pembakaran Lemak",
    titleEn: "Benefits of Green Tea for Metabolism and Fat Burn",
    excerptId:
      "Teh hijau mengandung EGCG, senyawa antioksidan kuat yang meningkatkan oksidasi lemak. Temukan cara terbaik menyeduh dan mengonsumsinya agar manfaatnya maksimal bagi program penurunan berat badan Anda.",
    excerptEn:
      "Green tea contains EGCG, a powerful antioxidant that enhances fat oxidation. Discover the best way to brew and consume it for maximum benefits for your weight loss program.",
    contentId:
      "Teh hijau bukan sekadar minuman penenang, melainkan alat pembakar lemak alami. Senyawa Epigallocatechin Gallate (EGCG) bekerja dengan menghambat enzim yang memecah hormon norepinefrin. Ketika hormon ini tetap aktif, tubuh lebih efisien dalam memecah sel lemak menjadi energi. Kami menyarankan untuk mengonsumsi teh hijau 30 menit sebelum berolahraga untuk memberikan dorongan stamina yang berkelanjutan tanpa efek samping 'jittery' yang sering muncul pada kafein kopi.",
    contentEn:
      "Green tea is not just a soothing drink, but a natural fat burner. The Epigallocatechin Gallate (EGCG) compound works by inhibiting enzymes that break down norepinephrine. When this hormone stays active, the body is more efficient at breaking down fat cells into energy. We recommend consuming green tea 30 minutes before exercise to provide a sustained stamina boost without the jittery side effects often associated with coffee caffeine.",
  },
  {
    id: 3,
    icon: Salad,
    category: "Tips Diet",
    titleId: "Mengatasi Rasa Lapar Palsu Saat Program Turun Berat Badan",
    titleEn: "How to Deal with Fake Hunger During Weight Loss Program",
    excerptId:
      "Sering merasa ingin makan padahal baru saja selesai makan? Itu mungkin bukan rasa lapar fisik. Pelajari strategi membedakan antara lapar emosional dan kebutuhan nutrisi sesungguhnya.",
    excerptEn:
      "Feeling like eating even though you just finished? That might not be physical hunger. Learn strategies to distinguish between emotional hunger and true nutritional needs.",
    contentId:
      "Lapar palsu seringkali dipicu oleh fluktuasi gula darah atau sekadar kebosanan emosional. Tubuh kita sangat cerdas, namun terkadang sinyal haus disalahartikan sebagai keinginan untuk mengemil. Tips utama dari konsultan Seroja: minumlah segelas besar air saat rasa lapar muncul tiba-tiba. Tunggu 10 menit. Jika rasa lapar hilang, tubuh Anda hanya butuh hidrasi. Pastikan juga setiap porsi makan Anda mengandung protein berkualitas untuk memberikan rasa kenyang yang lebih lama.",
    contentEn:
      "False hunger is often triggered by blood sugar fluctuations or emotional boredom. Our bodies are very intelligent, but sometimes thirst signals are misinterpreted as a desire to snack. Top tip from Seroja consultants: drink a large glass of water when sudden hunger strikes. Wait 10 minutes. If the hunger disappears, your body just needed hydration. Also, ensure every meal portion contains high-quality protein for longer-lasting satiety.",
  },
];

const filteredArticles = computed(() =>
  articles.filter((p) =>
    (props.lang === "id" ? p.titleId : p.titleEn)
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase()),
  ),
);
</script>
