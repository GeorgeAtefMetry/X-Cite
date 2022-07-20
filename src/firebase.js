import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDzKdGN1Lx8nmG-jSGZXmaGo8z6X0jsKys",
    authDomain: "x-cite-2.firebaseapp.com",
    projectId: "x-cite-2",
    storageBucket: "x-cite-2.appspot.com",
    messagingSenderId: "827024114042",
    appId: "1:827024114042:web:fbc05d8e2873cec1dd96c3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore()