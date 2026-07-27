<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <!-- Top Bar Kecil Warna Hijau Modern -->
    <div
      class="bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500 text-white text-[11px] font-medium py-1.5 px-4 shadow-sm"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="flex h-2 w-2 relative">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-white"
            ></span>
          </span>
          <span>🌿 Konsultasi Nutrisi & Program Kesehatan Seroja Official</span>
        </div>
        <div
          class="hidden sm:flex items-center gap-4 text-[10px] tracking-wide font-semibold opacity-90"
        >
          <span>✨ 100% Original Herbalife Nutrition</span>
          <span>•</span>
          <span>🚀 Pengiriman Seluruh Indonesia</span>
        </div>
      </div>
    </div>

    <!-- Main Navbar Utama -->
    <nav
      class="bg-white/90 dark:bg-slate-950/90 backdrop-blur-3xl border-b border-slate-200/60 dark:border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] transition-all duration-300"
    >
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between"
      >
        <!-- Logo -->
        <div class="flex items-center gap-10">
          <NuxtLink to="/" class="flex items-center gap-3 group">
            <div
              class="bg-gradient-to-tr from-emerald-500 via-green-500 to-lime-400 text-white p-2.5 rounded-2xl shadow-lg shadow-emerald-500/25 group-hover:scale-105 group-hover:rotate-6 transition duration-300"
            >
              <Icon icon="solar:leaf-bold-duotone" class="w-5 h-5" />
            </div>

            <div>
              <div
                class="font-black text-lg tracking-widest text-slate-900 dark:text-white leading-none"
              >
                SEROJA
              </div>
              <div
                class="text-[9px] uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 font-extrabold mt-0.5"
              >
                Nutrition
              </div>
            </div>
          </NuxtLink>

          <!-- Desktop Menu -->
          <div
            class="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300"
          >
            <NuxtLink
              to="/"
              class="px-4 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              {{ t.home }}
            </NuxtLink>

            <!-- Mega Menu Dropdown Trigger -->
            <div
              class="relative"
              @mouseenter="isMegaMenuOpen = true"
              @mouseleave="isMegaMenuOpen = false"
            >
              <button
                class="flex items-center gap-1.5 px-4 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition group"
                :class="{
                  'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-semibold':
                    isMegaMenuOpen,
                }"
              >
                {{ t.products }}
                <Icon
                  icon="solar:alt-arrow-down-bold"
                  class="w-3.5 h-3.5 transition-transform duration-300"
                  :class="{ 'rotate-180 text-emerald-500': isMegaMenuOpen }"
                />
              </button>

              <!-- Dropdown Mega Menu -->
              <Transition name="mega">
                <div
                  v-if="isMegaMenuOpen"
                  class="absolute left-0 top-full w-[860px] overflow-hidden rounded-[28px] border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-3xl shadow-[0_25px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.5)] grid grid-cols-12 text-slate-800 dark:text-slate-100 p-2.5 gap-2.5"
                >
                  <!-- Kolom 1: Tipe Filter -->
                  <div
                    class="col-span-4 bg-slate-50/80 dark:bg-slate-900/60 p-3.5 rounded-[20px] border border-slate-100 dark:border-slate-800/50 flex flex-col justify-between"
                  >
                    <div>
                      <div
                        class="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 dark:text-slate-500 mb-2.5 px-2"
                      >
                        {{ lang === "id" ? "Metode Filter" : "Filter By" }}
                      </div>

                      <div class="space-y-1">
                        <button
                          v-for="filterType in filterTypes"
                          :key="filterType.id"
                          @click="activeFilterType = filterType.value"
                          class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 text-left text-xs font-bold"
                          :class="
                            activeFilterType === filterType.value
                              ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md shadow-emerald-500/25'
                              : 'hover:bg-slate-200/60 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                          "
                        >
                          <div class="flex items-center gap-2.5">
                            <Icon
                              :icon="
                                filterType.value === 'jenis'
                                  ? 'solar:box-bold-duotone'
                                  : 'solar:heart-pulse-bold-duotone'
                              "
                              class="w-4 h-4"
                            />
                            <span>
                              {{
                                lang === "id"
                                  ? filterType.nameId
                                  : filterType.nameEn
                              }}
                            </span>
                          </div>
                          <Icon
                            icon="solar:alt-arrow-right-bold"
                            class="w-3 h-3 opacity-60"
                          />
                        </button>
                      </div>
                    </div>

                    <div
                      class="mt-3 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium leading-tight"
                    >
                      💡 Pilih filter untuk menyortir produk nutrisi sesuai
                      kebutuhan.
                    </div>
                  </div>

                  <!-- Kolom 2: Sub Kategori -->
                  <div
                    class="col-span-4 p-3.5 rounded-[20px] bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/50"
                  >
                    <div
                      class="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 dark:text-slate-500 mb-2.5 px-2"
                    >
                      {{ lang === "id" ? "Kategori" : "Category" }}
                    </div>

                    <div class="space-y-1">
                      <button
                        v-for="sub in currentSubCategories"
                        :key="sub.value"
                        @click="activeSubCategory = sub.value"
                        class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all text-xs font-semibold"
                        :class="
                          activeSubCategory === sub.value
                            ? 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 shadow-sm'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                        "
                      >
                        <span>{{
                          lang === "id" ? sub.nameId : sub.nameEn
                        }}</span>
                        <Icon
                          v-if="activeSubCategory === sub.value"
                          icon="solar:check-circle-bold-duotone"
                          class="w-4 h-4 text-emerald-500 animate-pulse"
                        />
                      </button>
                    </div>
                  </div>

                  <!-- Kolom 3: Preview Daftar Produk -->
                  <div
                    class="col-span-4 p-3.5 bg-slate-50/50 dark:bg-slate-900/60 rounded-[20px] border border-slate-100 dark:border-slate-800/50 flex flex-col"
                  >
                    <!-- Banner Card Kecil -->
                    <div
                      class="rounded-xl bg-gradient-to-br from-emerald-500 via-green-500 to-lime-500 text-white p-3 mb-2.5 shadow-inner relative overflow-hidden"
                    >
                      <div
                        class="text-[9px] uppercase tracking-widest font-black opacity-80"
                      >
                        Produk Pilihan
                      </div>
                      <h4 class="font-extrabold text-xs mt-0.5">
                        Seroja Nutrition Hub
                      </h4>
                    </div>

                    <!-- Daftar Produk -->
                    <div
                      class="space-y-1 max-h-[190px] overflow-y-auto custom-scrollbar pr-1"
                    >
                      <NuxtLink
                        v-for="prod in displayedProducts"
                        :key="prod.id"
                        :to="{
                          path: '/products',
                          query: { cat: activeSubCategory },
                        }"
                        @click="isMegaMenuOpen = false"
                        class="group flex items-center gap-2.5 p-2 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-100 dark:border-slate-700/50 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all shadow-sm"
                      >
                        <div
                          class="w-6 h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-xs flex-shrink-0"
                        >
                          {{ prod.icon || "🥤" }}
                        </div>
                        <div class="flex-1 min-w-0">
                          <div
                            class="text-[11px] font-bold text-slate-800 dark:text-slate-200 truncate group-hover:text-emerald-500 transition"
                          >
                            {{ prod.name }}
                          </div>
                        </div>
                        <Icon
                          icon="solar:alt-arrow-right-line-duotone"
                          class="w-3 h-3 text-slate-400 group-hover:translate-x-1 transition"
                        />
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>

            <NuxtLink
              to="/blog"
              class="px-4 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              {{ t.blog }}
            </NuxtLink>

            <NuxtLink
              to="/location"
              class="px-4 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              {{ t.location }}
            </NuxtLink>

            <NuxtLink
              to="/contact"
              class="px-4 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              {{ t.contact }}
            </NuxtLink>
          </div>
        </div>

        <!-- Right Action Tools -->
        <div class="flex items-center gap-2">
          <button
            @click="$emit('toggleLang')"
            class="h-9 px-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-[11px] font-black text-slate-700 dark:text-slate-200 transition"
          >
            {{ lang === "id" ? "EN" : "ID" }}
          </button>

          <button
            @click="$emit('toggleDark')"
            class="h-9 w-9 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition"
          >
            <Icon
              :icon="
                isDark ? 'solar:sun-bold-duotone' : 'solar:moon-bold-duotone'
              "
              class="w-4 h-4 text-amber-500 dark:text-emerald-400"
            />
          </button>

          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden h-9 w-9 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition"
          >
            <Icon
              :icon="
                isMobileMenuOpen
                  ? 'solar:close-circle-bold-duotone'
                  : 'solar:hamburger-menu-bold-duotone'
              "
              class="w-4 h-4"
            />
          </button>
        </div>
      </div>

      <!-- Mobile Menu Drawer -->
      <Transition name="mobileMenu">
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden absolute top-full left-0 right-0 p-3 bg-white/95 dark:bg-slate-950/95 backdrop-blur-3xl border-b border-slate-200 dark:border-slate-800 shadow-xl"
        >
          <div class="space-y-1 text-sm font-semibold">
            <NuxtLink
              to="/"
              @click="isMobileMenuOpen = false"
              class="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-200"
            >
              <Icon
                icon="solar:home-bold-duotone"
                class="w-5 h-5 text-emerald-500"
              />
              {{ t.home }}
            </NuxtLink>
            <NuxtLink
              to="/products"
              @click="isMobileMenuOpen = false"
              class="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-200"
            >
              <Icon
                icon="solar:box-bold-duotone"
                class="w-5 h-5 text-emerald-500"
              />
              {{ t.products }}
            </NuxtLink>
            <NuxtLink
              to="/blog"
              @click="isMobileMenuOpen = false"
              class="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-200"
            >
              <Icon
                icon="solar:document-text-bold-duotone"
                class="w-5 h-5 text-emerald-500"
              />
              {{ t.blog }}
            </NuxtLink>
            <NuxtLink
              to="/location"
              @click="isMobileMenuOpen = false"
              class="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-200"
            >
              <Icon
                icon="solar:map-point-bold-duotone"
                class="w-5 h-5 text-emerald-500"
              />
              {{ t.location }}
            </NuxtLink>
            <NuxtLink
              to="/contact"
              @click="isMobileMenuOpen = false"
              class="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-200"
            >
              <Icon
                icon="solar:phone-bold-duotone"
                class="w-5 h-5 text-emerald-500"
              />
              {{ t.contact }}
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps(["isDark", "lang"]);
defineEmits(["toggleDark", "toggleLang"]);

const isMegaMenuOpen = ref(false);
const activeFilterType = ref("jenis");
const activeSubCategory = ref("shake");
const isMobileMenuOpen = ref(false);

watch(activeFilterType, (newType) => {
  if (newType === "jenis") activeSubCategory.value = "shake";
  if (newType === "kebutuhan") activeSubCategory.value = "weight-loss";
});

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

const allProducts = [
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

const displayedProducts = computed(() => {
  return allProducts.filter((p) => {
    if (activeSubCategory.value === "all") return p.types.includes("all");
    if (activeFilterType.value === "jenis")
      return p.types.includes(activeSubCategory.value);
    return p.goals.includes(activeSubCategory.value);
  });
});
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 3px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 999px;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #475569;
}

.mega-enter-active,
.mega-leave-active {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.mega-enter-from,
.mega-leave-to {
  opacity: 0;
  transform: translateY(6px) scale(0.98);
}

.mobileMenu-enter-active,
.mobileMenu-leave-active {
  transition: all 0.2s ease;
}
.mobileMenu-enter-from,
.mobileMenu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
