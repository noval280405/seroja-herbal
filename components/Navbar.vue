<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 text-slate-700 dark:text-slate-200 transition-all duration-300 shadow-sm"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
    >
      <div class="flex items-center gap-8">
        <NuxtLink
          to="/"
          class="flex items-center gap-2 font-black text-xl text-emerald-600 dark:text-emerald-400 tracking-wider group"
        >
          <span
            class="bg-emerald-600 group-hover:bg-emerald-700 text-white p-2 rounded-xl text-sm transition shadow-md shadow-emerald-600/20"
          >
            🌿
          </span>
          SEROJA
        </NuxtLink>

        <div class="hidden md:flex items-center gap-6 text-sm font-semibold">
          <NuxtLink
            to="/"
            class="hover:text-emerald-600 dark:hover:text-emerald-400 py-5 transition-colors"
            >{{ t.home }}</NuxtLink
          >

          <div
            class="relative group py-5"
            @mouseenter="isMegaMenuOpen = true"
            @mouseleave="isMegaMenuOpen = false"
          >
            <button
              class="hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold flex items-center gap-1 transition focus:outline-none"
            >
              {{ t.products }}
              <span
                class="text-[9px] transition-transform duration-200"
                :class="{ 'rotate-180 text-emerald-500': isMegaMenuOpen }"
                >▼</span
              >
            </button>

            <div
              v-show="isMegaMenuOpen"
              class="absolute left-0 top-full mt-0 w-[680px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-b-3xl shadow-xl dark:shadow-emerald-950/20 grid grid-cols-3 overflow-hidden transition-all duration-300 z-50 opacity-0 animate-fade-in"
            >
              <div
                class="bg-slate-50/80 dark:bg-slate-900/50 p-4 border-r border-slate-100 dark:border-slate-800 space-y-1.5"
              >
                <div
                  class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-3 mb-2"
                >
                  {{ lang === "id" ? "Metode Filter" : "Filter By" }}
                </div>
                <button
                  v-for="filterType in filterTypes"
                  :key="filterType.id"
                  @click="activeFilterType = filterType.value"
                  :class="
                    activeFilterType === filterType.value
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-black shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  "
                  class="w-full text-left px-3 py-2.5 rounded-xl text-xs flex justify-between items-center transition duration-200"
                >
                  <span>{{
                    lang === "id" ? filterType.nameId : filterType.nameEn
                  }}</span>
                  <span class="text-slate-400 dark:text-slate-600"
                    >&rsaquo;</span
                  >
                </button>
              </div>

              <div
                class="p-4 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 space-y-1"
              >
                <div
                  class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-3 mb-2"
                >
                  {{ lang === "id" ? "Kategori" : "Category" }}
                </div>
                <button
                  v-for="sub in currentSubCategories"
                  :key="sub.value"
                  @click="activeSubCategory = sub.value"
                  :class="
                    activeSubCategory === sub.value
                      ? 'text-emerald-600 dark:text-emerald-400 font-black bg-emerald-50/40 dark:bg-emerald-950/30'
                      : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                  "
                  class="w-full text-left px-3 py-2 rounded-xl text-xs flex justify-between items-center transition duration-150"
                >
                  <span>{{ lang === "id" ? sub.nameId : sub.nameEn }}</span>
                  <span
                    v-if="activeSubCategory === sub.value"
                    class="text-emerald-500 text-sm"
                    >•</span
                  >
                </button>
              </div>

              <div
                class="p-4 bg-slate-50/40 dark:bg-slate-900/20 space-y-2 max-h-[320px] overflow-y-auto custom-scrollbar"
              >
                <div
                  class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2 mb-2"
                >
                  {{ lang === "id" ? "Koleksi Nutrisi" : "Nutrition Items" }}
                </div>

                <NuxtLink
                  v-for="prod in displayedProducts"
                  :key="prod.id"
                  :to="{ path: '/products', query: { cat: activeSubCategory } }"
                  @click="isMegaMenuOpen = false"
                  class="block px-2.5 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl transition duration-200 font-medium border border-transparent hover:border-emerald-100/50 dark:hover:border-emerald-900/30"
                >
                  <span class="inline-block mr-1.5">{{ prod.icon }}</span>
                  {{ prod.name }}
                </NuxtLink>

                <div
                  v-if="displayedProducts.length === 0"
                  class="text-xs text-slate-400 dark:text-slate-500 italic p-2 text-center"
                >
                  Belum ada produk / Empty
                </div>
              </div>
            </div>
          </div>

          <NuxtLink
            to="/blog"
            class="hover:text-emerald-500 py-5 transition-colors"
            >{{ t.blog }}</NuxtLink
          >
          <NuxtLink
            to="/location"
            class="hover:text-emerald-500 py-5 transition-colors"
            >{{ t.location }}</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="hover:text-emerald-500 py-5 transition-colors"
            >{{ t.contact }}</NuxtLink
          >
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button
          @click="$emit('toggleLang')"
          class="px-2.5 py-1 text-xs font-extrabold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-sm"
        >
          {{ lang === "id" ? "EN" : "ID" }}
        </button>

        <button
          @click="$emit('toggleDark')"
          class="p-2 rounded-xl border border-slate-100 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-base transition shadow-sm flex items-center justify-center h-8 w-8"
        >
          <span>{{ isDark ? "☀️" : "🌙" }}</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps(["isDark", "lang"]);
defineEmits(["toggleDark", "toggleLang"]);

// State Kontrol Mega Menu
const isMegaMenuOpen = ref(false);
const activeFilterType = ref("jenis"); // Default: Berdasarkan Jenis
const activeSubCategory = ref("shake"); // Default: Shake

// Reset sub-kategori jika tipe filter utama di kiri berubah
watch(activeFilterType, (newType) => {
  if (newType === "jenis") activeSubCategory.value = "shake";
  if (newType === "kebutuhan") activeSubCategory.value = "weight-loss";
});

// Data Bahasa Navigasi Utama
const i18n = {
  id: {
    home: "Beranda",
    products: "Produk",
    blog: "Artikel Sehat",
    location: "Lokasi",
    contact: "Hubungi Kami",
  },
  en: {
    home: "Home",
    products: "Products",
    blog: "Healthy Blog",
    location: "Location",
    contact: "Contact Us",
  },
};
const t = computed(() => i18n[props.lang || "id"]);

// Data Kolom 1 (Tipe Filter Utama)
const filterTypes = [
  {
    id: 1,
    nameId: "Berdasarkan Jenis",
    nameEn: "By Category Type",
    value: "jenis",
  },
  {
    id: 2,
    nameId: "Berdasarkan Kebutuhan",
    nameEn: "By Health Goal",
    value: "kebutuhan",
  },
];

// Data Kolom 2 (Sub-Kategori Dinamis)
const subCategoriesData = {
  jenis: [
    { nameId: "Semua Produk", nameEn: "All Products", value: "all" },
    { nameId: "Shake (Nutrisi Inti)", nameEn: "Shake Mixes", value: "shake" },
    { nameId: "Teh dan Minuman", nameEn: "Teas & Drinks", value: "tea" },
  ],
  kebutuhan: [
    {
      nameId: "Pengelolaan Berat Badan",
      nameEn: "Weight Management",
      value: "weight-loss",
    },
    {
      nameId: "Energi & Kebugaran",
      nameEn: "Energy & Fitness",
      value: "fitness",
    },
  ],
};

const currentSubCategories = computed(
  () => subCategoriesData[activeFilterType.value],
);

// Data Kolom 3 (Daftar Produk yang Sudah Dipecah Per Rasa)
const allProducts = [
  // Varian Shake Terpisah Berdasarkan Rasa
  {
    id: 1,
    name: "Shake - Dutch Chocolate",
    icon: "🍫",
    types: ["all", "shake"],
    goals: ["weight-loss"],
  },
  {
    id: 2,
    name: "Shake - French Vanilla",
    icon: "🍦",
    types: ["all", "shake"],
    goals: ["weight-loss"],
  },
  {
    id: 3,
    name: "Shake - Wild Berry",
    icon: "🍓",
    types: ["all", "shake"],
    goals: ["weight-loss"],
  },
  {
    id: 4,
    name: "Shake - Mint Chocochip",
    icon: "🍪",
    types: ["all", "shake"],
    goals: ["weight-loss"],
  },

  // Varian Aloe Vera & Teh Herbal
  {
    id: 5,
    name: "Aloe Concentrate Mango",
    icon: "🧪",
    types: ["all", "tea"],
    goals: ["weight-loss"],
  },
  {
    id: 6,
    name: "Aloe Concentrate Original",
    icon: "🧪",
    types: ["all", "tea"],
    goals: ["weight-loss"],
  },
  {
    id: 7,
    name: "Personalized Protein Powder",
    icon: "💪",
    types: ["all", "shake"],
    goals: ["weight-loss", "fitness"],
  },
  {
    id: 8,
    name: "Thermo Tea Original",
    icon: "🍵",
    types: ["all", "tea"],
    goals: ["fitness"],
  },
  {
    id: 9,
    name: "Thermo Tea Madu Jahe",
    icon: "🍵",
    types: ["all", "tea"],
    goals: ["fitness"],
  },
  {
    id: 10,
    name: "NRG Instant Tea",
    icon: "⚡",
    types: ["all", "tea"],
    goals: ["fitness"],
  },

  // Tablet & Serat Organik
  {
    id: 11,
    name: "Cell-U-Loss Fluid Balance",
    icon: "💊",
    types: ["all"],
    goals: ["weight-loss"],
  },
  {
    id: 12,
    name: "Mixed Fiber Tebu Apel",
    icon: "🍏",
    types: ["all"],
    goals: ["weight-loss"],
  },
  {
    id: 13,
    name: "Niteworks Premium Lemon",
    icon: "🌌",
    types: ["all", "tea"],
    goals: ["fitness"],
  },
];

// Filter produk otomatis berdasarkan klik user di Kolom 1 & Kolom 2
const displayedProducts = computed(() => {
  return allProducts.filter((p) => {
    if (activeSubCategory.value === "all") {
      return p.types.includes("all");
    }
    if (activeFilterType.value === "jenis") {
      return p.types.includes(activeSubCategory.value);
    } else {
      return p.goals.includes(activeSubCategory.value);
    }
  });
});
</script>

<style scoped>
.animate-fade-in {
  animation: fadeInNavbar 0.2s ease-out forwards;
}
@keyframes fadeInNavbar {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Kustomisasi scrollbar minimalis untuk Kolom 3 */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #475569;
}
</style>
