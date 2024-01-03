<script>

async function getGitHubRepositories(username, limit) {
  const apiUrl = `https://api.github.com/users/${username}/repos?type=owner&sort=created`;

  try {
    const response = await fetch(apiUrl);
    const repositories = await response.json();

    const nonForkedRepositories = repositories.filter(repo => !repo.fork).slice(0, limit);
    
    const repositoriesInfo = nonForkedRepositories.map(repo => ({
      name: username + '/' + repo.name,
      description: repo.description,
      link: repo.html_url,
      stars: repo.stargazers_count
    }));

    repositoriesInfo.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return repositoriesInfo;
  } catch (error) {
    console.error(`Failed to retrieve repositories for ${username}: ${error.message}`);
    return [];
  }
}

export default {
    data() {
        return {
            repositories: [
                {
                    name: "Loading...",
                    description: "Fetching data...",
                    link: "javascript:void(0)",
                    stars: Infinity
                }
            ]
        };
    },
    async created() {
        this.repositories = await getGitHubRepositories("SX-9", 5);
    }
};
</script>

<template>
    <div class="card b4">
        <h1><i class="fa-brands fa-github"></i> Repositories</h1>
        <div class="flex flex-col gap-2 p-2">
            <div v-for="(repo, i) in repositories">
                <hr size="1" class="pb-2 border-gray-500" v-if="i">
                <div class="flex flex-row justify-between items-center">
                    <h2 class="text-xl"><a target="_blank" :href="repo.link">{{ repo.name }}</a></h2>
                    <p class="text-yellow-300"><i class="fa-solid fa-star"></i> {{ repo.stars }}</p>
                </div>
                <p class="text-gray-400" v-if="repo.description">{{ repo.description }}</p>
                <p class="text-gray-500 italic" v-else>No Description</p>
            </div>
        </div>
        <a target="_blank" href="https://github.com/SX-9?tab=repositories">More...</a>
    </div>
</template>