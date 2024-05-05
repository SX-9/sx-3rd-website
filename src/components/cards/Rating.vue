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
      this.totalGames = this.apiResponse?.chess_rapid?.record?.win + this.apiResponse?.chess_rapid?.record?.loss + this.apiResponse?.chess_rapid?.record?.draw;
    },
  },
};
</script>

<template>
  <div class="card b4">
    <div class="p-2 gap-2">
      <div v-if="!this.apiResponse?.message">
        <div class="flex gap-4 p-2 w-full">
          <div class="flex flex-col items-center">
            <i class="fa-solid fa-stopwatch text-4xl text-overlay2"></i>
            <h1 class="text-2xl">{{ this.apiResponse?.chess_rapid?.last.rating }}</h1>
            <p class="text-sm m-0">Rapid</p>
          </div>
          <div class="flex-[2] flex flex-col p-1 justify-center">
            <div class="flex justify-between">
              <p class="text-green text-xs">Wins</p>
              <p class="text-red text-xs">Losses</p>
            </div>
            <div class="w-full bg-overlay0 h-2 my-1 rounded-lg flex justify-between">
              <div id="wins" class="bg-green h-full rounded-l-lg" :style="{
                width: (this.apiResponse?.chess_rapid?.record?.win / (this.totalGames)) * 100 + '%'
              }"></div>
              <div id="losses" class="bg-red h-full rounded-r-lg" :style="{
                width: (this.apiResponse?.chess_rapid?.record?.loss / (this.totalGames)) * 100 + '%'
              }"></div>
            </div>
            <div class="flex justify-between">
              <p class="text-green text-xs">{{ this.apiResponse?.chess_rapid?.record?.win }}</p>
              <p class="text-red text-xs">{{ this.apiResponse?.chess_rapid?.record?.loss }}</p>
            </div>
            <p class="text-subtext0 text-center text-sm">{{ this.totalGames }} Total Games</p>
          </div>
        </div>
        <h2 class="text-center"><a target="_blank" :href="'https://www.chess.com/member/'+username">{{ username }}</a> on <span class="font-bold">Chess.com</span></h2>
      </div>
    </div>
  </div>
</template>
