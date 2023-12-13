<script>
export default {
  data() {
    return {
      description: 'My name is Satria, Im a self-taught hobbyist web developer from Indonesia. I\'ve been coding since 2021 at the age of 11. I love spending my free time coding and experimenting with new technologies. I spend most of my time working on personal projects. I\'m currently learning Vue.js and Tailwind CSS. I\'m also interested in Linux and open-source software.',
    }
  }
}
</script>

<template>
  <div class="card">
    <h1><i class="fa-solid fa-circle-user"></i> Introduction</h1>
    <p class="p-2">{{ description }}</p>
  </div>
</template>