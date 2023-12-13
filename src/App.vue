<!-- 
  Github Copilot Context:
  this project is using tailwind css 
-->

<script setup>
import AboutMe from "./components/AboutMe.vue"
import Repos from "./components/Repos.vue"
import Status from "./components/Status.vue";
</script>

<template>
  <div class="flex justify-center items-center flex-col p-12">
    <h1 class="text-cyan-300 text-xl">
      Welcome to my little corner of the internet!
    </h1>
    <div class="flex gap-4">
      <a target="_blank" href="mailto:hello@mail.sx9.is-a.dev"><i class="fa-solid fa-envelope-circle-check"></i></a>
      <a target="_blank" href="https://github.com/SX-9"><i class="fa-brands fa-github"></i></a>
      <a target="_blank" href="https://discord.com/users/882595027132493864"><i class="fa-brands fa-discord"></i></a>
    </div>
  </div>
  <div class="grid p-4 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
    <AboutMe />
    <Repos />
    <Status />
  </div>
</template>