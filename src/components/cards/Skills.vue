<script>
export default {
  data() {
    return {
        skills: [
            "js", "html5", "css3-alt", "linux", "square-git", "docker", "vuejs", "python", "golang"
        ]
    }
  }
}
</script>

<template>
    <div class="card b4">
        <div class="p-2 mt-3 grid grid-cols-3 gap-8">
            <i v-for="skill in skills" :class="'skill text-gradient nice fa-brands fa-' + skill"></i>
        </div>
    </div>
</template>