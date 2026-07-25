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
