<script>
export default {
  data() {
    return {
      days: this.daysUntilBirthday(12, 6),
      description: 'My name is Satria, Im a self-taught hobbyist web developer from Indonesia. I\'ve been coding since 2021 at the age of 11. I love spending my free time coding and experimenting with new technologies. I spend most of my time working on personal projects. I\'m currently learning Vue.js and Tailwind CSS. I\'m also interested in Linux and open-source software.',
    }
  },
  methods: {
    daysUntilBirthday(day, month) {
      let today = new Date(),
        y = today.getFullYear(),
        next = new Date(y, month - 1, day);
      today.setHours(0, 0, 0, 0);
      if (today > next) next.setFullYear(y + 1);
      return Math.round((next - today) / 8.64e7);
    }
  },
}
</script>

<template>
  <div class="card b4">
    <h1><i class="fa-solid fa-circle-user"></i> Introduction</h1>
    <div class="p-2">
      <p>{{ description }}</p>
      <hr size="1" class="my-4">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-3xl text-cyan-200 hover:text-yellow-200 transition-all duration-500 ease-in-out">{{ days || 'Today' }}</h1>
        <p class="text-gray-300">{{ days ? 'day' + (days === 1 ? '' : 's') + ' until birthday.' : 'is  my birthday!' }}</p>
      </div>
    </div>
  </div>
</template>