<script>
export default {
  data() {
    return {
      username: "satr14_chess",
      apiResponse: null,
    };
  },

  created() {
    this.fetchRatings();
  },

  methods: {
    async fetchRatings() {
      this.apiResponse = await fetch(
        "https://api.chess.com/pub/player/" + this.username + "/stats"
      ).then((r) => r.json());
    },
  },
};
</script>

<template>
  <div class="card b4">
    <h1><i class="fa-solid fa-chess"></i> Rating</h1>
    <div class="p-2 gap-2">
      <div v-if="!this.apiResponse?.message">
        <div class="grid grid-cols-3 gap-0 w-full mb-4 mt-2">
          <div class="flex flex-col items-center">
            <div class="h-2"></div>
            <i class="fa-solid fa-gun text-4xl text-overlay2"></i>
            <h1 class="text-2xl">{{ this.apiResponse?.chess_bullet?.last.rating }}</h1>
            <p class="text-sm m-0">Bullet</p>
          </div>
          <div class="flex flex-col items-center">
            <i class="fa-solid fa-stopwatch text-4xl text-green"></i>
            <h1 class="text-2xl">{{ this.apiResponse?.chess_rapid?.last.rating }}</h1>
            <p class="text-sm m-0">Rapid</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="h-2"></div>
            <i class="fa-solid fa-bolt-lightning text-4xl text-yellow"></i>
            <h1 class="text-2xl">{{ this.apiResponse?.chess_blitz?.last.rating }}</h1>
            <p class="text-sm m-0">Blitz</p>
          </div>
        </div>
        <h2 class="text-center"><a target="_blank" :href="'https://www.chess.com/member/'+username">{{ username }}</a> on <span class="font-bold">Chess.com</span></h2>
      </div>
    </div>
  </div>
</template>
