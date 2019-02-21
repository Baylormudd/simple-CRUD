<template>
  <div class="home">
    hey
    
    <article  v-for="post in posts" :key="post.id">
    
    <h1>{{ post.title }}</h1>
    <h1>{{ post.description }}</h1>
    
  </article>

  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
// @ is an alias to /src
 import db from "@/db";
export default {
  name: 'Home',
  methods: mapActions('home',['initPosts']),
  computed: mapState('home',['posts','post']),
  data (){
    return {
    }
  },
  mounted(){
    this.initPosts();
  },
};
</script>
