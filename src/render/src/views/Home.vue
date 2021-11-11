<template>
  <div class="home">home</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import HelloI18nExample from '@/components/HelloI18nExample.vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    // HelloI18nExample,
    // HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
