<!-- 
  Github Copilot Context:
  this project is using tailwind css 
-->

<script setup>
import Intro from "./components/Intro.vue";
import Repos from "./components/Repos.vue";
import Status from "./components/Status.vue";
import Skills from "./components/Skills.vue";
import Gaza from "./components/Gaza.vue";
import Server from "./components/Server.vue";
import Misc from "./components/Misc.vue";
import Links from "./components/Links.vue";
</script>

<script>
export default {
  data() {
    return {
      hideBanner: localStorage?.hideBanner,
    }
  },
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
  <Gaza v-if="!hideBanner" />
  <div class="flex justify-center items-center flex-col p-12 pb-8">
    <h1 class="text-cyan-100 text-xl text-center">
      Welcome to my little corner of the internet!
    </h1>
    <div class="flex flex-col sm:flex-row-reverse sm:gap-8 justify-center items-center m-2">
      <p class="text-gray-400 text-center">Come and look around!</p>
      <div class="flex gap-4">
        <a target="_blank" href="https://github.com/SX-9/sx-3rd-website"><i class="fa-solid fa-code"></i></a>
        <a target="_blank" href="mailto:hello@mail.sx9.is-a.dev"><i class="fa-solid fa-envelope"></i></a>
        <a target="_blank" href="https://github.com/SX-9"><i class="fa-brands fa-github"></i></a>
        <a target="_blank" href="https://discord.com/users/882595027132493864"><i class="fa-brands fa-discord"></i></a>
        <a target="_blank" href="https://donate.unrwa.org/"><i class="fa-solid fa-hand-holding-dollar"></i></a>
      </div>
    </div>
  </div>
  <div class="p-4 columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
    <Intro />
    <Server />
    <Skills />
    <Links />
    <Misc />
    <Status />
    <Repos />
  </div>
  <p class="m-8 text-center text-gray-400">
    	&#169; {{ new Date().getFullYear() }} Satria - All Rights Reserved
  </p>
</template>