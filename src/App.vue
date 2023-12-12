<!-- this project is using tailwind css -->

<script setup>
import AboutMe from "./components/AboutMe.vue"
import Repos from "./components/Repos.vue"
import Status from "./components/Status.vue";
</script>

<template>
  <h1 class="p-16 text-center text-cyan-300 text-xl">
    Welcome to my little corner of the internet!
  </h1>
  <div class="grid p-4 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
    <AboutMe />
    <Repos />
    <Status />
  </div>
  <div class="p-10 flex justify-center items-center gap-4">
    <a href="mailto:hello@mail.sx9.is-a.dev"><i class="fa-solid fa-envelope-circle-check"></i></a>
    <a href="https://discord.com/users/882595027132493864"><i class="fa-brands fa-discord"></i></a>
    <a href="https://github.com/SX-9"><i class="fa-brands fa-github"></i></a>
  </div>
</template>