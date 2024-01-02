<script>
export default {
  data() {
    return {
      model: "...",
      uptime: null,
      cpu: {
        model: "???",
        usage: 0,
      },
      ram: {
        total: "???",
        usage: 0,
      }
    }
  },
  methods: {
    // TODO: install backend on server
    async refresh() {
      try {

      } catch (e) {
        clearInterval(this.interval);
      }
    }
  },
  mounted() {
    this.interval = setInterval(this.refresh);
  },
}
</script>

<template>
  <div class="card b4">
    <h1><i class="fa-solid fa-chart-line"></i> Server</h1>
    <div class="p-2 gap-2">
      <p v-if="uptime" class="text-center text-green-400 animate-pulse"><i class="fa-solid fa-circle"></i> {{ uptime }} {{ model }}</p>
      <p v-else class="text-center text-red-400 animate-pulse" @click="refresh"><i class="fa-solid fa-circle"></i> Offline (click to refresh)</p>
      <div v-if="uptime" class="flex gap-2 justify-evenly">
        <div class="flex flex-col items-center">
          <p class="text-gray-400">CPU ({{ cpu.model }})</p>
          <h1 class="text-green-400">{{ cpu.usage }} %</h1>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-gray-400">RAM ({{ ram.total }} MB)</p>
          <h1 class="text-green-400">{{ ram.usage }} %</h1>
        </div>
      </div>
    </div>
  </div>
</template>