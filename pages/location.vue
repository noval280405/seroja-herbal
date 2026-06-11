<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold mb-4">{{ t.title }}</h1>
      <p class="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">{{ t.subtitle }}</p>
    </div>

    <div class="grid lg:grid-cols-3 gap-8 items-start">
      <!-- Info Box -->
      <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
        <div>
          <h3 class="font-bold text-emerald-600 dark:text-emerald-400 mb-1">📍 {{ t.addressTitle }}</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400">Jl. Seroja Sehat No. 12, Pamulang, Tangerang Selatan, Banten</p>
        </div>
        <div>
          <h3 class="font-bold text-emerald-600 dark:text-emerald-400 mb-1">🕒 {{ t.hoursTitle }}</h3>
          <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-1">
            <li>Senin - Jumat: 06:30 - 11:00 & 16:00 - 20:00</li>
            <li>Sabtu: 07:00 - 12:00</li>
            <li>Minggu: <span class="text-red-500 font-semibold">Tutup / Closed</span></li>
          </ul>
        </div>
      </div>

      <!-- Map Block -->
      <div class="lg:col-span-2 bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden aspect-video relative border border-slate-300 dark:border-slate-700">
        <!-- Gantilah src iframe ini dengan link sematan Google Maps asli milik Anda nantinya -->
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.5190130635!2d106.6611252145322!3d-6.301939169623832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e52579b93cf7%3A0x6b876fc6d013f9c!2sPamulang%2C%20South%20Tangerang%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid" 
          class="w-full h-full border-0" 
          allowfullscreen="" 
          loading="lazy">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['lang'])

const i18n = {
  id: { title: 'Lokasi Rumah Nutrisi Seroja', subtitle: 'Kunjungi klub kebugaran kami untuk berkonsultasi, melakukan pengecekan komposisi tubuh secara gratis, dan menikmati racikan shake segar.', addressTitle: 'Alamat Rumah Nutrisi', hoursTitle: 'Jam Operasional' },
  en: { title: 'Seroja Nutrition Club Location', subtitle: 'Visit our fitness center for private consultations, complimentary body composition checks, and delicious healthy shakes.', addressTitle: 'Club Address', hoursTitle: 'Opening Hours' }
}
const t = computed(() => i18n[props.lang])
</script>