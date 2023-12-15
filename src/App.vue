<!-- 
  Github Copilot Context:
  this project is using tailwind css 
-->

<script setup>
import Intro from "./components/Intro.vue"
import Repos from "./components/Repos.vue"
import Status from "./components/Status.vue";
import Skills from "./components/Skills.vue";
</script>

<script>
export default {
  mounted() {
    let b4s = document.querySelectorAll('.b4');
    b4s.forEach((b4, i) => {
      setTimeout(() => {
        b4.classList.remove('b4');
      }, i * 200);
    });
  },
  created() {
    this.emitter.on('birthday', () => {
      this.$confetti.update({
        particlesPerFrame: 1,
      });
      this.$confetti.start();
      setTimeout(() => {
        this.$confetti.stop();
      }, window.innerHeight * 5);
    });
  }
};
</script>

<template>
  <div class="flex justify-center items-center flex-col p-12 pb-8">
    <h1 class="text-cyan-100 text-xl text-center">
      Welcome to my little corner of the internet!
    </h1>
    <div class="flex flex-col sm:flex-row-reverse sm:gap-8 justify-center items-center">
      <p class="text-gray-400 text-center m-2">Its <span class="font-bold">{{ new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }).split(' ').filter(i=>!i.includes('/')).join(' ') }}</span> in Asia/Jakarta.</p>
      <div class="flex gap-4">
        <a target="_blank" href="https://github.com/SX-9/sx-3rd-website"><i class="fa-solid fa-code"></i></a>
        <a target="_blank" href="mailto:hello@mail.sx9.is-a.dev"><i class="fa-solid fa-envelope-circle-check"></i></a>
        <a target="_blank" href="https://github.com/SX-9"><i class="fa-brands fa-github"></i></a>
        <a target="_blank" href="https://discord.com/users/882595027132493864"><i class="fa-brands fa-discord"></i></a>
      </div>
    </div>
  </div>
  <div class="grid p-4 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <Intro />
    <Skills />
    <Repos />
    <Status />
  </div>
</template>