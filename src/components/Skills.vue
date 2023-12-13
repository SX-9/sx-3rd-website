<script>
export default {
  data() {
    return {
        skills: [
            "js", "vuejs", "html5", "css3-alt", "linux", "square-git", "docker", "python", "golang"
        ]
    }
  }
}
</script>

<template>
    <div class="card">
        <h1><i class="fa-solid fa-wrench"></i> Skills</h1>
        <div class="p-2 mt-3 grid grid-cols-3 gap-8">
            <i v-for="skill in skills" :class="'skill fa-brands fa-' + skill"></i>
        </div>
    </div>
</template>