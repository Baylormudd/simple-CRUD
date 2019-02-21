import firebase from "@/firebase";
import db from '@/db';
import { firebaseAction } from 'vuexfire';

const posts = db.collection('Posts');

const state = {
    posts: [],
};

const mutations = {
 
};

const actions = {
    initPosts(){
        db.collection('Posts').get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
               // console.log(doc.id, " => ", doc.data());
               let post = {
                 title:doc.data().Title,
                 description:doc.data().Description    
                }
                
                console.log(post);
                state.posts.push(post);
                
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};