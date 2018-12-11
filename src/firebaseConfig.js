import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAXxVNYTrVM4YhG_I-jZU3BhUfNGrwflfA",
  authDomain: "fire-vue-todo-list.firebaseapp.com",
  databaseURL: "https://fire-vue-todo-list.firebaseio.com",
  projectId: "fire-vue-todo-list",
  storageBucket: "fire-vue-todo-list.appspot.com",
  messagingSenderId: "526297521212"
})

export const db = firebaseApp.firestore();
db.settings({timestampsInSnapshots: true})