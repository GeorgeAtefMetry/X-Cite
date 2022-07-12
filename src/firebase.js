import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD4fCELzsCcBV6YGgc4dVDZphckfm3rWDU",
    authDomain: "x-cite-5d269.firebaseapp.com",
    databaseURL: "https://x-cite-5d269-default-rtdb.firebaseio.com",
    projectId: "x-cite-5d269",
    storageBucket: "x-cite-5d269.appspot.com",
    messagingSenderId: "937114559438",
    appId: "1:937114559438:web:ee837782bbee5db30c419f",
    measurementId: "G-WTTREF0R4P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore()