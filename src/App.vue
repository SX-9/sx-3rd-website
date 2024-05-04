<!-- 
  Github Copilot Context:
  this project is using tailwind css 
-->

<script>
export default {
  data() {
    return {
      hideBanner: localStorage?.hideBanner,
    }
  },
  mounted() {
    const theme = localStorage.getItem("theme");
    if (theme) this.switchTheme(theme);
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
  },
  methods: {
    switchTheme(theme) {
      const themes = ['mocha', 'macchiato', 'frappe', 'latte'];
      if (!theme) theme = prompt('Enter theme name:\n' + themes.join(', ')).toLowerCase();
      if (!themes.includes(theme)) return;
      document.body.classList.remove(...themes);
      document.body.classList.add(theme);
      localStorage.setItem("theme", theme);
    },
  },
};
</script>

<template>
  <Gaza v-if="!hideBanner" />
  <div class="flex justify-center items-center flex-col p-12 pb-8">
    <h1 class="text-gradient from-green via-sapphire to-mauve text-xl text-center">
      Welcome to my little corner of the internet!
    </h1>
    <div class="flex gap-4 mt-2">
      <a class="nostyle text-green" target="_blank" href="mailto:sx-91@outlook.com"><i class="fa-solid fa-envelope"></i></a>
      <a class="nostyle text-green" target="_blank" href="https://github.com/SX-9"><i class="fa-brands fa-github"></i></a>
      <a class="nostyle text-green" target="_blank" href="https://discord.com/users/882595027132493864"><i class="fa-brands fa-discord"></i></a>
      <hr class="border-sapphire w-4 mt-3" size="1">
      <a class="nostyle text-mauve" target="_blank" href="https://github.com/SX-9/sx-3rd-website"><i class="fa-solid fa-code"></i></a>
      <a class="nostyle text-mauve" target="_blank" href="https://donate.unrwa.org/"><i class="fa-solid fa-hand-holding-dollar"></i></a>
      <a class="nostyle text-mauve"><i @click="switchTheme()" class="fa-solid fa-paint-roller"></i></a>
    </div>
  </div>
  <div class="p-4 columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
    <Intro />
    <Server />
    <Misc />
    <Skills />
    <Links />
    <Status />
    <Repos />
  </div>
  <p class="m-8 text-center text-subtext1">
    	&#169; {{ new Date().getFullYear() }} Satria - All Rights Reserved
  </p>
</template>
