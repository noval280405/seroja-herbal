<template>
  <section class="relative overflow-hidden">
    <!-- Background Blur -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-transparent to-transparent dark:from-emerald-950/20 pointer-events-none"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      <!-- Header -->
      <div class="text-center mb-14">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-5"
        >
          <Icon icon="solar:map-point-bold-duotone" class="w-4 h-4" />
          SEROJA NUTRITION CLUB
        </div>

        <h1
          class="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
        >
          {{ t.title }}
        </h1>

        <p class="mt-5 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
          {{ t.subtitle }}
        </p>
      </div>

      <div class="grid lg:grid-cols-5 gap-8">
        <!-- Left Info -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Address -->
          <div
            class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center"
              >
                <Icon
                  icon="solar:map-point-bold-duotone"
                  class="w-6 h-6 text-emerald-500"
                />
              </div>

              <div>
                <h3 class="font-bold text-lg mb-2">
                  {{ t.addressTitle }}
                </h3>

                <p class="text-slate-600 dark:text-slate-400 text-sm">
                  Jl. Seroja Sehat No. 12, Pamulang, Tangerang Selatan, Banten
                </p>
              </div>
            </div>
          </div>

          <!-- Hours -->
          <div
            class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center"
              >
                <Icon
                  icon="solar:clock-circle-bold-duotone"
                  class="w-6 h-6 text-blue-500"
                />
              </div>

              <div>
                <h3 class="font-bold text-lg mb-3">
                  {{ t.hoursTitle }}
                </h3>

                <ul
                  class="text-sm text-slate-600 dark:text-slate-400 space-y-2"
                >
                  <li>Senin - Jumat : 06:30 - 11:00</li>
                  <li>Senin - Jumat : 16:00 - 20:00</li>
                  <li>Sabtu : 07:00 - 12:00</li>
                  <li>
                    Minggu :
                    <span class="text-red-500 font-semibold"> Tutup </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex gap-3">
            <a
              href="#"
              class="flex-1 h-12 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold flex items-center justify-center gap-2 transition"
            >
              <Icon icon="solar:map-arrow-right-bold-duotone" />
              {{ t.direction }}
            </a>

            <a
              href="#"
              class="flex-1 h-12 rounded-2xl border border-slate-200 dark:border-slate-700 font-bold flex items-center justify-center gap-2"
            >
              <Icon icon="solar:phone-bold-duotone" />
              {{ t.contact }}
            </a>
          </div>
        </div>

        <!-- Map -->
        <div class="lg:col-span-3">
          <div
            class="overflow-hidden rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.5190130635!2d106.6611252145322!3d-6.301939169623832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e52579b93cf7%3A0x6b876fc6d013f9c!2sPamulang%2C%20South%20Tangerang%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid"
              class="w-full h-[600px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps(["lang"]);

const i18n = {
  id: {
    title: "Lokasi Rumah Nutrisi Seroja",
    subtitle:
      "Kunjungi klub nutrisi kami untuk konsultasi, pengecekan komposisi tubuh gratis, dan menikmati shake sehat setiap hari.",
    addressTitle: "Alamat",
    hoursTitle: "Jam Operasional",
    direction: "Petunjuk Arah",
    contact: "Hubungi Kami",
  },
  en: {
    title: "Seroja Nutrition Club Location",
    subtitle:
      "Visit our nutrition club for consultations, body composition analysis, and healthy shakes.",
    addressTitle: "Address",
    hoursTitle: "Opening Hours",
    direction: "Get Directions",
    contact: "Contact Us",
  },
};

const t = computed(() => i18n[props.lang || "id"]);
</script>
