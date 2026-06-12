<template>
  <nav
    class="fixed top-4 left-4 right-4 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border border-white/20 dark:border-slate-800 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-300"
  >
    <div
      class="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between"
    >
      <!-- Logo -->
      <div class="flex items-center gap-10">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div
            class="bg-gradient-to-br from-emerald-500 via-green-500 to-lime-500 text-white p-2.5 rounded-2xl shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition"
          >
            <Icon icon="solar:leaf-bold-duotone" class="w-5 h-5" />
          </div>

          <div>
            <div
              class="font-black text-xl tracking-wider text-slate-800 dark:text-white"
            >
              SEROJA
            </div>

            <div class="text-[10px] uppercase tracking-[0.25em] text-slate-400">
              Nutrition
            </div>
          </div>
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-7 text-sm font-semibold">
          <NuxtLink
            to="/"
            class="relative py-6 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
          >
            {{ t.home }}
          </NuxtLink>

          <!-- Mega Menu -->
          <div
            class="relative py-6"
            @mouseenter="isMegaMenuOpen = true"
            @mouseleave="isMegaMenuOpen = false"
          >
            <button
              class="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              {{ t.products }}

              <Icon
                icon="solar:alt-arrow-down-bold"
                class="w-4 h-4 transition duration-300"
                :class="{
                  'rotate-180 text-emerald-500': isMegaMenuOpen,
                }"
              />
            </button>

            <!-- Dropdown -->
            <Transition name="mega">
              <div
                v-if="isMegaMenuOpen"
                class="absolute left-0 top-full w-[820px] overflow-hidden rounded-[28px] border border-white/20 bg-white/90 dark:bg-slate-900/95 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.5)] grid grid-cols-3"
              >
                <!-- Kolom 1 -->
                <div
                  class="bg-slate-50/80 dark:bg-slate-900/50 p-5 border-r border-slate-100 dark:border-slate-800"
                >
                  <div
                    class="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4"
                  >
                    {{ lang === "id" ? "Metode Filter" : "Filter By" }}
                  </div>

                  <button
                    v-for="filterType in filterTypes"
                    :key="filterType.id"
                    @click="activeFilterType = filterType.value"
                    class="w-full flex items-center justify-between px-4 py-3 rounded-2xl mb-2 transition-all duration-300"
                    :class="
                      activeFilterType === filterType.value
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shadow'
                        : 'hover:bg-white dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
                    "
                  >
                    <div class="flex items-center gap-3">
                      <button
                        @click="isMobileMenuOpen = !isMobileMenuOpen"
                        class="md:hidden h-10 w-10 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800"
                      >
                        <Icon
                          :icon="
                            isMobileMenuOpen
                              ? 'solar:close-circle-bold-duotone'
                              : 'solar:hamburger-menu-bold-duotone'
                          "
                          class="w-5 h-5"
                        />
                      </button>
                      <Icon
                        :icon="
                          filterType.value === 'jenis'
                            ? 'solar:box-bold-duotone'
                            : 'solar:heart-pulse-bold-duotone'
                        "
                        class="w-5 h-5"
                      />

                      <span>
                        {{
                          lang === "id" ? filterType.nameId : filterType.nameEn
                        }}
                      </span>
                    </div>

                    <Icon icon="solar:alt-arrow-right-bold" class="w-4 h-4" />
                  </button>
                </div>

                <!-- Kolom 2 -->
                <div
                  class="p-5 border-r border-slate-100 dark:border-slate-800"
                >
                  <div
                    class="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4"
                  >
                    {{ lang === "id" ? "Kategori" : "Category" }}
                  </div>

                  <button
                    v-for="sub in currentSubCategories"
                    :key="sub.value"
                    @click="activeSubCategory = sub.value"
                    class="w-full flex items-center justify-between px-4 py-3 rounded-2xl mb-2 transition-all"
                    :class="
                      activeSubCategory === sub.value
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-bold'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                    "
                  >
                    <span>
                      {{ lang === "id" ? sub.nameId : sub.nameEn }}
                    </span>

                    <Icon
                      v-if="activeSubCategory === sub.value"
                      icon="solar:check-circle-bold-duotone"
                      class="w-4 h-4"
                    />
                  </button>
                </div>

                <!-- Kolom 3 -->
                <div class="p-5 bg-slate-50/40 dark:bg-slate-900/20">
                  <!-- Header Card -->
                  <div
                    class="rounded-3xl bg-gradient-to-br from-emerald-500 via-green-500 to-lime-500 text-white p-5 mb-4"
                  >
                    <div class="text-xs opacity-80">Nutrition Collection</div>

                    <h3 class="font-black text-lg mt-1">Healthy Lifestyle</h3>

                    <p class="text-xs opacity-90 mt-2">
                      Discover products tailored to your goals.
                    </p>
                  </div>

                  <!-- Product List -->
                  <div
                    class="space-y-2 max-h-[280px] overflow-y-auto custom-scrollbar"
                  >
                    <NuxtLink
                      v-for="prod in displayedProducts"
                      :key="prod.id"
                      :to="{
                        path: '/products',
                        query: {
                          cat: activeSubCategory,
                        },
                      }"
                      @click="isMegaMenuOpen = false"
                      class="group flex items-center gap-3 p-3 rounded-2xl border border-transparent hover:border-emerald-100 dark:hover:border-emerald-900 hover:bg-white dark:hover:bg-slate-800/50 transition-all duration-300 hover:translate-x-1"
                    >
                      <div
                        class="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center"
                      >
                        <Icon
                          icon="solar:cup-hot-bold-duotone"
                          class="w-5 h-5 text-emerald-500"
                        />
                      </div>

                      <div class="flex-1">
                        <div class="text-xs font-semibold">
                          {{ prod.name }}
                        </div>
                      </div>

                      <Icon
                        icon="solar:alt-arrow-right-line-duotone"
                        class="w-4 h-4 opacity-0 group-hover:opacity-100 transition"
                      />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <NuxtLink to="/blog" class="hover:text-emerald-500 transition">
            {{ t.blog }}
          </NuxtLink>

          <NuxtLink to="/location" class="hover:text-emerald-500 transition">
            {{ t.location }}
          </NuxtLink>

          <NuxtLink to="/contact" class="hover:text-emerald-500 transition">
            {{ t.contact }}
          </NuxtLink>
        </div>
      </div>

      <!-- Right Action -->
      <div class="flex items-center gap-3">
        <Transition name="mobileMenu">
          <div
            v-if="isMobileMenuOpen"
            class="md:hidden absolute top-[82px] left-0 right-0"
          >
            <div
              class="mx-2 rounded-3xl overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            >
              <!-- Menu -->
              <div class="p-3 space-y-1">
                <NuxtLink
                  to="/"
                  @click="isMobileMenuOpen = false"
                  class="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800"
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
                  class="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800"
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
                  class="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800"
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
                  class="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800"
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
                  class="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <Icon
                    icon="solar:phone-bold-duotone"
                    class="w-5 h-5 text-emerald-500"
                  />
                  {{ t.contact }}
                </NuxtLink>
              </div>

              <!-- Footer Action -->
              <div
                class="border-t border-slate-200 dark:border-slate-800 p-3 flex gap-2"
              >
                <button
                  @click="$emit('toggleLang')"
                  class="flex-1 h-11 rounded-2xl border border-slate-200 dark:border-slate-700"
                >
                  {{ lang === "id" ? "EN" : "ID" }}
                </button>

                <button
                  @click="$emit('toggleDark')"
                  class="w-11 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center"
                >
                  <Icon
                    :icon="
                      isDark
                        ? 'solar:sun-bold-duotone'
                        : 'solar:moon-bold-duotone'
                    "
                    class="w-5 h-5"
                  />
                </button>
              </div>
            </div>
          </div>
        </Transition>
        <button
          @click="$emit('toggleLang')"
          class="h-10 px-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-black"
        >
          {{ lang === "id" ? "EN" : "ID" }}
        </button>

        <button
          @click="$emit('toggleDark')"
          class="h-10 w-10 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          <Icon
            :icon="
              isDark ? 'solar:sun-bold-duotone' : 'solar:moon-bold-duotone'
            "
            class="w-5 h-5"
          />
        </button>

        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden h-10 w-10 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          <Icon
            :icon="
              isMobileMenuOpen
                ? 'solar:close-circle-bold-duotone'
                : 'solar:hamburger-menu-bold-duotone'
            "
            class="w-5 h-5"
          />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { Icon } from "@iconify/vue";
const props = defineProps(["isDark", "lang"]);
defineEmits(["toggleDark", "toggleLang"]);

// State Kontrol Mega Menu
const isMegaMenuOpen = ref(false);
const activeFilterType = ref("jenis"); // Default: Berdasarkan Jenis
const activeSubCategory = ref("shake"); // Default: Shake
const isMobileMenuOpen = ref(false);
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
.mega-enter-active,
.mega-leave-active {
  transition: all 0.25s ease;
}

.mega-enter-from,
.mega-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #94a3b8;
  border-radius: 999px;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #475569;
}
.mobileMenu-enter-active,
.mobileMenu-leave-active {
  transition: all 0.25s ease;
}

.mobileMenu-enter-from,
.mobileMenu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
