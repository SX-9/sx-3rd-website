<script>
export default {
  data() {
    return {
      model: "...",
      uptime: null,
      address: "homeserver.axolotl-chameleon.ts.net",
      update: 1.5,
      msg: "click to refresh",
      interval: null,
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
    async refresh() {
      try {
        const data = await fetch(`https://${this.address}/stats`).then(res => res.json());
        this.uptime = data.uptime;
        this.cpu.usage = data.cpu;
        this.ram.usage = data.ram;
      } catch (e) {
        this.uptime = null;
        this.cpu.usage = 0;
        this.ram.usage = 0;
        this.msg = "click to refresh";
        clearInterval(this.interval);
      }
    },
    async start() {
      try {
        this.msg = "loading...";
        const data = await fetch(`https://${this.address}/specs`).then(res => res.json());
        this.model = data.model;
        this.cpu.model = data.cpu;
        this.ram.total = data.ram;
        this.interval = setInterval(this.refresh, this.update * 1000);
      } catch (e) {
        setTimeout(() => this.msg = "click to refresh", 500)
      }
    },
    formatTime(seconds) {
      const days = Math.floor(seconds / (3600 * 24));
      const hours = Math.floor((seconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = Math.floor(seconds % 60);

      const formattedTime = `${hours}:${minutes}:${remainingSeconds} up ${days} days`;
      return formattedTime;
    }
  },
  async created() {
    await this.start();
  },
}
</script>

<template>
  <div class="card b4">
    <h1><i class="fa-solid fa-chart-line"></i> Server</h1>
    <div class="p-2 gap-2">
      <p v-if="!uptime" class="text-red animate-pulse cursor-pointer" @click="start"><i class="fa-solid fa-circle"></i> Offline ({{ msg }})</p>
      <p v-else class="text-green animate-pulse"><i class="fa-solid fa-circle"></i> {{ formatTime(uptime) }}</p>
      <div>
        <p class="text-subtext1">{{ model }}</p>
        <ul>
          <li>{{ cpu.model }}</li>
          <li>{{ ram.total }} GB of RAM</li>
        </ul>
      </div>
      <hr class="my-2 border-subtext0" size="1">
      <div class="grid grid-cols-2 gap-2 justify-evenly">
        <div class="flex flex-col items-center">
          <p class="text-sm text-subtext1">CPU</p>
          <h1 v-if="!cpu.usage" class="text-2xl text-subtext1">{{ cpu.usage }}%</h1>
          <h1 v-else-if="cpu.usage < 75" class="text-2xl text-green">{{ cpu.usage }}%</h1>
          <h1 v-else-if="cpu.usage < 90" class="text-2xl text-yellow">{{ cpu.usage }}%</h1>
          <h1 v-else class="text-2xl text-red">{{ cpu.usage }}%</h1>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-sm text-subtext1">RAM</p>
          <h1 v-if="!ram.usage" class="text-2xl text-subtext1">{{ ram.usage }}%</h1>
          <h1 v-else-if="ram.usage < 80" class="text-2xl text-green">{{ ram.usage }}%</h1>
          <h1 v-else-if="ram.usage < 90" class="text-2xl text-yellow">{{ ram.usage }}%</h1>
          <h1 v-else class="text-2xl text-red">{{ ram.usage }} %</h1>
        </div>
      </div>
    </div>
  </div>
</template>