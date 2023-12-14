<script>
async function getDiscordUserDataAndStatus(id) {
    const apiUrl = `https://api.lanyard.rest/v1/users/${id}`;

    try {
        return await fetch(apiUrl).then(response => response.json());
    } catch (error) {
        console.error(`Failed to retrieve user data for ${id}: ${error.message}`);
        return {};
    }
}

export default {
    methods: {
        timeAgo(unixTimestamp) {
            const date = new Date(unixTimestamp);
            const seconds = Math.floor((new Date() - date) / 1000);
            let interval = seconds / 31536000;
            if (interval > 1) {
                return Math.floor(interval) + " years ago";
            }
            interval = seconds / 2592000;
            if (interval > 1) {
                return Math.floor(interval) + " months ago";
            }
            interval = seconds / 86400;
            if (interval > 1) {
                return Math.floor(interval) + " days ago";
            }
            interval = seconds / 3600;
            if (interval > 1) {
                return Math.floor(interval) + " hours ago";
            }
            interval = seconds / 60;
            if (interval > 1) {
                return Math.floor(interval) + " minutes ago";
            }
            return Math.floor(seconds) + " seconds ago";
        }
    },
    data() {
        return {
            user: {
                data: {
                    discord_user: {
                        username: "Loading..."
                    },
                    discord_status: "offline",
                    activities: []
                }
            }
        };
    },
    async created() {
        this.user = await getDiscordUserDataAndStatus("882595027132493864");
    }
};
</script>

<template>
    <div class="card b4">
        <h1><i class="fa-brands fa-discord"></i> Status</h1>
        <div class="p-2">
            <div class="flex gap-2 h-12">
                <img v-if="user.data.discord_user.avatar" :src="`https://cdn.discordapp.com/avatars/${user.data.discord_user.id}/${user.data.discord_user.avatar}.png?size=128`" class="border border-white border-solid rounded-full h-full">
                <div>
                    <h2 class="text-lg font-bold">{{ user.data.discord_user.username }}</h2>
                    <p v-if="user.data.discord_status === 'offline'" class="animate-pulse text-md text-gray-400"><i class="fa-solid fa-circle"></i> Offline</p>
                    <p v-if="user.data.discord_status === 'online'" class="animate-pulse text-md text-green-400"><i class="fa-solid fa-circle"></i> Online</p>
                    <p v-if="user.data.discord_status === 'dnd'" class="animate-pulse text-md text-red-400"><i class="fa-solid fa-circle"></i> Do Not Disturb</p>
                    <p v-if="user.data.discord_status === 'idle'" class="animate-pulse text-md text-yellow-400"><i class="fa-solid fa-circle"></i> Idle</p>
                </div>
            </div>
            <details v-if="user.data.spotify" class="mt-3 ml-2">
                <summary class="text-md text-gray-400 hover:underline">Listening to <span class="font-bold">{{ user.data.spotify.song }}</span> by <span class="font-bold">{{ user.data.spotify.artist }}</span></summary>
                <div class="flex gap-2 h-12 mt-1">
                    <img :src="user.data.spotify.album_art_url" class="rounded-md h-full">
                    <div>
                        <h2 class="text-lg font-bold"><a target="_blank" :href="'https://open.spotify.com/intl-id/track/' + user.data.spotify.track_id">{{ user.data.spotify.song }}</a></h2>
                        <p class="text-md text-gray-400"><i class="fa-solid fa-music"></i> {{ user.data.spotify.artist }}</p>
                    </div>
                </div>
            </details>
            <div class="p-2 gap-3 flex flex-col">
                <div v-for="activity in user.data.activities.filter(a=>a.type===0)">
                    <p class="text-md text-gray-400">Playing <span class="font-bold">{{ activity.name }}</span></p>
                    <p class="text-md text-gray-400 pl-4">Started <span class="font-bold">{{ timeAgo(activity.created_at) }}</span></p>
                    <p class="text-md text-gray-400 pl-4">{{ activity.state }}</p>
                    <p class="text-md text-gray-400 pl-4">{{ activity.details }}</p>
                </div>
            </div>
        </div>
    </div>
</template>