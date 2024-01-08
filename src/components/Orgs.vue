<script>
async function getOrganizations(user) {
  const apiUrl = `https://api.github.com/users/${user}/orgs`;
  try {
    const response = await fetch(apiUrl);
    const orgs = await response.json();
    return orgs;
  } catch (error) {
    console.error(`Failed to retrieve organizations for ${user}: ${error.message}`);
    return [];
  }
}
export default {
  data() {
    return {
      orgs: [
        {
          login: "Loading...",
          description: "Fetching data...",
          url: "javascript:void(0)",
          avatar_url: "https://avatars.githubusercontent.com/u/882595027132493864?v=4"
        },
      ],
    }
  },
  async created() {
    this.orgs = await getOrganizations("SX-9");
  }
}
</script>

<template>
  <div class="card b4">
    <h1><i class="fa-solid fa-sitemap"></i> Organizations</h1>
    <div class="p-2 gap-2">
      <div class="flex flex-col gap-4 p-2">
        <div v-for="(org, i) in orgs">
          <hr size="1" class="mb-4 border-subtext0" v-if="i">
          <div class="flex gap-2">
            <img class="h-16 rounded-md" :src="org.avatar_url">
            <div>
              <h2 class="text-xl"><a :href="org.url">{{ org.login }}</a></h2>
              <p class="text-subtext1 text-sm" v-if="org.description">{{ org.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>