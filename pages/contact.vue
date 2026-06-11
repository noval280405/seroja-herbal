<template>
  <div class="max-w-xl mx-auto px-4 py-12">
    <div class="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-xl">
      <h1 class="text-2xl font-black mb-2 text-center">{{ t.title }}</h1>
      <p class="text-sm text-center text-slate-500 dark:text-slate-400 mb-8">{{ t.subtitle }}</p>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{{ t.nameLabel }}</label>
          <input type="text" required class="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition" />
        </div>
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Email</label>
          <input type="email" required class="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition" />
        </div>
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{{ t.msgLabel }}</label>
          <textarea rows="4" required class="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition"></textarea>
        </div>

        <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition shadow-lg">
          {{ t.btnSend }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['lang'])

const i18n = {
  id: { title: 'Hubungi Seroja', subtitle: 'Punya pertanyaan seputar program diet atau keanggotaan Herbalife? Kirim pesan di bawah ini.', nameLabel: 'Nama Lengkap', msgLabel: 'Pesan Anda', btnSend: 'Kirim Pesan' },
  en: { title: 'Contact Seroja', subtitle: 'Have queries regarding diet plans or Herbalife membership? Send us a message below.', nameLabel: 'Full Name', msgLabel: 'Your Message', btnSend: 'Send Message' }
}
const t = computed(() => i18n[props.lang])

const handleSubmit = () => {
  alert(props.lang === 'id' ? 'Terima kasih! Pesan Anda telah terkirim.' : 'Thank you! Your message has been sent.')
}
</script>