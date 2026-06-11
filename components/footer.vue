<template>
  <footer
    class="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-16 pb-8 mt-32 relative overflow-hidden theme-transition"
  >
    <div
      class="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/5 dark:bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none select-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div
        class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-100 dark:border-slate-900"
      >
        <div class="md:col-span-1 space-y-4 text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start gap-2">
            <div
              class="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                />
                <path
                  d="M12 6c-3.313 0-6 2.687-6 6 0 2.2 1.2 4.125 3 5.125L12 12l3 5.125c1.8-1 3-2.925 3-5.125 0-3.313-2.687-6-6-6z"
                />
              </svg>
            </div>
            <span
              class="text-lg font-black tracking-tight text-slate-900 dark:text-white"
            >
              Seroja<span class="text-emerald-600 dark:text-emerald-400"
                >Nutrition</span
              >
            </span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {{
              lang === "id"
                ? "Distributor Resmi Independen Herbalife Nutrition. Kami berkomitmen membantu Anda mencapai kebugaran optimal melalui nutrisi terstruktur."
                : "Official Independent Distributor of Herbalife Nutrition. We are committed to helping you reach optimal fitness through structured nutrition."
            }}
          </p>
        </div>

        <div class="text-center md:text-left space-y-4">
          <h4
            class="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500"
          >
            {{ lang === "id" ? "Navigasi" : "Explore" }}
          </h4>
          <ul class="space-y-2.5 text-sm font-bold">
            <li v-for="item in menuLinks" :key="item.path">
              <NuxtLink
                :to="item.path"
                class="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                {{ lang === "id" ? item.nameId : item.nameEn }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="text-center md:text-left space-y-4">
          <h4
            class="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500"
          >
            {{ lang === "id" ? "Jam Operasional" : "Club Hours" }}
          </h4>
          <ul
            class="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400"
          >
            <li
              class="flex flex-col sm:flex-row justify-center md:justify-between gap-1"
            >
              <span class="font-bold text-slate-700 dark:text-slate-300"
                >Senin - Jumat:</span
              >
              <span>06.30 - 11.00 WIB</span>
            </li>
            <li
              class="flex flex-col sm:flex-row justify-center md:justify-between gap-1"
            >
              <span class="font-bold text-slate-700 dark:text-slate-300"
                >Sabtu:</span
              >
              <span>07.00 - 10.00 WIB</span>
            </li>
            <li
              class="flex flex-col sm:flex-row justify-center md:justify-between gap-1 text-amber-600 dark:text-amber-400"
            >
              <span class="font-bold">Minggu / Tanggal Merah:</span>
              <span class="font-black">{{
                lang === "id" ? "Libur" : "Closed"
              }}</span>
            </li>
          </ul>
        </div>

        <div class="text-center md:text-left space-y-4">
          <h4
            class="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500"
          >
            {{ lang === "id" ? "Ikuti Komunitas" : "Social Media" }}
          </h4>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            {{
              lang === "id"
                ? "Dapatkan tips diet sehat harian di media sosial kami:"
                : "Get daily clean eating tips on our active socials:"
            }}
          </p>
          <div class="flex items-center justify-center md:justify-start gap-3">
            <a
              v-for="(social, idx) in socialMedia"
              :key="idx"
              :href="social.link"
              target="_blank"
              class="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-300 shadow-3xs"
              :aria-label="social.name"
            >
              <div class="w-5 h-5" v-html="social.iconSvg"></div>
            </a>
          </div>
        </div>
      </div>

      <div
        class="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs text-slate-400 dark:text-slate-500"
      >
        <div class="space-y-1">
          <p class="font-extrabold text-emerald-600 dark:text-emerald-400">
            Seroja Nutrition — Independent Herbalife Distributor
          </p>
          <p>
            &copy; 2026 Seroja.
            {{
              lang === "id" ? "Hak Cipta Dilindungi." : "All Rights Reserved."
            }}
          </p>
        </div>
        <div
          class="text-[10px] max-w-md leading-relaxed text-slate-400 dark:text-slate-600 italic"
        >
          {{
            lang === "id"
              ? "Produk Herbalife tidak ditujukan untuk mendiagnosis, mengobati, menyembuhkan, atau mencegah penyakit apa pun."
              : "Herbalife products are not intended to diagnose, treat, cure, or prevent any disease."
          }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps(["lang"]);

const menuLinks = [
  { nameId: "Halaman Utama", nameEn: "Home", path: "/" },
  { nameId: "Katalog Produk", nameEn: "Products", path: "/products" },
  { nameId: "Lokasi Club", nameEn: "Nutrition Club", path: "/location" },
];

const socialMedia = [
  {
    name: "Instagram",
    link: "https://instagram.com/seroja.nutrition",
    // Menggunakan official brand path dengan detail lubang lensa dan flash yang pas
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>`,
  },
  {
    name: "TikTok",
    link: "https://tiktok.com/@seroja.nutrition",
    // Menggunakan siluet logo "Note Nada" khas TikTok yang presisi
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.01 1.62 4.13.94.94 2.19 1.51 3.52 1.62v3.31c-1.65.02-3.27-.47-4.61-1.39-.03 3.1-.01 6.2-.04 9.3-.06 2.05-.72 4.14-2.22 5.56-1.78 1.77-4.48 2.36-6.85 1.51-2.45-.83-4.25-3.15-4.43-5.77-.32-3.41 2.17-6.68 5.61-7.1 1.13-.15 2.29-.02 3.37.4v3.42c-.77-.4-1.65-.54-2.5-.37-1.42.23-2.56 1.47-2.73 2.9-.22 1.54.67 3.12 2.1 3.65 1.41.56 3.14.07 3.99-1.14.33-.43.46-.97.46-1.51.02-3.44.01-6.89.01-10.33l.03-9.52z"/>
    </svg>`,
  },
  {
    name: "YouTube",
    link: "https://youtube.com",
    // Menggunakan bentuk persegi rounded dengan segitiga 'Play' ikonik di tengahnya
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.503 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>`,
  },
];
</script>

<style scoped>
/* Transisi warna yang halus khusus komponen footer */
.theme-transition {
  transition:
    background-color 0.5s ease-in-out,
    border-color 0.5s ease-in-out;
}
</style>
