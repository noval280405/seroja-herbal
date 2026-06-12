<template>
  <div class="max-w-4xl mx-auto py-12 animate-in fade-in zoom-in duration-500">
    <button
      @click="$emit('back')"
      class="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition mb-10 font-semibold text-sm"
    >
      <ArrowLeft size="18" />
      {{ lang === "id" ? "Kembali ke Blog" : "Back to Blog" }}
    </button>

    <div
      class="bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl shadow-emerald-500/5 overflow-hidden border border-slate-100 dark:border-slate-800"
    >
      <!-- Header Visual -->
      <div
        class="h-64 bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-center"
      >
        <component :is="article.icon" size="80" class="text-white opacity-90" />
      </div>

      <div class="p-8 md:p-16">
        <span
          class="inline-block px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 font-bold text-xs uppercase tracking-widest mb-6"
        >
          {{ article.category }}
        </span>

        <h1
          class="text-4xl md:text-6xl font-black mb-8 leading-[1.1] text-slate-900 dark:text-white"
        >
          {{ lang === "id" ? article.titleId : article.titleEn }}
        </h1>

        <div
          class="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300"
        >
          <p class="text-xl font-bold mb-8">
            {{ lang === "id" ? article.excerptId : article.excerptEn }}
          </p>
          <p class="leading-loose">
            {{ lang === "id" ? article.contentId : article.contentEn }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeft } from "lucide-vue-next";
defineProps(["article", "lang"]);
defineEmits(["back"]);
</script>
