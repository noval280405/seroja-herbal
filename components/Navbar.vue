<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
    >
      <div class="flex items-center gap-8">
        <NuxtLink
          to="/"
          class="flex items-center gap-2 font-bold text-xl text-emerald-600 dark:text-emerald-400"
        >
          <span class="bg-emerald-600 text-white p-1.5 rounded-lg text-sm"
            >🌿</span
          >
          SEROJA
        </NuxtLink>

        <div class="hidden md:flex items-center gap-6 text-sm font-medium">
          <NuxtLink to="/" class="hover:text-emerald-500 py-5 transition">{{
            t.home
          }}</NuxtLink>

          <div
            class="relative group py-5"
            @mouseenter="isMegaMenuOpen = true"
            @mouseleave="isMegaMenuOpen = false"
          >
            <button
              class="hover:text-emerald-500 font-medium flex items-center gap-1 transition focus:outline-none"
            >
              {{ t.products }} <span class="text-[10px]">▼</span>
            </button>

            <div
              v-show="isMegaMenuOpen"
              class="absolute left-0 top-full mt-0 w-[600px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-b-2xl shadow-xl grid grid-cols-3 overflow-hidden transition-all duration-250 z-50"
            >
              <div
                class="bg-slate-50 dark:bg-slate-800/50 p-4 border-r border-slate-200 dark:border-slate-700 space-y-1"
              >
                <button
                  v-for="filterType in filterTypes"
                  :key="filterType.id"
                  @click="activeFilterType = filterType.value"
                  :class="
                    activeFilterType === filterType.value
                      ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  "
                  class="w-full text-left px-3 py-2.5 rounded-xl text-xs flex justify-between items-center transition"
                >
                  {{ lang === "id" ? filterType.nameId : filterType.nameEn }}
                  <span>›</span>
                </button>
              </div>

              <div
                class="p-4 border-r border-slate-200 dark:border-slate-700 space-y-1"
              >
                <button
                  v-for="sub in currentSubCategories"
                  :key="sub.value"
                  @click="activeSubCategory = sub.value"
                  :class="
                    activeSubCategory === sub.value
                      ? 'text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50/50 dark:bg-emerald-950/30'
                      : 'text-slate-600 dark:text-slate-300 hover:text-emerald-500'
                  "
                  class="w-full text-left px-3 py-2 rounded-lg text-xs flex justify-between items-center transition"
                >
                  {{ lang === "id" ? sub.nameId : sub.nameEn }}
                  <span v-if="activeSubCategory === sub.value">•</span>
                </button>
              </div>

              <div
                class="p-4 bg-slate-50/30 dark:bg-slate-900/20 space-y-2 max-h-[250px] overflow-y-auto"
              >
                <div
                  class="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-1"
                >
                  {{ lang === "id" ? "Hasil Produk" : "Product Results" }}
                </div>

                <NuxtLink
                  v-for="prod in displayedProducts"
                  :key="prod.id"
                  :to="{ path: '/products', query: { cat: activeSubCategory } }"
                  @click="isMegaMenuOpen = false"
                  class="block px-2 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 rounded transition font-medium"
                >
                  {{ prod.icon }} {{ prod.name }}
                </NuxtLink>

                <div
                  v-if="displayedProducts.length === 0"
                  class="text-xs text-slate-400 italic p-2"
                >
                  Belum ada produk / Empty
                </div>
              </div>
            </div>
          </div>

          <NuxtLink to="/blog" class="hover:text-emerald-500 py-5 transition">{{
            t.blog
          }}</NuxtLink>
          <NuxtLink
            to="/location"
            class="hover:text-emerald-500 py-5 transition"
            >{{ t.location }}</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="hover:text-emerald-500 py-5 transition"
            >{{ t.contact }}</NuxtLink
          >
        </div>
      </div>

      <div class="flex items-center gap-4">
        <button
          @click="$emit('toggleLang')"
          class="px-2 py-1 text-xs font-bold border border-slate-300 dark:border-slate-700 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          {{ lang === "id" ? "EN" : "ID" }}
        </button>

        <button
          @click="$emit('toggleDark')"
          class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-lg transition"
        >
          {{ isDark ? "☀️" : "🌙" }}
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
const t = computed(() => i18n[props.lang]);

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

// Data Kolom 3 (Daftar Produk untuk dicocokkan dengan Sub-Kategori)
const allProducts = [
  {
    name: "Formula 1 Shake Mix",
    icon: "🥤",
    types: ["all", "shake"],
    goals: ["weight-loss"],
  },
  {
    name: "Personalized Protein Powder",
    icon: "💪",
    types: ["all", "shake"],
    goals: ["weight-loss", "fitness"],
  },
  {
    name: "Herbal Aloe Concentrate",
    icon: "🧪",
    types: ["all", "tea"],
    goals: ["weight-loss"],
  },
  {
    name: "Herbal Concentrate Tea",
    icon: "🍵",
    types: ["all", "tea"],
    goals: ["fitness"],
  },
];

// Filter produk otomatis berdasarkan klik user di Kolom 1 & Kolom 2
const displayedProducts = computed(() => {
  return allProducts.filter((p) => {
    if (activeFilterType.value === "jenis") {
      return p.types.includes(activeSubCategory.value);
    } else {
      return p.goals.includes(activeSubCategory.value);
    }
  });
});
</script>
