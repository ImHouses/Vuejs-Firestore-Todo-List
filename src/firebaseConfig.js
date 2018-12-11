import { firebase } from "@firebase/app";
import "@firebase/firestore";
import { config } from './firebaseConfiguration';

const firebaseApp = firebase.initializeApp(config);
export const db = firebaseApp.firestore();
db.settings({timestampsInSnapshots: true})