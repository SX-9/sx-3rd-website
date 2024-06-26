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
        },
        async updateStatus() {
            this.user.data.discord_user.username = "...";
            this.user = await getDiscordUserDataAndStatus("882595027132493864");
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
    mounted() {
        this.updateStatus();
    }
};
</script>

<template>
    <div class="card b4">
        <div class="p-2">
            <div class="flex gap-2 h-12">
                <img v-if="user.data.discord_user.avatar" :src="`https://cdn.discordapp.com/avatars/${user.data.discord_user.id}/${user.data.discord_user.avatar}.png?size=128`" class="border border-white border-solid rounded-full h-12">
                <div>
                    <h2 class="text-lg font-bold">{{ user.data.discord_user.username }} <i @click="updateStatus()" class="fas fa-sync text-subtext0 text-sm cursor-pointer"></i></h2>
                    <p v-if="user.data.discord_status === 'offline'" class="animate-pulse text-md text-subtext1"><i class="fa-brands fa-discord"></i> Offline</p>
                    <p v-if="user.data.discord_status === 'online'" class="animate-pulse text-md text-green"><i class="fa-brands fa-discord"></i> Online</p>
                    <p v-if="user.data.discord_status === 'dnd'" class="animate-pulse text-md text-red"><i class="fa-brands fa-discord"></i> Do Not Disturb</p>
                    <p v-if="user.data.discord_status === 'idle'" class="animate-pulse text-md text-yellow"><i class="fa-brands fa-discord"></i> Idle</p>
                </div>
            </div>
            <div class="p-2 gap-3 flex flex-col">
                <div v-if="user.data.spotify">
                    <p class="text-subtext1">Listening to <span class="font-bold">Spotify</span></p>
                    <div class="flex gap-2 mt-1">
                        <img :src="user.data.spotify.album_art_url" class="rounded-md h-14">
                        <div>
                            <h2 class="text-lg font-bold"><a target="_blank" :href="'https://open.spotify.com/intl-id/track/' + user.data.spotify.track_id">{{ user.data.spotify.song }}</a></h2>
                            <p class="text-md text-subtext1"><i class="fa-solid fa-music"></i> {{ user.data.spotify.artist }}</p>
                        </div>
                    </div>
                </div>
                <div v-for="activity in user.data.activities.filter(a=>a.type===0)">
                    <p class="text-subtext1">Playing <span class="font-bold">{{ activity.name }}</span></p>
                    <ul>
                        <li v-if="activity.created_at">Started <span class="font-bold">{{ timeAgo(activity.created_at) }}</span></li>
                        <li v-if="activity.state">{{ activity.state }}</li>
                        <li v-if="activity.details">{{ activity.details }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>