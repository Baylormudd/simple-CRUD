import firebase from "@/firebase";
import db from '@/db';
const state = {
    user: {},
    isLoggedIn: false,
}

const mutations = {
    setUser(state,user){
        if (user){
        console.log(user);
        state.user = user;
        state.isLoggedIn = true;
    } else {
        state.user = {};
        state.isLoggedIn = false;
    }
    },
    logoutUser(state){
        state.user = {};
        state.isLoggedIn = false;
    }
};

const actions = {
    async login({ commit }){
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await firebase.auth().signInWithPopup(provider);
        const setUser = {
            id: user.uid,
            name: user.displayName,
        };
        //place user in users collections
        db.collection('users').doc(setUser.id).set(setUser);
        //update local user State
        commit('setUser', setUser);
    },
    async logout({ commit }){
        await firebase.auth().signOut();
        
        //update local user State
        commit('logoutUser');
    },

};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};