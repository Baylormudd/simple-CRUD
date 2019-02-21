<template>
<div>
 <nav class="navbar has-background-grey" role="navigation" aria-label="main navigation">
  <div class="navbar-brand ">
    <span class="navbar-item has-text-warning is-size-4">
      Simple-CRUD
    </span>
     <span class="navbar-item has-text-warning is-size-4">
      Welcome {{user.name}}
    </span>
    <a class="button navbar-end is-success" v-show="isLoggedIn == false" @click="login()">
      Login
    </a>
    <a class="button navbar-end is-success" v-show="isLoggedIn == true" @click="logout()">
      Logout
    </a>
  </div>
  </nav>
<router-view />
</div>
</template>

<style lang="scss">

</style>

<script>

import { mapActions, mapState } from 'vuex';
export default {
  computed: mapState('auth',['user', 'isLoggedIn']),
  methods: mapActions('auth',['login','logout'])
};
</script>
