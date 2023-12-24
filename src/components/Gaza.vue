<script>
// Credits: https://github.com/Safouene1/support-palestine-banner
export default {
  data() {
    return {
      title: "Free Palestine",
      description: "Stand for humanity! Palestine has a right to defend itself. Together, we can put an end to the Gaza genocide. Let's unite to #SAVEGAZA.",
      linkTo: "https://donate.unrwa.org/",
    }
  }
}
</script>

<template>
  <div
      class="sticky lg:relative top-0 isolate z-50 flex items-center overflow-hidden px-3.5 py-2.5 backdrop-blur-sm  md:px-6 bg-gray-600/70"
    >
      <div
        class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 blur-2xl"
        aria-hidden="true"
      >
      <div
        class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#149954] to-[#E4312b] opacity-80 md:opacity-50"
        :style="{
          clipPath:'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)'
        }"
      />
      </div>
      <div
        class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 blur-2xl"
        aria-hidden="true"
      >
      <div
        class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#149954] to-[#E4312b] opacity-80 md:opacity-50"
        :style="{
          clipPath:'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)'
        }"
      />
      </div>
      <div class="mx-4 gap-4 flex justify-between items-center w-full h-full text-gray-300">
        <p
          class="text-sm leading-4 sm:leading-6"
        >
          <a :href="linkTo" target="_blank" class="nostyle">
            <strong className="font-semibold">{{title}}</strong>
            <br>
            {{description}}
          </a>
        </p>
        <i class="fa-solid fa-x text-lg" @click="this.$el.remove()"></i>
      </div>
    </div>
</template>

