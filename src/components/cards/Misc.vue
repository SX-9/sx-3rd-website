<script>
export default {
  data() {
    return {
      timezone: "Asia/Jakarta",
      days: this.daysUntilBirthday(12, 6),
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
    },
    getTimeIn(timezone) {
      const options = { timeZone: timezone, hour12: true, hour: 'numeric', minute: 'numeric' };
      const time = new Date().toLocaleString("en-US", options);
      return time;
    }
  },
  mounted() {
    if (this.days <= 3) {
      this.emitter.emit('birthday');
    }
  },
}
</script>

<template>
  <div class="card b4">
    <div class="p-2 gap-2">
      <h1 class="misc text-gradient nice">{{ days || 'Today' }}</h1>
      <p class="text-subtext1">{{ days ? 'day' + (days === 1 ? '' : 's') + ' until birthday.' : 'is  my birthday!' }}</p>
      <h1 class="misc text-gradient nice">{{ getTimeIn(timezone) }}</h1>
      <p class="text-subtext1">for me in {{ timezone }}.</p>
    </div>
  </div>
</template>