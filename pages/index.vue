<template>
  <div class="main-wrapper min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-500 overflow-hidden relative">
    
    <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/20 dark:bg-emerald-600/10 rounded-full blur-[128px] animate-blob transition-colors duration-500"></div>
      <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/15 dark:bg-teal-600/5 rounded-full blur-[128px] animate-blob animation-delay-2000 transition-colors duration-500"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/50 dark:bg-slate-800/10 rounded-full blur-[110px] animate-blob animation-delay-4000 transition-colors duration-500 opacity-60"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 relative z-10 py-12">
      
      <HomeHeroSection :lang="lang" />

      <HomeWhyChooseUs :lang="lang" />

      <HomeCommunityEducation :lang="lang" />

      <HomeServicesPrograms :lang="lang" />

      <HomeStepsToStart :lang="lang" />

      <HomeSuccessStories :lang="lang" />

      <HomeCtaBanner :lang="lang" />

    </div>

    <a 
      href="https://wa.me/628123456789?text=Halo%20Coach%20Seroja,%20saya%20tertarik%20ingin%20tanya%20program%20dan%20konsultasi%20nutrisi." 
      target="_blank"
      class="fixed bottom-6 right-6 z-[99] bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-2xl shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 flex items-center justify-center animate-bounce-soft"
      aria-label="Chat WhatsApp Seroja"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 fill-current group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.372 5.378 0 12.013 0c3.216.012 6.237 1.27 8.508 3.542 2.27 2.274 3.523 5.301 3.523 8.514-.01 6.632-5.385 12.004-12.02 12.004-.006 0-.012 0-.018 0-1.996-.002-3.963-.5-5.717-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.417 9.867-9.849.004-2.63-1.019-5.101-2.881-6.965C16.538 1.936 14.07 .915 11.443.915 6.008.915 1.585 5.332 1.578 10.766c-.002 1.704.453 3.37 1.316 4.839l-.986 3.6 3.738-.981zm13.12-10.302c-.27-.134-1.597-.788-1.846-.878-.25-.09-.431-.136-.613.135-.182.271-.703.878-.862 1.058-.159.18-.317.202-.587.067-.27-.135-1.14-.42-2.172-1.34-0.803-.715-1.345-1.6-1.503-1.871-.159-.272-.017-.418.118-.553.122-.122.272-.317.408-.475.136-.158.181-.271.272-.453.09-.181.045-.339-.022-.475-.068-.135-.613-1.478-.84-2.02-.22-.53-.442-.458-.613-.467-.159-.008-.34-.01-.522-.01-.181 0-.476.068-.725.339-.249.271-.952.931-.952 2.27 0 1.338.975 2.63 1.111 2.81 1.14 1.514 2.508 2.31 3.9 2.87 1.055.424 1.745.344 2.404.246.736-.11 1.598-.654 1.825-1.254.226-.6.226-1.11.158-1.218-.067-.109-.248-.154-.518-.289z"/></svg>
    </a>

  </div>
</template>

<script setup>
import { onMounted } from "vue";
const props = defineProps(["lang"]);

// Logic Intersection Observer global untuk memicu transisi scroll komponen (.scroll-animate)
onMounted(() => {
  if (process.client) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });
  }
});
</script>

<style>
/* --- GLOBAL STYLING UNTUK ANIMASI HALAMAN UTAMA --- */

.animate-fade-in-left {
  animation: fadeInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.animate-fade-in-right {
  animation: fadeInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-float {
  animation: floatingCard 4s ease-in-out infinite;
}
@keyframes floatingCard {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0.5deg); }
}

.scroll-animate {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.scroll-animate.visible {
  opacity: 1;
  transform: translateY(0);
}

.animate-blob {
  animation: blobBackground 12s infinite ease-in-out;
}
@keyframes blobBackground {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(50px, -60px) scale(1.15); }
  66% { transform: translate(-40px, 40px) scale(0.9); }
}
.animation-delay-2000 {
  animation-delay: 2.5s;
}
.animation-delay-4000 {
  animation-delay: 5s;
}

.animate-bounce-soft {
  animation: bounceSoft 3s infinite ease-in-out;
}
@keyframes bounceSoft {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
</style>