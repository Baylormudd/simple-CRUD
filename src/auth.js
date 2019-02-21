import firebase from '@/firebase';
import store from '@/store';
import db from './db';
import Router from '@/router';

firebase.auth().onAuthStateChanged((user) => {
    if (user){
        if(user.user){
            user = user.user;
        }

        const setUser = {
            id: user.uid,
            name: user.displayName,
            created_at: firebase.firestore.fieldValue.serverTimestamp(),
        };

        //add to fb collection
        db.collection('users').doc(setUser.id).set(setUser);
        //mutate the local state
        store.commit('auth/setUser',setUser);


    } else {
        store.commit('auth/setUser', null);
    }
});