<template>
  <div
    class="bg-slate-50 dark:bg-slate-950 transition-colors duration-300 min-h-screen py-12"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-10 opacity-0 animate-fade-in">
        <div
          class="text-xs text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-2"
        >
          <span>{{ lang === "id" ? "Beranda" : "Home" }}</span>
          <span>&gt;</span>
          <span>{{ lang === "id" ? "Produk" : "Products" }}</span>
          <span>&gt;</span>
          <span
            class="text-emerald-600 dark:text-emerald-400 font-semibold capitalize bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded"
          >
            {{ getCategoryLabel(selectedCategory) }}
          </span>
        </div>
        <h1
          class="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white capitalize transition-colors"
        >
          {{ getCategoryLabel(selectedCategory) }}
        </h1>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-2xl">
          {{
            lang === "id"
              ? "Koleksi lengkap nutrisi Herbalife orisinal untuk mendukung program kebugaran, pengelolaan berat badan, dan hidrasi harian Anda."
              : "Complete collection of original Herbalife nutrition to support your fitness, weight management, and daily hydration goals."
          }}
        </p>
      </div>

      <div class="grid lg:grid-cols-4 gap-8 items-start mt-6">
        <div
          class="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-6 lg:sticky lg:top-24 transition-colors duration-300"
        >
          <div
            class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4"
          >
            <span
              class="font-bold text-sm flex items-center gap-2 text-slate-800 dark:text-slate-200"
            >
              <span>📋</span> {{ lang === "id" ? "Filter Produk" : "Filters" }}
            </span>
            <button
              v-if="
                selectedFlavors.length > 0 ||
                selectedSizes.length > 0 ||
                searchQuery
              "
              @click="resetFilters"
              class="text-[11px] text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
            >
              Reset All
            </button>
          </div>

          <div>
            <h4
              class="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3"
            >
              {{ lang === "id" ? "Pilihan Rasa" : "Flavors" }}
            </h4>
            <div class="space-y-2.5">
              <label
                v-for="flavor in availableFlavors"
                :key="flavor"
                class="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  :value="flavor"
                  v-model="selectedFlavors"
                  class="w-4 h-4 text-emerald-600 bg-slate-50 border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded focus:ring-emerald-500 accent-emerald-600 transition"
                />
                <span
                  class="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                  >{{ flavor }}</span
                >
              </label>
            </div>
          </div>

          <div>
            <h4
              class="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3"
            >
              {{ lang === "id" ? "Ukuran / Kemasan" : "Size / Pack" }}
            </h4>
            <div class="space-y-2.5">
              <label
                v-for="size in availableSizes"
                :key="size"
                class="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  :value="size"
                  v-model="selectedSizes"
                  class="w-4 h-4 text-emerald-600 bg-slate-50 border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded focus:ring-emerald-500 accent-emerald-600 transition"
                />
                <span
                  class="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                  >{{ size }}</span
                >
              </label>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3 space-y-6">
          <div
            class="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm transition-colors duration-300"
          >
            <span
              class="text-xs font-medium text-slate-500 dark:text-slate-400"
            >
              {{ filteredProducts.length }}
              {{ lang === "id" ? "Produk ditemukan" : "Products found" }}
            </span>
            <div class="relative w-full sm:w-64">
              <input
                v-model="searchQuery"
                type="text"
                :placeholder="
                  lang === 'id' ? 'Cari nama produk...' : 'Search product...'
                "
                class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 pl-3 pr-8 py-2 rounded-xl text-xs outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition shadow-sm"
              />
              <span
                class="absolute right-2.5 top-2.5 text-slate-400 dark:text-slate-500 text-xs"
                >🔍</span
              >
            </div>
          </div>

          <div
            v-if="filteredProducts.length > 0"
            class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div
              v-for="prod in filteredProducts"
              :key="prod.id"
              class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              <div class="p-5">
                <div
                  class="w-full aspect-square bg-gradient-to-b from-slate-50 to-slate-100/30 dark:from-slate-800/40 dark:to-slate-900/40 rounded-2xl mb-4 flex items-center justify-center text-6xl relative overflow-hidden shadow-inner"
                >
                  {{ prod.icon }}

                  <span
                    :class="
                      prod.badge === 'New' ? 'bg-blue-600' : 'bg-emerald-600'
                    "
                    class="absolute top-3 left-3 text-[9px] text-white font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow animate-pulse"
                  >
                    {{ prod.badge }}
                  </span>

                  <span
                    class="absolute bottom-3 right-3 text-[10px] font-bold bg-white/90 dark:bg-slate-800/90 backdrop-blur px-2.5 py-1 rounded-xl text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700/80 shadow-sm"
                  >
                    ⚖️ {{ prod.weight }}
                  </span>
                </div>

                <span
                  class="text-[10px] font-black tracking-widest uppercase text-emerald-600 dark:text-emerald-400"
                >
                  {{ lang === "id" ? prod.catNameId : prod.catNameEn }}
                </span>

                <h3
                  class="text-base font-black mt-1.5 text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200"
                >
                  {{ prod.name }}
                </h3>
                <p
                  class="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed line-clamp-2 h-8"
                >
                  {{ lang === "id" ? prod.descId : prod.descEn }}
                </p>

                <div
                  class="mt-4 pt-3 border-t border-slate-50 dark:border-slate-800/60"
                >
                  <span
                    class="block text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold mb-1.5"
                  >
                    {{ lang === "id" ? "Varian Rasa:" : "Flavor Profile:" }}
                  </span>
                  <div class="flex flex-wrap gap-1">
                    <span
                      v-for="flv in prod.flavors"
                      :key="flv"
                      class="text-[10px] bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-md font-bold"
                    >
                      ✨ {{ flv }}
                    </span>
                  </div>
                </div>
              </div>

              <div
                class="p-5 pt-0 mt-2 flex items-center justify-between border-t border-slate-50 dark:border-slate-800/40 pt-4 bg-slate-50/50 dark:bg-slate-900/30 transition-colors"
              >
                <div>
                  <span
                    class="block text-[9px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-wider"
                    >{{ lang === "id" ? "Harga Resmi" : "Retail Price" }}</span
                  >
                  <span
                    class="font-black text-lg text-emerald-600 dark:text-emerald-400 tracking-tight"
                    >{{ prod.price }}</span
                  >
                </div>
                <a
                  :href="`https://wa.me/628123456789?text=Halo%20Seroja%20Nutrition,%20saya%20tertarik%20ingin%20konsultasi%20dan%20order%20produk%20${encodeURIComponent(prod.name)}`"
                  target="_blank"
                  class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-md shadow-emerald-600/10 flex items-center gap-1"
                >
                  <span>🥤</span> {{ lang === "id" ? "Beli" : "Order" }}
                </a>
              </div>
            </div>
          </div>

          <div
            v-else
            class="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-inner transition-colors duration-300"
          >
            <span class="text-5xl block mb-4">🍃</span>
            <h3
              class="text-base font-bold text-slate-700 dark:text-slate-300 mb-1"
            >
              {{
                lang === "id"
                  ? "Tidak Ada Nutrisi yang Cocok"
                  : "No Nutrition Items Match"
              }}
            </h3>
            <p
              class="text-xs text-slate-400 dark:text-slate-500 max-w-xs mx-auto"
            >
              {{
                lang === "id"
                  ? "Coba ubah kombinasi checklist rasa, kemasan, atau kata kunci pencarian Anda."
                  : "Try adjusting your flavor checkmarks, package sizes, or search keywords."
              }}
            </p>
            <button
              @click="resetFilters"
              class="mt-4 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 text-xs font-bold px-4 py-2 rounded-xl transition"
            >
              {{
                lang === "id" ? "Bersihkan Semua Filter" : "Clear All Filters"
              }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a
    href="https://wa.me/628123456789?text=Halo%20Coach%20Seroja,%20saya%20tertarik%20ingin%20tanya%20program%20dan%20konsultasi%20nutrisi."
    target="_blank"
    class="fixed bottom-6 right-6 z-[99] bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-2xl shadow-xl shadow-[#25D366]/30 dark:shadow-emerald-950/50 transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 dark:focus:ring-emerald-500/40 flex items-center justify-center animate-bounce-soft"
    aria-label="Chat WhatsApp Seroja"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-7 h-7 fill-current group-hover:rotate-12 transition-transform duration-300"
      viewBox="0 0 24 24"
    >
      <path
        d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.372 5.378 0 12.013 0c3.216.012 6.237 1.27 8.508 3.542 2.27 2.274 3.523 5.301 3.523 8.514-.01 6.632-5.385 12.004-12.02 12.004-.006 0-.012 0-.018 0-1.996-.002-3.963-.5-5.717-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.417 9.867-9.849.004-2.63-1.019-5.101-2.881-6.965C16.538 1.936 14.07 .915 11.443.915 6.008.915 1.585 5.332 1.578 10.766c-.002 1.704.453 3.37 1.316 4.839l-.986 3.6 3.738-.981zm13.12-10.302c-.27-.134-1.597-.788-1.846-.878-.25-.09-.431-.136-.613.135-.182.271-.703.878-.862 1.058-.159.18-.317.202-.587.067-.27-.135-1.14-.42-2.172-1.34-0.803-.715-1.345-1.6-1.503-1.871-.159-.272-.017-.418.118-.553.122-.122.272-.317.408-.475.136-.158.181-.271.272-.453.09-.181.045-.339-.022-.475-.068-.135-.613-1.478-.84-2.02-.22-.53-.442-.458-.613-.467-.159-.008-.34-.01-.522-.01-.181 0-.476.068-.725.339-.249.271-.952.931-.952 2.27 0 1.338.975 2.63 1.111 2.81 1.14 1.514 2.508 2.31 3.9 2.87 1.055.424 1.745.344 2.404.246.736-.11 1.598-.654 1.825-1.254.226-.6.226-1.11.158-1.218-.067-.109-.248-.154-.518-.289z"
      />
    </svg>
  </a>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

const props = defineProps(["lang"]);
const route = useRoute();

// --- STATE FILTERS ---
const searchQuery = ref("");
const selectedCategory = ref("all");
const selectedFlavors = ref([]);
const selectedSizes = ref([]);

// --- LIST DATA FILTER SIDEBAR (Sinkron 100% dengan Properti Flavors Produk) ---
const availableFlavors = [
  "Cokelat",
  "Vanilla",
  "Berry",
  "Chocochip",
  "Original",
  "Mango",
  "Mandarin",
  "Lemon",
  "Madu Jahe",
];

const availableSizes = [
  "550 gram",
  "473 ml",
  "360 gram",
  "300 gram",
  "100 gram",
  "90 tablet",
];

// Menangani URL query router dari navbar secara dinamis
const updateCategoryFromQuery = () => {
  if (route.query.cat) {
    selectedCategory.value = route.query.cat;
  } else {
    selectedCategory.value = "all";
  }
};

updateCategoryFromQuery();

watch(
  () => route.query.cat,
  () => {
    updateCategoryFromQuery();
  },
);

const resetFilters = () => {
  selectedFlavors.value = [];
  selectedSizes.value = [];
  searchQuery.value = "";
};

// Map Label Judul Kategori Bahasa
const getCategoryLabel = (catKey) => {
  const labels = {
    id: {
      all: "Semua Produk",
      shake: "Shake (Nutrisi Inti)",
      tea: "Teh & Minuman Sehat",
      "weight-loss": "Program Pengelolaan Berat Badan",
      fitness: "Energi & Kebugaran Harian",
    },
    en: {
      all: "All Products",
      shake: "Shake Mixes (Core)",
      tea: "Healthy Teas & Juices",
      "weight-loss": "Weight Management Systems",
      fitness: "Energy & Daily Fitness",
    },
  };
  return labels[props.lang || "id"][catKey] || catKey;
};

// --- DATA PRODUK UTAMA BERDASARKAN PEMBAGIAN RASA MANDIRI ---
const products = [
  // --- SUB-GROUP: SHAKE MIXES INDIVIDUAL ---
  {
    id: 1,
    name: "Formula 1 Shake Mix - Dutch Chocolate",
    icon: "🍫",
    categories: ["all", "shake", "weight-loss"],
    weight: "550 gram",
    price: "Rp 450.000",
    badge: "Best Seller",
    flavors: ["Cokelat"],
    catNameId: "Nutrisi Utama",
    catNameEn: "Core Nutrition",
    descId:
      "Nutrisi rendah kalori rasa Cokelat Belanda pekat yang kaya protein terisolasi dan vitamin esensial.",
    descEn:
      "Rich Dutch Chocolate low-calorie shake packed with high-quality isolated soy protein.",
  },
  {
    id: 2,
    name: "Formula 1 Shake Mix - French Vanilla",
    icon: "🍦",
    categories: ["all", "shake", "weight-loss"],
    weight: "550 gram",
    price: "Rp 450.000",
    badge: "Best Seller",
    flavors: ["Vanilla"],
    catNameId: "Nutrisi Utama",
    catNameEn: "Core Nutrition",
    descId:
      "Shake pengganti makanan rasa Vanilla Prancis lembut, cocok dikombinasikan dengan buah-buahan segar.",
    descEn:
      "Smooth French Vanilla meal replacement shake, perfect for blending with fresh fruits.",
  },
  {
    id: 3,
    name: "Formula 1 Shake Mix - Wild Berry",
    icon: "🍓",
    categories: ["all", "shake", "weight-loss"],
    weight: "550 gram",
    price: "Rp 450.000",
    badge: "Popular",
    flavors: ["Berry"],
    catNameId: "Nutrisi Utama",
    catNameEn: "Core Nutrition",
    descId:
      "Nutrisi instan dengan kesegaran rasa buah Beri liar untuk mendukung program diet harian Anda.",
    descEn:
      "Instant nutrition mix with refreshing Wild Berry flavor to power up your body shape program.",
  },
  {
    id: 4,
    name: "Formula 1 Shake Mix - Mint Chocolate Chip",
    icon: "🍪",
    categories: ["all", "shake", "weight-loss"],
    weight: "550 gram",
    price: "Rp 450.000",
    badge: "New",
    flavors: ["Chocochip"],
    catNameId: "Nutrisi Utama",
    catNameEn: "Core Nutrition",
    descId:
      "Perpaduan rasa Mint segar dengan taburan choco chip lezat untuk sensasi diet yang menyenangkan.",
    descEn:
      "A crisp blend of refreshing mint flavor and tasty chocolate chips for a unique shake experience.",
  },

  // --- SUB-GROUP: ALOE CONCENTRATE VARIANT ---
  {
    id: 5,
    name: "Herbal Aloe Concentrate Mango",
    icon: "🧪",
    categories: ["all", "tea", "weight-loss"],
    weight: "473 ml",
    price: "Rp 420.000",
    badge: "Best Seller",
    flavors: ["Mango"],
    catNameId: "Pencernaan Sehat",
    catNameEn: "Digestive Health",
    descId:
      "Konsentrat lidah buaya rasa mangga segar berkhasiat membantu membersihkan sistem saluran pencernaan.",
    descEn:
      "Premium aloe juice concentrate infused with tropical mango flavor to optimize internal cleansing.",
  },
  {
    id: 6,
    name: "Herbal Aloe Concentrate Original",
    icon: "🧪",
    categories: ["all", "tea", "weight-loss"],
    weight: "473 ml",
    price: "Rp 420.000",
    badge: "Popular",
    flavors: ["Original", "Mandarin"],
    catNameId: "Pencernaan Sehat",
    catNameEn: "Digestive Health",
    descId:
      "Sari lidah buaya murni rasa original dengan sitrus mandarin untuk menenangkan asam lambung.",
    descEn:
      "Pure aloe concentrate with citrus twist tailored to soothe occasional digestive upset.",
  },

  // --- SUB-GROUP: PROTEIN & FITNESS SUPPLEMENT ---
  {
    id: 7,
    name: "Personalized Protein Powder (PPP)",
    icon: "💪",
    categories: ["all", "shake", "weight-loss", "fitness"],
    weight: "360 gram",
    price: "Rp 410.000",
    badge: "Popular",
    flavors: ["Original"],
    catNameId: "Suplemen Protein",
    catNameEn: "Protein Supplement",
    descId:
      "Bubuk protein whey murni tanpa pemanis tambahan untuk menjaga daya tahan otot dari gelambir.",
    descEn:
      "Fat-free unflavored blend of soy and whey protein designed to keep lean muscles firm.",
  },

  // --- SUB-GROUP: THERMO & INSTANT TEAS ---
  {
    id: 8,
    name: "Herbal Concentrate Tea (Thermo Original)",
    icon: "🍵",
    categories: ["all", "tea", "fitness"],
    weight: "100 gram",
    price: "Rp 430.000",
    badge: "Best Seller",
    flavors: ["Original"],
    catNameId: "Energi & Bakar Lemak",
    catNameEn: "Energy & Metabolism",
    descId:
      "Teh botani pembakar lemak tubuh instan rasa original yang merevitalisasi stamina harian.",
    descEn:
      "Botanical tea blend engineered to boost metabolism levels and support fat oxidation.",
  },
  {
    id: 9,
    name: "Herbal Concentrate Tea (Thermo Madu Jahe)",
    icon: "🍵",
    categories: ["all", "tea", "fitness"],
    weight: "100 gram",
    price: "Rp 430.000",
    badge: "New",
    flavors: ["Madu Jahe"],
    catNameId: "Energi & Bakar Lemak",
    catNameEn: "Energy & Metabolism",
    descId:
      "Teh termogenik varian Madu Jahe hangat yang ampuh membakar kalori berlebih saat beraktivitas.",
    descEn:
      "Thermogenic botanical tea with warm Honey Ginger notes to naturally accelerate calorie burning.",
  },
  {
    id: 10,
    name: "NRG Instant Tea",
    icon: "⚡",
    categories: ["all", "tea", "fitness"],
    weight: "100 gram",
    price: "Rp 320.000",
    badge: "Popular",
    flavors: ["Original"],
    catNameId: "Energi & Fokus",
    catNameEn: "Energy & Mental Focus",
    descId:
      "Ekstrak teh guarana alami untuk menjaga energi tubuh tetap optimal tanpa memicu jantung berdebar.",
    descEn:
      "Raw guarana seed extract beverage formulated to support mental alertness and stamina.",
  },

  // --- SUB-GROUP: WEIGHT MANAGEMENT TABLETS & OTHER DRINKS ---
  {
    id: 11,
    name: "Cell-U-Loss Tablet Balance",
    icon: "💊",
    categories: ["all", "weight-loss"],
    weight: "90 tablet",
    price: "Rp 310.000",
    badge: "Best Seller",
    flavors: ["Original"],
    catNameId: "Pengelolaan Air",
    catNameEn: "Fluid Balance",
    descId:
      "Mengandung ekstrak rambut jagung untuk mengurangi timbunan cairan air berlebih di bawah kulit.",
    descEn:
      "Formulated with corn silk to promote healthy fluid elimination and diminish cellulite.",
  },
  {
    id: 12,
    name: "Mixed Fiber Tebu & Apel",
    icon: "🍏",
    categories: ["all", "weight-loss"],
    weight: "300 gram",
    price: "Rp 390.000",
    badge: "Popular",
    flavors: ["Original"],
    catNameId: "Serat Pencernaan",
    catNameEn: "Digestive Fiber",
    descId:
      "Serat larut aroma apel segar guna mengikat lemak makanan dan melancarkan buang air besar.",
    descEn:
      "Soluble and insoluble fiber powder supporting digestive regularity and gut safety.",
  },
  {
    id: 13,
    name: "Niteworks Lemon Nighttime",
    icon: "🌌",
    categories: ["all", "tea", "fitness"],
    weight: "300 gram",
    price: "Rp 980.000",
    badge: "Premium",
    flavors: ["Lemon"],
    catNameId: "Kesehatan Jantung",
    catNameEn: "Cardiovascular Support",
    descId:
      "Suplemen malam rasa lemon menyegarkan guna memicu Nitric Oxide untuk keelastisan pembuluh darah.",
    descEn:
      "Nighttime powder drink with lemon taste to stimulate safe Nitric Oxide levels for clean arteries.",
  },
];

// --- LOGIKA FILTER MULTI-FAKTOR YANG 100% AKURAT ---
const filteredProducts = computed(() => {
  return products.filter((prod) => {
    const matchCategory = prod.categories.includes(selectedCategory.value);
    const matchSearch = prod.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchSize =
      selectedSizes.value.length === 0 ||
      selectedSizes.value.includes(prod.weight);
    const matchFlavor =
      selectedFlavors.value.length === 0 ||
      prod.flavors.some((f) => selectedFlavors.value.includes(f));

    return matchCategory && matchSearch && matchSize && matchFlavor;
  });
});
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
