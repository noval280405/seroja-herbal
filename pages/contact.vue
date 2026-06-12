<template>
  <section class="relative overflow-hidden">
    <!-- Background -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-emerald-50/60 via-transparent to-transparent dark:from-emerald-950/10 pointer-events-none"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      <!-- Header -->
      <div class="text-center mb-14">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-5"
        >
          <Icon icon="solar:chat-round-dots-bold-duotone" class="w-4 h-4" />
          CONTACT US
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
        <!-- LEFT -->
        <div class="lg:col-span-2 space-y-5">
          <div
            class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-6"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center"
              >
                <Icon
                  icon="solar:phone-bold-duotone"
                  class="w-6 h-6 text-emerald-500"
                />
              </div>

              <div>
                <h3 class="font-bold text-lg">WhatsApp</h3>

                <p class="text-slate-500 dark:text-slate-400 text-sm">
                  +62 812 3456 7890
                </p>
              </div>
            </div>
          </div>

          <div
            class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-6"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center"
              >
                <Icon
                  icon="solar:letter-bold-duotone"
                  class="w-6 h-6 text-blue-500"
                />
              </div>

              <div>
                <h3 class="font-bold text-lg">Email</h3>

                <p class="text-slate-500 dark:text-slate-400 text-sm">
                  hello@seroja.com
                </p>
              </div>
            </div>
          </div>

          <div
            class="bg-gradient-to-br from-emerald-500 via-green-500 to-lime-500 rounded-3xl p-6 text-white"
          >
            <h3 class="font-black text-xl mb-2">Konsultasi Gratis</h3>

            <p class="text-sm text-white/90">
              Dapatkan panduan nutrisi dan pengecekan komposisi tubuh secara
              gratis.
            </p>

            <button
              class="mt-5 h-11 px-5 rounded-2xl bg-white text-emerald-600 font-bold"
            >
              Mulai Sekarang
            </button>
          </div>
        </div>

        <!-- FORM -->
        <div class="lg:col-span-3">
          <div
            class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[32px] p-8 shadow-sm"
          >
            <form @submit.prevent="handleSubmit" class="space-y-5">
              <div>
                <label
                  class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block"
                >
                  {{ t.nameLabel }}
                </label>

                <input
                  type="text"
                  required
                  class="w-full h-14 px-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div>
                <label
                  class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block"
                >
                  Email
                </label>

                <input
                  type="email"
                  required
                  class="w-full h-14 px-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div>
                <label
                  class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block"
                >
                  {{ t.msgLabel }}
                </label>

                <textarea
                  rows="6"
                  required
                  class="w-full p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <button
                type="submit"
                class="w-full h-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:scale-[1.01] transition-all text-white font-bold shadow-lg shadow-emerald-500/20"
              >
                {{ t.btnSend }}
              </button>
            </form>
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
    title: "Hubungi Seroja",
    subtitle:
      "Konsultasikan kebutuhan nutrisi, program penurunan berat badan, atau keanggotaan Herbalife bersama kami.",
    nameLabel: "Nama Lengkap",
    msgLabel: "Pesan",
    btnSend: "Kirim Pesan",
  },
  en: {
    title: "Contact Seroja",
    subtitle:
      "Talk with us about nutrition plans, weight management programs, and Herbalife membership.",
    nameLabel: "Full Name",
    msgLabel: "Message",
    btnSend: "Send Message",
  },
};

const t = computed(() => i18n[props.lang || "id"]);

const handleSubmit = () => {
  alert(
    props.lang === "id"
      ? "Terima kasih! Pesan Anda telah terkirim."
      : "Thank you! Your message has been sent.",
  );
};
</script>
