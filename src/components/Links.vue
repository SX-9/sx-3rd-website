<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'Pinned Repos API',
          url: 'https://gh-get-pinned.cyclic.app/',
        },
        {
          name: 'Terminal Portfolio',
          url: 'https://github.com/SX-9/term-port',
        },
        {
          name: 'Web.SH',
          url: 'https://sx-9.github.io/web.sh-client/',
        },
        {
          name: 'Collatz Conjecture',
          url: 'https://sx-9.github.io/collatz-conjecture/',
        },
        {
          name: 'DVD Logo Bounce',
          url: 'https://sx-9.github.io/dvd-bounce/',
        },
        
      ]
    }
  }
}
</script>

<template>
  <div class="card b4">
    <h1><i class="fa-solid fa-link"></i> Links</h1>
    <div class="p-2 gap-2">
      <ul>
        <li v-for="link in links">
          <a :href="link.url" target="_blank">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>