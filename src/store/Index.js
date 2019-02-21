import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import home from './home';
import {
   fireStore
 } from 'vuexfire';

Vue.use(Vuex);
export default new Vuex.Store({
 modules : {
  
    auth,
    home
 }
});
